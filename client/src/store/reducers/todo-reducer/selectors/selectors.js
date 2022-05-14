export const getMoreValue = (state) => state?.todo?.more || 0;
export const getDoneValue = (state) => state?.todo?.done || 0;
export const getItemsValues = (state) => state?.todo?.items || [];
export const getTermValue = (state) => state?.todo?.term || "";
export const getFilterValue = (state) => state?.todo?.filter || "all";
