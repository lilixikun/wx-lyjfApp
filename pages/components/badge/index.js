// pages/components/badge/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommandReason: {
      type: String || Array,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dataList: []
  },

  ready() {
    if (!!this.data.recommandReason) {
      this.setData({
        dataList: this.data.recommandReason.split(",")
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})