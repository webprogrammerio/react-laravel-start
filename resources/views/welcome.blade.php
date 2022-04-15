<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>React Laravel</title>
        <!-- Using Bootstrap for CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <!-- Using Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
        <!-- Add some minor styling -->
        <style>
          * { font-family: Roboto, arial, helvetica; }
          #root { margin: 2em; padding: 2em; border: 2px solid #ccc; border-radius: 1em; }
        </style>
    </head>
    <body>
      <div id="root"></div>
    </body>
    <!-- Call our app script -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</html>
