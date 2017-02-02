// ==UserScript==
// @name        ENT Auto-connect
// @namespace   fr.hadrienbecle.exiademerde
// @include     https://wayf.cesi.fr/login*
// @exclude     https://wayf.cesi.fr/login*client_name*
// @version     1
// @grant       none
// @run-at      document-end
// ==/UserScript==

window.location = "https://wayf.cesi.fr/login?client_name=ClientIdpViaCesiFr&needs_client_redirection=true";
