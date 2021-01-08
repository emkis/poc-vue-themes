<template>
  <section class="SectionHero">
    <h1>Everything child needs to become a fluent reader independently</h1>
    <p>Learn more. Stress less.</p>
    <button type="button">🎉 App Store</button>
  </section>
</template>

<script>
export default {
  name: 'SectionHero',
}
</script>

<style lang="scss" scoped>
.SectionHero {
  padding: 100px;
  text-align: center;
  background: var(--color-foam);

  > h1 {
    margin: 0 auto;
    max-width: 700px;
    font-size: clamp(25px, 5vw, 50px);
    color: var(--color-victoria);
  }

  > p {
    font-size: 16px;
    font-weight: 300;
    margin: 50px 0 30px;
    color: var(--color-mine-shaft);
  }

  > button {
    border: 0;
    border-radius: 10px;
    padding: 16px 40px;
    font-size: 16px;
    font-weight: bolder;
    background: var(--color-victoria);
    color: var(--color-foam);
    cursor: pointer;
  }
}
</style>
