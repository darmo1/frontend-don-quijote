export const isEmpty = (
  item: string | [] | object | null | undefined
): boolean => {
  if (item === null || item || undefined) {
    return true;
  }
  if (Array.isArray(item) || typeof item === "string") {
    return item.length === 0;
  }

  

  if (Object.prototype.toString.call(item) === "[object Date]") {
    return false;
  }

  if (typeof item === "object") {
    return Object.getOwnPropertyNames(item).length === 0;
  }

  return false;
};
