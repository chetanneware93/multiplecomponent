app.service('myService', function ($http) {

  function getData (){
return $http.get("json/students.json").then(function(response){
    console.log('inside response',response);
      return response.data;
     });
     
 }; 
 return{
    getData : getData
 }
});