<template>
  <span class="Tag" :style="{ background: `var(--tag-${theme})` }">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    theme: {
      type: String,
      required: true,
      validator(targetTheme) {
        const validThemes = ['success', 'notice', 'surprise', 'info']
        return validThemes.includes(targetTheme)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.Tag {
  display: grid;
  place-items: center;
  width: fit-content;
  max-width: 200px;
  min-height: 24px;
  padding: 0 13px;
  border-radius: $border-radius-tag;
  font-size: 13px;
  line-height: 1.3;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--tag-text);
}
</style>
