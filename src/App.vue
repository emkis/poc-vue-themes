<template>
  <div id="app" class="colors concepts entities">
    <SectionHero />
    <SectionHero class="concepts-dark entities-dark" />
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero'
// https://medium.com/welldone-software/css-theme-organization-best-practices-a8e375d92c7c

export default {
  name: 'App',
  components: { SectionHero },
}
</script>
