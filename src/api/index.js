import requests from "./request";
import mockRequests from "./mockAjax";

export const reqCategoryList = () => {
  return requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};

export const reqGetBannerList = () => {
  return mockRequests({
    url: "/banner",
    method: "get",
  });
};

export const reqGetFloorList = () => {
  return mockRequests({
    url: "/floor",
    method: "get",
  });
};
