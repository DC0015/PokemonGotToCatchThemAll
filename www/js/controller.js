// JavaScript Document
var colorValue = 0;
var starter;
var duration = 300;
var lat;
var long;
var positionLat;
var positionLong;
var myIntr;

/*function geoCheckReady () {
			
			navigator.geolocation.getCurrentPosition(geoCheck);
			alert('voert hij dit nog uit?');
		}*/
/*function latLong ()
{
	lat = positionLat + 0.000333;
	//alert(position.coords.latitude +" "+lat);
	long = positionLong - 0.00079;
	alert(lat);
}*/
function vibrate() {
        navigator.notification.vibrate(2000);
    }
function playBeep() {
        navigator.notification.beep(3);
    }

function selectStarter(element, color) {
	if(colorValue < 1)
	{
		element.style.backgroundColor = color;
		starter = element.id;
		document.getElementById('button').style.visibility = 'visible';
		colorValue = 1;
		console.log(starter);
		
		
	}
	else
	{
		color = '#78D0E8';
		element.style.backgroundColor = color;
		document.getElementById('button').style.visibility = 'hidden';
		colorValue = 0;
		console.log(colorValue);
		
	}
}
/*
function caughtPokemon() {
		document.getElementById('caught').style.visibility = 'visible';
}*/

angular.module('starter.controllers', [])
.controller('pokedexCtrl', function($scope, $stateParams, $ionicPopup, $timeout, $state) {
	//var bulba = document.getElementById("bulba").value;
	//alert('it works');
	//alert(colorValue);
	//alert(starter);
	
	if (starter == 'bulba')
	{
		//alert('it works!');
		document.getElementById('caughtBulba').style.visibility = 'visible';
	}
	else if(starter == 'char')
	{
		document.getElementById('caughtChar').style.visibility = 'visible';
	}
	else if(starter == 'squirt')
	{
		document.getElementById('caughtSquirt').style.visibility = 'visible';
	}
	else if(starter == 'cat')
	{
		document.getElementById('caughtCat').style.visibility = 'visible';
	}

/*	$scope.swipeUP = function () {
	  alert("test");
	};*/
	
	/*$timeout (
	function() {
		/*$scope.vibrate = fuction(duration) {
			vibrator.vibrate(duration);
		};
		$cordovaVibration.vibrate(2000);*/
		// Vibrate 100ms
		 
		/*vibrate();
//		playBeep();
		$ionicPopup.show({
			templete: '',
			title: '<b>Warning</b>',
			subTitle: 'A wild Pokémon appeared',
			scope: $scope,
			buttons: 
			[{
				text: 'Battle',
				onTap: function(){
					//alert('I enter the function');
					$state.go('battle');
				}
			}]
			}); }, 20000);*/
		document.addEventListener("deviceready", onDeviceReady, false)
		

    // device APIs are available
    //
	//setInterval(onDeviceReady, 5000);
    function onDeviceReady() {
		
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
		//navigator.geolocation.getCurrentPosition(geoCheck);
		//alert("gewoon om zeker te weten");
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        
		
		
		//alert(lat);
		//lat = lat + 0.000333;
		positionLat = position.coords.latitude;
		positionLong = position.coords.longitude;
		element.innerHTML = 'Latitude: '           + positionLat             + '<br />' +
                            'Longitude: '          + positionLong             + '<br />';
		//alert(long);
		//long = long - 0.00079;
		//alert(long);
		/*function geoCheck() {
			alert(lat + "What'choo talkin' 'bout, Willis?");
		}*/
		/*return lat;
		return long;*/
		/*setInterval*//*(function geoCheck()
	{
		alert(position.coords.latitude + " "+ lat);
	}, 100);*/
		
    }
	
	
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
	//geoCheckReady();
	$timeout (latLong, 2000);
	function latLong(){
	lat = positionLat //+ 0.000333;
	//alert(position.coords.latitude +" "+lat);
	long = positionLong //- 0.00079;
	//alert(lat);
	latCheck();
	}
	
	/*setInterval(function latCheck() {
		alert(lat);
	}, 3000);*/
	
	myIntr = setInterval(function (){check()}, 3000);
	function check() {
		//alert("function check");
		//alert("lat: "+ lat+ " positionLat: " + positionLat + " long: " + long + " positionLong: " + positionLong);
	if(positionLat > (lat + 0.0001) && positionLat < (lat + 0.0002) || positionLong > (long + 0.0001) && positionLong < (long + 0.0002)) 
	{
		vibrate();
//		playBeep();
		$ionicPopup.show({
			templete: '',
			title: '<b>Warning</b>',
			subTitle: 'A wild Pokémon appeared',
			scope: $scope,
			buttons: 
			[{
				text: 'Battle',
				onTap: function(){
					//alert('I enter the function');
					$state.go('battle');
				}
			}]
			});
		clearInterval(myIntr);
	}
	else
	{
		//alert("else check");
		onDeviceReady();
	}
	}
});