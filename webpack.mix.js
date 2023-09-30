let mix = require('laravel-mix');

// require('laravel-mix-polyfill');

mix.setPublicPath('dist');
mix.setResourceRoot('/');

mix.webpackConfig({
    stats: {
        children: true,
    },
});

mix.autoload({
   jquery : ['$', 'window.$', 'window.jQuery']
})
.js('assets/scripts/app.js', 'scripts')
.sass('assets/styles/app.scss', 'styles')
.version()
.browserSync({
  proxy : 'cloudflare-pages.test',
  files : [
    '**/*.html',
    'dist/**/*.css',
    'assets/**/*.js'
  ]
})
.sourceMaps()
.options({
  processCssUrls : false,
  purifyCss      : false,
  uglify         : {}
});
