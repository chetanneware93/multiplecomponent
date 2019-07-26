app.component("academicDetails",{
    bindings: {
        studentId: "=", //Two way binding
        personalData: "="
},
templateUrl: "template/academicsTemplate.html",
controller:   ["myServiceAcademic", function(myServiceAcademic){
    var self = this;
    myServiceAcademic.getData().then(function(response){
        self.studentAcademicData = response.studentAcademics;
    });
}],
controllerAs : "academicCtrl"
});