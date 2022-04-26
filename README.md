<div align="center" markdown="1">



# Angular 13 + Eslint + Prettier + Husky
<br>

<img src="https://brandslogos.com/wp-content/uploads/images/large/angular-icon-logo.png" alt="Angular" width="400">

</div>

## What's it

*@celerik/angular-boilerplate* provides a code baseline for creating angular projects based on rsi standards.
## What is included
- Sass and Scss support
- Tailwindcss Support
- TypeScript support
- WebStorm/PhpStorm support
- Eslint + Prettier Rules
- Angular Material And Ng Zorro Support

## Requirements
- NodeJs >= 14.x
- A javascript package manager such as Npm or Yarn (Yarn preferred)

## Quick start
- Download this template
- Unzip the folder
- Optionally you can select the branch that has any of the ui of your preference: Angular Material O Ng Zorro
- modify package.json with the name of your application
```
cd "folder name"
git checkout angular_material or git checkout ng_zorro (Optional)
yarn install 
ng serve 
```
## Adding new components to the project
In order to standardize components creating generate-react-cli.json contains the information to create Components, Pages and Layouts and their associates
- Creating a component/schematic:
```
ng generate component component/{{name}}
```

The root folder can also be manually specified by using
```
ng generate component {{path}}/{{name}}
```
The output will be inside "./src/{{path}}/{{name}}/" for the first case

## Looking for unused dependencies
- you'll first need to install depcheck globaly (once):
```
yarn global add depcheck
```
- to check if any project has unused dependencies you'll only need you run depcheck command inside project's folder
```
depchek
```
## Looking for unused dependencies
- you'll first need to install madge globally (once):
```
yarn global add madge
```
- to check if any circular dependency you'll only need you run madge command inside project's folder
```
 npx madge --circular --extensions ts ./
 ```

