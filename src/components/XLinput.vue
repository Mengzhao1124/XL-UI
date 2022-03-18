<template>
  <div class="xl-input" :class="{
    'xl-input-suffix': showSuffix
  }">
    <input
            class="xl-input_inner"
            :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
            :disabled="disabled"
            :name="name"
            :placeholder="placeholder"
            :value="value"
            @input="handleInput"
            :class="{
        'is-disabled': disabled
      }"
    >
    <span class="xl-input_suffix" v-if="showSuffix">
      <p v-if="clearable && value" @click="clear">x</p>
      <p v-if="showPassword" @click="handlePassword">O</p>
    </span>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop, Emit} from 'vue-property-decorator';

  @Component
  export default class XLinput extends Vue {
    @Prop({type: String, default: 'text'}) private type: string | undefined;
    @Prop(Boolean) private disabled: boolean | undefined;
    @Prop({type: String, default: ''}) private name: string | undefined;
    @Prop(String) private placeholder: string | undefined;
    @Prop(String) private value: string | undefined;
    @Prop(Boolean) private clearable: boolean | undefined;
    @Prop(Boolean) private showPassword: boolean | undefined;
    private passwordVisible = false;

    private get showSuffix() {
      return this.clearable || this.showPassword;
    }

    @Emit('input')
    private handleInput(e: any) {
      return e.target.value;
    }

    @Emit('input')
    private clear() {
      return '';
    }

    private handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    }
  }
</script>

<style lang="stylus" scoped>
  .xl-input
    width 100%
    position relative
    font-size 14px
    display inline-block

    input[type="password"]::-ms-reveal
      display none

    .xl-input_inner
      -webkit-appearance none
      background-color #fff
      border-image none
      border-radius 4px
      border 1px solid #dcdfe6
      box-sizing border-box
      color #606266
      display inline-block
      font-size inherit
      height 40px
      line-height 40px
      outline none
      padding 0 15px
      transition border-color .2s cubic-bezier(.643, .045, .355, 1)
      width: 100%

      &:focus
        outline none
        border-color #409eff

      &.is-disabled
        background-color #f5f7fa
        border-color #e4e7ed
        color #c0c4cc
        cursor not-allowed

  .xl-input-suffix .xl-input_inner
    padding-right 30px

  .xl-input_suffix
    position absolute
    height 100%
    right 10px
    top 0
    line-height 40px
    text-align center
    color #c0c4cc
    transition all .3s
    z-index 900

  &p
    margin 0
    color #c0c4cc
    font-size 14px
    cursor pointer
    transition color .2s cubic-bezier(.645, .045, .355, 1)
</style>
