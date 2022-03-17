<!--Button's test-->
<!--<template>-->
<!--  <div class="root-home">-->
<!--  大小  -->
<!--    <xl-button @click="onClick" xsmall>按钮</xl-button>-->
<!--    <xl-button @click="onClick" small>按钮</xl-button>-->
<!--    <xl-button @click="visible=true" large>按钮</xl-button>-->
<!--    <xl-button @click="onClick" xlarge>按钮</xl-button>-->
<!--  圆角  -->
<!--    <xl-button @click="onClick" xlarge tile>按钮</xl-button>-->
<!--    <xl-button @click="onClick" xlarge rounded>按钮</xl-button>-->
<!--    <xl-button @click="onClick" xlarge circle>按钮</xl-button>-->
<!--  颜色  -->
<!--    <xl-button @click="onClick" xlarge color="red">按钮</xl-button>-->
<!--    <xl-button @click="onClick" xlarge color="green">按钮</xl-button>-->
<!--    <xl-button @click="onClick" xlarge color="purple">按钮</xl-button>-->
<!--  禁用  -->
<!--    <xl-button @click="onClick" xlarge disabled>按钮</xl-button>-->
<!--  </div>-->
<!--</template>-->

<!--dialog's test-->
<!--<template>-->
<!--  <div class="root-home">-->
<!--    <xl-button @click="visible=true" large>按钮</xl-button>-->
<!--    <xl-dialog :visible.sync="visible">-->
<!--      Are you sure you want to delete this message?-->
<!--      <template v-slot:footer>-->
<!--        <xl-button @click="visible = false">Confirm</xl-button>-->
<!--        <xl-button color="#999" @click="visible = false">Cancel</xl-button>-->
<!--      </template>-->
<!--    </xl-dialog>-->
<!--  </div>-->
<!--</template>-->

<!-- input's test -->
<template>
  <div class="root-home">
    <xl-input placeholder="请输入用户名" v-model="username"></xl-input>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    components: {}
  })
  export default class Home extends Vue {
    private username = '';
    private visible = false;
  }
</script>

<style lang="stylus" scoped>
  /*.root-home*/
    /*background-color aqua*/
    /*width: 480px*/
    /*height: 180px*/
    /*display flex*/
    /*flex-flow wrap*/
    /*justify-content space-between*/
    /*align-items center*/
    /*margin: 0 auto*/
</style>
