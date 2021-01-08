<template>
  <section class="SectionHero">
    <h1>Everything child needs to become a fluent reader independently</h1>
    <p>Learn more. Stress less.</p>
    <button type="button">Choose your theme</button>
  </section>
</template>

<script>
export default {
  name: 'SectionHero',
}
</script>

<style lang="scss" scoped>
.SectionHero {
  padding: $section-vertical-padding $section-horizontal-padding;
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

  > button {
    border: 0;
    border-radius: $border-radius;
    padding: 16px 40px;
    font-size: 16px;
    font-weight: bolder;
    background: var(--button-bg);
    color: var(--button-text);
    cursor: pointer;
  }
}
</style>
