(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2d18":function(t,e,a){"use strict";var o={name:"XCardTable",props:{title:{type:String,default:"Sin título"}},methods:{}},s=(a("feb1"),a("2877")),i=a("f09f"),l=a("a370"),n=a("eebe"),r=a.n(n),c=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{attrs:{flat:""}},[a("q-card-section",{staticClass:"x-card-table--header"},[t._t("header")],2),a("q-card-section",{staticClass:"q-pt-none q-pl-none q-pr-none"},[t._t("table")],2)],1)}),[],!1,null,"efc2fe2a",null);e.a=c.exports,r()(c,"components",{QCard:i.a,QCardSection:l.a})},"58f9":function(t,e,a){"use strict";a.r(e);var o=a("ded3"),s=a.n(o),i=a("2d18"),l=a("bd0e"),n={name:"TrackingForm",components:{VueDatePicker:l.a},props:["showDialog","contactId","recordId"],data:()=>({loading:!1,loadingSubmit:!1,resource:"api/contact/tracking",title:"",errors:{},form:{},actions:[]}),created(){this.initForm(),this.initTables()},methods:{initForm(){this.title="",this.errors={},this.form={id:null,contact_id:this.contactId,date_of_tracking:moment().format("YYYY-MM-DD"),action_id:null,commentary:null}},initTables(){this.$axios.get(`/${this.resource}/tables`).then((t=>{this.actions=t.data.actions}))},async handleOpen(){this.loading=!0,this.initForm(),this.recordId?(await this.$axios.get(`/${this.resource}/record/${this.recordId}`).then((t=>{this.form=t.data.data})),this.title="Editar seguimiento"):(this.title="Nuevo seguimiento",this.form.action_id=_.find(this.actions,{is_default:!0}).id),this.loading=!1},async onSubmit(){this.loading=!0,this.loadingSubmit=!0,this.errors={},await this.$axios.post(`/${this.resource}`,this.form).then((t=>{t.data.success?(this.$q.notify({message:t.data.message,icon:"fas fa-check",color:"positive"}),this.$emit("success",t.data.id),this.closeDialog()):this.$q.notify({message:t.data.message,icon:"fas fa-times",color:"red"})})).catch((t=>{this.errors=t})),this.loadingSubmit=!1,this.loading=!1},closeDialog(){this.$emit("update:showDialog",!1)}}},r=a("2877"),c=a("24e8"),d=a("f09f"),u=a("a370"),p=a("0016"),m=a("eb85"),f=a("8572"),h=a("9c40"),g=a("eebe"),b=a.n(g),v=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{value:t.showDialog,"no-esc-dismiss":!1,"no-backdrop-dismiss":!0,"transition-show":"scale","transition-hide":"scale"},on:{"before-show":t.handleOpen,hide:t.closeDialog}},[a("q-card",{staticClass:"x-dialog",staticStyle:{width:"720px"}},[a("q-card-section",[a("div",{staticClass:"flex justify-between items-center"},[a("div",{staticClass:"x-dialog--title"},[t._v(t._s(t.title))]),a("div",[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-times-circle",size:"md"},on:{click:function(e){return e.preventDefault(),t.closeDialog.apply(null,arguments)}}})],1)])]),a("q-separator"),a("q-card-section",[a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-24 col-md-12"},[a("q-field",{attrs:{outlined:"",dense:"","stack-label":"",label:"Fecha"},scopedSlots:t._u([{key:"control",fn:function(){return[a("vue-date-picker",{attrs:{format:"DD/MM/YYYY","no-header":""},model:{value:t.form.date_of_tracking,callback:function(e){t.$set(t.form,"date_of_tracking",e)},expression:"form.date_of_tracking"}})]},proxy:!0}])})],1),a("div",{staticClass:"col-24 col-md-12"},[a("x-select",{attrs:{label:"Medio",options:t.actions,"option-label":"alternative_name",error:t.errors.action_id},model:{value:t.form.action_id,callback:function(e){t.$set(t.form,"action_id",e)},expression:"form.action_id"}})],1),a("div",{staticClass:"col-24"},[a("x-input",{attrs:{label:"Comentario",autogrow:"",error:t.errors.commentary},model:{value:t.form.commentary,callback:function(e){t.$set(t.form,"commentary",e)},expression:"form.commentary"}})],1)]),a("div",{staticClass:"row q-col-gutter-md",staticStyle:{"margin-top":"18px"}},[a("div",{staticClass:"col-24 text-right"},[a("q-btn",{staticClass:"q-mr-md",attrs:{outline:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.closeDialog.apply(null,arguments)}}},[t._v("CANCELAR")]),a("q-btn",{attrs:{unelevated:"",color:"blue",loading:t.loadingSubmit},on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t.recordId?[t._v("GUARDAR")]:[t._v("CREAR")]],2)],1)])]),a("x-loading",{attrs:{loading:t.loading}})],1)],1)}),[],!1,null,null,null),x=v.exports;b()(v,"components",{QDialog:c.a,QCard:d.a,QCardSection:u.a,QIcon:p.a,QSeparator:m.a,QField:f.a,QBtn:h.a});var w=a("93f5"),y={name:"TrackingIndex",components:{TrackingForm:x,XDialogDelete:w.a},props:["contactId"],data:()=>({showDialog:!1,showDialogDelete:!1,resource:"api/contact/tracking",title:"",recordId:null,records:[],record:null}),mounted(){this.title="Contactos",this.getRecords()},methods:{getRecords(){this.$axios.get(`/${this.resource}/records/${this.contactId}`).then((t=>{this.records=t.data.data}))},clickCreate(t=null){this.recordId=t,this.showDialog=!0},clickDelete(t){this.showDialogDelete=!0,this.record=t}}},C=a("2bb1"),k=Object(r.a)(y,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-markup-table",{attrs:{dense:"",flat:""}},[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Fecha")]),a("th",{staticClass:"text-left"},[t._v("Medio")]),a("th",{staticClass:"text-left"},[t._v("Comentario")]),a("th",{staticClass:"text-right"},[a("q-btn",{attrs:{unelevated:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.clickCreate()}}},[t._v("Nuevo")])],1)])]),a("tbody",t._l(t.records,(function(e){return a("tr",[a("td",[t._v(t._s(e.date_of_tracking))]),a("td",[a("q-icon",{staticClass:"q-mr-xs",attrs:{name:e.action_icon,size:"md"}}),t._v(t._s(e.action_name))],1),a("td",[t._v(t._s(e.commentary))]),a("td",{staticClass:"text-right"},[a("q-btn",{attrs:{size:"sm",flat:"",round:"",color:"negative",icon:"fas fa-trash"},on:{click:function(a){return a.preventDefault(),t.clickDelete(e)}}})],1)])})),0)]),a("tracking-form",{attrs:{"show-dialog":t.showDialog,"contact-id":t.contactId,"record-id":t.recordId},on:{"update:showDialog":function(e){t.showDialog=e},"update:show-dialog":function(e){t.showDialog=e},success:t.getRecords}}),a("x-dialog-delete",{attrs:{"show-dialog":t.showDialogDelete,resource:t.resource,record:t.record},on:{"update:showDialog":function(e){t.showDialogDelete=e},"update:show-dialog":function(e){t.showDialogDelete=e},success:t.getRecords}})],1)}),[],!1,null,null,null),D=k.exports;b()(k,"components",{QMarkupTable:C.a,QBtn:h.a,QIcon:p.a});var q=a("2f62"),$={name:"XSelectLocation",props:{label:{default:"Ubigeo"},value:{default:""},dense:{type:Boolean,default:!0},disable:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{default:null}},data:()=>({filter_locations:[]}),created(){this.filter_locations=this.locations},computed:s()({},Object(q.d)("auth",["locations"])),methods:{handleInput(t){this.$emit("input",t)},filterLocation(t,e,a){e((()=>{const e=_.lowerCase(t);this.filter_locations=_.filter(this.locations,(t=>_.lowerCase(t.name).indexOf(e)>-1))}))}}},S=a("ddd8"),I=a("66e5"),Q=a("4074"),F=Object(r.a)($,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"relative"}},[a("q-select",{attrs:{value:t.value,outlined:"",dense:"","use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",label:t.label,options:t.filter_locations,"option-value":"id","option-label":"name","emit-value":"","map-options":"","options-dense":""},on:{input:function(e){return t.handleInput(e)},filter:t.filterLocation},scopedSlots:t._u([{key:"no-option",fn:function(){return[a("q-item",[a("q-item-section",{staticClass:"text-grey"},[t._v("\n          Sin resultados\n        ")])],1)]},proxy:!0}])})],1)}),[],!1,null,null,null),B=F.exports;b()(F,"components",{QSelect:S.a,QItem:I.a,QItemSection:Q.a});var T={name:"ContactForm",components:{XSelectLocation:B,VueDatePicker:l.a,TrackingIndex:D},props:["showDialog","recordId"],data:()=>({loading:!1,loadingSubmit:!1,loadForm:!1,resource:"api/contact",title:"",errors:{},form:{},operators:[],mobile_operators:[],states:[],all_phases:[],phases:[],rejections:[],plan_types:[],plan_sales:[],chip_types:[],tab:"tracking"}),created(){this.initForm(),this.initTables()},computed:s()({},Object(q.d)("auth",["user"])),methods:{initForm(){this.title="",this.errors={},this.form={id:null,number:null,name:null,lastname:null,date_of_birth:null,email_1:null,cellphone_1:null,cellphone_2:null,phone:null,address:null,location_id:null,operator_id:null,chip_type_id:null,mobile_operator_id:null,plan_type_id:null,plan_sale_id:null,plan_price:0,date_plan_start:null,date_plan_end:null,phase_id:"01",rejection_id:null,state_id:null,action_id:null,date_of_action:null,time_of_action:null}},initTables(){this.$axios.get(`/${this.resource}/tables`).then((t=>{this.operators=t.data.operators,this.mobile_operators=t.data.mobile_operators,this.plan_types=t.data.plan_types,this.plan_sales=t.data.plan_sales,this.chip_types=t.data.chip_types,this.states=t.data.states,this.actions=t.data.actions,this.all_phases=t.data.phases,this.rejections=t.data.rejections}))},async handleOpen(){this.loadForm=!1,this.loading=!0,this.initForm(),this.phases=this.all_phases,this.recordId?(await this.$axios.get(`/${this.resource}/record/${this.recordId}`).then((t=>{this.form=t.data.data})),this.form.operator_id&&(this.phases=_.filter(this.all_phases,(t=>"01"!==t.id))),this.title="Seguimiento"):this.title="Nuevo contacto",this.tab=this.form.id?"tracking":"contact",this.loadForm=!0,this.loading=!1},async onSubmit(){if(this.form.id&&(this.form.phase_id,"03"===this.form.phase_id&&(this.form.state_id=null,this.form.action_id=null,this.form.date_of_action=null,this.form.time_of_action=null,_.isNull(this.form.rejection_id))))return this.$q.notify({message:"Debe seleccionar un motivo de rechazo",icon:"fas fa-times",color:"red"}),!1;this.loading=!0,this.loadingSubmit=!0,this.errors={},await this.$axios.post(`/${this.resource}`,this.form).then((t=>{t.data.success?(this.$q.notify({message:t.data.message,icon:"fas fa-check",color:"positive"}),this.$emit("success",t.data.id),this.closeDialog()):this.$q.notify({message:t.data.message,icon:"fas fa-times",color:"red"})})).catch((t=>{this.errors=t})),this.loadingSubmit=!1,this.loading=!1},changePhase(){},closeDialog(){this.$emit("update:showDialog",!1)}}},R=a("429b"),j=a("7460"),E=a("adad"),A=a("823b"),O=a("27f9"),Y=a("7cbe"),P=a("ca78"),N=a("7f67"),M=Object(r.a)(T,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{value:t.showDialog,"no-esc-dismiss":!1,"no-backdrop-dismiss":!0,"transition-show":"scale","transition-hide":"scale"},on:{"before-show":t.handleOpen,hide:t.closeDialog}},[a("q-card",{staticClass:"x-dialog",staticStyle:{width:"720px"}},[a("q-card-section",[a("div",{staticClass:"flex justify-between items-center"},[a("div",{staticClass:"x-dialog--title"},[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t.form.id?a("q-tab",{attrs:{name:"tracking",label:"Seguimiento"}}):t._e(),a("q-tab",{attrs:{name:"contact",label:"Contacto"}})],1)],1),a("div",[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-times-circle",size:"md"},on:{click:function(e){return e.preventDefault(),t.closeDialog.apply(null,arguments)}}})],1)])]),a("q-separator"),a("q-card-section",[a("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{staticClass:"q-pt-none q-px-none q-pb-lg",attrs:{name:"tracking"}},[t.loadForm?a("tracking-index",{attrs:{"contact-id":t.recordId}}):t._e(),t.form.id?a("div",{staticClass:"row q-col-gutter-md q-mt-xs"},[a("div",{staticClass:"col-24 col-md-8"},[a("x-select",{attrs:{label:"Etapa",options:t.phases,error:t.errors.phase_id,readonly:"01"===t.form.phase_id},on:{input:t.changePhase},model:{value:t.form.phase_id,callback:function(e){t.$set(t.form,"phase_id",e)},expression:"form.phase_id"}})],1),"02"===t.form.phase_id?[a("div",{staticClass:"col-24 col-md-8"},[a("x-select",{attrs:{label:"Estado",options:t.states,error:t.errors.state_id},model:{value:t.form.state_id,callback:function(e){t.$set(t.form,"state_id",e)},expression:"form.state_id"}})],1),a("div",{staticClass:"col-24 col-md-8"},[a("x-select",{attrs:{label:"Próxima acción",options:t.actions,error:t.errors.action_id},model:{value:t.form.action_id,callback:function(e){t.$set(t.form,"action_id",e)},expression:"form.action_id"}})],1),a("div",{staticClass:"col-24 col-md-8"},[a("q-field",{attrs:{outlined:"",dense:"","stack-label":"",label:"Fecha disponible"},scopedSlots:t._u([{key:"control",fn:function(){return[a("vue-date-picker",{attrs:{format:"DD/MM/YYYY","no-header":""},model:{value:t.form.date_of_action,callback:function(e){t.$set(t.form,"date_of_action",e)},expression:"form.date_of_action"}})]},proxy:!0}],null,!1,3986729778)})],1),a("div",{staticClass:"col-24 col-md-8"},[a("q-input",{attrs:{"stack-label":"",outlined:"",dense:"",mask:"time",rules:["time"],label:"Hora"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-time",{model:{value:t.form.time_of_action,callback:function(e){t.$set(t.form,"time_of_action",e)},expression:"form.time_of_action"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}],null,!1,1164364058),model:{value:t.form.time_of_action,callback:function(e){t.$set(t.form,"time_of_action",e)},expression:"form.time_of_action"}})],1)]:t._e(),"03"===t.form.phase_id?a("div",{staticClass:"col-24 col-md-12"},[a("x-select",{attrs:{label:"Motivo de rechazo",options:t.rejections,error:t.errors.rejection_id},model:{value:t.form.rejection_id,callback:function(e){t.$set(t.form,"rejection_id",e)},expression:"form.rejection_id"}})],1):t._e()],2):t._e()],1),a("q-tab-panel",{staticClass:"q-pt-none q-px-none q-pb-lg",attrs:{name:"contact"}},[a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-24 col-md-8"},[a("x-input",{attrs:{label:"DNI",error:t.errors.number},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1),a("div",{staticClass:"col-24 col-md-8"},[a("x-input",{attrs:{label:"Nombre",error:t.errors.name},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("div",{staticClass:"col-24 col-md-8"},[a("x-input",{attrs:{label:"Apellido",error:t.errors.lastname},model:{value:t.form.lastname,callback:function(e){t.$set(t.form,"lastname",e)},expression:"form.lastname"}})],1),a("div",{staticClass:"col-24 col-md-8"},[a("q-field",{attrs:{outlined:"",dense:"","stack-label":"",label:"F.Nacimiento"},scopedSlots:t._u([{key:"control",fn:function(){return[a("vue-date-picker",{attrs:{"min-date":"1960-01-01",format:"DD/MM/YYYY","no-header":""},model:{value:t.form.date_of_birth,callback:function(e){t.$set(t.form,"date_of_birth",e)},expression:"form.date_of_birth"}})]},proxy:!0}])})],1),a("div",{staticClass:"col-24 col-md-16"},[a("x-input",{attrs:{label:"Email 1",error:t.errors.email_1},model:{value:t.form.email_1,callback:function(e){t.$set(t.form,"email_1",e)},expression:"form.email_1"}})],1),a("div",{staticClass:"col-24 col-md-8"},[a("x-input",{attrs:{label:"Celular 1",error:t.errors.cellphone_1},model:{value:t.form.cellphone_1,callback:function(e){t.$set(t.form,"cellphone_1",e)},expression:"form.cellphone_1"}})],1),a("div",{staticClass:"col-24 col-md-8"},[a("x-input",{attrs:{label:"Celular 2",error:t.errors.cellphone_2},model:{value:t.form.cellphone_2,callback:function(e){t.$set(t.form,"cellphone_2",e)},expression:"form.cellphone_2"}})],1),a("div",{staticClass:"col-24 col-md-8"},[a("x-input",{attrs:{label:"Teléfono",error:t.errors.phone},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),a("div",{staticClass:"col-24"},[a("x-input",{attrs:{label:"Dirección",error:t.errors.address},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),a("div",{staticClass:"col-24"},[a("x-select-location",{model:{value:t.form.location_id,callback:function(e){t.$set(t.form,"location_id",e)},expression:"form.location_id"}})],1),a("div",{staticClass:"col-24 col-md-8"},[a("q-field",{attrs:{outlined:"",dense:"","stack-label":"",label:"Inicio de plan"},scopedSlots:t._u([{key:"control",fn:function(){return[a("vue-date-picker",{attrs:{format:"DD/MM/YYYY","no-header":""},model:{value:t.form.date_plan_start,callback:function(e){t.$set(t.form,"date_plan_start",e)},expression:"form.date_plan_start"}})]},proxy:!0}])})],1),a("div",{staticClass:"col-24 col-md-8"},[a("q-field",{attrs:{outlined:"",dense:"","stack-label":"",label:"Fin de plan"},scopedSlots:t._u([{key:"control",fn:function(){return[a("vue-date-picker",{attrs:{format:"DD/MM/YYYY","no-header":""},model:{value:t.form.date_plan_end,callback:function(e){t.$set(t.form,"date_plan_end",e)},expression:"form.date_plan_end"}})]},proxy:!0}])})],1),t.user&&"operator"!==t.user.role_id?a("div",{staticClass:"col-24 col-md-12"},[a("x-select",{attrs:{label:"Asesor",options:t.operators,error:t.errors.operator_id},model:{value:t.form.operator_id,callback:function(e){t.$set(t.form,"operator_id",e)},expression:"form.operator_id"}})],1):t._e(),a("div",{staticClass:"col-24 col-md-6"},[a("x-select",{attrs:{label:"Operador móvil",options:t.mobile_operators,error:t.errors.mobile_operator_id},model:{value:t.form.mobile_operator_id,callback:function(e){t.$set(t.form,"mobile_operator_id",e)},expression:"form.mobile_operator_id"}})],1),a("div",{staticClass:"col-24 col-md-6"},[a("x-select",{attrs:{label:"Tipo de plan",options:t.plan_types,error:t.errors.plan_type_id},model:{value:t.form.plan_type_id,callback:function(e){t.$set(t.form,"plan_type_id",e)},expression:"form.plan_type_id"}})],1),a("div",{staticClass:"col-24 col-md-6"},[a("x-select",{attrs:{label:"Tipo de venta",options:t.plan_sales,error:t.errors.plan_sale_id},model:{value:t.form.plan_sale_id,callback:function(e){t.$set(t.form,"plan_sale_id",e)},expression:"form.plan_sale_id"}})],1),a("div",{staticClass:"col-24 col-md-6"},[a("x-input",{attrs:{label:"Costo del plan",error:t.errors.plan_price},model:{value:t.form.plan_price,callback:function(e){t.$set(t.form,"plan_price",e)},expression:"form.plan_price"}})],1),a("div",{staticClass:"col-24 col-md-6"},[a("x-select",{attrs:{label:"Chip",options:t.chip_types,error:t.errors.chip_type_id},model:{value:t.form.chip_type_id,callback:function(e){t.$set(t.form,"chip_type_id",e)},expression:"form.chip_type_id"}})],1)])])],1),a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-24 text-right"},[a("q-btn",{attrs:{unelevated:"",color:"blue",loading:t.loadingSubmit},on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t.recordId?[t._v("GUARDAR")]:[t._v("CREAR")]],2)],1)])],1),a("x-loading",{attrs:{loading:t.loading}})],1)],1)}),[],!1,null,null,null),X=M.exports;b()(M,"components",{QDialog:c.a,QCard:d.a,QCardSection:u.a,QTabs:R.a,QTab:j.a,QIcon:p.a,QSeparator:m.a,QTabPanels:E.a,QTabPanel:A.a,QField:f.a,QInput:O.a,QPopupProxy:Y.a,QTime:P.a,QBtn:h.a}),b()(M,"directives",{ClosePopup:N.a});var z={name:"XBtnState",props:{count:{type:Number,default:""},text:{type:String,default:""},color:{type:String,default:""},isActive:{type:Boolean,default:!1}},methods:{}},L=(a("c098"),Object(r.a)(z,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"x-btn-state cursor-pointer",style:{"background-color":t.color},on:{click:function(e){return e.preventDefault(),t.$emit("click-emit")}}},[a("span",{staticStyle:{"font-size":"18px","margin-right":"8px"}},[t._v(t._s(t.count))]),t._v(" "+t._s(t.text)+"\n  "),t.isActive?a("q-icon",{staticClass:"q-ml-md",attrs:{name:"far fa-star",size:"xs"}}):t._e()],1)}),[],!1,null,"7f979391",null)),U=L.exports;b()(L,"components",{QIcon:p.a});var H=(a("ac1f"),{name:"XBtnIcon",props:{title:{type:String,default:""},icon:{type:String,default:"fal fa-users"},color:{type:String},isActive:{type:Boolean,default:!1}},methods:{getHex(t){let e=t.substring(1).split("");return 3===e.length&&(e=[e[0],e[0],e[1],e[1],e[2],e[2]]),e="0x"+e.join(""),"rgba("+[e>>16&255,e>>8&255,255&e].join(",")+", 0.15)"}}}),G=a("cb32"),J=Object(r.a)(H,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex items-center"},[a("q-avatar",{style:{color:t.color,"background-color":t.getHex(t.color),border:"2px solid "+t.color},attrs:{icon:t.icon}}),""!==t.title?a("div",{staticClass:"q-ml-md"},[a("div",{staticClass:"q-ma-none",staticStyle:{"font-size":"14px","font-weight":"500"},style:{color:t.isActive?"#000":"#ccc"}},[t._v(t._s(t.title))])]):t._e()],1)}),[],!1,null,null,null),V=J.exports;b()(J,"components",{QAvatar:G.a});var K=a("aa03"),W={name:"XDialogImport",props:["showDialog","resource","showDownloadFormat"],data:()=>({loading:!1,loadingSubmit:!1,title:"",errors:{},form:{}}),created(){this.initForm()},methods:{initForm(){this.title="",this.errors={},this.form={file:null}},async handleOpen(){this.initForm(),this.title="Importar Excel"},async onSubmit(){this.loading=!0,this.loadingSubmit=!0,this.errors={};let t=new FormData;t.append("file",this.form.file),await this.$axios.post(`/${this.resource}/import`,t,{headers:{"Content-Type":"multipart/form-data"}}).then((t=>{t.data.success?(this.closeDialog(),this.$q.notify({message:t.data.message,icon:"fas fa-check",color:"positive"}),this.$emit("success")):this.$q.notify({message:t.data.message,icon:"fas fa-times",color:"red"})})).catch((t=>{this.errors=t})),this.loadingSubmit=!1,this.loading=!1},clickDownloadFormat(){location.href=this.$axios.defaults.baseURL+"formats/contacts.xlsx"},closeDialog(){this.$emit("update:showDialog",!1)}}},Z=a("7d53"),tt=Object(r.a)(W,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},on:{"before-show":t.handleOpen},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("q-card",{staticStyle:{width:"480px","max-width":"90vw"}},[a("q-card-section",[a("div",{staticClass:"flex justify-between items-center"},[a("div",{staticClass:"text-h6"},[t._v(t._s(t.title))]),a("div",[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-times-circle",size:"md"},on:{click:function(e){return e.preventDefault(),t.closeDialog.apply(null,arguments)}}})],1)])]),a("q-card-section",[a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-24"},[a("q-file",{attrs:{outlined:"",dense:"",label:"Seleccionar archivo","no-error-icon":!0,error:t.errors.file},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"fas fa-paperclip"}})]},proxy:!0}]),model:{value:t.form.file,callback:function(e){t.$set(t.form,"file",e)},expression:"form.file"}})],1),t.showDownloadFormat?a("div",{staticClass:"col-24"},[a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clickDownloadFormat.apply(null,arguments)}}},[t._v("Descargar\n          formato")])]):t._e()])]),a("q-card-section",{staticClass:"x-dialog-card-actions",attrs:{align:"right"}},[a("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",label:"Cerrar",color:"grey"},on:{click:function(e){return e.preventDefault(),t.closeDialog.apply(null,arguments)}}}),a("q-btn",{attrs:{flat:"",label:"Importar","text-color":"primary",loading:t.loadingSubmit},on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}})],1),a("x-loading",{attrs:{loading:t.loading}})],1)],1)}),[],!1,null,null,null),et=tt.exports;b()(tt,"components",{QDialog:c.a,QCard:d.a,QCardSection:u.a,QIcon:p.a,QFile:Z.a,QBtn:h.a});var at={name:"XTableContact",components:{XDialogImport:et,XBtnState:U,XBtnIcon:V},mixins:[K.a],props:{title:{type:String,default:""},resourceInit:{default:null},resource:{type:String,required:!0},showHeader:{type:Boolean,default:!0},showFilter:{type:Boolean,default:!1},showButtonNew:{type:Boolean,default:!0},showButtonExport:{type:Boolean,default:!0},showButtonImport:{type:Boolean,default:!0},showButtonToAssign:{type:Boolean,default:!0},reloadRecords:{type:Boolean,default:!1},filenameExport:{type:String,default:"export.xlsx"}},data:()=>({filter:"",loading:!1,loadingExport:!1,loadingImport:!1,loadingToAssign:!1,showDialogImport:!1,columns:[],filters:[],records:[],pagination:{sortBy:null,descending:null,page:1,rowsPerPage:10,rowsNumber:10}}),watch:{reloadRecords:{handler(t){t&&(this.getRecords({pagination:this.pagination,filters:this.filters}),this.updateFilterState(),this.$emit("update:reloadRecords",!1))},deep:!0}},computed:s()(s()({},Object(q.d)("auth",["user"])),{},{showPhase(){let t=_.findIndex(this.filters,{field:"phase_id"});return"02"===this.filters[t].value}}),async mounted(){await this.getInitTable(),await this.getRecords({pagination:this.pagination,filters:this.filters}),await this.updateFilterState()},methods:{async getInitTable(){this.loading=!0;let t=this.resourceInit?this.resourceInit:this.resource;await this.$axios.get(`/${t}/init_data_table`).then((t=>{this.columns=t.data.columns,this.filters=t.data.filters})),this.loading=!1},async getRecords(t){const{page:e,rowsPerPage:a,sortBy:o,descending:s}=t.pagination,i=(t.filters,0===a?this.pagination.rowsNumber:a);this.loading=!0,this.records=[],await this.$axios.post(`/${this.resource}/records`,{isPagination:!0,page:e,limit:i,sortBy:o,descending:s,filters:this.filters}).then((t=>{this.records=t.data.data,this.pagination.page=t.data.meta.current_page,this.pagination.rowsPerPage=t.data.meta.per_page,this.pagination.rowsNumber=t.data.meta.total,this.pagination.sortBy=t.data.meta.sort_by,this.pagination.descending=t.data.meta.descending})),this.loading=!1},async changeFilter(){await this.getRecords({pagination:this.pagination,filters:this.filters}),await this.updateFilterState()},clickCreate(t){this.$emit("click-create",t)},async clickState(t){let e=_.findIndex(this.filters,{field:"state_id"});this.filters[e].value=t,await this.getRecords({pagination:this.pagination,filters:this.filters}),await this.updateFilterState()},async updateFilterState(){await this.$axios.post(`/${this.resource}/update_filter_state`,{filters:this.filters}).then((t=>{let e=_.findIndex(this.filters,{field:"state_id"});this.filters[e].options=t.data}))},async changePhase(t){let e=_.findIndex(this.filters,{field:"phase_id"});this.filters[e].value=t,await this.getRecords({pagination:this.pagination,filters:this.filters}),await this.updateFilterState()},async clickToAssign(){this.loadingToAssign=!0,await this.$axios.get(`/${this.resource}/to_assign`).then((t=>{t.data.success?(this.$q.notify({message:t.data.message,icon:"fas fa-check",color:"positive"}),this.$emit("successToAssign")):this.$q.notify({message:t.data.message,icon:"fas fa-times",color:"red"})})).then((()=>{this.loadingToAssign=!1}))}}},ot=a("eaac"),st=Object(r.a)(at,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"q-px-md",attrs:{flat:""}},[t.showHeader?a("q-card-section",{staticClass:"q-px-none q-pb-none"},[a("div",{staticClass:"flex justify-between items-center"},[a("div",{staticClass:"text-h6"},[t._v(t._s(t.title))]),a("div",{staticClass:"flex items-center"},[t._t("button-actions"),t.showButtonNew?a("q-btn",{attrs:{unelevated:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.clickCreate()}}},[t._v("Nuevo\n        ")]):t._e(),t.showButtonToAssign?a("q-btn",{staticClass:"q-ml-xs",attrs:{unelevated:"",color:"blue",loading:t.loadingToAssign},on:{click:function(e){return e.preventDefault(),t.clickToAssign.apply(null,arguments)}}},[t._v("Asignar\n        ")]):t._e(),t.showButtonImport?a("q-btn",{staticClass:"q-ml-xs",attrs:{unelevated:"",color:"blue",loading:t.loadingImport},on:{click:function(e){return e.preventDefault(),t.clickImport.apply(null,arguments)}}},[t._v("Importar\n        ")]):t._e(),t.showButtonExport?a("q-btn",{staticClass:"q-ml-xs",attrs:{unelevated:"",color:"blue",loading:t.loadingExport},on:{click:function(e){return e.preventDefault(),t.clickExport.apply(null,arguments)}}},[t._v("Exportar\n        ")]):t._e()],2)])]):t._e(),t.showFilter?a("q-card-section",{staticClass:"q-px-none q-pt-md q-pb-none"},[a("div",{staticClass:"row q-col-gutter-x-sm q-col-gutter-y-sm"},[t._l(t.filters,(function(e){return["operator_id"===e.field?a("div",{class:e.class},[a("q-select",{staticClass:"select-truncate",attrs:{label:e.label,options:e.options,"option-value":"id","option-label":"name","emit-value":"","map-options":"",outlined:"",dense:"","options-dense":""},on:{input:t.changeFilter},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"f.value"}})],1):t._e(),"operator_id"===e.field?a("div",{staticClass:"col-16"}):t._e(),"phase_id"===e.field?a("div",{class:e.class},[a("div",{staticClass:"row"},t._l(e.options,(function(o){return a("div",{key:o.id,staticClass:"col"},[a("div",{staticClass:"cursor-pointer",on:{click:function(e){return t.changePhase(o.value)}}},[a("x-btn-icon",{attrs:{title:o.title,icon:o.icon,"is-active":e.value===o.value,color:e.value===o.value?o.color:"#ccc"}})],1)])})),0)]):t._e(),"input"===e.field?a("div",{class:e.class},[a("q-input",{attrs:{label:e.label,outlined:"",dense:""},on:{input:t.changeFilter},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"fas fa-search",size:"xs"}})]},proxy:!0}],null,!0),model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"f.value"}})],1):t._e(),"state_id"===e.field&&t.showPhase?a("div",{class:e.class},[a("div",{staticClass:"row list-states"},t._l(e.options,(function(o){return a("div",{key:o.id,staticClass:"col"},[a("x-btn-state",{attrs:{"is-active":e.value===o.id,count:o.count,text:o.name,color:o.color},on:{"click-emit":function(e){return t.clickState(o.id)}}})],1)})),0)]):t._e()]}))],2)]):t._e(),a("q-card-section",{staticClass:"q-px-none q-pt-lg q-pb-none"},[a("q-table",{staticClass:"table-index",attrs:{data:t.records,columns:t.columns,loading:t.loading,pagination:t.pagination,flat:"","row-key":"id","binary-state-sort":""},on:{"update:pagination":function(e){t.pagination=e},request:t.getRecords},scopedSlots:t._u([{key:"body",fn:function(e){return[t._t("table-rows",null,{props:e})]}}],null,!0)})],1),a("x-dialog-import",{attrs:{"show-dialog":t.showDialogImport,resource:t.resource,"show-download-format":!0},on:{"update:showDialog":function(e){t.showDialogImport=e},"update:show-dialog":function(e){t.showDialogImport=e},success:t.changeFilter}})],1)}),[],!1,null,null,null),it=st.exports;b()(st,"components",{QCard:d.a,QCardSection:u.a,QBtn:h.a,QSelect:S.a,QInput:O.a,QIcon:p.a,QTable:ot.a});var lt={name:"ContactIndex",components:{XTableContact:it,ContactForm:X,XCardTable:i.a,XDialogDelete:w.a},data:()=>({showDialog:!1,showDialogDelete:!1,reloadRecords:!1,resource:"api/contact",title:"",recordId:null,record:null}),mounted(){this.title="Contactos"},computed:s()({},Object(q.d)("auth",["user"])),methods:{clickCreate(t=null){this.recordId=t,this.showDialog=!0},clickDelete(t){this.showDialogDelete=!0,this.record=t}}},nt=a("bd08"),rt=a("db86"),ct=Object(r.a)(lt,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-index"},[a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-24"},[a("x-table-contact",{attrs:{title:t.title,resource:t.resource,"show-filter":!0,"reload-records":t.reloadRecords,"show-button-new":t.user&&"operator"!==t.user.role_id,"show-button-export":t.user&&"operator"!==t.user.role_id,"show-button-import":t.user&&"operator"!==t.user.role_id,"show-button-to-assign":t.user&&"operator"!==t.user.role_id},on:{"update:reloadRecords":function(e){t.reloadRecords=e},"update:reload-records":function(e){t.reloadRecords=e},"success-to-assign":function(e){t.reloadRecords=!0},"click-create":function(e){return t.clickCreate()}},scopedSlots:t._u([{key:"table-rows",fn:function(e){var o=e.props;return[a("q-tr",{attrs:{props:o}},[t._l(o.cols,(function(e){return[a("q-td",{key:e.name,attrs:{props:o}},["actions"===e.name?[a("q-btn",{attrs:{size:"sm",flat:"",round:"",icon:"fas fa-eye"},on:{click:function(e){return e.preventDefault(),t.clickCreate(o.row.id)}}})]:"action_name"===e.name?[a("q-icon",{staticClass:"q-mr-xs",attrs:{name:o.row.action_icon,size:"md"}}),t._v("\n                  "+t._s(o.row.action_name)+"\n                ")]:[t._v("\n                  "+t._s(o.row[e.name])+"\n                ")]],2)]}))],2)]}}])})],1)]),a("contact-form",{attrs:{"show-dialog":t.showDialog,"record-id":t.recordId},on:{"update:showDialog":function(e){t.showDialog=e},"update:show-dialog":function(e){t.showDialog=e},success:function(e){t.reloadRecords=!0}}}),a("x-dialog-delete",{attrs:{"show-dialog":t.showDialogDelete,resource:t.resource,record:t.record},on:{"update:showDialog":function(e){t.showDialogDelete=e},"update:show-dialog":function(e){t.showDialogDelete=e},success:function(e){t.reloadRecords=!0}}})],1)}),[],!1,null,null,null);e.default=ct.exports,b()(ct,"components",{QTr:nt.a,QTd:rt.a,QBtn:h.a,QIcon:p.a})},"93f5":function(t,e,a){"use strict";var o=(a("e01a"),{name:"XDialogDelete",props:{showDialog:{type:Boolean,default:!1},resource:{type:String,required:!0},record:{default:null},text:{default:null}},data:()=>({loading:!1,description:"",description_additional:"",resourceDelete:null}),methods:{handleOpen(){this.loading=!1,this.description_additional="",_.isNull(this.record)?this.resourceDelete=`/${this.resource}`:(this.resourceDelete=`/${this.resource}/${this.record.id}`,this.description_additional=this.record.name?this.record.name:""),_.isNull(this.text)||(this.description_additional=this.text),this.description="¿Seguro que desea eliminar el registro? "+this.description_additional},async onSubmit(){this.loading=!0,await this.$axios.delete(this.resourceDelete).then((t=>{t.data.success?(this.closeDialog(),this.$q.notify({message:t.data.message,icon:"fas fa-check",color:"positive"}),this.$emit("success")):this.$q.notify({message:t.data.message,icon:"fas fa-times",color:"red"})})).catch((()=>{this.loading=!1}))},closeDialog(){this.$emit("update:showDialog",!1)}}}),s=a("2877"),i=a("24e8"),l=a("f09f"),n=a("a370"),r=a("0016"),c=a("9c40"),d=a("eebe"),u=a.n(d),p=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},on:{"before-show":t.handleOpen},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("q-card",{staticStyle:{width:"480px","max-width":"90vw"}},[a("q-card-section",[a("div",{staticClass:"flex justify-end items-center"},[a("div",[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-times-circle",size:"md"},on:{click:function(e){return e.preventDefault(),t.closeDialog.apply(null,arguments)}}})],1)])]),a("q-card-section",[a("div",{staticClass:"row q-col-gutter-x-md"},[a("div",{staticClass:"col-24 text-center text-h5"},[t._v(t._s(t.description))])]),a("div",{staticClass:"row q-col-gutter-x-md",staticStyle:{"margin-top":"48px"}},[a("div",{staticClass:"col-12"},[a("q-btn",{staticClass:"full-width",attrs:{unelevated:"",outline:""},on:{click:function(e){return e.preventDefault(),t.closeDialog.apply(null,arguments)}}},[t._v("CANCELAR")])],1),a("div",{staticClass:"col-12"},[a("q-btn",{staticClass:"full-width",attrs:{unelevated:"",color:"red"},on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._v("ELIMINAR")])],1)])]),a("x-loading",{attrs:{loading:t.loading}})],1)],1)}),[],!1,null,null,null);e.a=p.exports,u()(p,"components",{QDialog:i.a,QCard:l.a,QCardSection:n.a,QIcon:r.a,QBtn:c.a})},aa03:function(t,e,a){"use strict";a("ddb0"),a("2b3d"),e.a={methods:{async clickExport(){this.loading=!0,this.loadingExport=!0,this.errors={},await this.$axios({url:`/${this.resource}/export`,method:"POST",responseType:"blob",data:{sortBy:this.pagination.sortBy,descending:this.pagination.descending,filters:this.filters}}).then((t=>{const e=window.URL.createObjectURL(new Blob([t.data])),a=document.createElement("a");a.href=e,a.setAttribute("download",this.filenameExport),document.body.appendChild(a),a.click()})).catch((t=>{this.errors=t})),this.loadingExport=!1,this.loading=!1},clickImport(){this.showDialogImport=!0}}}},c098:function(t,e,a){"use strict";a("e14b")},e14b:function(t,e,a){},fcc9:function(t,e,a){},feb1:function(t,e,a){"use strict";a("fcc9")}}]);