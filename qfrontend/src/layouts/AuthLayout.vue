<template>
  <q-layout class="login-layout">
<!--    <div class="app-logo">-->
<!--      <div class="logo">-->
<!--&lt;!&ndash;        <img class="logo-size" src="tenant/images/logo_intipos.png">&ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->
    <div class="login-row">
<!--      <div class="img-holder">-->
<!--&lt;!&ndash;        <div class="bg" style="background-image: url('tenant/images/bg2.jpg')">&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--        <div class="info-holder">-->
<!--        </div>-->
<!--      </div>-->
      <div class="form-holder">
        <router-view></router-view>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: 'AuthLayout',
  data () {
    return {
    }
  }
}
</script>
