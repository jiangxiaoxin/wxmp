//index.js
//获取应用实例
const app = getApp()

Page({
  data: {},
  onLoad: function() {},

  // 跳转页面
  xiaoji: function(event) {
    wx.navigateTo({
      url: '../list/list',
    })
  },
  ceshi: function(event) {
    wx.navigateTo({
      url: '../test/test',
    })
  }
})