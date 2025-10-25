/**
 * @param cursorIdx {integer}
 * @param queriedLimit {integer}
 * @param length {integer}
 * @return {{
 *  first: integer,
 *  last: integer,
 *  next: integer,
 *  prev: integer,
 *  self: integer,
 *  self_end: integer,
 *  hasNextPage: boolean,
 *  hasPrevPage: boolean
 * }}
 */
function paginationIndices(cursorIdx, queriedLimit, length) {
  if (cursorIdx < 0) cursorIdx = 0;
  if (queriedLimit < 1) queriedLimit = 1;
  if (length < 1) length = 1;

  let firstCursorIdx = 0;
  let lastCursorIdx = Math.floor((length - 1) / queriedLimit) * queriedLimit;
  let prevCursorIdx = Math.max(0, cursorIdx - queriedLimit);
  let nextCursorIdx = Math.max(0, Math.min(cursorIdx + queriedLimit, length - queriedLimit));
  let cursorEndIdx = cursorIdx + queriedLimit;
  let hasNextPage = cursorIdx < nextCursorIdx;
  let hasPrevPage = cursorIdx - queriedLimit === prevCursorIdx;

  return {
    first: firstCursorIdx,
    last: lastCursorIdx,
    next: nextCursorIdx,
    prev: prevCursorIdx,
    self: cursorIdx,
    self_end: cursorEndIdx,
    hasNextPage: hasNextPage,
    hasPrevPage: hasPrevPage
  }
}

export default paginationIndices
