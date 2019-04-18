// pages/routes/use/travel/home/index.js
import api from '../../../../../utils/api.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
    url: api.travel.findByCondition
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