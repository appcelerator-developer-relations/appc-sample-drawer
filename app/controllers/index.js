
/**
 * We're creating a new controller straight away in index.js
 * so in case we ever want to add a login flow we can add a check
 * here to choose which controller we want to open first. 
 */

Alloy.createController('main').getView().open();
