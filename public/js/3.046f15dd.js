(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2d18":function(t,e,a){"use strict";var s={name:"XCardTable",props:{title:{type:String,default:"Sin título"}},methods:{}},i=(a("feb1"),a("2877")),o=a("f09f"),l=a("a370"),r=a("eebe"),n=a.n(r),c=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{attrs:{flat:""}},[a("q-card-section",{staticClass:"x-card-table--header"},[t._t("header")],2),a("q-card-section",{staticClass:"q-pt-none q-pl-none q-pr-none"},[t._t("table")],2)],1)}),[],!1,null,"efc2fe2a",null);e.a=c.exports,n()(c,"components",{QCard:o.a,QCardSection:l.a})},"93f5":function(t,e,a){"use strict";var s=(a("e01a"),{name:"XDialogDelete",props:{showDialog:{type:Boolean,default:!1},resource:{type:String,required:!0},record:{default:null},text:{default:null}},data:()=>({loading:!1,description:"",description_additional:"",resourceDelete:null}),methods:{handleOpen(){this.loading=!1,this.description_additional="",_.isNull(this.record)?this.resourceDelete=`/${this.resource}`:(this.resourceDelete=`/${this.resource}/${this.record.id}`,this.description_additional=this.record.name?this.record.name:""),_.isNull(this.text)||(this.description_additional=this.text),this.description="¿Seguro que desea eliminar el registro? "+this.description_additional},async onSubmit(){this.loading=!0,await this.$axios.delete(this.resourceDelete).then((t=>{t.data.success?(this.closeDialog(),this.$q.notify({message:t.data.message,icon:"fas fa-check",color:"positive"}),this.$emit("success")):this.$q.notify({message:t.data.message,icon:"fas fa-times",color:"red"})})).catch((()=>{this.loading=!1}))},closeDialog(){this.$emit("update:showDialog",!1)}}}),i=a("2877"),o=a("24e8"),l=a("f09f"),r=a("a370"),n=a("0016"),c=a("9c40"),d=a("eebe"),u=a.n(d),h=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},on:{"before-show":t.handleOpen},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[a("q-card",{staticStyle:{width:"480px","max-width":"90vw"}},[a("q-card-section",[a("div",{staticClass:"flex justify-end items-center"},[a("div",[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-times-circle",size:"md"},on:{click:function(e){return e.preventDefault(),t.closeDialog.apply(null,arguments)}}})],1)])]),a("q-card-section",[a("div",{staticClass:"row q-col-gutter-x-md"},[a("div",{staticClass:"col-24 text-center text-h5"},[t._v(t._s(t.description))])]),a("div",{staticClass:"row q-col-gutter-x-md",staticStyle:{"margin-top":"48px"}},[a("div",{staticClass:"col-12"},[a("q-btn",{staticClass:"full-width",attrs:{unelevated:"",outline:""},on:{click:function(e){return e.preventDefault(),t.closeDialog.apply(null,arguments)}}},[t._v("CANCELAR")])],1),a("div",{staticClass:"col-12"},[a("q-btn",{staticClass:"full-width",attrs:{unelevated:"",color:"red"},on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._v("ELIMINAR")])],1)])]),a("x-loading",{attrs:{loading:t.loading}})],1)],1)}),[],!1,null,null,null);e.a=h.exports,u()(h,"components",{QDialog:o.a,QCard:l.a,QCardSection:r.a,QIcon:n.a,QBtn:c.a})},c1a9:function(t,e,a){"use strict";a.r(e);var s=a("2d18"),i={name:"UserForm",props:["showDialog","recordId"],data:()=>({loading:!1,loadingSubmit:!1,resource:"api/user",title:"",errors:{},form:{},roles:[]}),created(){this.initForm(),this.initTables()},methods:{initForm(){this.title="",this.errors={},this.form={id:null,number:"",name:"",lastname:"",role_id:"user",is_active:!0}},initTables(){this.$axios.get(`/${this.resource}/tables`).then((t=>{this.roles=t.data.roles}))},async handleOpen(){this.loading=!0,this.initForm(),this.recordId?(await this.$axios.get(`/${this.resource}/record/${this.recordId}`).then((t=>{this.form=t.data.data})),this.title="Editar usuario"):this.title="Nuevo usuario",this.loading=!1},async onSubmit(){this.loading=!0,this.loadingSubmit=!0,this.errors={},await this.$axios.post(`/${this.resource}`,this.form).then((t=>{t.data.success?(this.$q.notify({message:t.data.message,icon:"fas fa-check",color:"positive"}),this.$emit("success",t.data.id),this.closeDialog()):this.$q.notify({message:t.data.message,icon:"fas fa-times",color:"red"})})).catch((t=>{this.errors=t})),this.loadingSubmit=!1,this.loading=!1},closeDialog(){this.$emit("update:showDialog",!1)}}},o=a("2877"),l=a("24e8"),r=a("f09f"),n=a("a370"),c=a("0016"),d=a("eb85"),u=a("9c40"),h=a("eebe"),p=a.n(h),f=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{value:t.showDialog,"no-esc-dismiss":!1,"no-backdrop-dismiss":!0,"transition-show":"scale","transition-hide":"scale"},on:{"before-show":t.handleOpen,hide:t.closeDialog}},[a("q-card",{staticClass:"x-dialog",staticStyle:{width:"720px"}},[a("q-card-section",[a("div",{staticClass:"flex justify-between items-center"},[a("div",{staticClass:"x-dialog--title"},[t._v(t._s(t.title))]),a("div",[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-times-circle",size:"md"},on:{click:function(e){return e.preventDefault(),t.closeDialog.apply(null,arguments)}}})],1)])]),a("q-separator"),a("q-card-section",[a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-24 col-md-8"},[a("x-input",{attrs:{label:"DNI",error:t.errors.number},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1),a("div",{staticClass:"col-24 col-md-8"},[a("x-input",{attrs:{label:"Nombre",error:t.errors.name},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("div",{staticClass:"col-24 col-md-8"},[a("x-input",{attrs:{label:"Apellido",error:t.errors.lastname},model:{value:t.form.lastname,callback:function(e){t.$set(t.form,"lastname",e)},expression:"form.lastname"}})],1),a("div",{staticClass:"col-24 col-md-16"},[a("x-input",{attrs:{label:"Email",error:t.errors.email},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("div",{staticClass:"col-24 col-md-8"},[a("x-select",{attrs:{label:"Perfil",options:t.roles,error:t.errors.role_id},model:{value:t.form.role_id,callback:function(e){t.$set(t.form,"role_id",e)},expression:"form.role_id"}})],1)]),a("div",{staticClass:"row q-col-gutter-md",staticStyle:{"margin-top":"18px"}},[a("div",{staticClass:"col-24 text-right"},[a("q-btn",{staticClass:"q-mr-md",attrs:{outline:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.closeDialog.apply(null,arguments)}}},[t._v("CANCELAR")]),a("q-btn",{attrs:{unelevated:"",color:"blue",loading:t.loadingSubmit},on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t.recordId?[t._v("GUARDAR CAMBIOS")]:[t._v("CREAR")]],2)],1)])]),a("x-loading",{attrs:{loading:t.loading}})],1)],1)}),[],!1,null,null,null),m=f.exports;p()(f,"components",{QDialog:l.a,QCard:r.a,QCardSection:n.a,QIcon:c.a,QSeparator:d.a,QBtn:u.a});var g={name:"UserLock",props:["showDialog","record"],data:()=>({loading:!1,loadingSubmit:!1,resource:"api/user",title:"",errors:{},form:{},lock_message:"",lock_email:""}),created(){},methods:{handleOpen(){this.lock_message=this.record.is_active?"bloquear":"desbloquear",this.lock_email=this.record.email},async onSubmit(){this.loading=!0,await this.$axios.get(`/${this.resource}/lock/${this.record.id}`).then((t=>{t.data.success?(this.closeDialog(),this.$q.notify({message:t.data.message,icon:"fas fa-check",color:"positive"}),this.$emit("success")):this.$q.notify({message:t.data.message,icon:"fas fa-times",color:"red"})})).catch((()=>{this.loading=!1})),this.loading=!1},closeDialog(){this.$emit("update:showDialog",!1)}}},v=Object(o.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{value:t.showDialog,"no-esc-dismiss":!1,"no-backdrop-dismiss":!0,"transition-show":"scale","transition-hide":"scale"},on:{"before-show":t.handleOpen,hide:t.closeDialog}},[a("q-card",{staticClass:"x-dialog",staticStyle:{width:"480px"}},[a("q-card-section",[a("div",{staticClass:"flex justify-end items-center"},[a("div",[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"far fa-times-circle",size:"md"},on:{click:function(e){return e.preventDefault(),t.closeDialog.apply(null,arguments)}}})],1)])]),a("q-card-section",[a("div",{staticClass:"row q-col-gutter-x-md"},[a("div",{staticClass:"col-24 text-center text-h5"},[t._v("Estas seguro de "),a("b",[t._v(t._s(t.lock_message))]),t._v(" al usuario"),a("br"),t._v(t._s(t.lock_email))])]),a("div",{staticClass:"row q-col-gutter-x-md",staticStyle:{"margin-top":"48px"}},[a("div",{staticClass:"col-12"},[a("q-btn",{staticClass:"full-width",attrs:{unelevated:"",outline:""},on:{click:function(e){return e.preventDefault(),t.closeDialog.apply(null,arguments)}}},[t._v("CANCELAR")])],1),a("div",{staticClass:"col-12"},[a("q-btn",{staticClass:"full-width",attrs:{unelevated:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._v("CONFIRMAR")])],1)])]),a("x-loading",{attrs:{loading:t.loading}})],1)],1)}),[],!1,null,null,null),b=v.exports;p()(v,"components",{QDialog:l.a,QCard:r.a,QCardSection:n.a,QIcon:c.a,QBtn:u.a});var w=a("c759"),D=a("93f5"),_={name:"UserIndex",components:{UserLock:b,UserForm:m,XCardTable:s.a,XTableServer:w.a,XDialogDelete:D.a},data:()=>({showDialog:!1,showDialogLock:!1,showDialogDelete:!1,reloadRecords:!1,resource:"api/user",title:"",recordId:null,record:null}),mounted(){this.title="Usuarios"},methods:{clickCreate(t=null){this.recordId=t,this.showDialog=!0},clickLock(t){this.record=t,this.showDialogLock=!0},clickDelete(t){this.showDialogDelete=!0,this.record=t}}},q=a("bd08"),C=a("db86"),x=Object(o.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-index"},[a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-24"},[a("x-table-server",{attrs:{title:t.title,resource:t.resource,"show-filter":!0,"reload-records":t.reloadRecords},on:{"update:reloadRecords":function(e){t.reloadRecords=e},"update:reload-records":function(e){t.reloadRecords=e},"click-create":function(e){return t.clickCreate()}},scopedSlots:t._u([{key:"table-rows",fn:function(e){var s=e.props;return[a("q-tr",{attrs:{props:s}},[t._l(s.cols,(function(e){return[a("q-td",{key:e.name,attrs:{props:s}},["actions"===e.name?[a("q-btn",{attrs:{size:"sm",flat:"",round:"",color:s.row.is_active?"green":"red",icon:s.row.is_active?"fas fa-unlock":"fas fa-lock"},on:{click:function(e){return e.preventDefault(),t.clickLock(s.row)}}}),a("q-btn",{attrs:{size:"sm",flat:"",round:"",icon:"fas fa-eye"},on:{click:function(e){return e.preventDefault(),t.clickCreate(s.row.id)}}}),a("q-btn",{attrs:{size:"sm",flat:"",round:"",color:"negative",icon:"fas fa-trash"},on:{click:function(e){return e.preventDefault(),t.clickDelete(s.row)}}})]:[t._v("\n                  "+t._s(s.row[e.name])+"\n                ")]],2)]}))],2)]}}])})],1)]),a("user-form",{attrs:{"show-dialog":t.showDialog,"record-id":t.recordId},on:{"update:showDialog":function(e){t.showDialog=e},"update:show-dialog":function(e){t.showDialog=e},success:function(e){t.reloadRecords=!0}}}),a("user-lock",{attrs:{"show-dialog":t.showDialogLock,record:t.record},on:{"update:showDialog":function(e){t.showDialogLock=e},"update:show-dialog":function(e){t.showDialogLock=e},success:function(e){t.reloadRecords=!0}}}),a("x-dialog-delete",{attrs:{"show-dialog":t.showDialogDelete,resource:t.resource,record:t.record},on:{"update:showDialog":function(e){t.showDialogDelete=e},"update:show-dialog":function(e){t.showDialogDelete=e},success:function(e){t.reloadRecords=!0}}})],1)}),[],!1,null,null,null);e.default=x.exports,p()(x,"components",{QTr:q.a,QTd:C.a,QBtn:u.a})},c759:function(t,e,a){"use strict";var s={name:"XTableServer",props:{title:{type:String,default:""},resourceInit:{default:null},resource:{type:String,required:!0},showHeader:{type:Boolean,default:!0},showFilter:{type:Boolean,default:!1},showButtonNew:{type:Boolean,default:!0},reloadRecords:{type:Boolean,default:!1}},data:()=>({filter:"",loading:!1,columns:[],filters:[],records:[],pagination:{sortBy:null,descending:null,page:1,rowsPerPage:10,rowsNumber:10}}),watch:{reloadRecords:{handler(t){t&&(this.getRecords({pagination:this.pagination,filters:this.filters}),this.$emit("update:reloadRecords",!1))},deep:!0}},async mounted(){await this.getInitTable(),await this.getRecords({pagination:this.pagination,filters:this.filters})},methods:{async getInitTable(){this.loading=!0;let t=this.resourceInit?this.resourceInit:this.resource;await this.$axios.get(`/${t}/init_data_table`).then((t=>{this.columns=t.data.columns,this.filters=t.data.filters})),this.loading=!1},async getRecords(t){const{page:e,rowsPerPage:a,sortBy:s,descending:i}=t.pagination,o=(t.filters,0===a?this.pagination.rowsNumber:a);this.loading=!0,this.records=[],await this.$axios.post(`/${this.resource}/records`,{isPagination:!0,page:e,limit:o,sortBy:s,descending:i,filters:this.filters}).then((t=>{this.records=t.data.data,this.pagination.page=t.data.meta.current_page,this.pagination.rowsPerPage=t.data.meta.per_page,this.pagination.rowsNumber=t.data.meta.total,this.pagination.sortBy=t.data.meta.sort_by,this.pagination.descending=t.data.meta.descending})),this.loading=!1},async changeFilter(){await this.getRecords({pagination:this.pagination,filters:this.filters})},clickCreate(t){this.$emit("click-create",t)}}},i=a("2877"),o=a("f09f"),l=a("a370"),r=a("9c40"),n=a("ddd8"),c=a("27f9"),d=a("0016"),u=a("eaac"),h=a("eebe"),p=a.n(h),f=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"q-px-md",attrs:{flat:""}},[t.showHeader?a("q-card-section",{staticClass:"q-px-none q-pb-none"},[a("div",{staticClass:"flex justify-between items-center"},[a("div",{staticClass:"text-h6"},[t._v(t._s(t.records.length)+" "+t._s(t.title))]),a("div",{staticClass:"flex items-center"},[t._t("button-actions"),t.showButtonNew?a("q-btn",{attrs:{unelevated:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.clickCreate()}}},[t._v("Nuevo")]):t._e()],2)])]):t._e(),t.showFilter?a("q-card-section",{staticClass:"q-px-none q-pt-md q-pb-none"},[a("div",{staticClass:"row q-col-gutter-x-sm q-col-gutter-y-sm"},[t._l(t.filters,(function(e){return["select"===e.type?a("div",{class:e.class},[a("q-select",{staticClass:"select-truncate",attrs:{label:e.label,options:e.options,"option-value":"id","option-label":"name","emit-value":"","map-options":"",outlined:"",dense:"","options-dense":""},on:{input:t.changeFilter},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"f.value"}})],1):t._e(),"input"===e.type?a("div",{class:e.class},[a("q-input",{attrs:{label:e.label,outlined:"",dense:""},on:{input:t.changeFilter},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"fas fa-search",size:"xs"}})]},proxy:!0}],null,!0),model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"f.value"}})],1):t._e()]}))],2)]):t._e(),a("q-card-section",{staticClass:"q-px-none q-pt-lg q-pb-none"},[a("q-table",{staticClass:"table-index",attrs:{data:t.records,columns:t.columns,loading:t.loading,pagination:t.pagination,flat:"","row-key":"id","binary-state-sort":""},on:{"update:pagination":function(e){t.pagination=e},request:t.getRecords},scopedSlots:t._u([{key:"body",fn:function(e){return[t._t("table-rows",null,{props:e})]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.a=f.exports,p()(f,"components",{QCard:o.a,QCardSection:l.a,QBtn:r.a,QSelect:n.a,QInput:c.a,QIcon:d.a,QTable:u.a})},fcc9:function(t,e,a){},feb1:function(t,e,a){"use strict";a("fcc9")}}]);
