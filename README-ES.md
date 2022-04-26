<div align="center" markdown="1">



# Angular 13 + Eslint + Prettier + Husky
<br>

<img src="https://brandslogos.com/wp-content/uploads/images/large/angular-icon-logo.png" alt="Angular" width="400">

</div>

## Que es línea base

*@celerik/angular-boilerplate* nos entrega una base de código basada en los estándares del grupo RSI.
## Lo que  está incluido
- Soporte Sass y Scss
- Soporte Tailwindcss
- Soporte TypeScript 
- Soporte WebStorm/PhpStorm
- Eslint + Prettier Rules
- Soporte Angular Material y Ng Zorro

## Requerimiento
- NodeJs >= 14.x
- A node package manager such as Npm or Yarn (Yarn preferred)

## Quick start
- Descargar esta plantilla
- Descomprimir la carpeta
- Opcionalmente puede seleccionar la rama que tiene alguna de la ui de su preferencia: Angular Material O Ng Zorro
- modificar package.json con el nombre de tu aplicación

```
cd "folder name"
git checkout angular_material o git checkout ng_zorro (Opcional) 
yarn install 
ng serve 
```

## Adding new components to the project
para estandarizar la creación de componentes se prefiere el uso de ng generate para crear componentes 
- Creating a component/schematic:
```
ng generate component component/{{name}}
```

la carpeta raíz can puede ser manualmente especificada
```
ng generate component {{path}}/{{name}}
```
la salida o archivos generados en "./src/{{path}}/{{name}}/" para cualquier caso.

## Encontrando dependendecies no usadas
- Primero necesitarás instalar depcheck globalmente (una sola vez):
```
yarn global add depcheck
```
- para chequear las dependencies no usadas sólo necesitas correr el comando depcheck dentro 
```
depchek
```
## Encontrando dependencias circulares
- Primero necesitas instalar madge globalmente:
```
yarn global add madge
```
- para verificar la existencia de dependencias circulares deberás correr el siguiente comando
```
 npx madge --circular --extensions ts ./
 ```

