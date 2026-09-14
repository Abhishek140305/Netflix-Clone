import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { netflix: '#e50914' }, fontFamily: { sans: ['Arial', 'Helvetica', 'sans-serif'] } } }, plugins: [] };
export default config;
