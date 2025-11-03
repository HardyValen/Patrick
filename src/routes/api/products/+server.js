// TO-DO for 22/10/2025:
// 1. Accept page parameter and adjust accordingly (done)
// 2. Accept tags parameter and adjust accordingly

import { FI, paginationIndices } from '$lib';
import { error, json } from '@sveltejs/kit';
import { computeCommandScore } from 'bits-ui';

/** @type {import('./$types').RequestHandler} */
export async function GET({fetch, url}) {
  const QUERY_PARAM_KEY   = "name";
  const CURSOR_PARAM_KEY  = "cursor";
  const LIMIT_PARAM_KEY   = "limit";
  const PAGE_PARAM_KEY    = "page";
  const TAGS_PARAM_KEY    = "tags";
  const CURSOR_KEY        = "id";
  const LIMIT_DEF         = 24;
  const RELEVANCY_SCORE_THRESHOLD = 0.5;

  try {
    // let data = await FI.Products.data({ fetch });
    let result = await FI.TestMH.items({ fetch });
    let query = url.searchParams;

    let queriedTitle = query.get(QUERY_PARAM_KEY);
    let queriedCursor = query.get(CURSOR_PARAM_KEY);
    let queriedLimit = !isNaN(parseInt(query.get(LIMIT_PARAM_KEY)))
      ? parseInt(query.get(LIMIT_PARAM_KEY))
      : LIMIT_DEF;
    let queriedPage = parseInt(query.get(PAGE_PARAM_KEY));
    let queriedTags = query.getAll(TAGS_PARAM_KEY);

    result = result.map(item => {
      let relevancyScore = 0;
      if (queriedTitle) {
        relevancyScore = computeCommandScore(
          item[QUERY_PARAM_KEY],
          queriedTitle,
          item[QUERY_PARAM_KEY].split(" ")
        )
      }
      return {
        ...item,
        relevancyScore
      }
    });

    result = result.filter(item => {
    // tags filter
    // the filter will be "AND" filter
      let tagsPass = queriedTags
        .map(tag => {
          return item[TAGS_PARAM_KEY].includes(tag.replace(" ", "_"));
        })
        .every(item => item); // use .some for "OR" filter

    // relevancy score filter
      let relevancyScorePass = true;
      if (queriedTitle) {
        relevancyScorePass = item.relevancyScore > RELEVANCY_SCORE_THRESHOLD
      }
      return relevancyScorePass && tagsPass;
    });

    // descending
    if (queriedTitle) {
      result = result.sort((a, b) => {
        return b.relevancyScore - a.relevancyScore;
      })
    }

    // Cursors
    let cursorIdx;
    if (queriedCursor) {
      cursorIdx = Math.max(0, result.findIndex(item => item[CURSOR_KEY].toString() === queriedCursor));
    } else if (!isNaN(queriedPage)) {
      cursorIdx = queriedLimit * (queriedPage - 1);
    } else {
      cursorIdx = 0;
    }

    let hyperIndices = paginationIndices(cursorIdx, queriedLimit, result.length);


    // Calculated client-side or based on cursor position relative to start
    let responseData = {
      data: result.slice(hyperIndices.self, hyperIndices.self_end),
      hyper: {
        first: result[hyperIndices.first]?.[CURSOR_KEY],
        last: result[hyperIndices.last]?.[CURSOR_KEY],
        next: result[hyperIndices.next]?.[CURSOR_KEY],
        prev: result[hyperIndices.prev]?.[CURSOR_KEY],
        self: result[hyperIndices.self]?.[CURSOR_KEY],
        hasNextPage: hyperIndices.hasNextPage,
        hasPrevPage: hyperIndices.hasPrevPage,
        totalRecords: result.length,
        currentPage: 1 + Math.floor(hyperIndices.self / queriedLimit),
        totalPages: Math.ceil(result.length / queriedLimit),
        limitEntries: queriedLimit
      }
    };

    return json(responseData);

  } catch (e) {
    console.trace(e.message);
    error(404, e.message);
  }
}
