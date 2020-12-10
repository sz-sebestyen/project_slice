// Feladat: TODO aplikáció
// 10 üres mező áll rendelkezésre alapból
// egy hozzáadás gomb
// checkbox-ok állapotjelzésre az elemeken
// text input mező leírásnak minden lista elemen
// törlés gomb mindegyik lista elemen

"use strict";

function _load() {

	// root elemet eltárolom
	const root = document.getElementById("root");


	// az üres mezők száma
	const numberOfItems = 10;


	// html strucktúra egy változóban
	// div checkbox,textinput,törlésbutton
	const itemHTML = `
		<div class="item">
			<input class="status" type="checkbox" name="status"/>
			<input class="what" type="text" name="what"/>
			<button class="delete" type="button">Delete</button>
		</div>
	`;


	// n-szer hozzáadom a root-hoz
	for (let index = 0; index < numberOfItems; index++) {
		root.insertAdjacentHTML("beforeend", itemHTML);
	}


	// root eleme elé teszek egy hozzáadás gombot
	const addBtnHTML = `<button class="add-item" type="button">Add item</button>`;
	root.insertAdjacentHTML("beforebegin", addBtnHTML);
	// ennek az item-nek a törlés gombján még nincs click event. Lsd.: AddDeleteEventToNewItem


	// függvény amit a törlés gommbokhoz rendelek
	const DeleteItem = function (event) {
		console.log(event);
		console.log(event.target);
		console.log(event.target.parentElement);
		
		event.target.parentElement.remove();
	};


	// kijelölöm classnév alapján az összes törlés gombot, és változóba mentem
	// click eseményt adok mindegyikhez
	const delBtns = document.querySelectorAll("button.delete");
	delBtns.forEach(function (btn) {
		btn.addEventListener("click", DeleteItem);
	});


	
	// függvény, ami click eventet ad a hozzáadott item-hez
	const AddDeleteEventToNewItem = function () {
		const allDelBtns = document.querySelectorAll("button.delete");
		allDelBtns[allDelBtns.length - 1].addEventListener("click", DeleteItem);
	};


	// függvény, amit a hozzáadás gomb click eseményéhez rendelek
	const AddItem = function () {
		root.insertAdjacentHTML("beforeend", itemHTML);
		AddDeleteEventToNewItem();
	};

	
	// a hozzáadás gombhoz click eseményt rendelek
	const addBtn = document.querySelector("button.add-item");
	addBtn.addEventListener("click", AddItem);

}

window.addEventListener("load", _load);
