# startbootstrap-freelancer

Single Page Application based on [startbootstrap-freelancer template](https://github.com/IronSummitMedia/startbootstrap-freelancer) completely rewritten in AngularJS starting from [angular generator](https://github.com/yeoman/generator-angular) and deployed on Heroku.

### Setup
```
npm install
bower install
```

To use Google Maps you need to create `/env/config-common.json` [configuration file](/env/config-common_EXAMPLE.json) and add your api key.

### Tasks
```
grunt test
grunt build
grunt serve
```

### First deploy
```
heroku login
heroku create startbootstrap-freelancer-demo
git push heroku feature/angular:master
heroku ps:scale web=1

heroku open
heroku local web
heroku logs --tail
```
