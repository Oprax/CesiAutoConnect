// ==UserScript==
// @name        NG Auto-connect
// @namespace   fr.hadrienbecle.exiademerde
// @include     https://10.167.128.1:1003/*
// @include     https://wifi.viacesi.fr:1003/*
// @include     https://10.167.0.1:1003/*
// @include     https://lan.viacesi.fr:1003/*
// @version     1
// @grant       none
// ==/UserScript==

if (document.getElementsByClassName("fec").length == 1) {
	document.forms[0].answer.value = 1;
	document.forms[0].submit();
} else {
	document.getElementById("ft_un").value = "prenom.nom@viacesi.fr";
	document.getElementById("ft_pd").value = "motdepasse";
}

document.forms[0].submit();
