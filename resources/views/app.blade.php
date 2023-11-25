<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="" />
    <meta name="keywords" content="">
    <meta name="author" content="Phoenixcoded" />


    <title>Raiz</title>
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
</head>

<body>
    
    @inertia
        <script src="https://code.jquery.com/jquery-3.6.1.min.js"
        integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
<!--
    <script src="../../public/plantilla/dist/assets/js/vendor-all.min.js"></script>
    <script src="../../public/plantilla/dist/assets/js/plugins/bootstrap.min.js"></script>
    <script src="../../public/plantilla/dist/assets/js/plugins/feather.min.js"></script>
    <script src="../../public/plantilla/dist/assets/js/pcoded.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
    <script src="../../public/plantilla/dist/assets/js/plugins/clipboard.min.js"></script>
    <script src="../../public/plantilla/dist/assets/js/uikit.min.js"></script>

    <script src="{../../public/plantilla/dist/assets/js/pages/chart-apex.js}"></script>
    <script src="{{ asset('plantilla/dist/assets/js/pages/dashboard-sale.js') }}"></script>

    <script src="{{ asset('plantilla/dist/assets/js/vendor-all.min.js') }}"></script>
    <script src="{{ asset('plantilla/dist/assets/js/plugins/bootstrap.min.js') }}"></script>
    <script src="{{ asset('plantilla/dist/assets/js/plugins/feather.min.js') }}"></script>
    <script src="{{ asset('plantilla/dist/assets/js/pcoded.min.js') }}"></script>
    <script src="{{ asset('plantilla/dist/assets/js/plugins/clipboard.min.js') }}"></script>
    <script src="{{ asset('plantilla/dist/assets/js/uikit.min.js') }}"></script>
    <script src="{{ asset('plantilla/dist/assets/js/uikit.min.js') }}"></script>
    <script src="{{ asset('plantilla/dist/assets/js/pages/chart-apex.js') }}"></script>
    <script src="{{ asset('plantilla/dist/assets/js/pages/dashboard-sale.js') }}"></script>

    <script src="{{ asset('plantilla/dist/assets/js/plugins/perfect-scrollbar.min.js') }}"></script>
    -->
</body>

</html>