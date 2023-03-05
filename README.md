# WeatherApp

## Hi there, Your Friendly Developer here!
Since a lot of us faced issues while developing this project whether it was in the form of finding resources, finding the right API or any other errors, I decided to make this repository public and help you out.

So,

1) <b>Resources:</b> These are in the Assets Folder. Not the same ones, but similar images that look really cool :)
2) <b>API call:</b> Use the Open Weather API from Rapid API. Here's the link-> https://rapidapi.com/KirylBokiy/api/openweather43/
3) <b>Environment Variables:</b> Although these are not supposed to be shared on Github, I have added the folder for you to check out the file and see how they look.

### Some errors that I encountered:

1) <b>ng: command not found (Solution for MacBook OS)</b>

$npm uninstall -g angular-cli <br />
$npm uninstall -g @angular/cli <br />
$npm cache clean <br />
$npm install -g @angular/cli@latest <br />
$ echo -e "export PATH=$(npm prefix -g)/bin:$PATH" >> ~/.bashrc <br />
$source ~/.bashrc <br />
$ng --help <br />
$ng --version <br />

Do this for the first time. If the error happens multiple times post this, probably because of some timeout then execute the following commands:

$ echo -e "export PATH=$(npm prefix -g)/bin:$PATH" >> ~/.bashrc <br />
$source ~/.bashrc <br />
$ng --help <br />
$ng --version <br />

2) <b>Typescript: Type 'string | undefined' is not assignable to type 'string'</b>

You need to write 'as string' to both the this.cityname and make it as 'this.cityname as string'

3) <b>API Call Exceeded</b>

Now this is a tricky one. Either create another account and change your env variables, or if you're rich enough, change your plan😋🌚


That's it!

I hope this helps. If it did, do follow me on Github.

If you need anything else, you can connect with me on Twitter or LinkedIn. Links are on my profile.

Lastly, a shoutout to Sameer Saini on YouTube.

## General Angular Documentation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
