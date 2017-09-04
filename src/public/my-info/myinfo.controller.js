(function(){
	'use strict';

	angular.module('public')
	.controller('MyInfoController', MyInfoController);

	MyInfoController.$inject = ['ValidateForm'];
	function MyInfoController(ValidateForm){
		var myInfoCtrl = this;

		myInfoCtrl.name = ValidateForm.name;
		myInfoCtrl.surname = ValidateForm.surname;
		myInfoCtrl.email = ValidateForm.email;
		myInfoCtrl.phone = ValidateForm.phone;
		myInfoCtrl.dish = ValidateForm.dish;
		myInfoCtrl.title = ValidateForm.title;
		myInfoCtrl.description = ValidateForm.description;

	}

})();