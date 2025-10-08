/**
 * @satisfies ProxyHandler<T>
 * @example
 * const getMessage = new Proxy(errorMessage, ErrorMessageHandler.GetMessage);
 * getMessage["ARTICLE_PAGE_0002"] // returns message prop from an object with code "ARTICLE_PAGE_0002"
 */
export const GetMessage = {
  get(target, prop) {
    let resultIdx = target.findIndex(obj => obj.code === prop);
    if (resultIdx > -1) {
      return Reflect.get(target, resultIdx).message;
    } else {
      return Reflect.get(...arguments);
    }
  }
}

/** @satisfies ProxyHandler<T>
* @example
* const getHttpCode = new Proxy(errorMessage, ErrorMessageHandler.GetHTTPCode);
* getHttpCode["ARTICLE_PAGE_0002"] // returns message prop from an object with code "ARTICLE_PAGE_0002"
*/
export const GetHTTPCode = {
  get(target, prop) {
    let resultIdx = target.findIndex(obj => obj.code === prop);
    if (resultIdx > -1) {
      return Reflect.get(target, resultIdx).httpCode;
    } else {
      return Reflect.get(...arguments);
    }
  }
}
