# StackUp Assignment 1 (Registration Form)

## Requirements
1. Mandatory fields (with HTML5 input types)
    1. Email (email)
        - must be entered with valid address (---@---.---)
    2. Password (password)
        - must have at least 8 char
        - ngpattern goes here
    3. Name (text)
    4. Gender (radio)
    5. Date of Birth (date)
        - Registrants must be at least 18 years old
    6. Address (text)
    7. Country (text or select)
    8. Contact Number (text)
        - must contain numbers
        - can contain (,),+,-,space
    9. Submit (submit)
        - Sent to server via POST
2. Upon registration, user must be redirected to a Thank you page


## Walkthrough

1. Countries are generated from Object stored statically on the controller
2. Data is collected from the client side and validated using ng-pattern
3. Error messages displayed for any mistakes to resolved locally and posted to the server
4. Server will validate the data for mistakes including formatting of JSON file
5. If validation does not pass, server will reply with 400 error and JSON file of mistake details
6. Else, server will reply with 200.
7. If client receives error for duplicate record, record will be shown to the user
8. If client receives 200 reply with no errors, contact form is hidden and custom thank you message is shown.

## Further-Development

1. Consider using $routeProvider $stateProvider and partials to react a fuller front-end user experience
2. Consider implementing stricter back end security by immediately reject any data that does not have proper formatting
3. Develop Log in screen and implement MongoDB to store user login details
4. Implement automised modals for user messages
5. Implement more animations and better CSS (consider using SASS)
6. More rigid testing using Jest/ cross browser compatibility testing.