import { reqCategoryList,reqGetBannerList } from "@/api/index";


const state = {
  categoryList:[]
};


const mutations = {
  CATEGORYLIST(state,categoryList){
   state.categoryList=categoryList
  }
};

const actions = {
 async categoryList({commit}) {
    let result = await  reqCategoryList();
    // console.log(result);
    if(result.code==200){
      commit("CATEGORYLIST",result.data)
    };
  },
 async getBannerList(){
   let result=await reqGetBannerList();
   console.log(result);
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
