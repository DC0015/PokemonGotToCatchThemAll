// JavaScript Document
var colorValue = 0;
var starter;
var duration = 300;
var lat;
var long;

/*function geoCheckReady () {
			
			navigator.geolocation.getCurrentPosition(geoCheck);
			alert('voert hij dit nog uit?');
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
	alert(starter);
	
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
	
	$timeout (
	function() {
		/*$scope.vibrate = fuction(duration) {
			vibrator.vibrate(duration);
		};
		$cordovaVibration.vibrate(2000);*/
		// Vibrate 100ms
		 
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
			}); }, 5000);
		document.addEventListener("deviceready", onDeviceReady, false)
		

    // device APIs are available
    //
	setInterval(onDeviceReady, 100);
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
		//navigator.geolocation.getCurrentPosition(geoCheck);
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />';
		
		lat = position.coords.latitude + 0.000333;
		alert(position.coords.latitude +" "+lat);
		long = position.coords.longitude;
		//alert(lat);
		//lat = lat + 0.000333;
		
		//alert(long);
		long = long - 0.00079;
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
});

