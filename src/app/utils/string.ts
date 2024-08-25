export function replaceTokens(url: string, ...params: string[]): string {
  return params.reduce((acc, param, index) => {
    const token = `{${index}}`;
    return acc.replace(token, param.toString());
  }, url);
}