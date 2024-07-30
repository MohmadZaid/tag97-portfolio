// tailwind.config.js
import colors from 'tailwindcss/colors';

export const darkMode = 'class';
export const content = [
  "./src/**/*.{html,ts}",
];
export const theme = {
  extend: {
    colors: {
      ...colors,
      primary: "#F75023",
      bgPrimary: "#FFFFFF",
      bgSecondary: "#F2F5FB",
      bgDarkPrimary: "#2B2D33 ",
      bgDarkSecondary: "#3F4453",
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'jost': ["Jost", "sans-serif"],

    }
  },
};
export const plugins = [];
