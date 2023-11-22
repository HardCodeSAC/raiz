import "../css/app.css";
import "../css/style.css";
import "../css/customizer.css";
import "../../public/plantilla/dist/assets/fonts/fontawesome.css";
import "../../public/plantilla/dist/assets/fonts/inter/inter.css";
import "../../public/plantilla/dist/assets/fonts/cryptofont.css";
import "../../public/plantilla/dist/assets/fonts/feather.css";
import "../../public/plantilla/dist/assets/css/plugins/animate.min.css";
import "../../public/plantilla/dist/assets/css/plugins/bootstrap.min.css";
import "../../public/plantilla/dist/assets/css/plugins/nouislider.min.css";
import "../../public/plantilla/dist/assets/css/plugins/perfect-scrollbar.css";
import "../../public/plantilla/dist/assets/css/plugins/prism-coy.css";
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`,import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />) //and here
    },
})