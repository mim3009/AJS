angular.module("sportsStore")
.constant('dataUrl', "http://localhost:2403/products")
.controller('sportsStoreCtrl', function($scope, $http, dataUrl){
	
	$scope.data = {};

	$http.get(dataUrl).then(fulfilled, rejected);

	function fulfilled(response) {
		$scope.data.products = response.data;
	}

	function rejected(error) {
		$scope.data.error = error;
	}

});