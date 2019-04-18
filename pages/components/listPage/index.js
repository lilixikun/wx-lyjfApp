// pages/components/listPage/index.js
import { request } from '../../../utils/util.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url: {
      type: String,
      value: ""
    },
    parms: {
      type: Object,
      value: {}
    },
    scrollHeight: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dataList: [],
    scrollTop: 1,
    pageNum: 1,
    pageSize: 10,
    isLoading: true,
    hasMore: true
  },

  ready() {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight-44
        });
      }
    });

    //进来初始化
    this.getDataList(1);
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getDataList(pageNum) {
      const { url, pageSize, parms, dataList } = this.data;
      request(url, {
        pageNum,
        pageSize,
        ...parms
      }, true).then(({
        code,
        result
      }) => {
        if (code === 0) {
          this.setData({
            isLoading: false,
            pageNum: pageNum,
            hasMore: pageNum < result.totalPage,
            dataList: dataList.concat(result.result) || []
          })
          this.triggerEvent('getDataList', {
            dataList: dataList.concat(result.result) || []
          });
        }
      })
    },

    //加载更多
    loadMore() {
      const { pageNum, hasMore, isLoading } = this.data;
      if (hasMore == true && isLoading == false) {
        this.setData({ isLoading: true })
        this.getDataList(pageNum + 1);
      }
    }
  },

})