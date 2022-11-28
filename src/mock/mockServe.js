import MOCK from "mockjs";

import banner from "./banner.json";

import floor from "./floor.json";

MOCK.mock("/mock/banner", { code: 200, data: banner });

MOCK.mock("/mock/floor", { code: 200, data: floor });
