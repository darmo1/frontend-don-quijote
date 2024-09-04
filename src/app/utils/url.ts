import queryString, { StringifyOptions } from "query-string";

export const getRelativeURLWithParams = (
  partialURL: string,
  query = {},
  options: StringifyOptions = {}
) => {
   return queryString.stringifyUrl({ url: partialURL, query }, options)
}

export const getFormattedURL = (
  host: string,
  partialURL: string,
  query = {},
  options: StringifyOptions
) => {
  const url = `https://${host}${partialURL}`;
  return getRelativeURLWithParams(url, query, options)
}