# startbootstrap-freelancer

> work in progress

TODO readme

* https://github.com/IronSummitMedia/startbootstrap-freelancer
* https://github.com/yeoman/generator-angular

added:

* https://github.com/jwvdiermen/grunt-include-source
* https://github.com/angular-translate/angular-translate
* https://github.com/angular-ui/ui-router

TODO handle with express all unmatched urls

```
# setup first time
wget -q https://github.com/niqdev/startbootstrap-freelancer/archive/feature/angular.zip \
  && unzip angular.zip && rm angular.zip
  
cd startbootstrap-freelancer-feature-angular
npm install
bower install

# available task
grunt build
grunt serve
grunt test
```

# deploy on heroku
heroku login
heroku create startbootstrap-freelancer-demo
git push heroku master
heroku ps:scale web=1
heroku open
heroku logs --tail
