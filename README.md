## Installation des scripts

1. Télécharger [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) sur Firefox (cela fonctionne peut-être avec [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) sur Chrome/Opera/vivaldi mais ça n'a pas été testé)
2. Cliquer sur chacun des scripts puis sur "Raw" pour les installer
3. Dans les réglages de Greasemonkey, éditer "ENT AD Auto-connect" et "NG Auto-connect" avec les identifiants

## Chargement plus rapide des pages de connexions

Avec uBlock Origin, dans les préférences, "Mon filtrage dynamique" :
````
lan.viacesi.fr * * block
lan.viacesi.fr * inline-script noop
wifi.viacesi.fr * * block
wifi.viacesi.fr * inline-script noop
sts.viacesi.fr * * block
sts.viacesi.fr * inline-script noop
wayf.cesi.fr * * block
wayf.cesi.fr * inline-script noop
````
