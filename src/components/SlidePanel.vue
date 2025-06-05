<template>
  <div class="slide-panel-overlay" @click="handleOverlayClick">
    <div class="slide-panel" ref="panelRef">
      <div class="slide-panel-content">
        <div 
          class="slide-panel-body"
          v-html="html"
        />
        <button 
          class="slide-panel-close" 
          @click="$emit('close')" 
          aria-label="Close panel"
        >
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import '../styles/SlidePanel.css'

export default {
  name: 'SlidePanel',
  props: {
    slideData: {
      type: Object,
      required: true
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const html = ref('')
    const panelRef = ref(null)

    const fetchSlideHtml = async () => {
      try {
        const response = await fetch(`${props.slideData.path}.plain.html`)
        if (!response.ok) throw new Error(`Failed to fetch HTML for slide: ${props.slideData.path}`)
        const text = await response.text()
        html.value = text
      } catch (error) {
        console.error(error)
      }
    }

    const handleOutsideClick = (event) => {
      if (panelRef.value && !panelRef.value.contains(event.target)) {
        emit('close')
      }
    }

    const handleOverlayClick = (event) => {
      if (event.target === event.currentTarget) {
        emit('close')
      }
    }

    onMounted(() => {
      fetchSlideHtml()
      document.addEventListener('mousedown', handleOutsideClick)
    })

    onUnmounted(() => {
      document.removeEventListener('mousedown', handleOutsideClick)
    })

    return {
      html,
      panelRef,
      handleOverlayClick
    }
  }
}
</script>
