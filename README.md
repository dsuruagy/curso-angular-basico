# CursoAngularBasico

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




Observações Daniel:
- Aumento do número de file watches:
  sudo sysctl fs.inotify.max_user_watches=524288 & sudo sysctl -p

- Ctrl+D: renomeia uma variável em várias linhas

- Plugin: Settings Sync, para sincronizar as configurações no Github e usar em várias instalações.

- Ferramentas para teste de API REST:
  - https://insomnia.rest/
  - https://www.postman.com/ 

- RXJS - debounceTime: usado para não ir ao backend imediatamente, enquanto o usuário está digitando na caixa de busca.
