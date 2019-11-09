'use strict';

/*jslint latedef:false*/

angular.module('QuepidApp')
  .controller('ScorerListingCtrl', [
    '$window',
    '$scope',
    'flash',
    'customScorerSvc',
    function (
      $window,
      $scope,
      flash,
      customScorerSvc
    ) {
      var ctrl = this;
      console.log("About to set the team");
      ctrl.scorer = $scope.scorer;
      ctrl.team  = $scope.team;

      $scope.$watch('team', function() {
        console.log("We are watching team in the scope");
        ctrl.team = $scope.team;
      });


      // Functions
      ctrl.deleteScorer = deleteScorer;

      function deleteScorer() {
        var deleteScorer = $window.confirm('Are you absolutely sure you want to delete?');

        if (deleteScorer) {
          customScorerSvc.delete(ctrl.scorer)
            .then(function() {
              flash.success = 'Scorer deleted successfully';
            },
            function(response) {
              flash.error = response.data.error;
            });
        }
      }
    }
  ]);
