# startbootstrap-freelancer

> work in progress

Single Page Application based on [startbootstrap-freelancer template](https://github.com/IronSummitMedia/startbootstrap-freelancer) completely rewritten in AngularJS starting from [angular generator](https://github.com/yeoman/generator-angular) and deployed on Heroku.

```
# setup
npm install
bower install

# tasks
grunt build
grunt serve
grunt test

# first deploy
heroku login
heroku create startbootstrap-freelancer-demo
git push heroku feature/angular:master
heroku ps:scale web=1
heroku open

heroku logs --tail
heroku local web
```

TODO
* fix style contact-form (padding + color + font)
* fix style scroll-top only mobile
* i18n multilanguage (nav + home-controller)
* map-template
* pag 404
