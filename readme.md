### Steps to Run it locally:
```
$ git clone https://github.com/kunalms/angular-hybrid-application.git
$ cd angular-hybrid-application/
$ npm start
```

running the commands mentioned above will start the application at [localhost:8001](localhost:8001)


### Angular.js and Angular Hybrid app: 

This assignment is an angular.js + angular hybrid application. 
Create a single page application with two routes (login and register) and a date picker directive. The login is an angular component and register 
is an angular.js component. Datepicker can be in either angularjs or angular.

Tasks:
1. Create a datepicker directive in either angular.js or angular but use the same directive in both login and register components.
(You can use any external javascript plugin for the datepicker)

2. Create a registration form inside the register component. Form should have fields such as name, phone number, date of 
birth, username and password. Add basic validations. On submitting the form, show an alert.

3. Create login form inside the login component. Form should have fields username, date of birth and password. Also add basic validations. 
On submitting, show an alert.

4. Upgrade the register component to angular using the upgrade module. Add routing to angular application and specify 
routes for both the login and register components.

5. Use the date picker directive for the date of birth field.

6. Create good UI for both the forms. 

You should:
  - Pretend that this is a production-quality code for review. So, write modular & readable code.
  - Use angular.js 1.5+.
  - Be as creative as possible with the UI/UX design but that's not the primary goal.

You may:
  - use javascript build tools like webpack, grunt, etc.
  - use angular-cli

You should not:
  - Include Twitter Bootstrap or any other CSS frameworks for styling purposes.

 
