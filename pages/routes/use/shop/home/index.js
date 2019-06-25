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

  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    if (!!id)
      wx.navigateTo({
        url: '/pages/routes/use/shop/detail/index?id=' + id
      })
  }

})