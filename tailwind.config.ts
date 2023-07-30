/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: "#eef2ff",
                    100: "#e0e7ff",
                    200: "#c7d2fe",
                    300: "#a5b4fc",
                    400: "#818cf8",
                    500: "#6366f1",
                    600: "#4f46e5",
                    700: "#4338ca",
                    800: "#3730a3",
                    900: "#312e81"
                },
                grey: {
                    0: "#ffffff",
                    50: "#f9fafb",
                    100: "#f4f5f7",
                    200: "#e5e7eb",
                    300: "#d2d6dc",
                    400: "#9fa6b2",
                    500: "#6b7280",
                    600: "#4b5563",
                    700: "#374151",
                    800: "#252f3f",
                    900: "#161e2e"
                },
                blue: {
                    100: "#e0f2fe",
                    700: "#0369a1"
                },
                green: {
                    100: "#dcfce7",
                    700: "#15803d"
                },
                yellow: {
                    100: "#fef9c3",
                    700: "#a16207"
                },
                silver: {
                    100: "#e5e7eb",
                    700: "#374151"
                },
                indigo: {
                    100: "#e0e7ff",
                    700: "#4338ca"
                },
                red: {
                    100: "#fee2e2",
                    700: "#b91c1c",
                    800: "#991b1b"
                },
                backdrop: "rgba(255, 255, 255, 0.1)",
                dark: {
                    grey: {
                        0: "#18212f",
                        50: "#111827",
                        100: "#1f2937",
                        200: "#374151",
                        300: "#4b5563",
                        400: "#6b7280",
                        500: "#9fa6b2",
                        600: "#d1d5db",
                        700: "#e5e7eb",
                        800: "#f3f4f6",
                        900: "#f9fafb"
                    },
                    blue: {
                        100: "#075985",
                        700: "#e0f2fe"
                    },
                    green: {
                        100: "#166534",
                        700: "#dcfce7"
                    },
                    yellow: {
                        100: "#854d0e",
                        700: "#fef9c3"
                    },
                    silver: {
                        100: "#374151",
                        700: "#f3f4f6"
                    },
                    indigo: {
                        100: "#3730a3",
                        700: "#e0e7ff"
                    },
                    backdrop: "rgba(0, 0, 0, 0.3)"
                }
            },
            boxShadow: {
                sm: " 0 1px 2px rgba(0, 0, 0, 0.04)",
                md: "0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06)",
                lg: "0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)",
                "dark-sm": "0 1px 2px rgba(0, 0, 0, 0.4)",
                "dark-md": "0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3)",
                "dark-lg": "0 2.4rem 3.2rem rgba(0, 0, 0, 0.4)"
            },
            borderRadius: {
                tiny: "3px",
                sm: "5px",
                DEFAULT: "7x",
                lg: "9px"
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
                sono: ["Sono", "sans-serif"]
            }
        }
    },
    plugins: []
}
