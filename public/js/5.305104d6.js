(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2d18":function(t,e,a){"use strict";var n={name:"XCardTable",props:{title:{type:String,default:"Sin título"}},methods:{}},s=(a("feb1"),a("2877")),i=a("f09f"),o=a("a370"),r=a("eebe"),l=a.n(r),c=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{attrs:{flat:""}},[a("q-card-section",{staticClass:"x-card-table--header"},[t._t("header")],2),a("q-card-section",{staticClass:"q-pt-none q-pl-none q-pr-none"},[t._t("table")],2)],1)}),[],!1,null,"efc2fe2a",null);e.a=c.exports,l()(c,"components",{QCard:i.a,QCardSection:o.a})},abe7:function(t,e,a){"use strict";a.r(e);var n=a("2d18"),s=a("c759"),i={name:"TrackingReportIndex",components:{XCardTable:n.a,XTableServer:s.a},data:()=>({reloadRecords:!1,resource:"api/contact/tracking_report",title:"",recordId:null,record:null}),mounted(){this.title="Acciones por asesor"},methods:{}},o=a("2877"),r=a("bd08"),l=a("db86"),c=a("0016"),d=a("eebe"),u=a.n(d),p=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-index"},[a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-24"},[a("x-table-server",{attrs:{title:t.title,resource:t.resource,"show-filter":!0,"show-button-new":!1,"reload-records":t.reloadRecords},on:{"update:reloadRecords":function(e){t.reloadRecords=e},"update:reload-records":function(e){t.reloadRecords=e}},scopedSlots:t._u([{key:"table-rows",fn:function(e){var n=e.props;return[a("q-tr",{attrs:{props:n}},[t._l(n.cols,(function(e){return[a("q-td",{key:e.name,attrs:{props:n}},["action_name"===e.name?[a("q-icon",{staticClass:"q-mr-xs",attrs:{name:n.row.action_icon,size:"md"}}),t._v("\n                  "+t._s(n.row.action_name)+"\n                ")]:[t._v("\n                  "+t._s(n.row[e.name])+"\n                ")]],2)]}))],2)]}}])})],1)])])}),[],!1,null,null,null);e.default=p.exports,u()(p,"components",{QTr:r.a,QTd:l.a,QIcon:c.a})},c759:function(t,e,a){"use strict";var n={name:"XTableServer",props:{title:{type:String,default:""},resourceInit:{default:null},resource:{type:String,required:!0},showHeader:{type:Boolean,default:!0},showFilter:{type:Boolean,default:!1},showButtonNew:{type:Boolean,default:!0},reloadRecords:{type:Boolean,default:!1}},data:()=>({filter:"",loading:!1,columns:[],filters:[],records:[],pagination:{sortBy:null,descending:null,page:1,rowsPerPage:10,rowsNumber:10}}),watch:{reloadRecords:{handler(t){t&&(this.getRecords({pagination:this.pagination,filters:this.filters}),this.$emit("update:reloadRecords",!1))},deep:!0}},async mounted(){await this.getInitTable(),await this.getRecords({pagination:this.pagination,filters:this.filters})},methods:{async getInitTable(){this.loading=!0;let t=this.resourceInit?this.resourceInit:this.resource;await this.$axios.get(`/${t}/init_data_table`).then((t=>{this.columns=t.data.columns,this.filters=t.data.filters})),this.loading=!1},async getRecords(t){const{page:e,rowsPerPage:a,sortBy:n,descending:s}=t.pagination,i=(t.filters,0===a?this.pagination.rowsNumber:a);this.loading=!0,this.records=[],await this.$axios.post(`/${this.resource}/records`,{isPagination:!0,page:e,limit:i,sortBy:n,descending:s,filters:this.filters}).then((t=>{this.records=t.data.data,this.pagination.page=t.data.meta.current_page,this.pagination.rowsPerPage=t.data.meta.per_page,this.pagination.rowsNumber=t.data.meta.total,this.pagination.sortBy=t.data.meta.sort_by,this.pagination.descending=t.data.meta.descending})),this.loading=!1},async changeFilter(){await this.getRecords({pagination:this.pagination,filters:this.filters})},clickCreate(t){this.$emit("click-create",t)}}},s=a("2877"),i=a("f09f"),o=a("a370"),r=a("9c40"),l=a("ddd8"),c=a("27f9"),d=a("0016"),u=a("eaac"),p=a("eebe"),f=a.n(p),g=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"q-px-md",attrs:{flat:""}},[t.showHeader?a("q-card-section",{staticClass:"q-px-none q-pb-none"},[a("div",{staticClass:"flex justify-between items-center"},[a("div",{staticClass:"text-h6"},[t._v(t._s(t.records.length)+" "+t._s(t.title))]),a("div",{staticClass:"flex items-center"},[t._t("button-actions"),t.showButtonNew?a("q-btn",{attrs:{unelevated:"",color:"blue"},on:{click:function(e){return e.preventDefault(),t.clickCreate()}}},[t._v("Nuevo")]):t._e()],2)])]):t._e(),t.showFilter?a("q-card-section",{staticClass:"q-px-none q-pt-md q-pb-none"},[a("div",{staticClass:"row q-col-gutter-x-sm q-col-gutter-y-sm"},[t._l(t.filters,(function(e){return["select"===e.type?a("div",{class:e.class},[a("q-select",{staticClass:"select-truncate",attrs:{label:e.label,options:e.options,"option-value":"id","option-label":"name","emit-value":"","map-options":"",outlined:"",dense:"","options-dense":""},on:{input:t.changeFilter},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"f.value"}})],1):t._e(),"input"===e.type?a("div",{class:e.class},[a("q-input",{attrs:{label:e.label,outlined:"",dense:""},on:{input:t.changeFilter},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"fas fa-search",size:"xs"}})]},proxy:!0}],null,!0),model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"f.value"}})],1):t._e()]}))],2)]):t._e(),a("q-card-section",{staticClass:"q-px-none q-pt-lg q-pb-none"},[a("q-table",{staticClass:"table-index",attrs:{data:t.records,columns:t.columns,loading:t.loading,pagination:t.pagination,flat:"","row-key":"id","binary-state-sort":""},on:{"update:pagination":function(e){t.pagination=e},request:t.getRecords},scopedSlots:t._u([{key:"body",fn:function(e){return[t._t("table-rows",null,{props:e})]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.a=g.exports,f()(g,"components",{QCard:i.a,QCardSection:o.a,QBtn:r.a,QSelect:l.a,QInput:c.a,QIcon:d.a,QTable:u.a})},fcc9:function(t,e,a){},feb1:function(t,e,a){"use strict";a("fcc9")}}]);
