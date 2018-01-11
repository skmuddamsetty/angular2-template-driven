# Steps to run the project

```
1. Open Terminal and change directory to the projects folder
2. Run "npm install" - this will install all the dependencies which are present in package.json
3. Run "ng serve" - this will compile the files and run the application in the dev server
```

## How to run the app

Run `ng serve` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

## app.component.html

```
<div class="container">
<form #myForm="ngForm" (ngSubmit)="submitForm(myForm)">
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email"
           class="form-control"
           id="email"
           placeholder="Enter email" ngModel name="email" required #email="ngModel">
    <div class="alert alert-danger fade in" *ngIf="!email.valid && email.touched">
        Please enter a valid Email Address
    </div>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password" ngModel name="password" required>
  </div>
  <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Submit</button>
</form>
</div>
```

# Angular2TemplateDriven

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.2.



## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
