"use strict";var AppConfig=function(){var a="startbootstrapFreelancerApp",b=["ngAria","ngCookies","ngSanitize","ngTouch","pascalprecht.translate","ui.router","duScroll"],c=function(b){return a+"."+b},d=function(b,d){angular.module(c(b),d||[]),angular.module(a).requires.push(c(b))},e=function(){angular.module(a,b),d("home",[])};return{name:a,getModuleName:c,setup:e}}();!function(){AppConfig.setup(),angular.module(AppConfig.name).config(["$locationProvider",function(a){a.hashPrefix("!")}]),angular.module(AppConfig.name).config(["$translateProvider",function(a){a.useStaticFilesLoader({files:[{prefix:"i18n/locale-",suffix:".json"}]}),a.preferredLanguage("en"),a.usePostCompiling(!0),a.useSanitizeValueStrategy("sanitize")}]),angular.module(AppConfig.name).constant("_",window._),angular.element(document).ready(function(){angular.bootstrap(document,[AppConfig.name])})}(),function(){function a(a,b){b.when("","/").otherwise("/404"),a.state("index",{"abstract":!0,template:"<ui-view></ui-view>"}).state("index.home",{url:"/",views:{"":{templateUrl:"views/home.view.html",controller:"HomeController"},"navigation@index.home":{templateUrl:"views/home-navigation.view.html"},"header@index.home":{templateUrl:"views/home-header.view.html"},"portfolio@index.home":{templateUrl:"views/home-portfolio.view.html"},"portfolio-modals@index.home":{templateUrl:"views/home-portfolio-modals.view.html"},"about@index.home":{templateUrl:"views/home-about.view.html"},"contact@index.home":{templateUrl:"views/home-contact.view.html"},"footer@index.home":{templateUrl:"views/home-footer.view.html"}}}).state("index.not-found",{url:"/404",templateUrl:"views/404.view.html"})}angular.module(AppConfig.getModuleName("home")).config(a),a.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){function a(a,b,c){b.isOverThreshold=!1}angular.module(AppConfig.getModuleName("home")).controller("HomeController",a),a.$inject=["$log","$scope","$document"]}(),function(){function a(a,b,c,d){function e(a){var c=b.pageYOffset||document.documentElement.scrollTop;return c>=a}var f=function(a,b){if(d.isUndefined(b.scrollThreshold))throw new Error("missing scroll-threshold attribute");if(d.isNaN(parseInt(b.scrollThreshold)))throw new Error("invalid number scroll-threshold");if(d.isUndefined(b.ngModel))throw new Error("missing ng-model attribute");if(d.isEmpty(b.ngModel))throw new Error("empty ng-model attribute");return g},g=function(a,f,g,h){if(!d.isBoolean(a.model))throw new Error("invalid boolean ng-model attribute");var i=!1;angular.element(b).on("scroll",function(b){i||(i=!0,c(function(){a.model=e(g.scrollThreshold),i=!1},250))})};return{restrict:"A",compile:f,scope:{model:"=ngModel"}}}angular.module(AppConfig.getModuleName("home")).directive("navAnimated",a),a.$inject=["$log","$window","$timeout","_"]}(),function(){function a(a,c,d){var e=function(a,b){function c(b){if(1!==angular.element(a.find("."+b)[0]).length)throw new Error("element with class ["+b+"] not found")}return c("navbar-toggle"),c("navbar-collapse"),f},f=function(a,e,f,g){function h(){var a=angular.element(e.find(".navbar-toggle"));a.is(":visible")&&a.trigger("click")}angular.element(e.find(".navbar-collapse li a")).on("click",function(a){var e=angular.element(this).attr("href"),f=angular.element(this).attr("duration");d.isUndefined(e)||(c.scrollToElementAnimated(c.find(e),b.OFFSET,f||b.DURATION),h())})};return{restrict:"A",compile:e}}angular.module(AppConfig.getModuleName("home")).directive("navScroll",a),a.$inject=["$log","$document","_"];var b={OFFSET:30,DURATION:2e3}}(),angular.module("startbootstrapFreelancerApp").run(["$templateCache",function(a){a.put("views/404.view.html",'<div class="container"> <h1>Not found <span>:(</span></h1> <p>Sorry, but the page you were trying to view does not exist.</p> <p>It looks like this was the result of either:</p> <ul> <li>a mistyped address</li> <li>an out-of-date link</li> </ul> </div>'),a.put("views/home-about.view.html",'<section class="success" id="about"> <div class="container"> <div class="row"> <div class="col-lg-12 text-center"> <h2>About</h2> <hr class="star-light"> </div> </div> <div class="row"> <div class="col-lg-4 col-lg-offset-2"> <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p> </div> <div class="col-lg-4"> <p>Whether you\'re a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p> </div> <div class="col-lg-8 col-lg-offset-2 text-center"> <a href="#" class="btn btn-lg btn-outline"> <i class="fa fa-download"></i> Download Theme </a> </div> </div> </div> </section>'),a.put("views/home-contact.view.html",'<section id="contact"> <div class="container"> <div class="row"> <div class="col-lg-12 text-center"> <h2>Contact Me</h2> <hr class="star-primary"> </div> </div> <div class="row"> <div class="col-lg-8 col-lg-offset-2"> <form name="sentMessage" id="contactForm" novalidate> <div class="row control-group"> <div class="form-group col-xs-12 floating-label-form-group controls"> <label>Name</label> <input type="text" class="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name."> <p class="help-block text-danger"></p> </div> </div> <div class="row control-group"> <div class="form-group col-xs-12 floating-label-form-group controls"> <label>Email Address</label> <input type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address."> <p class="help-block text-danger"></p> </div> </div> <div class="row control-group"> <div class="form-group col-xs-12 floating-label-form-group controls"> <label>Phone Number</label> <input type="tel" class="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number."> <p class="help-block text-danger"></p> </div> </div> <div class="row control-group"> <div class="form-group col-xs-12 floating-label-form-group controls"> <label>Message</label> <textarea rows="5" class="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea> <p class="help-block text-danger"></p> </div> </div> <br> <div id="success"></div> <div class="row"> <div class="form-group col-xs-12"> <button type="submit" class="btn btn-success btn-lg">Send</button> </div> </div> </form> </div> </div> </div> </section>'),a.put("views/home-footer.view.html",'<footer class="text-center"> <div class="footer-above"> <div class="container"> <div class="row"> <div class="footer-col col-md-4"> <h3>Location</h3> <p>3481 Melrose Place<br>Beverly Hills, CA 90210</p> </div> <div class="footer-col col-md-4"> <h3>Around the Web</h3> <ul class="list-inline"> <li> <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-facebook"></i></a> </li> <li> <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-google-plus"></i></a> </li> <li> <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a> </li> <li> <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-linkedin"></i></a> </li> <li> <a href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-dribbble"></i></a> </li> </ul> </div> <div class="footer-col col-md-4"> <h3>About Freelancer</h3> <p>Freelance is a free to use, open source Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>.</p> </div> </div> </div> </div> <div class="footer-below"> <div class="container"> <div class="row"> <div class="col-lg-12"> Copyright &copy; Your Website 2014 </div> </div> </div> </div> </footer>'),a.put("views/home-header.view.html",'<header> <div class="container"> <div class="row"> <div class="col-lg-12"> <img class="img-responsive" src="images/profile.6b6e77bd.png" alt=""> <div class="intro-text"> <span class="name">Start Bootstrap</span> <hr class="star-light"> <span class="skills">Web Developer - Graphic Artist - User Experience Designer</span> </div> </div> </div> </div> </header>'),a.put("views/home-navigation.view.html",'<nav class="navbar navbar-default navbar-fixed-top" nav-animated scroll-threshold="300" ng-model="isOverThreshold" data-ng-class="{\'navbar-shrink\': isOverThreshold}" nav-scroll> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false"> <span class="sr-only" translate>home.navigation.toggle</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="https://github.com/niqdev/startbootstrap-freelancer" target="_blank"> <span class="icon-github"></span> </a> </div> <div class="collapse navbar-collapse"> <ul class="nav navbar-nav navbar-right"> <li> <a href="#portfolio" translate>home.navigation.portfolio</a> </li> <li> <a href="#about" translate>home.navigation.about</a> </li> <li> <a href="#contact" translate>home.navigation.contact</a> </li> </ul> </div> </div> </nav>'),a.put("views/home-portfolio-modals.view.html",'<div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-content"> <div class="close-modal" data-dismiss="modal"> <div class="lr"> <div class="rl"> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2"> <div class="modal-body"> <h2>Project Title</h2> <hr class="star-primary"> <img src="images/portfolio/cabin.0b602027.png" class="img-responsive img-centered" alt=""> <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p> <ul class="list-inline item-details"> <li>Client: <strong><a href="http://startbootstrap.com">Start Bootstrap</a> </strong> </li> <li>Date: <strong><a href="http://startbootstrap.com">April 2014</a> </strong> </li> <li>Service: <strong><a href="http://startbootstrap.com">Web Development</a> </strong> </li> </ul> <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button> </div> </div> </div> </div> </div> </div> <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-content"> <div class="close-modal" data-dismiss="modal"> <div class="lr"> <div class="rl"> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2"> <div class="modal-body"> <h2>Project Title</h2> <hr class="star-primary"> <img src="images/portfolio/cake.3e82908f.png" class="img-responsive img-centered" alt=""> <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p> <ul class="list-inline item-details"> <li>Client: <strong><a href="http://startbootstrap.com">Start Bootstrap</a> </strong> </li> <li>Date: <strong><a href="http://startbootstrap.com">April 2014</a> </strong> </li> <li>Service: <strong><a href="http://startbootstrap.com">Web Development</a> </strong> </li> </ul> <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button> </div> </div> </div> </div> </div> </div> <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-content"> <div class="close-modal" data-dismiss="modal"> <div class="lr"> <div class="rl"> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2"> <div class="modal-body"> <h2>Project Title</h2> <hr class="star-primary"> <img src="images/portfolio/circus.f7dd357e.png" class="img-responsive img-centered" alt=""> <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p> <ul class="list-inline item-details"> <li>Client: <strong><a href="http://startbootstrap.com">Start Bootstrap</a> </strong> </li> <li>Date: <strong><a href="http://startbootstrap.com">April 2014</a> </strong> </li> <li>Service: <strong><a href="http://startbootstrap.com">Web Development</a> </strong> </li> </ul> <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button> </div> </div> </div> </div> </div> </div> <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-content"> <div class="close-modal" data-dismiss="modal"> <div class="lr"> <div class="rl"> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2"> <div class="modal-body"> <h2>Project Title</h2> <hr class="star-primary"> <img src="images/portfolio/game.ecddd2d9.png" class="img-responsive img-centered" alt=""> <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p> <ul class="list-inline item-details"> <li>Client: <strong><a href="http://startbootstrap.com">Start Bootstrap</a> </strong> </li> <li>Date: <strong><a href="http://startbootstrap.com">April 2014</a> </strong> </li> <li>Service: <strong><a href="http://startbootstrap.com">Web Development</a> </strong> </li> </ul> <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button> </div> </div> </div> </div> </div> </div> <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-content"> <div class="close-modal" data-dismiss="modal"> <div class="lr"> <div class="rl"> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2"> <div class="modal-body"> <h2>Project Title</h2> <hr class="star-primary"> <img src="images/portfolio/safe.9be221da.png" class="img-responsive img-centered" alt=""> <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p> <ul class="list-inline item-details"> <li>Client: <strong><a href="http://startbootstrap.com">Start Bootstrap</a> </strong> </li> <li>Date: <strong><a href="http://startbootstrap.com">April 2014</a> </strong> </li> <li>Service: <strong><a href="http://startbootstrap.com">Web Development</a> </strong> </li> </ul> <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button> </div> </div> </div> </div> </div> </div> <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-content"> <div class="close-modal" data-dismiss="modal"> <div class="lr"> <div class="rl"> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2"> <div class="modal-body"> <h2>Project Title</h2> <hr class="star-primary"> <img src="images/portfolio/submarine.fb8702f4.png" class="img-responsive img-centered" alt=""> <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p> <ul class="list-inline item-details"> <li>Client: <strong><a href="http://startbootstrap.com">Start Bootstrap</a> </strong> </li> <li>Date: <strong><a href="http://startbootstrap.com">April 2014</a> </strong> </li> <li>Service: <strong><a href="http://startbootstrap.com">Web Development</a> </strong> </li> </ul> <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button> </div> </div> </div> </div> </div> </div>'),a.put("views/home-portfolio.view.html",'<section id="portfolio"> <div class="container"> <div class="row"> <div class="col-lg-12 text-center"> <h2>Portfolio</h2> <hr class="star-primary"> </div> </div> <div class="row"> <div class="col-sm-4 portfolio-item"> <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal"> <div class="caption"> <div class="caption-content"> <i class="fa fa-search-plus fa-3x"></i> </div> </div> <img src="images/portfolio/cabin.0b602027.png" class="img-responsive" alt=""> </a> </div> <div class="col-sm-4 portfolio-item"> <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal"> <div class="caption"> <div class="caption-content"> <i class="fa fa-search-plus fa-3x"></i> </div> </div> <img src="images/portfolio/cake.3e82908f.png" class="img-responsive" alt=""> </a> </div> <div class="col-sm-4 portfolio-item"> <a href="#portfolioModal3" class="portfolio-link" data-toggle="modal"> <div class="caption"> <div class="caption-content"> <i class="fa fa-search-plus fa-3x"></i> </div> </div> <img src="images/portfolio/circus.f7dd357e.png" class="img-responsive" alt=""> </a> </div> <div class="col-sm-4 portfolio-item"> <a href="#portfolioModal4" class="portfolio-link" data-toggle="modal"> <div class="caption"> <div class="caption-content"> <i class="fa fa-search-plus fa-3x"></i> </div> </div> <img src="images/portfolio/game.ecddd2d9.png" class="img-responsive" alt=""> </a> </div> <div class="col-sm-4 portfolio-item"> <a href="#portfolioModal5" class="portfolio-link" data-toggle="modal"> <div class="caption"> <div class="caption-content"> <i class="fa fa-search-plus fa-3x"></i> </div> </div> <img src="images/portfolio/safe.9be221da.png" class="img-responsive" alt=""> </a> </div> <div class="col-sm-4 portfolio-item"> <a href="#portfolioModal6" class="portfolio-link" data-toggle="modal"> <div class="caption"> <div class="caption-content"> <i class="fa fa-search-plus fa-3x"></i> </div> </div> <img src="images/portfolio/submarine.fb8702f4.png" class="img-responsive" alt=""> </a> </div> </div> </div> </section>'),a.put("views/home.view.html",'<div id="page-top" class="index"> <div data-ui-view="navigation"></div> <!-- TODO --> <div data-ui-view="header"></div> <div data-ui-view="portfolio"></div> <div data-ui-view="portfolio-modals"></div> <div data-ui-view="about"></div> <div data-ui-view="contact"></div> <div data-ui-view="footer"></div> <div class="scroll-top page-scroll visible-xs visible-sm"> <a class="btn btn-primary" href="#page-top" du-smooth-scroll duration="1000"> <i class="fa fa-chevron-up"></i> </a> </div> </div>')}]);