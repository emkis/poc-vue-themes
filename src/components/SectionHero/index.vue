<template>
  <section class="SectionHero">
    <h1>Everything child needs to become a fluent reader independently</h1>
    <p>Learn more. Stress less.</p>
    <Button theme="primary">Choose your theme</Button>
  </section>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'SectionHero',
  components: { Button },
}
</script>

<style lang="scss" scoped>
.SectionHero {
  padding: ($section-vertical-padding + 20px) $section-horizontal-padding;
  text-align: center;

  > h1 {
    margin: 0 auto;
    max-width: 700px;
    font-size: clamp(25px, 5vw, 50px);
    color: var(--main-title);
  }

  > p {
    font-size: 16px;
    font-weight: 300;
    margin: 50px 0 30px;
    color: var(--secondary-text);
  }
}
</style>
