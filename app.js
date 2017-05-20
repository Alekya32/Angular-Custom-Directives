var app=angular.module("myApp",[])
app.controller("myController",["$scope",function($scope){
	$scope.message="Good Morning:)";
	$scope.companyName="TechMinds Pvt Ltd";
	$scope.userDetails=[
		{name: "Robin Sharma",address:"california,United States"},
		{name:"savi Sharma",address:"Bhopal,India"},
		{name:"Tolstoy" ,address:"USA"}]
	$scope.changeCompanyName=function(){
		$scope.companyName="Techmind Solutions";
	}

}])

app.directive("myCustomerDetailsDirective",function(){
	return{
		restrict:'EACM',
		/*template:"<h3>Custom directive:  {{message}}</h3>",*/
		templateUrl:'customerDetails.html',
		replace:true,
		scope:{
				userName:'@',
				userDetails:'=',
				changeName:'&'
		}
	}
})
