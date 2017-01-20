<template>
  <button class="md-button" 
  :disabled="disabled"
  :type="type"
  @click="$emit('click', $event)">
  <slot></slot>
  </button>
</template>

<script>
import { oneOf } from '../../utils/lang';

export default {
  name: 'Button',
  props: {
    href: String,
    target: String,
    rel: String,
    type: {
      type: String,
      validator(value) {
        return oneOf(value, ['button', 'submit']);
      },
      default: 'button',
    },
    disabled: Boolean,
  },
};
</script>

<style lang="less">
@import "../../styles/import.less";

@buttonWidth: 88px;
@buttonHeight: 36px;
@buttonRadius: 2px;

.md-button {
  min-width: @buttonWidth;
  min-height: @buttonHeight;
  line-height: @buttonHeight;
  margin: 6px 8px;
  padding: 0 16px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  outline: none;
  background: none;
  border: 0;
  border-radius: @buttonRadius;
  transition: @easeOut;

  &:hover {
    &:not([disabled]) {
      &:not(.md-raised) {
        background-color: fade(@textColor, 10%);;
        text-decoration: none;
      }

      &.md-raised {
        background-color: fade(@textColor, 10%);;
      }
    }
  }
}
</style>
