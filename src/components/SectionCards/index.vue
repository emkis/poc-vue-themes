<template>
  <section class="SectionCards">
    <ul class="SectionCards__card-list">
      <li class="SectionCards__card-item">
        <h3>Lorem isum</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <button>Register</button>
      </li>

      <li class="SectionCards__card-item">
        <h3>Sit dollor</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <button>Sign up</button>
      </li>

      <li class="SectionCards__card-item">
        <h3>Amet niat</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <button>Account</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SectionCards',
}
</script>

<style lang="scss" scoped>
.SectionCards {
  padding: $section-vertical-padding $section-horizontal-padding;

  &__card-list {
    max-width: 1333px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 33px;
  }

  &__card-item {
    padding: 30px;
    display: flex;
    flex: 1 0 263px;
    flex-flow: column nowrap;
    max-width: 450px;
    min-height: 300px;
    border-radius: $border-radius;
    border: 1px solid var(--card-border);
    background: var(--card-bg);

    > h3 {
      font-size: 26px;
      color: var(--main-title);
    }

    > p {
      color: var(--secondary-text);
    }

    > h3,
    > p {
      margin-bottom: 30px;
    }

    > button {
      margin-top: auto;

      border: 0;
      border-radius: $border-radius;
      padding: 16px 40px;
      font-size: 16px;
      font-weight: bolder;
      background: var(--card-button-bg);
      color: var(--card-button-text);
      cursor: pointer;
    }
  }
}
</style>
