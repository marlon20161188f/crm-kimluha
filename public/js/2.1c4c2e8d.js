(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2d18":function(e,a,t){"use strict";var l={name:"XCardTable",props:{title:{type:String,default:"Sin título"}},methods:{}},o=(t("feb1"),t("2877")),r=t("f09f"),s=t("a370"),n=t("eebe"),i=t.n(n),c=Object(o.a)(l,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-card",{attrs:{flat:""}},[t("q-card-section",{staticClass:"x-card-table--header"},[e._t("header")],2),t("q-card-section",{staticClass:"q-pt-none q-pl-none q-pr-none"},[e._t("table")],2)],1)}),[],!1,null,"efc2fe2a",null);a.a=c.exports,i()(c,"components",{QCard:r.a,QCardSection:s.a})},"58f9":function(e,a,t){"use strict";t.r(a);var l=t("2d18"),o=t("c19b"),r={name:"XBtnState",props:{number:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:""}},methods:{}},s=(t("d9a4"),t("2877")),n=Object(s.a)(r,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"x-btn-state",style:{"background-color":e.color}},[t("span",{staticStyle:{"font-size":"18px","margin-right":"8px"}},[e._v(e._s(e.number))]),e._v(" "+e._s(e.text)+"\n")])}),[],!1,null,"6aa15ef6",null).exports,i={name:"ContactForm",props:["showDialog","recordId"],data:()=>({loading:!1,loadingSubmit:!1,resource:"api/user",title:"",errors:{},form:{},roles:[]}),created(){},methods:{handleOpen(){this.recordId?this.title="EDITAR CONTACTO":this.title="CREAR CONTACTO"},closeDialog(){this.$emit("update:showDialog",!1)}}},c=t("24e8"),m=t("f09f"),d=t("a370"),u=t("0016"),p=t("eb85"),f=t("9c40"),h=t("eebe"),b=t.n(h),g=Object(s.a)(i,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-dialog",{attrs:{value:e.showDialog,"no-esc-dismiss":!1,"no-backdrop-dismiss":!0,"transition-show":"scale","transition-hide":"scale"},on:{"before-show":e.handleOpen,hide:e.closeDialog}},[t("q-card",{staticClass:"x-dialog",staticStyle:{width:"720px"}},[t("q-card-section",[t("div",{staticClass:"flex justify-between items-center"},[t("div",{staticClass:"x-dialog--title"},[e._v(e._s(e.title))]),t("div",[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-times-circle",size:"md"},on:{click:function(a){return a.preventDefault(),e.closeDialog.apply(null,arguments)}}})],1)])]),t("q-separator"),t("q-card-section",[t("div",{staticClass:"row q-col-gutter-x-md"},[t("div",{staticClass:"col-24 col-md-8"},[t("x-input",{attrs:{label:"DNI",error:e.errors.number},model:{value:e.form.number,callback:function(a){e.$set(e.form,"number",a)},expression:"form.number"}})],1),t("div",{staticClass:"col-24 col-md-8"},[t("x-input",{attrs:{label:"Nombre",error:e.errors.name},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1),t("div",{staticClass:"col-24 col-md-8"},[t("x-input",{attrs:{label:"Apellido",error:e.errors.lastname},model:{value:e.form.lastname,callback:function(a){e.$set(e.form,"lastname",a)},expression:"form.lastname"}})],1),t("div",{staticClass:"col-24 col-md-8"},[t("x-input",{attrs:{label:"Email 1",error:e.errors.email_1},model:{value:e.form.email_1,callback:function(a){e.$set(e.form,"email_1",a)},expression:"form.email_1"}})],1),t("div",{staticClass:"col-24 col-md-8"},[t("x-input",{attrs:{label:"Email 2",error:e.errors.email_2},model:{value:e.form.email_2,callback:function(a){e.$set(e.form,"email_2",a)},expression:"form.email_2"}})],1),t("div",{staticClass:"col-24 col-md-8"},[t("x-input",{attrs:{label:"Celular 1",error:e.errors.cellphone_1},model:{value:e.form.cellphone_1,callback:function(a){e.$set(e.form,"cellphone_1",a)},expression:"form.cellphone_1"}})],1),t("div",{staticClass:"col-24 col-md-8"},[t("x-input",{attrs:{label:"Celular 2",error:e.errors.cellphone_2},model:{value:e.form.cellphone_2,callback:function(a){e.$set(e.form,"cellphone_2",a)},expression:"form.cellphone_2"}})],1),t("div",{staticClass:"col-24 col-md-8"},[t("x-input",{attrs:{label:"Teléfono",error:e.errors.phone},model:{value:e.form.phone,callback:function(a){e.$set(e.form,"phone",a)},expression:"form.phone"}})],1),t("div",{staticClass:"col-24 col-md-8"},[t("x-select",{attrs:{label:"Operador",readonly:!!e.form.id,options:e.roles,error:e.errors.role_id},model:{value:e.form.role_id,callback:function(a){e.$set(e.form,"role_id",a)},expression:"form.role_id"}})],1)]),t("div",{staticClass:"row q-col-gutter-x-md"},[t("div",{staticClass:"col-24 text-right"},[t("q-btn",{staticClass:"q-mr-md",attrs:{outline:"",color:"blue"},on:{click:function(a){return a.preventDefault(),e.closeDialog.apply(null,arguments)}}},[e._v("CANCELAR")]),t("q-btn",{attrs:{unelevated:"",color:"blue",loading:e.loadingSubmit}},[e.recordId?[e._v("GUARDAR CAMBIOS")]:[e._v("CREAR")]],2)],1)])])],1)],1)}),[],!1,null,null,null),v=g.exports;b()(g,"components",{QDialog:c.a,QCard:m.a,QCardSection:d.a,QIcon:u.a,QSeparator:p.a,QBtn:f.a});var C={name:"UserIndex",components:{ContactForm:v,UserLock:o.a,XCardTable:l.a,XBtnState:n},data:()=>({load:!1,showDialog:!1,showDialogLock:!1,pagination:{sortBy:"desc",descending:!1,page:1,rowsPerPage:5},columns:[{name:"number",align:"left",label:"DNI",field:"number",sortable:!1},{name:"name",align:"left",label:"NOMBRES",field:"name",sortable:!1},{name:"lastname",align:"left",label:"APELLIDOS",field:"lastname",sortable:!1},{name:"cellphone",align:"left",label:"CELULAR",field:"cellphone",sortable:!1},{name:"email",align:"left",label:"EMAIL",field:"email",sortable:!1},{name:"action",align:"left",label:"ACCION",field:"action",sortable:!1},{name:"date",align:"left",label:"FECHA",field:"date",sortable:!1},{name:"hour",align:"left",label:"HORA",field:"hour",sortable:!1},{name:"history",align:"right",label:"HISTORIAL",field:"history",sortable:!1}],rows:[{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",history:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",history:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",history:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",history:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",history:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",history:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",history:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",history:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",history:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",history:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",history:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",history:""}],recordId:null}),computed:{pagesNumber(){return Math.ceil(this.rows.length/this.pagination.rowsPerPage)}},mounted(){this.load=!0},methods:{clickCreate(e=null){this.recordId=e,this.showDialog=!0},clickUpload(){this.showDialogLock=!0},clickDownload(){this.showDialogLock=!0}}},x=t("eaac"),_=t("bd08"),w=t("db86"),k=t("3b16"),y=Object(s.a)(C,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.load?t("div",{staticClass:"content-index"},[t("div",{staticClass:"row q-col-gutter-md q-mb-md"},[e._m(0),t("div",{staticClass:"col-shrink"},[t("q-btn",{on:{click:function(a){return a.preventDefault(),e.clickCreate()}}},[e._v("CREAR CONTACTO")])],1),t("div",{staticClass:"col-shrink"},[t("q-btn",{on:{click:function(a){return a.preventDefault(),e.clickUpload.apply(null,arguments)}}},[e._v("CARGAR")])],1)]),t("div",{staticClass:"row q-col-gutter-md"},[t("div",{staticClass:"col-24"},[t("x-card-table",{attrs:{title:"CONTACTOS"},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticClass:"row q-col-gutter-x-md"},[t("div",{staticClass:"col-6"},[t("x-select")],1),t("div",{staticClass:"col-6"},[t("x-input")],1),t("div",{staticClass:"col-12 text-right"},[t("q-btn",{on:{click:function(a){return a.preventDefault(),e.clickDownload.apply(null,arguments)}}},[e._v("EXCEL")])],1)]),t("div",{staticClass:"row q-col-gutter-x-xs"},[t("div",{staticClass:"col"},[t("x-btn-state",{attrs:{number:"2",text:"TEXTO",color:"red"}})],1),t("div",{staticClass:"col"},[t("x-btn-state",{attrs:{number:"5",text:"TEXTO",color:"orange"}})],1),t("div",{staticClass:"col"},[t("x-btn-state",{attrs:{number:"5",text:"TEXTO",color:"green"}})],1),t("div",{staticClass:"col"},[t("x-btn-state",{attrs:{number:"10",text:"TEXTO",color:"blue"}})],1),t("div",{staticClass:"col"},[t("x-btn-state",{attrs:{number:"8",text:"TEXTO",color:"red"}})],1),t("div",{staticClass:"col"},[t("x-btn-state",{attrs:{number:"7",text:"TEXTO",color:"red"}})],1),t("div",{staticClass:"col"},[t("x-btn-state",{attrs:{number:"3",text:"TEXTO",color:"red"}})],1)])]},proxy:!0},{key:"table",fn:function(){return[t("q-table",{attrs:{flat:"",data:e.rows,columns:e.columns,"row-key":"id",pagination:e.pagination,"hide-pagination":""},on:{"update:pagination":function(a){e.pagination=a}},scopedSlots:e._u([{key:"body",fn:function(a){return[t("q-tr",{attrs:{props:a}},[e._l(a.cols,(function(l){return[t("q-td",{key:l.name,attrs:{props:a}},["history"===l.name?[t("q-btn",{attrs:{size:"md",flat:"",round:"",icon:"far fa-eye"},on:{click:function(t){return t.preventDefault(),e.clickCreate(a.row.id)}}})]:[e._v("\n                      "+e._s(a.row[l.name])+"\n                    ")]],2)]}))],2)]}}],null,!1,856155744)}),t("div",{staticClass:"row justify-center q-mt-md"},[t("q-pagination",{attrs:{color:"grey-8",max:e.pagesNumber},model:{value:e.pagination.page,callback:function(a){e.$set(e.pagination,"page",a)},expression:"pagination.page"}})],1)]},proxy:!0}],null,!1,1478978747)})],1)]),t("contact-form",{attrs:{"show-dialog":e.showDialog},on:{"update:showDialog":function(a){e.showDialog=a},"update:show-dialog":function(a){e.showDialog=a}}}),t("user-lock",{attrs:{"show-dialog":e.showDialogLock},on:{"update:showDialog":function(a){e.showDialogLock=a},"update:show-dialog":function(a){e.showDialogLock=a}}})],1):e._e()}),[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"col-shrink flex items-center"},[t("div",[e._v("100 CONTACTOS")])])}],!1,null,null,null);a.default=y.exports,b()(y,"components",{QBtn:f.a,QTable:x.a,QTr:_.a,QTd:w.a,QPagination:k.a})},c19b:function(e,a,t){"use strict";var l={name:"UserLock",props:["showDialog","recordId"],data:()=>({loading:!1,loadingSubmit:!1,resource:"api/user",title:"",errors:{},form:{}}),created(){},methods:{handleOpen(){},closeDialog(){this.$emit("update:showDialog",!1)}}},o=t("2877"),r=t("24e8"),s=t("f09f"),n=t("a370"),i=t("0016"),c=t("9c40"),m=t("eebe"),d=t.n(m),u=Object(o.a)(l,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-dialog",{attrs:{value:e.showDialog,"no-esc-dismiss":!1,"no-backdrop-dismiss":!0,"transition-show":"scale","transition-hide":"scale"},on:{"before-show":e.handleOpen,hide:e.closeDialog}},[t("q-card",{staticClass:"x-dialog",staticStyle:{width:"480px"}},[t("q-card-section",[t("div",{staticClass:"flex justify-end items-center"},[t("div",[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-times-circle",size:"md"},on:{click:function(a){return a.preventDefault(),e.closeDialog.apply(null,arguments)}}})],1)])]),t("q-card-section",[t("div",{staticClass:"row q-col-gutter-x-md"},[t("div",{staticClass:"col-24 text-center text-h5"},[e._v("\n          Estas seguro de "),t("b",[e._v("bloquear")]),e._v(" al usuario"),t("br"),e._v("\n          luisruiz@gmail.com\n        ")])]),t("div",{staticClass:"row q-col-gutter-x-md",staticStyle:{"margin-top":"48px"}},[t("div",{staticClass:"col-12"},[t("q-btn",{staticClass:"full-width",attrs:{unelevated:"",outline:""},on:{click:function(a){return a.preventDefault(),e.closeDialog.apply(null,arguments)}}},[e._v("CANCELAR")])],1),t("div",{staticClass:"col-12"},[t("q-btn",{staticClass:"full-width",attrs:{unelevated:"",color:"blue",loading:e.loadingSubmit}},[e._v("CONFIRMAR")])],1)])])],1)],1)}),[],!1,null,null,null);a.a=u.exports,d()(u,"components",{QDialog:r.a,QCard:s.a,QCardSection:n.a,QIcon:i.a,QBtn:c.a})},d9a4:function(e,a,t){"use strict";t("e8db")},e8db:function(e,a,t){},fcc9:function(e,a,t){},feb1:function(e,a,t){"use strict";t("fcc9")}}]);