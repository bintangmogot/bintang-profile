import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

// Simple Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active')
      observer.unobserve(entry.target) // Only animate once
    }
  })
}, observerOptions)

// Wait for DOM to be ready
setTimeout(() => {
  const elements = document.querySelectorAll('.reveal')
  elements.forEach(el => observer.observe(el))
}, 100)

