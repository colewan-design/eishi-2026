// src/plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Optional: use Material Design Icons
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          // Primary & Secondary colors
          primary: '#0066CC',        // Modern blue
          secondary: '#00B4D8',      // Cyan accent
          accent: '#6D28D9',         // Purple accent
          
          // Neutrals
          background: '#FFFFFF',     // Pure white
          surface: '#F8FAFC',        // Off-white surface
          'surface-variant': '#F1F5F9', // Lighter surface
          
          // Status colors
          success: '#10B981',        // Green
          error: '#EF4444',          // Red
          warning: '#F59E0B',        // Amber
          info: '#06B6D4',           // Cyan
          
          // Semantic grays
          'text-primary': '#1E293B',    // Dark slate
          'text-secondary': '#64748B',  // Medium slate
          'text-tertiary': '#94A3B8',   // Light slate
          
          // Borders & dividers
          'border': '#E2E8F0',       // Light border
          'divider': '#E2E8F0',      // Divider color
        },
      },
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
})
