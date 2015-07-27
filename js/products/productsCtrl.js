app.controller('productsCtrl', function($scope, productService, $routeParams){
	
	if($routeParams.id === 'shoes'){
		$scope.productData = productService.shoeData;
	}
	else if($routeParams.id === 'socks'){
		$scope.productData = productService.sockData;
	}

});