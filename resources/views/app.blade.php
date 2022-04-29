<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>React Laravel</title>
        <!-- use Tailwind CSS -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
        <!-- Using Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
        <!-- Add some minor styling -->
        <style>
          * { font-family: "Open Sans", arial, helvetica; }
          .body-bg {
            background-color: #2149e8;
            background-image: linear-gradient(315deg, #2149e8 0%, #5f72be 74%);
          }
        </style>
    </head>
    <body class="body-bg min-h-screen pt-10 md:pt-20 pb-6 px-2 md:px-0">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
    </body>
    <!-- Call our app script -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</html>
