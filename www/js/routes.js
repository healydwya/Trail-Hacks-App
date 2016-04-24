angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('findYourAdventure.parksForHikingWalking', {
    url: '/parks',
    views: {
      'side-menu21': {
        templateUrl: 'templates/parksForHikingWalking.html',
        controller: 'parksForHikingWalkingCtrl'
      }
    }
  })

  .state('findYourAdventure.mountainBikeTrails', {
    url: '/trails',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mountainBikeTrails.html',
        controller: 'mountainBikeTrailsCtrl'
      }
    }
  })

  .state('findYourAdventure.events', {
    url: '/events',
    views: {
      'side-menu21': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('findYourAdventure', {
    url: '/findyouradventure',
    templateUrl: 'templates/findYourAdventure.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('createAnAccount', {
    url: '/createaccount',
    templateUrl: 'templates/createAnAccount.html',
    controller: 'createAnAccountCtrl'
  })

  .state('findYourAdventure.cascadesPark', {
    url: '/cascades',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cascadesPark.html',
        controller: 'cascadesParkCtrl'
      }
    }
  })

  .state('findYourAdventure.micosuckeeGreenway', {
    url: '/micosuckee',
    views: {
      'side-menu21': {
        templateUrl: 'templates/micosuckeeGreenway.html',
        controller: 'micosuckeeGreenwayCtrl'
      }
    }
  })

  .state('findYourAdventure.lafayetteHeritageTrails', {
    url: '/lafayette',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lafayetteHeritageTrails.html',
        controller: 'lafayetteHeritageTrailsCtrl'
      }
    }
  })

  .state('findYourAdventure.maclayGardens', {
    url: '/maclay',
    views: {
      'side-menu21': {
        templateUrl: 'templates/maclayGardens.html',
        controller: 'maclayGardensCtrl'
      }
    }
  })

  .state('findYourAdventure.lakeJacksonIndianMounds', {
    url: '/indianmounds',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lakeJacksonIndianMounds.html',
        controller: 'lakeJacksonIndianMoundsCtrl'
      }
    }
  })

  .state('findYourAdventure.volunteering', {
    url: '/volunteering',
    views: {
      'side-menu21': {
        templateUrl: 'templates/volunteering.html',
        controller: 'volunteeringCtrl'
      }
    }
  })

  .state('findYourAdventure.arts', {
    url: '/arts',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arts.html',
        controller: 'artsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page5')

  

});