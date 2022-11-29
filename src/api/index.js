import requests from "./request";

import mockRequest from "./mockRequest";
// import { get } from "core-js/core/dict";

export const reqCategoryList = () => {
  return requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};

export const reqGetBannerList = () => mockRequest.get("/banner");
