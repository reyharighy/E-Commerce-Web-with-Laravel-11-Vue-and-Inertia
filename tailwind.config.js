import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                'integralcf-extrabold': ['IntegralCF-ExtraBold', 'sans-serif']
            },
        },
    },

    plugins: [
        forms,
        require('@headlessui/tailwindcss')({ prefix:'ui' })
    ],

    "editor.quickSuggestions": {
        "strings": "on"
    }
};
