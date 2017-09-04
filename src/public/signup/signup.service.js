(function(){
	'use strict';

	angular.module('public')
	.service('ValidateForm', ValidateForm);

	ValidateForm.$inject = ['$http'];
	function ValidateForm($http){
		var vform = this;

		vform.searchItem = function(){
			return $http({
				method:'GET',
				url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
			});
		}
		vform.saveData = function(a, b, c, d, e, f, g){
			vform.name = a;
			vform.surname = b;
			vform.email = c;
			vform.phone = d;
			vform.dish = e;
			vform.title = f;
			vform.description = g;
		}

	}

	


})();