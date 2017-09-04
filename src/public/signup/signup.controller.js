(function(){
	'use strict';

	angular.module('public')
	.controller('SignUpController', SignUpController);

	SignUpController.$inject = ['ValidateForm', 'ApiPath'];
	function SignUpController(ValidateForm, ApiPath){
		var signUpCtrl = this;
		var dishArray = [];
		signUpCtrl.submit = function () {
    		var present = ValidateForm.searchItem();
    		present.then(function(responce){
				signUpCtrl.menuItem = responce.data.menu_items;
				
				for(var i = 0; i < signUpCtrl.menuItem.length; i++){
					dishArray.push(signUpCtrl.menuItem[i].short_name);
					if(signUpCtrl.favoriteDish === signUpCtrl.menuItem[i].short_name){
						signUpCtrl.mealName = signUpCtrl.menuItem[i].name;
						signUpCtrl.description = signUpCtrl.menuItem[i].description; 
						break;
					} 
				}
				if(dishArray.length === signUpCtrl.menuItem.length){
					signUpCtrl.notFound = true;
				}
				ValidateForm.saveData(signUpCtrl.firstname, signUpCtrl.lastname, signUpCtrl.email, signUpCtrl.phone, signUpCtrl.favoriteDish, signUpCtrl.mealName, signUpCtrl.description);
				signUpCtrl.info = "Your information has been saved";
			})
  		};

	}

})();