// scripts.js

//pobranie elementów o klasie "button" ze strony:
var withMenuItemsClass = document.getElementsByClassName('button');
//przypisanie elementów do zmiennej x:
var x = withMenuItemsClass;
//ustalenie liczby elementów o klasie "button" i liczby powtórzeń w pętli (oczywiście tego może nie być, ale chciałem zobaczyć liczbę w konsoli :) ):
console.log(x.length);
//przypisanie tej liczby do zmiennej y:
var y = x.length;
//pętla for mająca wykonać się y razy:
for (var z = 0; z < y; z++) {
//wyświetlenie tekstów z elementów o klasie "button":
	var buttonTxt = withMenuItemsClass[z].innerText;
	console.log(buttonTxt);
    }