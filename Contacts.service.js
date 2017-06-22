(function(myApp) {
	myApp.autoSuggestModule
		.service('contacts', function($filter) {
		  this.JSON = [
  {"name" : "Ann Liebmann" , "phone" : "+27-61-453-5444", "email":"ann.lie@", "policy_no" : "0023283887"},
	{"name" : "Ann Summer" , "phone" : "+27-61-453-5444", "email":"ann.summer@", "policy_no" : "0013983887"},
	{"name" : "Anabelle Samuel" , "phone" : "+27-61-453-5444", "email":"ana.sam@", "policy_no" : "0013983887"},
   {"name" : "Jabir" , "phone" : "+27-61-453-5444", "email":"jabir.xyz@", "policy_no" : "0045683887"},
    {"name" : "John" , "phone" : "+27-61-453-5444", "email":"john.efg@", "policy_no" : "0013983887"},
     {"name" : "Peter" , "phone" : "+27-61-453-5444", "email":"peter.hij@", "policy_no" : "0013983887"}
  ]
			    
    			this.getData = function(searchKey) {
    			  var filteredArr = [];
    			  if(searchKey && searchKey.length > 0){
							filteredArr = $filter('filter')(this.JSON, searchKey);
						}
    			  return {filteredArr};
    			}
		})
})(myApp || {});