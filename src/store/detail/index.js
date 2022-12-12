import { reqGetGoodsInfo } from "@/api/index";

const state = {
  goodsinfo: {},
};

const mutations = {
  GETGOODSINFO(state, goodsinfo) {
    state.goodsinfo = goodsinfo;
  },
};
const actions = {
  async getGoodsinfo({ commit }, skuId) {
    let result = await reqGetGoodsInfo(skuId);
    if (result.code == 200) {
      commit("GETGOODSINFO", result.data);
    }
  },
};

const getters = {
  categoryView(state){
    return state.goodsinfo.categoryView || []
  }
};

export default {
  state,
  actions,
  mutations,
  getters,
};
