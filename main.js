'use strict';

var namesArr = [];

document.addEventListener('DOMContentLoaded', init);

function init() {
	document.querySelector('#submitNames').addEventListener('click', submitNames);
	document.querySelector('#getGroups').addEventListener('click', getGroups);
}

function submitNames(event) {
	var namesList = document.getElementById('namesList');
	var nameListItem;
	var names = document.getElementById('names').value;
	var name = names.split(', ');

	for (var i = 0; i < name.length; i++) {
		namesArr.push(name[i]);
		nameListItem = document.createElement('li');
		nameListItem.innerHTML = name[i];
		namesList.appendChild(nameListItem);
	}

	document.getElementById('names').value = '';
}

function getGroups(event) {
	var groupSize = document.getElementById('groupSize').value;
	var groupList = document.getElementById('groupList');
	var groupListItem;
	var checkArr = [];
	var elements = document.querySelectorAll('.group'), groupListLength = elements.length; 

	if (groupList.hasChildNodes()) {
		for(var i = 0; i < groupListLength; i++){
			var ele = document.querySelector('.group');
			ele.parentNode.removeChild(ele);
		}
	}
	var numGroups = namesArr.length / groupSize;
	var rando = namesArr[Math.floor(Math.random() * namesArr.length)];
	
	if (groupSize == 1) {
		groupListItem = document.createElement('li');
		groupListItem.setAttribute('class', 'group');
		groupListItem.innerHTML = rando;
		groupList.appendChild(groupListItem);
	} else {
	
		for (var k = 0; k < numGroups; k++) {
			var groupArr = [];	

			for (var j = groupSize; j > 0; j--) {
				

				while (checkArr.indexOf(rando) != -1) {
					var rando = namesArr[Math.floor(Math.random() * namesArr.length)];

					if (checkArr.length === namesArr.length){
						break;
					}
				}

				if (checkArr.indexOf(rando) === -1) {
					if (groupArr.indexOf(rando) === -1) {
						groupArr.push(rando);
					}
					checkArr.push(rando);
				}
				
			}
			groupListItem = document.createElement('li');
			groupListItem.setAttribute('class', 'group');
			groupListItem.innerHTML = groupArr.join(', ');
			groupList.appendChild(groupListItem);
		}
	}
} // josh, bill, frank, tyler, jake, pbs, bmo, finn, greg, ted, sara, cait, laine, lauren, linda, sharon, beth, erica