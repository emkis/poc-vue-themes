<template>
  <button
    class="Button"
    :class="[`Button--${theme}`]"
    :type="type"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
import { ButtonThemes, isThemeValid } from './themes'

export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    theme: {
      type: String,
      default: ButtonThemes.default,
      validator: isThemeValid,
    },
  },
}
</script>

<style lang="scss" scoped>
.Button {
  border: 0;
  border-radius: $border-radius;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 700;
  background: var(--bg);
  color: var(--button-text);
  cursor: pointer;

  &--default {
    --bg: var(--button-default-bg);
  }

  &--primary {
    --bg: var(--button-primary-bg);
  }
}
</style>
