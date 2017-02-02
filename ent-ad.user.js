// ==UserScript==
// @name        ENT AD Auto-connect
// @namespace   fr.hadrienbecle.exiademerde
// @include     https://sts.viacesi.fr/adfs/ls/
// @version     1
// @grant       none
// @run-at      document-end
// ==/UserScript==

document.getElementById("userNameInput").value = "prenom.nom@viacesi.fr";
document.getElementById("passwordInput").value = "motdepasse";
document.getElementById("loginForm").submit();
