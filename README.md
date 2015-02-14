# gulp-grep-contents

Gulp plugin for filtering files based on a regular expression matching their contents.

# Usage

```js
var grepContents = require('gulp-grep-contents');

gulp.src(['./templates/*.hbs'])
  .pipe(grepContents(/<head>/))
  .pipe(gulp.dest('./headers'));
```

Inverted

```js
var grepContents = require('gulp-grep-contents');

gulp.src(['./templates/*.hbs'])
  .pipe(grepContents(/<head>/, {inverted: true}))
  .pipe(gulp.dest('./body'));
```
