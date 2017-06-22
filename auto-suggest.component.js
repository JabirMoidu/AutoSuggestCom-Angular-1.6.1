(function(myApp) {
  

  var autoSuggestComOpt = {
      templateUrl: 'auto-suggest-tmp.html',
      bindings: {
        onKeyPress: '&',
        resultArr: '<'
      },
      controller: 'autoSuggestComController',
      controllerAs: 'asc' 
  }
  
  myApp.autoSuggestModule.component('autoSuggestCom', autoSuggestComOpt);
    
  function autoSuggestComControllerFun($scope) {
    console.log($scope);
  }
  myApp.autoSuggestModule.controller('autoSuggestComController', autoSuggestComControllerFun);
})(myApp || {});