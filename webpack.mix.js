require('dotenv').config();

let mix                  = require('laravel-mix');
let webpack              = require('webpack');
let path                 = require('path');
let productionSourceMaps = false;

// const themename = 'cloudflare-pages';
// const domain    = 'cloudflare-pages.test';
// const homedir   = require('os').homedir();

mix.setPublicPath('dist');
mix.setResourceRoot(`dist/`);

mix.setResourceRoot('./');
mix.setPublicPath(path.resolve('./'));

// mix.webpackConfig({
//   plugins: [
//     new webpack.ProvidePlugin({
//       $: 'jquery',
//       jQuery: 'jquery'
//     })
//   ],
//   watchOptions: {
//     ignored: [
//       path.posix.resolve(__dirname, './node_modules'),
//       path.posix.resolve(__dirname, './css'),
//       path.posix.resolve(__dirname, './js'),
//       path.posix.resolve(__dirname, './images')
//     ],
//   },
//   stats: {
//       children: true,
//   },
// });

mix.autoload({
   jquery : ['$', 'window.$', 'window.jQuery']
})
.setPublicPath('dist')
//.js('assets/scripts/app.js', 'dist/scripts')
.sass('assets/styles/app.scss', 'dist/styles')
.version()
// .browserSync({
//   proxy: {
//     target: 'https://' + domain
//   },
//   host: domain,
//   open: 'external',
//   https: {
//     key: homedir + '/.config/valet/Certificates/' + domain + '.key',
//     cert: homedir + '/.config/valet/Certificates/' + domain + '.crt',
//   },
//   files : [
//     '**/*.html',
//     'dist/**/*.css',
//     'dist/**/*.js'
//   ],
//   notify: false
// })
.sourceMaps()
.options({
  processCssUrls : false,
  purifyCss      : false,
  uglify         : {},
  postCss: [
    require('autoprefixer'),
  ]
});
