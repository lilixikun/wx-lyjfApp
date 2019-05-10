const baseUrl = "https://app.wedotting.com";

function request(url, data, isLoading = false) {
  return new Promise((success, rej) => {
    if (isLoading == true) {
      wx.showLoading({
        title: '加载中',
      })
    }
    wx.request({
      url: baseUrl + url,
      data: data,
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        let {
          data
        } = res;
        if (data) {
          wx.hideLoading();
          switch (data.code) {
            case 0:
              success(data);
              break;
              //未登录
            case 2:
              // goTo(goLogin);
              break;
              //餐厅金额不够去兑换
            case 999:
              return data;
            default:
              wx.showToast({
                title: data.message,
                icon: 'none',
                duration: 2000
              })
              return {
                code: 10000
              };
              break
          }
        }
        success({
          code: 10000
        });
      },
      fail: (error) => {
        wx.showToast("网络连接异常!");
      }
    })
  })

}

module.exports = {
  request: request
}