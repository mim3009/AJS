angular.module("sportsStore")
.constant('dataUrl', "http://localhost:2403/products")
.constant('orderUrl', "http://localhost:2403/orders")
.controller('sportsStoreCtrl', function($scope, $http, $location, dataUrl, orderUrl, cart){
	
	$scope.data = {};

	$http.get(dataUrl).then(fulfilled, rejected);

	function fulfilled(response) {
		$scope.data.products = response.data;
	}

	function rejected(error) {
		$scope.data.error = error;
	}

	$scope.sendOrder = function (shippingDetails) {
		var order = angular.copy(shippingDetails);
		order.products = cart.getProducts();
		$http.post(orderUrl, order).then(orderFullfiled, orderRejected).finally(function () {
			$location.path("/complete");
		});

	}

	function orderFullfiled(response) {
		$scope.data.orderId = response.data.id;
		cart.getProducts().length = 0;
	}

	function orderRejected(error) {
		$scope.data.orderError = error;
	}

});