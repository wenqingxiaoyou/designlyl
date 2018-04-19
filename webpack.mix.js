let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app/app.js', 'public/js/app')
    .sass('resources/assets/sass/app/app.scss', 'public/css/app')
    .js('resources/assets/js/admin/admin.js', 'public/js/admin')
    .sass('resources/assets/sass/admin/admin.scss', 'public/css/admin');