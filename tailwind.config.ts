import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        rotate: "rotate 0.06s ease-in-out infinite", // Animación rotar y desvanecer
        slowblink: "blink 2s linear infinite",
        slowblin: "blink 0.60s linear infinite", // Animación de parpadeo lento
        beat: "beat 1.2s ease-in-out infinite",// Animación de latido
        beats: "beats 0.5s ease-in-out infinite",
        fadeZoom: "fadeZoom 1s ease-in-out" , 
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
          
        },
        rotate: { // Definición de la animación "rotate-fade"
          '0%': {
            transform: 'rotate(0deg)',
            opacity: '0.20',
          },
          '50%': {
            transform: 'rotate(180deg)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'rotate(360deg)',
            opacity: '10',
          },
          
        },
        fadeZoom: {
          '0%': { opacity: "0", transform: 'scale(0.8)' },
          '100%': { opacity: "1", transform: 'scale(1)' },
        },
        blink: { // Nueva animación de parpadeo lento
          '20%, 90%': { opacity: "1" },
          '50%': { opacity: "0" },
        },
        beat: { // Animación de latido
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.2)', 
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        beats: { // Animación de latido
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.04)', 
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#25466a",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#25466a",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Agrega tu color personalizado
        'custom-blue': 'rgb(37, 70, 106)', 
        'blue': 'rgb(94, 195, 235)',
        'custom-gray': 'rgb(65, 65, 65)',
        'custom-white': 'rgba(252, 252, 252, 0.12)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), tailwindAnimate, addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;
