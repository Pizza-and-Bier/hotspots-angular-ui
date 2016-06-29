/**
 * Created by apizzimenti on 6/29/16.
 */

(function(){
	angular.module('hotspotsAngularUiApp')
		.controller('modalController', modalController);
	
	modalController.$inject = ["$scope"];

	function modalController($scope) {

		var h = new Hotspot();

		$scope.state = {
			imageSource:"images/yeoman.png",
			sliderValue: 0,
			points: []
		}
	}
})();
