<template>
  <div class="xl-input">
    <input
      class="xl-input_inner"
      :type="type"
      :disabled="disabled"
      :name="name"
      :placeholder="placeholder"
      :vlue="value"
      @input="handleInput"
      :class="{
        'is-disabled': disabled
      }"
      >
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
    @Emit('input')
    private handleInput (e: any) {
      console.log(e.target.value)
      return e.target.value
    }
  }
</script>

<style lang="stylus" scoped>
  .xl-input
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;

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
</style>
