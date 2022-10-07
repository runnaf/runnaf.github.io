const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');
const del = require('del');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const gcmq = require('gulp-group-css-media-queries');

const css = () => {
  return gulp.src('src/sass/style.scss')
      .pipe(plumber())
      .pipe(sourcemap.init())
      .pipe(sass())
      .pipe(postcss([autoprefixer({
        grid: true,
      })]))
      .pipe(gcmq()) // выключите, если в проект импортятся шрифты через ссылку на внешний источник
      .pipe(gulp.dest('build/css'))
      .pipe(csso())
      .pipe(rename('style.min.css'))
      .pipe(sourcemap.write('.'))
      .pipe(gulp.dest('build/css'))
      .pipe(server.stream());
};

const js = () => {
  return gulp.src(['src/js/script.js'])
      .pipe(webpackStream(webpackConfig))
      .pipe(gulp.dest('build/js'))
};

const svgo = () => {
  return gulp.src('src/image/**/*.{svg}', '!src/image/sprite/*.svg')
      .pipe(imagemin([
        imagemin.svgo({
            plugins: [
              {removeViewBox: false},
              {removeRasterImages: true},
              {removeUselessStrokeAndFill: false},
            ]
          }),
      ]))
      .pipe(gulp.dest('src/image'));
};

const sprite = () => {
  return gulp.src('src/image/sprite/*.svg')
      .pipe(svgstore({inlineSvg: true}))
      .pipe(rename('sprite_auto.svg'))
      .pipe(gulp.dest('build/image'));
};

const copyImages = () => {
  return gulp.src('src/image/**/*.{png,jpg,webp}', {base: 'src'})
      .pipe(gulp.dest('build'));
};

const copy = () => {
  return gulp.src([
    'src/**.html',
    'src/**.pdf',
    'src/image/favicon/**',
    'src/fonts/**',
    'src/image/**',
    'src/favicon/**',
    'src/js/plugins/**',
  ], {
    base: 'src',
  })
      .pipe(gulp.dest('build'));
};

const clean = () => {
  return del('build');
};

const syncServer = () => {
  server.init({
    server: 'build/',
    index: 'index.html',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch('src/**.html', gulp.series(copy, refresh));
  gulp.watch('src/sass/**/*.{scss,sass}', gulp.series(css));
  gulp.watch('src/js/**/*.{js,json}', gulp.series(js, refresh));
  gulp.watch('src/data/**/*.{js,json}', gulp.series(copy, refresh));
  gulp.watch('src/image/**/*.svg', gulp.series(copy, sprite, refresh));
  gulp.watch('src/image/**/*.{png,jpg,webp}', gulp.series(copyImages, refresh));
  gulp.watch('src/favicon/**', gulp.series(copy, refresh));
  gulp.watch('src/video/**', gulp.series(copy, refresh));
  gulp.watch('src/downloads/**', gulp.series(copy, refresh));
  gulp.watch('src/*.php', gulp.series(copy, refresh));
};

const refresh = (done) => {
  server.reload();
  done();
};

const build = gulp.series(clean, svgo, copy, css, sprite, js);

const start = gulp.series(build, syncServer);

// Optional tasks
//---------------------------------

// Используйте отличное от дефолтного значение root, если нужно обработать отдельную папку в img,
// а не все изображения в img во всех папках.

// root = '' - по дефолту webp добавляются и обналяются во всех папках в src/img/
// root = 'content/' - webp добавляются и обновляются только в src/img/content/

const createWebp = () => {
  const root = '';
  return gulp.src(`src/image/${root}**/*.{png,jpg}`)
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest(`src/image/${root}`));
};

const optimizeImages = () => {
  return gulp.src('build/image/**/*.{png,jpg}')
      .pipe(imagemin([
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
      ]))
      .pipe(gulp.dest('build/image'));
};

exports.imagemin = optimizeImages;
exports.webp = createWebp;
exports.start = start;
exports.build = build;
