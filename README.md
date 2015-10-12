# startbootstrap-freelancer

> work in progress

Single Page Application based on [startbootstrap-freelancer template](https://github.com/IronSummitMedia/startbootstrap-freelancer) completely rewritten in AngularJS starting from [angular generator](https://github.com/yeoman/generator-angular) and deployed on Heroku.

### Setup
```
npm install
bower install
```

### Tasks
```
grunt build
grunt serve
grunt test
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

TODO
* map-template
* pag 404
