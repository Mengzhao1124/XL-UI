<template>
  <div class="xl-switch" :class="{'is-checked': value}" @click="handleClick">
    <span class="xl-switch_core">
      <span class="xl-switch_button"></span>
    </span>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop, Emit} from "vue-property-decorator";

  @Component
  export default class XLswitch extends Vue {
    @Prop({type: Boolean, default: false}) private value: boolean | undefined;

    @Emit('input')
    private handleClick() {
      return !this.value;
    }
  }
</script>

<style lang="stylus" scoped>
  .xl-switch
    display inline-flex
    align-items center
    position relative
    font-size 14px
    line-height 20px
    height 20px
    vertical-align middle

    &.is-checked
      .xl-switch_core
        border-color #409eff
        background-color #409eff

        .xl-switch_button
          transform translateX(20px)


  .xl-switch_core
    margin 0
    display inline-block
    position relative
    width 40px
    height 20px
    border 1px solid rgb(192, 192, 192)
    outline none
    border-radius 10px
    box-sizing border-box
    background rgb(192, 192, 192)
    transition border-color .3s, background-color .3s
    vertical-align middle

    .xl-switch_button
      position absolute
      top 1px
      left 1px
      border-radius 100%
      transition all .3s
      width 16px
      height 16px
      background-color #fff
</style>
