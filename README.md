gulp-starter
============

Includes the following tools, tasks, and workflows:

- Browserify (with browserify-shim)
- Watchify (caching version of browserify for super fast rebuilds)
- Compass
- jQuery (from npm)
- Backbone (from npm)
- Handlebars (as a backbone dependency)
- Non common-js vendor code (like a jQuery plugin)
- LiveReload
- Static Server
- Image optimization
- Error Notifications in Notification Center


```
brew install node

npm install -g gulp

gem update --system

gem install compass

npm install

gulp
```

This will create and run the task defined in `gulpfile.js`. If you're on OS X,
and have Chrome installed, a window will open displaying the demo page. If not,
you can visit http://localhost:8080 to view the test page.
