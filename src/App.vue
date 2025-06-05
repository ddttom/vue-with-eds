<template>
  <div class="app">
    <main>
      <SlideBuilder :slides="slides" />
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import SlideBuilder from './components/SlideBuilder.vue'

export default {
  name: 'App',
  components: {
    SlideBuilder
  },
  setup() {
    const slides = ref([])

    const fetchSlides = async () => {
      try {
        const response = await fetch("/slides/query-index.json")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const json = await response.json()
        slides.value = json.data
      } catch (error) {
        console.error("Failed to fetch slides:", error)
      }
    }

    onMounted(() => {
      fetchSlides()
    })

    return {
      slides
    }
  }
}
</script>

<style>
.app {
  text-align: center;
  font-family: Arial, sans-serif;
}

main {
  padding: 20px;
}

/* Responsive design */
@media (max-width: 768px) {
  main {
    padding: 10px;
  }
}
</style>
