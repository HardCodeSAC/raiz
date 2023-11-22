<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="" />
    <meta name="keywords" content="">
    <meta name="author" content="Phoenixcoded" />

    <link rel="icon" href="{{ asset('plantilla/dist/assets/images/favicon.svg') }}" type="image/x-icon">

    <!-- font css -->
    <link rel="stylesheet" href="{{ asset('plantilla/dist/assets/fonts/font-awsome-pro/css/pro.min.css') }}">
    <link rel="stylesheet" href="{{ asset('plantilla/dist/assets/fonts/feather.css') }}">
    <link rel="stylesheet" href="{{ asset('plantilla/dist/assets/fonts/fontawesome.css') }}">
    
    <!-- vendor css -->
    <link rel="stylesheet" href="{{ asset('plantilla/dist/assets/css/style.css') }} ">
    
    <script src="{{ asset('plantilla/dist/assets/js/vendor-all.min.js') }} "></script>
    <script src="{{ asset('plantilla/dist/assets/js/plugins/bootstrap.min.js') }}"></script>
    <script src="{{ asset('plantilla/dist/assets/js/plugins/feather.min.js') }}"></script>
    <script src="{{ asset('plantilla/dist/assets/js/pcoded.min.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
    <script src="{{ asset('plantilla/dist/assets/js/plugins/clipboard.min.js') }}"></script>
    <script src="{{ asset('plantilla/dist/assets/js/uikit.min.js') }}"></script>
    <script src="{{ asset('plantilla/dist/assets/js/plugins/apexcharts.min.js') }}"></script>
    <script src="{{ asset('plantilla/dist/assets/js/pages/dashboard-sale.js') }}"></script>
    <script>
        $("body").append('<div class="fixed-button active"><a href="https://1.envato.market/VGznk" target="_blank" class="btn btn-md btn-success"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Upgrade To Pro</a> </div>');
    </script>
    <title>Raiz</title>
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>