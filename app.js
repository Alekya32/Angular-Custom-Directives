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
		},
		/*compile:function(element,attributes){
			console.log("In compiler.................")
			console.log(element.html());
			console.log(attributes);

			return{
				pre:function(scope,elems,attrs){
					console.log("Pre link........");
					console.log(scope.userDetails);
					console.log(elems);
					console.log(attrs);
					if(scope.userDetails.name=="Tolstoy"){
						elems.removeAttr('class')
					}
				},
				post:function(scope,elems,attrs){
					console.log("Post link !!!!!");
					console.log(scope);
					console.log(elems);
					console.log(attrs);
				}
				
			}
		}*/

		link:function(scope,elems,attrs){
					console.log("Post link !!!!!");
					console.log(scope);
					console.log(elems);
					console.log(attrs);
				}
		
	}
})
