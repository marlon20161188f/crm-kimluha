(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2d18":function(a,t,e){"use strict";var s={name:"XCardTable",props:{title:{type:String,default:"Sin título"}},methods:{}},o=(e("feb1"),e("2877")),i=e("f09f"),l=e("a370"),n=e("eebe"),r=e.n(n),c=Object(o.a)(s,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-card",{attrs:{flat:""}},[e("q-card-section",{staticClass:"x-card-table--header"},[a._t("header")],2),e("q-card-section",{staticClass:"q-pt-none q-pl-none q-pr-none"},[a._t("table")],2)],1)}),[],!1,null,"efc2fe2a",null);t.a=c.exports,r()(c,"components",{QCard:i.a,QCardSection:l.a})},"58f9":function(a,t,e){"use strict";e.r(t);var s=e("2d18"),o={name:"ContactUpload",props:["showDialog","recordId"],data:()=>({loading:!1,loadingSubmit:!1,resource:"api/user",title:"",errors:{},form:{}}),created(){},methods:{handleOpen(){this.title="CARGAR DOCUMENTO"},closeDialog(){this.$emit("update:showDialog",!1)}}},i=e("2877"),l=e("24e8"),n=e("f09f"),r=e("a370"),c=e("0016"),d=e("eb85"),m=e("9c40"),u=e("eebe"),p=e.n(u),h=Object(i.a)(o,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-dialog",{attrs:{value:a.showDialog,"no-esc-dismiss":!1,"no-backdrop-dismiss":!0,"transition-show":"scale","transition-hide":"scale"},on:{"before-show":a.handleOpen,hide:a.closeDialog}},[e("q-card",{staticClass:"x-dialog",staticStyle:{width:"480px"}},[e("q-card-section",[e("div",{staticClass:"flex justify-between items-center"},[e("div",{staticClass:"x-dialog--title"},[a._v(a._s(a.title))]),e("div",[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-times-circle",size:"md"},on:{click:function(t){return t.preventDefault(),a.closeDialog.apply(null,arguments)}}})],1)])]),e("q-separator"),e("q-card-section",[e("div",{staticClass:"row q-col-gutter-x-md"},[e("div",{staticClass:"col-24 text-center text-h5"},[a._v("\n          dsadasdasdasdsadasd asdasdsa asdasdjaslijdalkjdas\n          asdljkasdjlaksjd lasjd lkajsdlkj aslkjdas\n        ")])]),e("div",{staticClass:"row q-col-gutter-x-md",staticStyle:{"margin-top":"48px"}},[e("div",{staticClass:"col-12"},[e("q-btn",{staticClass:"full-width",attrs:{unelevated:"",outline:""},on:{click:function(t){return t.preventDefault(),a.closeDialog.apply(null,arguments)}}},[a._v("DESCARGAR FORMATO")])],1),e("div",{staticClass:"col-12"},[e("q-btn",{staticClass:"full-width",attrs:{unelevated:"",color:"blue",loading:a.loadingSubmit}},[a._v("CARGAR")])],1)])])],1)],1)}),[],!1,null,null,null),f=h.exports;p()(h,"components",{QDialog:l.a,QCard:n.a,QCardSection:r.a,QIcon:c.a,QSeparator:d.a,QBtn:m.a});var g={name:"XBtnState",props:{number:{type:String,default:""},text:{type:String,default:""},color:{type:String,default:""}},methods:{}},b=(e("d9a4"),Object(i.a)(g,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"x-btn-state",style:{"background-color":a.color}},[e("span",{staticStyle:{"font-size":"18px","margin-right":"8px"}},[a._v(a._s(a.number))]),a._v(" "+a._s(a.text)+"\n")])}),[],!1,null,"6aa15ef6",null)).exports,v={name:"ContactForm",props:["showDialog","recordId"],data:()=>({loading:!1,loadingSubmit:!1,resource:"api/contact",title:"",errors:{},form:{},operators:[],mobile_operators:[]}),created(){this.initForm(),this.initTables()},methods:{initForm(){this.title="",this.errors={},this.form={id:null,number:null,name:null,lastname:null,email_1:null,email_2:null,cellphone_1:null,cellphone_2:null,phone:null,operator_id:null,chip:!0,mobile_operator_id:"claro"}},initTables(){this.$axios.get(`/${this.resource}/tables`).then((a=>{this.operators=a.data.operators,this.mobile_operators=a.data.mobile_operators}))},async handleOpen(){this.loading=!0,this.initForm(),this.recordId?this.title="Editar contacto":this.title="Nuevo contacto",this.loading=!1},async onSubmit(){this.loading=!0,this.loadingSubmit=!0,this.errors={},await this.$axios.post(`/${this.resource}`,this.form).then((a=>{a.data.success?(this.$q.notify({message:a.data.message,icon:"fas fa-check",color:"positive"}),this.$emit("success",a.data.id),this.closeDialog()):this.$q.notify({message:a.data.message,icon:"fas fa-times",color:"red"})})).catch((a=>{this.errors=a})),this.loadingSubmit=!1,this.loading=!1},closeDialog(){this.$emit("update:showDialog",!1)}}},_=e("9564"),C=e("2bb1"),w=Object(i.a)(v,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-dialog",{attrs:{value:a.showDialog,"no-esc-dismiss":!1,"no-backdrop-dismiss":!0,"transition-show":"scale","transition-hide":"scale"},on:{"before-show":a.handleOpen,hide:a.closeDialog}},[e("q-card",{staticClass:"x-dialog",staticStyle:{width:"720px"}},[e("q-card-section",[e("div",{staticClass:"flex justify-between items-center"},[e("div",{staticClass:"x-dialog--title"},[a._v(a._s(a.title))]),e("div",[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-times-circle",size:"md"},on:{click:function(t){return t.preventDefault(),a.closeDialog.apply(null,arguments)}}})],1)])]),e("q-separator"),e("q-card-section",[e("div",{staticClass:"row q-col-gutter-md"},[e("div",{staticClass:"col-24 col-md-8"},[e("x-input",{attrs:{label:"DNI",error:a.errors.number},model:{value:a.form.number,callback:function(t){a.$set(a.form,"number",t)},expression:"form.number"}})],1),e("div",{staticClass:"col-24 col-md-8"},[e("x-input",{attrs:{label:"Nombre",error:a.errors.name},model:{value:a.form.name,callback:function(t){a.$set(a.form,"name",t)},expression:"form.name"}})],1),e("div",{staticClass:"col-24 col-md-8"},[e("x-input",{attrs:{label:"Apellido",error:a.errors.lastname},model:{value:a.form.lastname,callback:function(t){a.$set(a.form,"lastname",t)},expression:"form.lastname"}})],1),e("div",{staticClass:"col-24 col-md-8"},[e("x-input",{attrs:{label:"Email 1",error:a.errors.email_1},model:{value:a.form.email_1,callback:function(t){a.$set(a.form,"email_1",t)},expression:"form.email_1"}})],1),e("div",{staticClass:"col-24 col-md-8"},[e("x-input",{attrs:{label:"Email 2",error:a.errors.email_2},model:{value:a.form.email_2,callback:function(t){a.$set(a.form,"email_2",t)},expression:"form.email_2"}})],1),e("div",{staticClass:"col-24 col-md-8"},[e("x-input",{attrs:{label:"Celular 1",error:a.errors.cellphone_1},model:{value:a.form.cellphone_1,callback:function(t){a.$set(a.form,"cellphone_1",t)},expression:"form.cellphone_1"}})],1),e("div",{staticClass:"col-24 col-md-8"},[e("x-input",{attrs:{label:"Celular 2",error:a.errors.cellphone_2},model:{value:a.form.cellphone_2,callback:function(t){a.$set(a.form,"cellphone_2",t)},expression:"form.cellphone_2"}})],1),e("div",{staticClass:"col-24 col-md-8"},[e("x-input",{attrs:{label:"Teléfono",error:a.errors.phone},model:{value:a.form.phone,callback:function(t){a.$set(a.form,"phone",t)},expression:"form.phone"}})],1),e("div",{staticClass:"col-24 col-md-8"},[e("x-select",{attrs:{label:"Operador",readonly:!!a.form.id,options:a.operators,error:a.errors.operator_id},model:{value:a.form.operator_id,callback:function(t){a.$set(a.form,"operator_id",t)},expression:"form.operator_id"}})],1),e("div",{staticClass:"col-24 col-md-8 flex items-center"},[e("q-toggle",{attrs:{dense:"",label:"Chip"},model:{value:a.form.chip,callback:function(t){a.$set(a.form,"chip",t)},expression:"form.chip"}})],1),e("div",{staticClass:"col-24 col-md-8"},[e("x-select",{attrs:{label:"Operador móvil",options:a.mobile_operators,error:a.errors.mobile_operator_id},model:{value:a.form.mobile_operator_id,callback:function(t){a.$set(a.form,"mobile_operator_id",t)},expression:"form.mobile_operator_id"}})],1)]),e("div",{staticClass:"row q-col-gutter-md",staticStyle:{"margin-top":"18px"}},[e("div",{staticClass:"col-24 text-right"},[e("q-btn",{attrs:{unelevated:"",color:"blue",loading:a.loadingSubmit},on:{click:function(t){return t.preventDefault(),a.onSubmit.apply(null,arguments)}}},[a.recordId?[a._v("GUARDAR")]:[a._v("CREAR")]],2)],1)])]),e("q-card-section",[e("div",{staticClass:"row q-col-gutter-md"},[e("div",{staticClass:"col-24"},[e("q-markup-table",{attrs:{dense:"",flat:""}},[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[a._v("Fecha")]),e("th",{staticClass:"text-left"},[a._v("Medio")]),e("th",{staticClass:"text-left"},[a._v("Comentario")])])]),e("tbody",[e("tr",[e("td",[a._v("07/09/2021")]),e("td",[e("q-icon",{staticClass:"q-mr-xs",attrs:{name:"whatsapp",size:"md"}}),a._v("\n                Whatsapp\n              ")],1),e("td",[a._v("dasd asasdsad asdasdsad asdsad asdsadas")])]),e("tr",[e("td",[a._v("07/09/2021")]),e("td",[e("q-icon",{staticClass:"q-mr-xs",attrs:{name:"phone",size:"md"}}),a._v("\n                Llamada\n              ")],1),e("td",[a._v(" dasdasdsadsadsa asdasdaslkdjas lkdjas lkdja")])]),e("tr",[e("td",[a._v("07/09/2021")]),e("td",[e("q-icon",{staticClass:"q-mr-xs",attrs:{name:"mail",size:"md"}}),a._v("\n                Enviar email\n              ")],1),e("td",[a._v(" dasdasdsadsadsa asdasdaslkdjas lkdjas lkdja")])]),e("tr",[e("td",[a._v("07/09/2021")]),e("td",[e("q-icon",{staticClass:"q-mr-xs",attrs:{name:"videocam",size:"md"}}),a._v("\n                Reunión virtual\n              ")],1),e("td",[a._v(" dasdasdsadsadsa asdasdaslkdjas lkdjas lkdja")])]),e("tr",[e("td",[a._v("07/09/2021")]),e("td",[e("q-icon",{staticClass:"q-mr-xs",attrs:{name:"group",size:"md"}}),a._v("\n                Reunión presencial\n              ")],1),e("td",[a._v(" dasdasdsadsadsa asdasdaslkdjas lkdjas lkdja")])]),e("tr",[e("td",[a._v("07/09/2021")]),e("td",[e("q-icon",{staticClass:"q-mr-xs",attrs:{name:"whatsapp",size:"md"}}),a._v("\n                Whatsapp\n              ")],1),e("td",[a._v(" dasdasdsadsadsa asdasdaslkdjas lkdjas lkdja")])])])])],1)])])],1)],1)}),[],!1,null,null,null),x=w.exports;p()(w,"components",{QDialog:l.a,QCard:n.a,QCardSection:r.a,QIcon:c.a,QSeparator:d.a,QToggle:_.a,QBtn:m.a,QMarkupTable:C.a});var k={name:"ContactHistory",props:["showDialog","recordId"],data:()=>({loading:!1,loadingSubmit:!1,resource:"api/user",title:"",errors:{},form:{},pagination:{sortBy:"desc",descending:!1,page:1,rowsPerPage:5},columns:[{name:"date",align:"left",label:"FECHA",field:"date",sortable:!1},{name:"type",align:"left",label:"MEDIO",field:"type",sortable:!1},{name:"commentary",align:"left",label:"COMENTARIO",field:"commentary",sortable:!1}],rows:[{id:1,date:"20/06/2020",type:"Llamada",commentary:"dsadasd asdasd asdasdsa"},{id:1,date:"20/06/2020",type:"Email",commentary:"dsadasd asdasd asdasdsa"},{id:1,date:"20/06/2020",type:"Whatsapp",commentary:"dsadasd asdasd asdasdsa"},{id:1,date:"20/06/2020",type:"Llamada",commentary:"dsadasd asdasd asdasdsa"},{id:1,date:"20/06/2020",type:"Llamada",commentary:"dsadasd asdasd asdasdsa"},{id:1,date:"20/06/2020",type:"Llamada",commentary:"dsadasd asdasd asdasdsa"},{id:1,date:"20/06/2020",type:"Llamada",commentary:"dsadasd asdasd asdasdsa"},{id:1,date:"20/06/2020",type:"Llamada",commentary:"dsadasd asdasd asdasdsa"}]}),computed:{pagesNumber(){return Math.ceil(this.rows.length/this.pagination.rowsPerPage)}},created(){},methods:{handleOpen(){this.title="SEGUIMIENTO"},closeDialog(){this.$emit("update:showDialog",!1)}}},q=e("eaac"),y=e("bd08"),D=e("db86"),S=e("3b16"),z=Object(i.a)(k,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-dialog",{attrs:{value:a.showDialog,"no-esc-dismiss":!1,"no-backdrop-dismiss":!0,"transition-show":"scale","transition-hide":"scale"},on:{"before-show":a.handleOpen,hide:a.closeDialog}},[e("q-card",{staticClass:"x-dialog",staticStyle:{width:"480px"}},[e("q-card-section",[e("div",{staticClass:"flex justify-between items-center"},[e("div",{staticClass:"x-dialog--title"},[a._v(a._s(a.title))]),e("div",[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-times-circle",size:"md"},on:{click:function(t){return t.preventDefault(),a.closeDialog.apply(null,arguments)}}})],1)])]),e("q-separator"),e("q-card-section",[e("div",{staticClass:"row q-col-gutter-x-md"},[e("div",{staticClass:"col-24"},[e("q-table",{attrs:{flat:"",data:a.rows,columns:a.columns,"row-key":"id",pagination:a.pagination,"hide-pagination":""},on:{"update:pagination":function(t){a.pagination=t}},scopedSlots:a._u([{key:"body",fn:function(t){return[e("q-tr",{attrs:{props:t}},[a._l(t.cols,(function(s){return[e("q-td",{key:s.name,attrs:{props:t}},["actions"===s.name?[e("q-btn",{attrs:{size:"md",flat:"",round:"",icon:"far fa-clock"},on:{click:function(e){return e.preventDefault(),a.clickHistory(t.row.id)}}}),e("q-btn",{attrs:{size:"md",flat:"",round:"",icon:"far fa-eye"},on:{click:function(e){return e.preventDefault(),a.clickCreate(t.row.id)}}})]:[a._v("\n                        "+a._s(t.row[s.name])+"\n                      ")]],2)]}))],2)]}}])}),e("div",{staticClass:"row justify-center q-mt-md"},[e("q-pagination",{attrs:{color:"grey-8",max:a.pagesNumber},model:{value:a.pagination.page,callback:function(t){a.$set(a.pagination,"page",t)},expression:"pagination.page"}})],1)],1)])])],1)],1)}),[],!1,null,null,null),j=z.exports;p()(z,"components",{QDialog:l.a,QCard:n.a,QCardSection:r.a,QIcon:c.a,QSeparator:d.a,QTable:q.a,QTr:y.a,QTd:D.a,QBtn:m.a,QPagination:S.a});var O={name:"UserIndex",components:{ContactHistory:j,ContactForm:x,ContactUpload:f,XCardTable:s.a,XBtnState:b},data:()=>({load:!1,showDialog:!1,showDialogUpload:!1,showDialogHistory:!1,resource:"api/contact",errors:{},form:{},pagination:{sortBy:"desc",descending:!1,page:1,rowsPerPage:5},columns:[{name:"number",align:"left",label:"DNI",field:"number",sortable:!1},{name:"name",align:"left",label:"NOMBRES",field:"name",sortable:!1},{name:"lastname",align:"left",label:"APELLIDOS",field:"lastname",sortable:!1},{name:"cellphone",align:"left",label:"CELULAR",field:"cellphone",sortable:!1},{name:"email",align:"left",label:"EMAIL",field:"email",sortable:!1},{name:"action",align:"left",label:"ACCION",field:"action",sortable:!1},{name:"date",align:"left",label:"FECHA",field:"date",sortable:!1},{name:"hour",align:"left",label:"HORA",field:"hour",sortable:!1},{name:"actions",align:"right",label:"ACCIONES",field:"actions",sortable:!1}],rows:[{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action_icon:"group",action:"Reunión presencial",date:"2021/06/14",hour:"11:37 a.m.",actions:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action_icon:"videocam",action:"Reunión virtual",date:"2021/06/14",hour:"11:37 a.m.",actions:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action_icon:"phone",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",actions:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action_icon:"phone",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",actions:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action_icon:"mail",action:"Enviar email",date:"2021/06/14",hour:"11:37 a.m.",actions:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action_icon:"whatsapp",action:"Whatsapp",date:"2021/06/14",hour:"11:37 a.m.",actions:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action_icon:"whatsapp",action:"Whatsapp",date:"2021/06/14",hour:"11:37 a.m.",actions:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action_icon:"whatsapp",action:"Whatsapp",date:"2021/06/14",hour:"11:37 a.m.",actions:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action_icon:"phone",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",actions:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action_icon:"phone",action:"Llamar",date:"2021/06/14",hour:"11:37 a.m.",actions:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action_icon:"mail",action:"Enviar email",date:"2021/06/14",hour:"11:37 a.m.",actions:""},{id:1,number:"47677901",name:"Pedro",lastname:"Vargas Sanchez",cellphone:"987654321",email:"luiscacerez@gmail.com",action_icon:"mail",action:"Enviar email",date:"2021/06/14",hour:"11:37 a.m.",actions:""}],recordId:null,states:[],count_contacts:0,operators:[]}),computed:{pagesNumber(){return Math.ceil(this.rows.length/this.pagination.rowsPerPage)}},mounted(){this.load=!0,this.initTables()},methods:{initTables(){this.$axios.get(`/${this.resource}/index_tables`).then((a=>{this.states=a.data.states,this.count_contacts=a.data.count_contacts,this.operators=a.data.operators}))},clickCreate(a=null){this.recordId=a,this.showDialog=!0},clickHistory(a){this.recordId=a,this.showDialogHistory=!0},clickUpload(){this.showDialogUpload=!0},clickDownload(){}}},Q=Object(i.a)(O,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return a.load?e("div",{staticClass:"content-index"},[e("div",{staticClass:"row q-col-gutter-md q-mb-md"},[e("div",{staticClass:"col-shrink flex items-center"},[e("div",{staticStyle:{"font-size":"24px","font-weight":"500"}},[a._v(a._s(a.count_contacts)+" CONTACTOS")])]),e("div",{staticClass:"col-shrink"},[e("q-btn",{attrs:{unelevated:"",color:"blue"},on:{click:function(t){return t.preventDefault(),a.clickCreate()}}},[a._v("CREAR CONTACTO")])],1),e("div",{staticClass:"col-shrink"},[e("q-btn",{attrs:{unelevated:"",outline:""},on:{click:function(t){return t.preventDefault(),a.clickUpload.apply(null,arguments)}}},[a._v("CARGAR")])],1)]),e("div",{staticClass:"row q-col-gutter-md"},[e("div",{staticClass:"col-24"},[e("x-card-table",{attrs:{title:"CONTACTOS"},scopedSlots:a._u([{key:"header",fn:function(){return[e("div",{staticClass:"row q-col-gutter-x-md q-mb-md"},[e("div",{staticClass:"col-6"},[e("x-select",{attrs:{label:"Operador",options:a.operators,error:a.errors.operator_id},model:{value:a.form.operator_id,callback:function(t){a.$set(a.form,"operator_id",t)},expression:"form.operator_id"}})],1),e("div",{staticClass:"col-6"},[e("x-input")],1),e("div",{staticClass:"col-12 text-right"},[e("q-btn",{attrs:{unelevated:"",color:"grey"},on:{click:function(t){return t.preventDefault(),a.clickDownload.apply(null,arguments)}}},[e("q-icon",{staticClass:"q-mr-sm",attrs:{name:"fas fa-arrow-down",size:"16px"}}),a._v("\n                  EXCEL")],1)],1)]),e("div",{staticClass:"row q-col-gutter-x-xs"},a._l(a.states,(function(a){return e("div",{key:a.id,staticClass:"col"},[e("x-btn-state",{attrs:{number:"2",text:a.name,color:a.color}})],1)})),0)]},proxy:!0},{key:"table",fn:function(){return[e("q-table",{attrs:{flat:"",data:a.rows,columns:a.columns,"row-key":"id",pagination:a.pagination,"hide-pagination":""},on:{"update:pagination":function(t){a.pagination=t}},scopedSlots:a._u([{key:"body",fn:function(t){return[e("q-tr",{attrs:{props:t}},[a._l(t.cols,(function(s){return[e("q-td",{key:s.name,attrs:{props:t}},["actions"===s.name?[e("q-btn",{attrs:{size:"md",flat:"",round:"",icon:"far fa-eye"},on:{click:function(e){return e.preventDefault(),a.clickCreate(t.row.id)}}})]:"action"===s.name?[e("q-icon",{staticClass:"q-mr-xs",attrs:{name:t.row.action_icon,size:"md"}}),a._v("\n                        "+a._s(t.row.action)+"\n                      ")]:[a._v("\n                        "+a._s(t.row[s.name])+"\n                      ")]],2)]}))],2)]}}],null,!1,126460972)}),e("div",{staticClass:"row justify-center q-mt-md"},[e("q-pagination",{attrs:{color:"grey-8",max:a.pagesNumber},model:{value:a.pagination.page,callback:function(t){a.$set(a.pagination,"page",t)},expression:"pagination.page"}})],1)]},proxy:!0}],null,!1,1043922853)})],1)]),e("contact-form",{attrs:{"show-dialog":a.showDialog,"record-id":a.recordId},on:{"update:showDialog":function(t){a.showDialog=t},"update:show-dialog":function(t){a.showDialog=t}}}),e("contact-upload",{attrs:{"show-dialog":a.showDialogUpload},on:{"update:showDialog":function(t){a.showDialogUpload=t},"update:show-dialog":function(t){a.showDialogUpload=t}}})],1):a._e()}),[],!1,null,null,null);t.default=Q.exports,p()(Q,"components",{QBtn:m.a,QIcon:c.a,QTable:q.a,QTr:y.a,QTd:D.a,QPagination:S.a})},d9a4:function(a,t,e){"use strict";e("e8db")},e8db:function(a,t,e){},fcc9:function(a,t,e){},feb1:function(a,t,e){"use strict";e("fcc9")}}]);