(function () {
	angular.module('hotspotsAngularUiApp')
		.directive('hotspotUiImagePicker', hotspotUiImagePicker);

	hotspotUiImagePicker.$inject = [];
	function hotspotUiImagePicker() {
		return {
			restrict: "E",
			scope: {
				"hotspotImageSource": "@"
			},
			templateUrl: "scripts/hotspot-ui-image-picker/hotspot-ui-image-picker.html",
			controller: "HotspotUiImagePickerController",
			controllerAs: "vm",
			bindToController: true,
			link: link
		};

		function link(scope, elem, attrs) {
			
		}
	}
})();