<template>
  <button class="xl-btn" @click="onClickBtn"
    :class="{
      'xl-btn-xsmall': xsmall,
      'xl-btn-small': small,
      'xl-btn-large': large,
      'xl-btn-xlarge': xlarge,
      'xl-btn-tile': tile,
      'xl-btn-rounded': rounded,
      'xl-btn-circle': circle,
      'xl-btn-disabled': disabled,
    }"
    :style="`
      --color-tint: ${TintColor}
    `"
  >
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
  import { Component, Vue, Emit, Prop } from 'vue-property-decorator';
  @Component
  export default class XLbutton extends Vue{
    // Button's Size
    @Prop(Boolean) private xsmall: boolean | undefined;
    @Prop(Boolean) private small: boolean | undefined;
    @Prop(Boolean) private large: boolean | undefined;
    @Prop(Boolean) private xlarge: boolean | undefined;
    // Button's Style
    @Prop(Boolean) private tile: boolean | undefined;
    @Prop(Boolean) private rounded: boolean | undefined;
    @Prop(Boolean) private circle: boolean | undefined;
    // Button's Disable
    @Prop(Boolean) private disabled: boolean | undefined;
    // Button's Color
    @Prop(String) private color: string | undefined;

    @Emit('click')private emitClickEvent(){ return }

    private get TintColor () {
      if (this.color) {
        return this.color;
      }else{
        return '#2d8cf0';
      }
    }

    private onClickBtn () {
      if (!this.disabled) {
        this.emitClickEvent();
      }
    }
  }
</script>

<style lang="stylus" scoped>
resize(minWidth, height, paddingLR, fontSize)
  min-width minWidth
  height: height
  padding: 0 paddingLR
  font-size fontSize
  &.xl-btn-rounded, &.xl-btn-circle
    border-radius (@height / 2)
  &.xl-btn-circle
    width @height
    min-width 0
    padding 0

.xl-btn
  resize 64px 36px 16px 0.875rem
  background-color var(--color-tint)
  color #17233d
  cursor pointer
  user-select none
  border 0 solid black
  border-radius 4px
  outline none
  font-weight: 500
  letter-spacing 0.09rem
  color #fff
  &:hover
    filter brightness(120%)
  &:active
    filter brightness(80%)
  &.xl-btn-xsmall
    resize 36px 20px 9px 0.625rem
  &.xl-btn-small
    resize 50px 28px 12px 0.75rem
  &.xl-btn-large
    resize 78px 44px 19px 0.875rem
  &.xl-btn-xlarge
    resize 92px 52px 23px 1rem
  &.xl-btn-tile
    border-radius 0
  &.xl-btn-disabled
    filter brightness(100%)
    background-color #f5f5f5
    color #c5c8ce
    cursor not-allowed
</style>
