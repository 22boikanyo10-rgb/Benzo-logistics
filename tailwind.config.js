module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F3A',
        gold: '#D4AF6D',
        ivory: '#F7F3EE',
        slate: '#1E1E1E',
      },
      boxShadow: {
        luxury: '0 20px 45px rgba(11,31,58,0.12)',
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at top, rgba(212,175,109,0.17), transparent 50%)',
      },
    },
  },
  plugins: [],
};
