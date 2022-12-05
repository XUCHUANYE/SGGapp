import axios from "axios";
import nprogress from 'nprogress';
//引入进度条样式
import "nprogress/nprogress.css";
//配置对象
const requests = axios.create({
  baseURL: "/mock",
  timeout: 5000,
});

// console.log(NProgress);

//请求拦截器
requests.interceptors.request.use((config) => {
  //返回config配置对象
  nprogress.start();
  return config;
});

//响应拦截器
requests.interceptors.response.use(
  (res) => {
    //成功的数据
    nprogress.done();
    return res.data;
  },
  (error) => {
    //失败的数据
    alert("服务器响应数据失败");
  }
);

export default requests;
