(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0d3e":function(t,s,a){"use strict";a.r(s);var e={name:"NotificationForm",data:()=>({load:!1,loading:!1,loadingSubmit:!1,resource:"api/notification",title:"",errors:{},form:{},states:[]}),created(){this.initForm(),this.initTables()},mounted(){this.load=!0},methods:{initForm(){this.errors={},this.form={id:null,state_id:null,message:null}},initTables(){this.$axios.get(`/${this.resource}/tables`).then((t=>{this.states=t.data.states}))},async sendMail(){this.loadingSubmit=!0,await this.$axios.post(`/${this.resource}/send_mail`,this.form).then((t=>{t.data.success?this.$q.notify({message:t.data.message,icon:"fas fa-check",color:"positive"}):this.$q.notify({message:t.data.message,icon:"fas fa-times",color:"red"})})),this.loadingSubmit=!1}}},i=a("2877"),o=a("f09f"),l=a("a370"),r=a("9c40"),n=a("eebe"),c=a.n(n),d=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.load?a("div",{staticClass:"content-index"},[a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-24"},[a("q-card",[a("q-card-section",{staticClass:"q-pa-lg"},[a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-24 col-md-6"},[a("x-select",{attrs:{label:"Estado",options:t.states,error:t.errors.state_id},model:{value:t.form.state_id,callback:function(s){t.$set(t.form,"state_id",s)},expression:"form.state_id"}})],1),a("div",{staticClass:"col-24 col-md-12"}),a("div",{staticClass:"col-24 col-md-12"},[a("x-input",{attrs:{label:"Mensaje email (hasta 150 caracteres)",autogrow:"",error:t.errors.message},model:{value:t.form.message,callback:function(s){t.$set(t.form,"message",s)},expression:"form.message"}})],1)]),a("div",{staticClass:"row q-col-gutter-md",staticStyle:{"margin-top":"18px"}},[a("div",{staticClass:"col-24 text-right"},[a("q-btn",{attrs:{unelevated:"",color:"blue",loading:t.loadingSubmit},on:{click:function(s){return s.preventDefault(),t.sendMail.apply(null,arguments)}}},[t._v("ENVIAR")])],1)])])],1)],1)])]):t._e()}),[],!1,null,null,null);s.default=d.exports,c()(d,"components",{QCard:o.a,QCardSection:l.a,QBtn:r.a})}}]);
