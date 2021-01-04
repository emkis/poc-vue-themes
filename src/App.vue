<template>
  <div id="app" data-theme="dark">
    <SectionHero />
    <SectionCards />
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero'
import SectionCards from '@/components/SectionCards'

export default {
  name: 'App',
  components: { SectionHero, SectionCards },
}
</script>
