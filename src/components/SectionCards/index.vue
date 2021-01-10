<template>
  <section class="SectionCards">
    <ul class="SectionCards__card-list">
      <li class="SectionCards__card-item">
        <div class="SectionCards__tags">
          <Tag theme="success">New</Tag>
          <Tag theme="info">Challenge</Tag>
        </div>

        <h3>Lorem isum</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <Button>Register</Button>
      </li>

      <li class="SectionCards__card-item">
        <div class="SectionCards__tags">
          <Tag theme="success">Epic</Tag>
        </div>

        <h3>Sit dollor</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <Button>Sign up</Button>
      </li>

      <li class="SectionCards__card-item">
        <div class="SectionCards__tags">
          <Tag theme="notice">Lipsum</Tag>
          <Tag theme="info">Sit Dollor</Tag>
        </div>

        <h3>Amet niat</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <Button>Account</Button>
      </li>

      <li class="SectionCards__card-item">
        <div class="SectionCards__tags">
          <Tag theme="success">Epic</Tag>
        </div>

        <h3>Sit dollor</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <Button>Sign up</Button>
      </li>

      <li class="SectionCards__card-item">
        <div class="SectionCards__tags">
          <Tag theme="success">New</Tag>
          <Tag theme="info">Challenge</Tag>
        </div>

        <h3>Lorem isum</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <Button>Register</Button>
      </li>

      <li class="SectionCards__card-item">
        <div class="SectionCards__tags">
          <Tag theme="notice">Lipsum</Tag>
          <Tag theme="info">Sit Dollor</Tag>
        </div>

        <h3>Amet niat</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <Button>Account</Button>
      </li>
    </ul>
  </section>
</template>

<script>
import Tag from '@/components/Tag'
import Button from '@/components/Button'

export default {
  name: 'SectionCards',
  components: { Tag, Button },
}
</script>

<style lang="scss" scoped>
.SectionCards {
  padding: $section-vertical-padding $section-horizontal-padding;

  &__card-list {
    max-width: 1200px;
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
    flex: 1 300px;
    flex-flow: column nowrap;
    max-width: 450px;
    min-height: 300px;
    border-radius: $border-radius;
    border: 1px solid var(--card-border);
    background: var(--card-bg);

    > h3 {
      font-size: 26px;
      margin-bottom: 15px;
      color: var(--main-title);
    }

    > p {
      color: var(--secondary-text);
      margin-bottom: 30px;
    }

    > button {
      margin-top: auto;
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 20px;
  }
}
</style>
