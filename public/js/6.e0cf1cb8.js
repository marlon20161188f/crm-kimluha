(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"02b5":function(t,a,s){},2835:function(t,a,s){"use strict";s("02b5")},fad3:function(t,a,s){"use strict";s.r(a);var e=s("ded3"),o=s.n(e),c=s("2f62"),r=s("1321"),i=s.n(r),l=(s("ac1f"),{name:"XCardIcon",props:{total:{type:Number,default:"0"},title:{type:String,default:"Sin título"},icon:{type:String,default:"fal fa-users"},color:{type:String}},methods:{getHex(t){let a=t.substring(1).split("");return 3===a.length&&(a=[a[0],a[0],a[1],a[1],a[2],a[2]]),a="0x"+a.join(""),"rgba("+[a>>16&255,a>>8&255,255&a].join(",")+", 0.15)"}}}),n=s("2877"),d=s("cb32"),p=s("eebe"),u=s.n(p),m=Object(n.a)(l,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"flex items-center"},[s("q-avatar",{style:{color:t.color,"background-color":t.getHex(t.color),border:"2px solid "+t.color},attrs:{icon:t.icon}}),s("div",{staticClass:"q-ml-md"},[s("h5",{staticClass:"q-ma-none"},[t._v(t._s(t.total))])])],1)}),[],!1,null,null,null),f=m.exports;u()(m,"components",{QAvatar:d.a});var C={name:"XCardInfo",props:{total:{type:Number,default:"0"},title:{type:String,default:"Sin título"},icon:{type:String,default:"fal fa-users"},color:{type:String}},methods:{getHex(t){let a=t.substring(1).split("");return 3===a.length&&(a=[a[0],a[0],a[1],a[1],a[2],a[2]]),a="0x"+a.join(""),"rgba("+[a>>16&255,a>>8&255,255&a].join(",")+", 0.15)"}}},_=s("58a81"),v=Object(n.a)(C,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"flex items-start column q-py-sm q-px-md",style:{border:"2px solid "+t.color,"border-radius":"10px"}},[s("div",{staticClass:"flex items-center"},[s("q-badge",{staticClass:"q-mr-sm",style:{"background-color":t.color},attrs:{rounded:""}}),s("span",[t._v(t._s(t.title))])],1),s("h5",{staticClass:"q-ma-none"},[t._v(t._s(t.total))])])}),[],!1,null,null,null),q=v.exports;u()(v,"components",{QAvatar:d.a,QBadge:_.a});var b={name:"XCardPanel",props:{title:{type:String,default:"Sin título"}},methods:{}},h=(s("2835"),s("f09f")),x=s("a370"),g=s("eb85"),S=Object(n.a)(b,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-card",{attrs:{flat:""}},[s("q-card-section",{staticClass:"x-card-panel--title"},[s("div",{staticClass:"text-h6"},[t._v(t._s(t.title))])]),s("q-separator",{attrs:{inset:""}}),s("q-card-section",[t._t("default")],2)],1)}),[],!1,null,"967b0c1e",null),A=S.exports;u()(S,"components",{QCard:h.a,QCardSection:x.a,QSeparator:g.a});var O={props:["showDialog","record"],components:{XCardIcon:f,XCardInfo:q,XCardPanel:A,ApexCharts:i.a},data:()=>({load:!1,data:{},count_contacts:0,contacts_02:0,contacts_03:0,contacts_04:0,series:[0,0,0,0],chartOptions:{dataLabels:{formatter:function(t,a){return a.w.config.series[a.seriesIndex]},style:{fontSize:"16px",fontWeight:"normal"}},colors:["#00A251","#FF3030","#274BFF"],labels:["Asignados","Rechazados","Cerrados"],legend:{show:!1}},operators:[],operator_id:null}),created(){this.getData()},computed:o()({},Object(c.d)("auth",["user"])),methods:{async getData(){this.load=!1,await this.$axios.post("api/dashboard/data",{operator_id:this.operator_id}).then((t=>{this.count_contacts=t.data.count_contacts,this.contacts_02=t.data.contacts_02,this.contacts_03=t.data.contacts_03,this.contacts_04=t.data.contacts_04,this.series=t.data.series,this.operators=t.data.operators})),this.load=!0}}},y=s("ddd8"),w=s("1c1c"),F=s("66e5"),Q=s("4074"),D=s("0170"),I=Object(n.a)(O,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.load?s("div",{staticClass:"content-index"},[s("div",{staticClass:"row q-col-gutter-md"},[t.user&&"operator"!==t.user.role_id?s("div",{staticClass:"col-24 col-sm-12 col-md-6"},[s("x-card-panel",{attrs:{title:"CONTACTOS"}},[s("x-card-icon",{attrs:{total:t.count_contacts,icon:"far fa-user",color:"#47A3FF"}})],1)],1):t._e(),s("div",{staticClass:"col-24 col-sm-12 col-md-6"},[s("x-card-panel",{attrs:{title:"ASIGNADOS"}},[s("x-card-icon",{attrs:{total:t.contacts_02,icon:"fas fa-user-plus",color:"#00A251"}})],1)],1),s("div",{staticClass:"col-24 col-sm-12 col-md-6"},[s("x-card-panel",{attrs:{title:"RECHAZADOS"}},[s("x-card-icon",{attrs:{total:t.contacts_03,icon:"fas fa-user-times",color:"#FF3030"}})],1)],1),s("div",{staticClass:"col-24 col-sm-12 col-md-6"},[s("x-card-panel",{attrs:{title:"CERRADOS"}},[s("x-card-icon",{attrs:{total:t.contacts_04,icon:"fas fa-hands-helping",color:"#274BFF"}})],1)],1),s("div",{staticClass:"col-24 col-md-12"},[s("q-card",{attrs:{flat:""}},[s("q-card-section",{staticClass:"flex justify-between items-center",staticStyle:{padding:"8px 16px"}},[s("div",{staticClass:"text-h6",staticStyle:{"font-size":"1rem"}},[t._v("OPERADOR")]),t.user&&"operator"!==t.user.role_id?s("div",{staticStyle:{width:"160px"}},[s("q-select",{staticClass:"select-truncate",attrs:{options:t.operators,"option-value":"id","option-label":"name","emit-value":"","map-options":"",outlined:"",dense:"","options-dense":""},on:{input:t.getData},model:{value:t.operator_id,callback:function(a){t.operator_id=a},expression:"operator_id"}})],1):t._e()]),s("q-separator",{attrs:{inset:""}}),s("q-card-section",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-18"},[s("apex-charts",{attrs:{type:"donut",height:"350",options:t.chartOptions,series:t.series}})],1),s("div",{staticClass:"col-6"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-24 q-mb-md"},[s("x-card-info",{attrs:{title:"ASIGNADOS",total:t.contacts_02,icon:"fas fa-user-times",color:"#00A251"}})],1),s("div",{staticClass:"col-24 q-mb-md"},[s("x-card-info",{attrs:{title:"RECHAZADOS",total:t.contacts_03,icon:"fas fa-user-times",color:"#FF3030"}})],1),s("div",{staticClass:"col-24"},[s("x-card-info",{attrs:{title:"CERRADOS",total:t.contacts_04,icon:"fas fa-user-times",color:"#274BFF"}})],1)])])])])],1)],1),s("div",{staticClass:"col-24 col-md-12"},[s("x-card-panel",{attrs:{title:"INFORMACIÓN"}},[s("q-list",[s("q-item",{staticClass:"q-pl-none"},[s("q-item-section",[s("q-item-label",[s("q-badge",{staticClass:"q-mr-sm",attrs:{color:"positive",rounded:""}}),t._v("\n                ASIGNADOS\n              ")],1),s("q-item-label",{attrs:{caption:"",lines:"2"}},[t._v("Contactos en gestión comercial por parte de un asesor.\n              ")])],1)],1),s("q-item",{staticClass:"q-pl-none"},[s("q-item-section",[s("q-item-label",[s("q-badge",{staticClass:"q-mr-sm",attrs:{color:"negative",rounded:""}}),t._v("\n                RECHAZADOS\n              ")],1),s("q-item-label",{attrs:{caption:"",lines:"2"}},[t._v("Contactos que rechazaron la oferta comercial.\n              ")])],1)],1),s("q-item",{staticClass:"q-pl-none"},[s("q-item-section",[s("q-item-label",[s("q-badge",{staticClass:"q-mr-sm",attrs:{color:"info",rounded:""}}),t._v("\n                CERRADOS\n              ")],1),s("q-item-label",{attrs:{caption:"",lines:"2"}},[t._v("Contactos con los que se cerró una venta.\n              ")])],1)],1)],1)],1)],1)])]):t._e()}),[],!1,null,null,null);a.default=I.exports,u()(I,"components",{QCard:h.a,QCardSection:x.a,QSelect:y.a,QSeparator:g.a,QList:w.a,QItem:F.a,QItemSection:Q.a,QItemLabel:D.a,QBadge:_.a})}}]);
