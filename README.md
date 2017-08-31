# Antivirus Automata Finito #

Este projecto pretende demostrar el funcionamiento de un antivirus con un autómata finito determinista.
Busca una secuencia de cuatro bytes con los números decimales.

## Virus considerados ##
Los siguientes son los virus a considerar:
* Virus Usama: 15 30 15 49
* Virus Amtrax (supongamos que se escribe así): 72 72 15 29
* Virus éBola (supongamos que se escribe así): 29 32 53 29

## Ambiente de desarrollo ##
Esta es una aplicación Angular 4, y usa Angular CLI para el ambiente de desarrollo.

Instalación:
* Instalación de node.js y npm <https://nodejs.org/es/download/>
* Instalación de Angular CLI 
```bash
npm install -g @angular/cli
```
* Instalar las dependencias
  * En la carpeta del proyecto:
  ```bash
  npm install
  ```
* correr `ng serve` para crear un servidor web de desarrollo. En el browser abrir <http://localhost:4200/>.

## Aplicación Compilada
* Correr `ng build --prod`para compilar la aplicación en la carpeta `dist`, cuyo contenido podrá copiarse a cualquier servidor web.
* Igualmente se puede revisar al aplicación en <https://csotomon.github.io/AFAntivirus/> .
