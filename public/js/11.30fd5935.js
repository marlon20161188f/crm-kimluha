(window.webpackJsonp=window.webpackJsonp||[]).push([[11]
    ,{b2c5:function(t,s,a){"use strict";a.r(s);var e=a("ded3"),i=a.n(e),o=(a("ac1f"),a("5319"),a("2f62")),r=(a("bc3a"),a("18d6"),
    {name:"Login",data:()=>({loading:!1,loadingSubmit:!1,errors:{},
        form:{},subdomain:null}),created(){this.initForm()},
        computed:{},methods:i()(i()(i()({},Object(o.c)
        ("auth",["SET_TOKEN","SET_LOGGED"])),Object(o.b)
        ({me:"auth/me"})),{},{initForm(){this.form=
            {email:"",password:"",device_name:"laravel-quasar-intipos"}},
            async submit(){this.loadingSubmit=!0,await this.$axios.post("/api/auth/login",this.form).then((t=>{console.log(t),
                this.SET_TOKEN(t.data),this.me(),this.$router.replace(
                    {name:"dashboard"})})).catch((t=>{this.SET_LOGGED(!1),this.SET_TOKEN(null)})),this.
                    loadingSubmit=!1}})}),l=a("2877"),n=a("9c40"),c=a("eebe"),m=a.n(c),u=Object(l.a)
                    (r,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-content"},[a("div",
                    {staticClass:"form-items"},[a("form",{on:{submit:function(s){return s.preventDefault(),
                        t.submit.apply(null,arguments)}}},[a("div",{staticClass:"row q-col-gutter-md"},[t._m(0),a("div",{staticClass:"col-24 text-center"},
                        [a("div",{staticClass:"login-title"},[t._v("Iniciar sesión")])]),a("div",{staticClass:"col-24"}
                    ,[a("x-input",{attrs:{label:"correo electrónico",error:t.errors.email},
                    model:{value:t.form.email,callback:function(s){t.$set(t.form,"email",s)}
                    ,expression:"form.email"}})],1),a("div",{staticClass:"col-24"},[a("x-input",
                    {attrs:{label:"contraseña",error:t.errors.password},model:{value:t.form.password,
                        callback:function(s){t.$set(t.form,"password",s)},expression:"form.password"}})],1),
                        a("div",{staticClass:"col-24 text-center"},[a("q-btn",
                        {staticClass:"full-width login-submit",attrs:{unelevated:"",style:"background:#CD0030; color:#fff;",color:"",size:"lg",
                        type:"submit",loading:t.loadingSubmit}},[t._v("Acceder\n          ")])],1)])])])])}),
                        [function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-24"},
                        [a("img",{attrs:{src:"../images/kimluha.png",style:"width:373px; position:relative; left:-12px;"}})],1)}],!1,null,null,null);s.default=u.exports,m()
                        (u,"components",{QBtn:n.a})}}]);