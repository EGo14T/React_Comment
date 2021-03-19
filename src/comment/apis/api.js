import * as http from "./http"

/**
 * 用户相关
 */
// 获取用户信息
export const getUserInfo = data => http.getRequest("/getUserInfo",data);

// 初始化用户
export const initUserInfo = data => http.getRequest("/uuid/get")

/**
 * 评论相关
 */
//获取评论信息
export const getComments = data => http.getRequest("/comments", data);

//添加评论
export const postComments = data => http.postForJson("/comments", data)
