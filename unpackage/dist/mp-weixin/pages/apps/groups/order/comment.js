(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/apps/groups/order/comment"],{"15e5":function(e,t,o){"use strict";(function(e){o("e954");i(o("66fd"));var t=i(o("2152"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=o,e(t.default)}).call(this,o("543d")["createPage"])},2152:function(e,t,o){"use strict";o.r(t);var i=o("bedf"),n=o("6563");for(var s in n)"default"!==s&&function(e){o.d(t,e,(function(){return n[e]}))}(s);o("de7b");var r,c=o("f0c5"),a=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);t["default"]=a.exports},"3b0e":function(e,t,o){},6563:function(e,t,o){"use strict";o.r(t);var i=o("9d1e"),n=o.n(i);for(var s in i)"default"!==s&&function(e){o.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},"9d1e":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(o("a34a"));function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,o,i,n,s,r){try{var c=e[s](r),a=c.value}catch(u){return void o(u)}c.done?t(a):Promise.resolve(a).then(i,n)}function r(e){return function(){var t=this,o=arguments;return new Promise((function(i,n){var r=e.apply(t,o);function c(e){s(r,i,n,c,a,"next",e)}function a(e){s(r,i,n,c,a,"throw",e)}c(void 0)}))}}var c={data:function(){return{order_id:0,shop:{id:0,shopname:"",describe:0,describeInfo:"",logistics:0,logisticsInfo:"",service:0,serviceInfo:"",deliver:0,deliverInfo:""},goodsList:[]}},onLoad:function(e){this.loadData(e.order_id)},methods:{loadData:function(e){var t=this;return r(i.default.mark((function o(){return i.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:t.$api.get({url:"/flbooth/groups/order/getOrderInfo",data:{id:e},success:function(e){t.order_id=e.id,t.shop.id=e.shop_id,t.shop.shopname=e.shop.shopname;var o=[];e.goods.forEach((function(e,t){o.push({id:e["id"],goods_id:e["goods_id"],difference:e["difference"],image:e["image"],title:e["title"],imgList:[],comment:"",state:0})})),t.goodsList=o}});case 1:case"end":return o.stop()}}),o)})))()},addData:function(){var e=this;return r(i.default.mark((function t(){var o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.shop.describe&&0!=e.shop.logistics&&0!=e.shop.service&&0!=e.shop.deliver){t.next=3;break}return e.$flbooth.msg("请给店铺评分"),t.abrupt("return",!1);case 3:o={order_id:e.order_id,shop:{id:e.shop.id,describe:e.shop.describe,logistics:e.shop.logistics,service:e.shop.service,deliver:e.shop.deliver},goodsList:e.goodsList},e.$api.post({url:"/flbooth/groups/order/commentOrder",data:o,success:function(t){e.$flbooth.to("/pages/page/success?type=comment")}});case 5:case"end":return t.stop()}}),t)})))()},stateType:function(e,t){this.goodsList[t].state=e},viewImage:function(t,o){e.previewImage({urls:this.goodsList[t].imgList,current:this.goodsList[t].imgList[o]})},delImg:function(e,t){this.goodsList[e].imgList.splice(t,1)},chooseImage:function(t){var o=this;e.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(i){o.$api.get({url:"/flbooth/common/uploadData",success:function(n){for(var s=0;s<i.tempFilePaths.length;s++)e.getImageInfo({src:i.tempFilePaths[s],success:function(e){o.$api.upload({url:n.uploadurl,filePath:e.path,name:"file",formData:"local"==n.storage?null:n.multipart,success:function(e){o.goodsList[t].imgList.push(e.fullurl)}})}})}})}})},describeChange:function(e){this.shop.describe=e.index,this.shop.describeInfo=this.scoreInfo(e.index)},logisticsChange:function(e){this.shop.logistics=e.index,this.shop.logisticsInfo=this.scoreInfo(e.index)},serviceChange:function(e){this.shop.service=e.index,this.shop.serviceInfo=this.scoreInfo(e.index)},deliverChange:function(e){this.shop.deliver=e.index,this.shop.deliverInfo=this.scoreInfo(e.index)},scoreInfo:function(e){return 1==e?"极差":2==e?"差":3==e?"一般":4==e?"好":5==e?"极好":void 0}}};t.default=c}).call(this,o("543d")["default"])},bedf:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return i}));var i={wanlRate:function(){return o.e("components/wanl-rate/wanl-rate").then(o.bind(null,"3ca7"))}},n=function(){var e=this,t=e.$createElement,o=(e._self._c,e.__map(e.goodsList,(function(t,o){var i=e.__get_orig(t),n=e.$flbooth.oss(t.image,40,40),s=e.__map(t.imgList,(function(t,o){var i=e.__get_orig(t),n=e.$flbooth.oss(t,40,40);return{$orig:i,g1:n}}));return{$orig:i,g0:n,l0:s}})));e.$mp.data=Object.assign({},{$root:{l1:o}})},s=[]},de7b:function(e,t,o){"use strict";var i=o("3b0e"),n=o.n(i);n.a}},[["15e5","common/runtime","common/vendor"]]]);