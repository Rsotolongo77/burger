# burger

## Burger is a full stack application that lets the user create custom burgers, and "devour" them once created.

## Technologies used :
1. Node js
2. MySql
3. Express
4. Express-handlebars
5. JavaScript
6. Custom ORM
7. Method-override
8. Bootstrap
9. CSS

## How the app works: 
### The user is rendered an HTML page with two distint columns. One for burgers that have been "devoured", and another for burgers that are ready to "eat". A search form linked with a submission button to "create" a burger of choice is also provided to the right of those columns. The user can choose to devour one of the already existing burgers via a button that will trigger a request to the API holding the burger data. Ensuing JAvaScript logic and routing updates the appropriate areas of the page accordingly.
### If the user instead chooses to create a custom burger; the request is passed to the API to create a burger in the db and the returning result renders the new burger to the HTML page in the column "ready to eat", with an associated devour button. 


![ ](public/assets/images/Screen_shot.png)

### Visit site at https://damp-cove-74433.herokuapp.com/
