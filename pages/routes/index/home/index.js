import { request } from '../../../../utils/util.js'
import api from '../../../../utils/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
    rankTypeList: [],
    menuItmes: [
      {
        src: "../../../assets/homeicon/icon 首页 会员申购@2x.png",
        text: "会员申购"
      },
      {
        src: "../../../assets/homeicon/icon 首页 攻略 2@2x.png",
        text: "目的地攻略"
      },
      {
        src: "../../../assets/homeicon/icon 首页 定制游@2x.png",
        text: "定制游"
      },
      {
        src: "../../../assets/homeicon/icon 首页 商城 2@2x.png",
        text: "商城"
      }
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const data = {
      pageNum: 1,
      pageSize: 10
    };
    request(api.rankList.getRankTypeList, {}, true).then(({
      result,
      code
    }) => {
      if (code === 0)
        if (result && result.length) {
          this.getRankList(result[0].listType);
        }
    })
  },

  /**
   * 获取榜单列表
   * @param {*} listType 
   */
  getRankList(listType) {
    request(api.rankList.getRankList, { listType, listStatus: 1 }, true).then(({ code, result }) => {
      if (code === 0) {
        this.setData({ dataList: result.result })
      }
    })
  },

  /**
   * 点击跳转用呗页面
   * @param {*} e 
   */
  goTo(e) {
    //switchTab 跳转 url后面不能携带参数 因此可以写到全局参数里面
    wx.switchTab({
      url: "/pages/routes/use/home/index?index=" + e.currentTarget.dataset.index
    });
    getApp().globalData.selectUseTabs = e.currentTarget.dataset.index;
  },

  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/index/detail/index?id=' + id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})