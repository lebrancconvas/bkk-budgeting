import type { Config } from "tailwindcss";
// import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: [
    "./layout/**/*.{html,js,ts,vue}",
    "./pages/**/*.{html,js,ts,vue}",
    "./components/**/*.{html,js,ts,vue}",
  ],
  theme: {
    extend: {
      textColor: {
        "wv-green": "#4CC35D",
        "wv-gray-3": "#DDDDDD",
        "wv-gray-5": "#858585",
      },
      backgroundColor: {
        "wv-cream": "#E8E4D8",
        "wv-cream-2": "#D9D4C5",
        "wv-green": "#4CC35D",
        "wv-blue": "#3277FF",
        "wv-gray-3": "#DDDDDD",
        "wv-gray-4": "#F3F3F3",
        "wv-safe": "#3277FF",
        "wv-environment": "#BACB37",
        "wv-connectivity": "#FFC2F1",
        "wv-democracy": "#FF7A00",
        "wv-management": "#C462F2",
        "wv-economic": "#FFB800",
        "wv-equality": "#FF2828",
      },
      borderColor: {
        "wv-green": "#4CC35D",
      },
    },
  },
  safelist: [
    "bg-wv-safe",
    "bg-wv-environment",
    "bg-wv-connectivity",
    "bg-wv-democracy",
    "bg-wv-management",
    "bg-wv-economic",
    "bg-wv-equality",
  ],
};
