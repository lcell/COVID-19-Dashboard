(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3591"],{"0292":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-app-bar",{attrs:{app:"","clipped-left":""}},[e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",[t._v(" COVID-19 "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.smAndUp,expression:"$vuetify.breakpoint.smAndUp"}]},[t._v("Dashboard")])]),e("v-spacer"),e("v-btn",{attrs:{text:"",value:"left"},on:{click:t.home}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-home-variant-outline")]),e("span",{staticClass:"hidden-sm-and-down"},[t._v("首页")])],1),e("v-btn",{attrs:{text:"",value:"center",href:"http://localhost:1234",target:"_Blank"}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-earth")]),e("span",{staticClass:"hidden-sm-and-down"},[t._v("3D展示")])],1),e("v-btn",{attrs:{text:"",value:"right"},on:{click:t.chart}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-chart-areaspline")]),e("span",{staticClass:"hidden-sm-and-down"},[t._v("国家对比")])],1),e("v-btn",{attrs:{text:"",value:"right"},on:{click:t.Ranking}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-chart-bar")]),e("span",{staticClass:"hidden-sm-and-down"},[t._v("动态排名")])],1),e("v-btn",{attrs:{text:"",value:"right"},on:{click:t.who}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-hospital-box")]),e("span",{staticClass:"hidden-sm-and-down"},[t._v("疾病知识")])],1),e("v-tooltip",{attrs:{bottom:"",dark:t.isDarkTheme},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("v-btn",t._g({attrs:{icon:""},on:{click:t.TOGGLE_THEME}},n),[e("v-icon",[t._v("mdi-theme-light-dark")])],1)]}}])},[e("span",[t._v("风格切换")])])],1),e("v-content",[e("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.publicPath+"static/Chart/index.html",scrolling:"no",frameborder:"0",id:"Chart"},on:{load:function(a){return t.checkTheme()}}})])],1)},r=[],o=(e("ac1f"),e("5319"),e("5530")),i=e("2f62"),c={name:"Chart",computed:Object(o["a"])({},Object(i["c"])(["isDarkTheme"])),data:function(){return{publicPath:"/COVID-19-Dashboard/slim/"}},watch:{isDarkTheme:function(t){this.$vuetify.theme.dark=t,this.checkTheme()}},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["TOGGLE_THEME"])),{},{chart:function(){this.$router.replace("/Chart")},home:function(){this.$router.replace("/")},who:function(){this.$router.replace("/WHO")},Ranking:function(){this.$router.replace("/Ranking")},checkTheme:function(){this.$vuetify.theme.dark?document.getElementById("Chart").contentWindow.document.getElementById("ChartBody").setAttribute("style","background-color: black;"):document.getElementById("Chart").contentWindow.document.getElementById("ChartBody").setAttribute("style","background-color: white;")}})},s=c,l=e("2877"),d=e("6544"),h=e.n(d),v=e("7496"),p=e("40dc"),u=e("5bc1"),m=e("8336"),b=e("a75b"),f=e("132d"),k=e("2fa4"),w=e("2a7f"),_=e("3a2f"),g=Object(l["a"])(s,n,r,!1,null,null,null);a["default"]=g.exports;h()(g,{VApp:v["a"],VAppBar:p["a"],VAppBarNavIcon:u["a"],VBtn:m["a"],VContent:b["a"],VIcon:f["a"],VSpacer:k["a"],VToolbarTitle:w["a"],VTooltip:_["a"]})}}]);
//# sourceMappingURL=chunk-2d0a3591.4b278dca.js.map