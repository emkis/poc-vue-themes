<template>
  <div class="SectionCards">
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
  </div>
</template>

<script>
export default {
  name: 'SectionCards',
}
</script>

<style lang="scss" scoped>
.SectionCards {
  padding: 100px 50px;
  background: #444;

  &__card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 33px;
  }

  &__card-item {
    padding: 30px;
    display: flex;
    flex: 1 0 250px;
    flex-flow: column nowrap;
    min-height: 300px;
    border-radius: 10px;
    border: 1px solid #7e7e7e;
    background: #2c2c2c;

    > h3 {
      font-size: 26px;
      color: white;
    }

    > p {
      line-height: 1.6;
      color: #b1b1b1;
    }

    > h3,
    p {
      margin-bottom: 16px;
    }

    > button {
      margin-top: auto;

      border: 0;
      border-radius: 10px;
      padding: 16px 40px;
      font-size: 16px;
      font-weight: bolder;
      background: var(--color-foam);
      color: var(--color-mine-shaft);
      cursor: pointer;
    }
  }
}
</style>
