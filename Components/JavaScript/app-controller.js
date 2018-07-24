var app=angular.module("CRMApp",[]);
app.controller("CRMAppctrl",function($scope){
	
	$scope.pendinglist=[{name:'Nani',phone:'9564235421',campaign:'Lost Debit Card',status:'Pending'},
	{name:'Charan',phone:'9564287634',campaign:'Lost Debit Card',status:'Pending'},
	{name:'Mark',phone:'9706835421',campaign:'Update Aadhar',status:'Pending'},
	{name:'Aditya',phone:'9567768521',campaign:'Lost Debit Card',status:'Pending'},
	{name:'Kiran',phone:'9564235421',campaign:'Lost Debit Card',status:'Pending'},
	{name:'Aliza',phone:'8760975421',campaign:'Update Aadhar',status:'Pending'},
	{name:'Sharma',phone:'7854305421',campaign:'Update Aadhar',status:'Pending'},
	{name:'Nagaraj',phone:'7865485421',campaign:'Lost Debit Card',status:'Pending'},
	{name:'Shruthi',phone:'9768965478',campaign:'Lost Debit Card',status:'Pending'},
	{name:'Puja',phone:'8756506413',campaign:'Update Aadhar',status:'Pending'}];

	$scope.completedlist=[{name:'Puja',phone:'8756506413',campaign:'Lost Debit Card',status:'Completed'}];

	
	 $scope.moveToCompletedList = function(index) {
	 $scope.pendinglist[index].status='Completed';
	 $scope.completedlist.push($scope.pendinglist[index]);
     $scope.pendinglist.splice(index,1);
 
  };
  

});