/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2C2E9D",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: '#F7B32B',
          foreground: '#111111',
        },
        accent: {
          DEFAULT: '#4DA1FF',
          foreground: '#FFFFFF',
        },
        background: '#FAF9F6',
        card: '#FFFFFF',
        destructive: {
          DEFAULT: '#F44336',
          foreground: '#FFFFFF',
        },
        success: '#38B000',
        muted: '#6E7B8B',
        text: {
          heading: '#111111',
          body: '#6E7B8B',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#25274D',
        },
        ring: '#2C2E9D',
        border: '#E5E5E5',
        input: '#ECECEC',
      },
      fontFamily: {
        sans: ['Inter'],
        serif: ['Merriweather'],
        mono: ['JetBrains Mono'],
      },
    },
  },
  plugins: [],
  future: {
    nativeLayers: true,
  },
}