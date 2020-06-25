const gu = require('gulp')
const htmlclean = require('gulp-htmlclean')
const size = require('gulp-size')

gu.task('build', () =>
  gu
    .src('src/**')
    .pipe(gu.dest('out'))
    .on('end', () =>
      gu
        .src('out/index.html')
        .pipe(htmlclean())
        .pipe(gu.dest('out'))
        .on('end', () =>
          gu.src('src/**').pipe(
            size({
              gzip: true,
              showFiles: true,
              prettySize: true,
            }),
          ),
        ),
    ),
)
