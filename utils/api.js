export default {
  hotel: {
    findHotelList: "/lyjfapp/api/v1/hotel/findByCondition",
    findHotelById: "/lyjfapp/api/v1/hotel/findHotelById",
    findRoomById: "/lyjfapp/api/v1/hotelOrder/findRoomsByRoomId",
  },
  travel: {
    findByCondition: "/lyjfapp/api/v1/travel/findByCondition", //列表查询
    orderDetail: "/lyjfapp/api/v1/travel/detail", //订单详情
    detail: "/lyjfapp/api/v1/travel/detail", //定制游详情
    orderAdd: "/lyjfapp/api/v1/travel/orderAdd", //预定定制游
  },
  shop: {
    shopList: "/lyjfapp/api/v1/goods/findOnStockByCondition",  //查询在售商品
    goodsDetail: "/lyjfapp/api/v1/goods/findDetailByGoodsId", //商品详情
    deleteCart: "/lyjfapp/api/v1/cart/deleteCart", //删除购物车
    addCart: "/lyjfapp/api/v1/cart/addItemCart",//加入购物车
    updateCart: "/lyjfapp/api/v1/cart/updateCart", //更新购物车
    clearCart: "/lyjfapp/api/v1/cart/clearCart",   //清空购物车
    listMyCart: "/lyjfapp/api/v1/cart/listMyCart",  //我的购物车
    addOrder: "/lyjfapp/api/v1/shop/addOrder"
  },
  rankList: {
    getRankTypeList: "/lyjfapp/api/v1/ranklist/findRankTypeToSort",  //获取榜单列表
    getRankList: "/lyjfapp/api/v1/ranklist/findByCondition",
    getRankDetail: "/lyjfapp/api/v1/ranklistDetail/findById"
  },
  play:{
    getHotelList:"/lyjfapp/api/v1/hotel/findByCondition"//好住列表
  }
}