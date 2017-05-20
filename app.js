var app=angular.module("myApp",[])
app.controller("myController",["$scope",function($scope){
	$scope.message="Good Morning:)";
}])

app.directive("myCustomerDetailsDirective",function(){
	return{
		restrict:'EACM',
		template:"<h3>Customer details</h3>",
		replace:true
	}
})