(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/apps/groups/order/order"],{"0277":function(t,e,r){"use strict";var n=r("3727"),o=r.n(n);o.a},"0482":function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return n}));var n={wanlEmpty:function(){return r.e("components/wanl-empty/wanl-empty").then(r.bind(null,"e5e5"))},uniLoadMore:function(){return r.e("components/uni-load-more/uni-load-more").then(r.bind(null,"1e1f"))}},o=function(){var t=this,e=t.$createElement,r=(t._self._c,t.__map(t.navList,(function(e,r){var n=t.__get_orig(e),o=t.__map(e.orderList,(function(e,r){var n=t.__get_orig(e),o=t.__map(e.goods,(function(e,r){var n=t.__get_orig(e),o=t.$flbooth.oss(e.image,70,70),a=0!=e.refund_status?t.getRefund(e.refund_status):null;return{$orig:n,g0:o,m0:a}}));return{$orig:n,l0:o}}));return{$orig:n,l1:o}})));t.$mp.data=Object.assign({},{$root:{l2:r}})},a=[]},"26cf":function(t,e,r){"use strict";(function(t){r("e954");n(r("66fd"));var e=n(r("9fd9"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=r,t(e.default)}).call(this,r("543d")["createPage"])},"2a3b":function(t,e,r){"use strict";r.r(e);var n=r("43f9"),o=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},3727:function(t,e,r){},"43f9":function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(r("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e,r,n,o,a,i){try{var s=t[a](i),d=s.value}catch(u){return void r(u)}s.done?e(d):Promise.resolve(d).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,d,"next",t)}function d(t){a(i,n,o,s,d,"throw",t)}s(void 0)}))}}var s={data:function(){return{tabCurrentIndex:0,navList:[{state:0,text:"全部",loadingType:"more",current_page:1,orderList:[]},{state:1,text:"待支付",loadingType:"more",current_page:1,orderList:[]},{state:2,text:"待成团",loadingType:"more",current_page:1,orderList:[]},{state:3,text:"待发货",loadingType:"more",current_page:1,orderList:[]},{state:4,text:"待收货",loadingType:"more",current_page:1,orderList:[]},{state:5,text:"待评论",loadingType:"more",current_page:1,orderList:[]}],contentText:{contentdown:" ",contentrefresh:"正在加载...",contentnomore:""}}},onLoad:function(t){t.state||(t.state=0),this.tabCurrentIndex=+t.state,0==t.state&&this.loadData()},methods:{loadData:function(t){var e=this,r=this.tabCurrentIndex,n=this.navList[r],o=n.state;"noMore"!=n.loadingType&&("tabChange"===t&&!0===n.loaded||"loading"!==n.loadingType&&(n.loadingType="loading",this.$api.get({url:"/flbooth/groups/order/getOrderList",data:{state:o,page:n.current_page},success:function(t){n.current_page=t.current_page,t.last_page===t.current_page?n.loadingType="noMore":(n.loadingType="more",n.current_page++);var r=t.data.filter((function(t){return t=Object.assign(t,e.orderStateExp(t.state)),0===o?t:t.state===o}));r.forEach((function(t){n.orderList.push(t)})),e.$set(n,"loaded",!0)}})))},orderStateExp:function(t){var e="",r="#333";switch(+t){case 1:e="等待支付",r="#f40";break;case 2:e="等待分享成团";break;case 3:e="等待卖家发货";break;case 4:e="卖家已发货";break;case 5:e="交易成功";break;case 6:e="已完成";break;case 7:e="订单已关闭",r="#777";break}return{stateTip:e,stateTipColor:r}},getRefund:function(t){return["退款","退款中","待退货","退款完成","退款关闭","退款被拒"][t]},changeTab:function(t){this.tabCurrentIndex=t.target.current,this.loadData("tabChange")},tabClick:function(t){this.tabCurrentIndex=t},deleteOrder:function(e,r){var n=this;t.showLoading({title:"请稍后"}),this.$api.post({url:"/flbooth/groups/order/delOrder",data:{id:e},success:function(e){n.navList[n.tabCurrentIndex].orderList.splice(r,1),t.hideLoading()}})},cancelOrder:function(e){var r=this;t.showLoading({title:"请稍后"}),this.$api.post({url:"/flbooth/groups/order/cancelOrder",data:{id:e.id},success:function(n){var o=r.orderStateExp(7),a=o.stateTip,i=o.stateTipColor;e=Object.assign(e,{state:7,stateTip:a,stateTipColor:i}),r.$store.commit("statistics/order",{groups:r.$store.state.statistics.order.groups-1});var s=r.navList[1].orderList,d=s.findIndex((function(t){return t.id===e.id}));if(-1!==d&&s.splice(d,1),1==r.tabCurrentIndex){var u=r.navList[0].orderList,c=u.findIndex((function(t){return t.id===e.id}));-1!==c&&(u[c].state=7)}t.hideLoading()}})},commentOrder:function(t){this.$flbooth.to("/pages/apps/groups/order/comment?order_id=".concat(t))},paymentOrder:function(t){this.$flbooth.to("/pages/user/money/pay?order_id=".concat(t,"&order_type=groups"))},onDetails:function(t,e){"order"===e?this.$flbooth.to("/pages/apps/groups/order/details?id=".concat(t)):this.$flbooth.to("/pages/apps/groups/team?id=".concat(t))},toLogistics:function(t){this.$flbooth.to("/pages/apps/groups/order/logistics?id=".concat(t))},confirmOrder:function(e){var r=this;t.showLoading({title:"请稍后"}),this.$api.post({url:"/flbooth/groups/order/confirmOrder",data:{id:e.id},success:function(n){var o=r.orderStateExp(4),a=o.stateTip,i=o.stateTipColor;e=Object.assign(e,{state:5,stateTip:a,stateTipColor:i}),t.hideLoading()}})},editAddress:function(t){this.$flbooth.to("/pages/user/address/address?source=2&order_id="+t)},refreshList:function(e,r){var o=this;return i(n.default.mark((function a(){return n.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.showLoading({title:"正在提交新地址"}),o.$api.post({url:"/flbooth/groups/order/editOrderAddress",data:{id:r,address_id:e},success:function(e){o.$flbooth.msg("地址修改成功"),t.hideLoading()}});case 2:case"end":return n.stop()}}),a)})))()}}};e.default=s}).call(this,r("543d")["default"])},"9fd9":function(t,e,r){"use strict";r.r(e);var n=r("0482"),o=r("2a3b");for(var a in o)"default"!==a&&function(t){r.d(e,t,(function(){return o[t]}))}(a);r("0277");var i,s=r("f0c5"),d=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);e["default"]=d.exports}},[["26cf","common/runtime","common/vendor"]]]);