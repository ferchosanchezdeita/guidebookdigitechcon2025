
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				digipink: {
					DEFAULT: '#FF2B7A',
					50: '#FFF0F6',
					100: '#FFE0EE',
					200: '#FFB8D9',
					300: '#FF85BD',
					400: '#FF5A9F',
					500: '#FF2B7A',
					600: '#FF0055',
					700: '#CC0046',
					800: '#990035',
					900: '#660023',
					950: '#4D001A'
				},
				digiblack: {
					DEFAULT: '#000000',
					50: '#1A1A1A',
					100: '#121212',
					900: '#000000',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'slide-in': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-out': {
					'0%': { transform: 'translateY(0)', opacity: '1' },
					'100%': { transform: 'translateY(-20px)', opacity: '0' }
				},
				'glow': {
					'0%': { filter: 'brightness(1) blur(5px)' },
					'50%': { filter: 'brightness(1.2) blur(8px)' },
					'100%': { filter: 'brightness(1) blur(5px)' }
				},
				'grid-flow': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-50%)' }
				},
				'bottle-float': {
					'0%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(2deg)' },
					'100%': { transform: 'translateY(0) rotate(0deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'slide-in': 'slide-in 0.5s ease-out forwards',
				'slide-out': 'slide-out 0.5s ease-out forwards',
				'glow': 'glow 3s ease-in-out infinite',
				'grid-flow': 'grid-flow 20s linear infinite',
				'bottle-float': 'bottle-float 6s ease-in-out infinite'
			},
			backgroundImage: {
				'grid-pattern': "url('/public/lovable-uploads/e17c2cc2-dedc-4f9d-9565-a2cc0035f419.png')"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
