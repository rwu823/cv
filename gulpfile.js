import { task, src, dest } from 'gulp'
import htmlclean from 'gulp-htmlclean'
import size from 'gulp-size'

task('build', () =>
  src('src/**')
    .pipe(dest('out'))
    .on('end', () =>
      src('out/index.html')
        .pipe(htmlclean())
        .pipe(dest('out'))
        .on('end', () =>
          src('src/**').pipe(
            size({
              gzip: true,
              showFiles: true,
              prettySize: true,
            }),
          ),
        ),
    ),
)
