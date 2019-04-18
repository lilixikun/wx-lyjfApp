import api from '../../../../../utils/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
    url: api.shop.shopList
  },

  //获取数据列表
  getDataList: function (e) {
    this.setData({
      dataList: e.detail.dataList
    })
  },

  methods: {

  },

})