/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        screens: {
        'sm': '0px',
        // => @media (min-width: 640px) { ... }

        'md': '375px',
        // => @media (min-width: 800px) { ... }

        'lg': '800px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1440px',
        // => @media (min-width: 1536px) { ... }
        }
    }
}