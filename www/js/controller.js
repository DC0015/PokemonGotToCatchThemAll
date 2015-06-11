// JavaScript Document
var colorValue = 0;
var starter;
var duration = 300;

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
.controller('pokedexCtrl', function($scope, $stateParams, $ionicPopup, $timeout) {
	//var bulba = document.getElementById("bulba").value;
	//alert('it works');
	//alert(colorValue);
	alert(starter);
	if (starter == 'bulba')
	{
		alert('it works!');
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
			buttons: 
			[{
				text: 'OK'
			}]
			}); }, 5000);
		
	});
