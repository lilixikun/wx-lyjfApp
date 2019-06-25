// pages/components/richTextHidden/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nodes: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isHidden: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeHidden() {
      this.setData({ isHidden: false })
    }
  }
})