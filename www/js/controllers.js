angular.module('app.controllers', [])
  
.controller('parksForHikingWalkingCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})
   
   
.controller('mountainBikeTrailsCtrl', function($scope) {

})

.controller('railroardsquareCtrl', function($scope) {

})
   
.controller('eventsCtrl', function($scope) {

})
      
.controller('loginCtrl', function($scope, $state) {
  $scope.valid = false;
  
  $scope.submit = function(login) {
    if (login.username == "Emily" && login.password == "1234") {
      // go to homepage
      $scope.valid = true
      $state.go("home")
    }
  }
})
   
.controller('createAnAccountCtrl', function($scope) {

})
   
.controller('cascadesParkCtrl', function($scope) {

})
   
.controller('micosuckeeGreenwayCtrl', function($scope) {

})
   
.controller('lafayetteHeritageTrailsCtrl', function($scope) {

})
   
.controller('maclayGardensCtrl', function($scope) {

})
   
.controller('lakeJacksonIndianMoundsCtrl', function($scope) {

})
   
.controller('volunteeringCtrl', function($scope) {

})
   
.controller('artsCtrl', function($scope) {

})
 