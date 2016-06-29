(function () {
	angular.module('hotspotsAngularUiApp')
		.controller('HotspotUiImagePickerController', HotspotUiImagePickerController);

	HotspotUiImagePickerController.$inject = ["$scope"];
	function HotspotUiImagePickerController($scope) {
		var vm = this;
		vm.point = {};
		vm.hotspotImageSource = $scope.hotspotImageSource;
		vm.sliderValue = 1;
		vm.points = [];
		vm.savePoint = function() {
			$scope.$broadcast("hotspotUi: pointAdded", vm.point);
		}

		vm.addPoint = function(event) {
			console.log("offsetX", event.offsetX);
			console.log("offsetY", event.offsetY);
			vm.point.x = event.offsetX;
			vm.point.y = event.offsetY;


		}
	}
})();