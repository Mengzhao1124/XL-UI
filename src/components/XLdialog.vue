<template>
  <transition name="dialog-fade">
    <div class="xl-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <div class="xl-dialog">
        <div class="xl-dialog_header">
          <slot name="title">
            <span class="xl-dialog_title">Message</span>
          </slot>
          <button class="xl-dialog_headerbtn" @click="handleClose">
            x
          </button>
        </div>
        <div class="xl-dialog_body">
          <slot></slot>
        </div>
        <div class="xl-dialog_footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import {Component, Vue, Emit, Prop} from 'vue-property-decorator';

  @Component
  export default class XLdialog extends Vue {
    @Prop(Boolean) private visible: boolean | undefined;

    @Emit('update:visible')
    private updateVisible(e: boolean) {
      return e;
    }

    private handleClose() {
      this.updateVisible(false);
    }
  }
</script>

<style lang="stylus">
  .dialog-fade-enter-active {
    animation: fade .3s;
  }

  .dialog-fade-leave-active {
    animation: fade .3s reverse;
  }

  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .xl-dialog_wrapper
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    overflow auto
    margin 0
    z-index 2001
    background-color rgba(0, 0, 0, .3)

  .xl-dialog
    position relative
    margin 15vh auto 50px
    background #fff
    border-radius 2px
    box-shadow 0 1px 3px rgba(0, 0, 0, .3)
    box-sizing border-box
    width 30%

  .xl-dialog_header
    padding 20px 20px 10px

  .xl-dialog_title
    line-height 24px
    font-size 18px
    color #303133

  .xl-dialog_headerbtn
    position absolute
    top 20px
    right 20px
    font-weight 600
    background transparent
    border none
    color #909399
    outline none
    cursor pointer
    font-size 16px

  .xl-dialog_body
    padding 30px 20px
    color #606266
    font-size 14px
    word-break break-all

  .xl-dialog_footer
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;

    .xl-btn:first-child
      margin-right: 20px;
</style>
