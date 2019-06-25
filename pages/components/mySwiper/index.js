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
    interval: 3000,
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }]
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
