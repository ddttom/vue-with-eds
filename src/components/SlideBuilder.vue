<template>
  <div class="slide-builder">
    <SlideItem 
      v-for="(slide, index) in slides" 
      :key="slide.path" 
      :slide-data="slide" 
      :index="index" 
    />
  </div>
</template>

<script>
import SlideItem from './SlideItem.vue'
import '../styles/SlideBuilder.css'

export default {
  name: 'SlideBuilder',
  components: {
    SlideItem
  },
  props: {
    slides: {
      type: Array,
      required: true
    }
  }
}
</script>
