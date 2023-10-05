api.js
-move token setting outside of methods and into App.js
-drop setToken method and set explicitly in App.js

App.js
-Invoked getUserInfo in useEffect instead of in our login and signup functions
-make useEffect depend on currToken

SEARCHBAR:

- default parameter for search type

COMPANYLIST/JOBLIST:

- check if there are jobs/companies in state, if not --> return message

404 COMPONENT

LOADING STATE COMPONENT
