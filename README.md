# startbootstrap-freelancer

> work in progress

AngularJS SPA based on [startbootstrap-freelancer template](https://github.com/IronSummitMedia/startbootstrap-freelancer) starting from [angular generator](https://github.com/yeoman/generator-angular) deployed on Heroku.

Main improvements:
* includes sources into HTML files automatically with [grunt-include-source](https://github.com/jwvdiermen/grunt-include-source)
* internationalization support with [angular-translate](https://github.com/angular-translate/angular-translate)
* routing with [AngularUI Router](https://github.com/angular-ui/ui-router)

TODO

handle with express all unmatched urls

### Setup first time
```
wget -q https://github.com/niqdev/startbootstrap-freelancer/archive/feature/angular.zip \
  && unzip angular.zip && rm angular.zip

cd startbootstrap-freelancer-feature-angular
npm install
bower install
```

### Available tasks
```
grunt build
grunt serve
grunt test
```

### Config deploy
```
heroku login
heroku create startbootstrap-freelancer-demo
git push heroku feature/angular:master
heroku ps:scale web=1
heroku open
heroku logs --tail
```

### Instruction for deploy on heroku

* change $fa-font-path in app/styles/main.scss
* run `grunt build`
* comment in .gitignore the 'dist' directory

Run `heroku local web`
