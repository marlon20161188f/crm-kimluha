const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

/*
 * Frontend
 */
mix
    .copy('qfrontend/dist/spa/index.html', 'resources/views/layouts/frontend.blade.php')
    .copyDirectory('qfrontend/dist/spa/css', 'public/css')
    .copyDirectory('qfrontend/dist/spa/fonts', 'public/fonts')
    .copyDirectory('qfrontend/dist/spa/js', 'public/js')
    .copyDirectory('qfrontend/public', 'public');
