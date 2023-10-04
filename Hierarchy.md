<App />
-state: user
-props: none
-fn:
    -login
    -signup
    -logout

<userContext.Provider />
Desc:
-take token, decode for username, and then make an API call to get the rest of the user details
Store user object

## Local storage - token

<Navbar />
Desc:
Check Context for authenticated user and renders applicable navbar.
BETTER => can just pass down directly from app - why bother with context if it can be passed directly?

-state: none
-props: none

<RouteList />
Desc:
Contain <Route />'s  to '/' (home), '/companies', '/companies:handle', '/jobs', 'jobs/:id', 'login', 'signup', 'profile' '*' (handle all other routes).
-state: none
-props: none

<Homepage />
- Check context for user
- Render login/signup buttons OR welcome back msg

- state: none
- props: none

<UserForm />
TODO: will probably be better to split this into three forms
Desc:
- Reusable component for '/login', '/signup', '/profile'

Props: initialFormData, handleSave
State: formData

<FormErrors /> (working title)

<CompaniesList />
Desc:
-Check context for user; redirect to home or 401
-Renders a <SearchBar /> and maps over company data to render <CompanyCard /> for each Company.
-Makes GET request for all companies. toggleIsLoading invoked when making request. (useEffect on first render)
-state: companies (array)
-props: none

<CompanyCard />
Desc:
-Container for company info.
-When clicked, routes to '/companies/:handle'. <Link />
-state: none
-props: company

<CompanyDetails />
Desc:
-Check context for user; redirect to home or 401
-Gives company description and lists jobs in <JobCard />s.
-gets company handle as param and uses to make a GET requst to '/companies/:handle'. (useEffect on first render)
    -Can assign this to a variable, don't need to store in state
-state: none
-props: none

<JobsList />
Desc:
-Check context for user; redirect to home or 401
-Renders a <SearchBar /> and maps over job data to render <JobCard /> for each job.
-Makes GET request for all jobs. toggleIsLoading invoked when making request. (useEffect on first render)
-state: jobs (array)
-props:

<JobCard />
-context for apply buttons
Desc:
-Container for Job info.
-state: none
-prop: job

<SearchBar />
Desc:
Takes user input and invokes function from props to execute search.
State: formData (user input)
Props: searchFunction (passed function to make request from parent, invoked onClick/onSubmit)
