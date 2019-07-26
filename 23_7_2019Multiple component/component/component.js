var app = angular.module("myApp", []);

app.component("personalDetails",{
    bindings: { 
        parentName : "=",// name:"&" 
        academicData: "="  
        
    },
    // template:   " <h1>Welcome, to the angular components!{{ ctrl.studentInfo[0] }},{{ ctrl.studentData}}  </h1>",
    templateUrl: "template/personalTemplate.html",
    controller:   ["myService", function(myService){
		var self = this;
		myService.getData().then(function(response){
            self.studentPersonalData = response.Students;
	
        self.studentInformation = [];

        for( var x of self.studentPersonalData){
                for(var x1 of self.academicData){
                    if(x.stdId == x1.stdId){
                       x["percentage"] = x1.percentage;
                        self.studentInformation.push(x);
                       
                    }
                }
               
           }
});
 
}],
controllerAs:"parentCtrl"
});