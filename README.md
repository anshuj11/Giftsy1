# Features

Giftsy is an online marketplace geared towards finding unique, thoughtful, personalized gifts.

It offers the following functionality:

* New account creation, login, and Demo login

* Create and see listings

## To do
* Shops - open and add listings

* Like listings

* follow shops

# Project Design
Giftsy was designed and built in two weeks.

A project proposal was drafted to provide a manageable timeline to complete the application.


# Implementation
## New account creation, login, and guest login
Passwords are secured using BCrypt to generate a passord_digest. A user session_token is stored in the database to keep track of each user session. When a user successfully logs in, a session token is generated, stored in the database, and stored on the client-side as a browser cookie.


