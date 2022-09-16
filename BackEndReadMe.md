We used React to render our key components starting with the app housing most of our data and then distributing our fetches where they needed to go.
 
By using two different objects in our db.json array, we could achieve the persisting effect of a randomized monster by adding a colony the user could create and build.
 
First
   we fetch the data from the monster object. This is attached to a randomized number 1-X; with this feature, there is an interpolation of said number into the id slot of the fetch URL. This ensures a random monster is generated every time the fetch is called.
 
Second
   we store that fetch data in a state. This state is then used for the user to decide whether they want to randomize a new monster or add to a colony by using the button feature. It calls a function that will take that State the current random monster is in and add it to the colony object by way of POST.
 
Extra Features
   Now we can manipulate our colony in multiple ways. The first of the two is the monster's temper. Are they docile or aggressive? Using state and a boolean value, we can attach a ternary statement with the state value to display "Docile" or "aggressive." Then again, patch new information into the colony object as true or false using that state.
 
   The last feature we can utilize is the "exile" button. If this monster has been particularly naughty, the user can choose to exile them. To execute this, the button is tied to a function that will take the monster's id, store it into a variable and send it back up to the app, where a DELETE request will remove the whole monster from the colony object.
 
Lastly
   Using React Router, we have integrated three pages into our web application. This is the generator, colony, and about. To keep things nice and tidy. Utilizing a switch statement, the user can toggle between the pages by clicking a button at the top of the page that has a link component to the corresponding app component.
