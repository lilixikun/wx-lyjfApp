// pages/components/mySwiper/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    interval: 3000
  },

  ready() {
    console.log(this.data)
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
