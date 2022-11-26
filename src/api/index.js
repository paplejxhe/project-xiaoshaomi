import requests from "./request";

//获取新闻数据接口
export const reqActivitiesInfo = (type,page,size)=>requests({
   url:`/website/news/page/list?type=${type}&page=${page}&size=${size}`,
   method:'get',
});
