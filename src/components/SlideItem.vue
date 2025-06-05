<template>
  <div>
    <div
      class="slide-builder-item"
      :style="{ backgroundImage: `url(${bgImage})` }"
      :data-slidenum="index + 1"
      @click="showPanel = true"
    >
      <div class="text-container">
        <h2>{{ slideData.title }}</h2>
        <p><strong>{{ slideData.description }}</strong></p>
        <p v-if="supportingText" class="supporting-text">{{ supportingText }}</p>
      </div>
    </div>
    <SlidePanel 
      v-if="showPanel"
      :slide-data="slideData" 
      @close="showPanel = false" 
    />
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import SlidePanel from './SlidePanel.vue'
import '../styles/SlideItem.css'

export default {
  name: 'SlideItem',
  components: {
    SlidePanel
  },
  props: {
    slideData: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const bgImage = ref('')
    const supportingText = ref('')
    const showPanel = ref(false)

    const fetchSupportingText = async () => {
      if (window.innerWidth <= 799) {
        const html = await fetchSlideHtml(props.slideData.path)
        if (html) {
          const text = extractSupportingText(html)
          supportingText.value = text
        }
      }
    }

    const setSlideBackground = () => {
      const imageUrl = props.slideData.image.split("?")[0]
      const finalImageUrl = `${imageUrl}?width=2000&format=webply&optimize=medium`

      const img = new Image()
      img.src = finalImageUrl
      img.onload = () => bgImage.value = finalImageUrl
      img.onerror = () => console.error(`Failed to load image: ${finalImageUrl}`)
    }

    const fetchSlideHtml = async (path) => {
      try {
        const response = await fetch(`${path}.plain.html`)
        if (!response.ok) throw new Error(`Failed to fetch HTML for slide: ${path}`)
        return await response.text()
      } catch (error) {
        console.error(error)
        return null
      }
    }

    const extractSupportingText = (html) => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, "text/html")
      const h2 = doc.querySelector("h2")
      let firstParagraph = h2 ? h2.nextElementSibling : doc.querySelector("p")
      while (firstParagraph && firstParagraph.tagName.toLowerCase() !== "p") {
        firstParagraph = firstParagraph.nextElementSibling
      }
      return firstParagraph?.textContent.trim() || null
    }

    onMounted(() => {
      setSlideBackground()
      fetchSupportingText()
    })

    // Watch for prop changes
    watch(() => props.slideData, () => {
      setSlideBackground()
      fetchSupportingText()
    })

    return {
      bgImage,
      supportingText,
      showPanel
    }
  }
}
</script>
