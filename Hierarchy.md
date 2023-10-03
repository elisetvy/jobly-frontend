<App />
-state:
    -isLoading
-props: none
-fn:
    -'toggleLoading'

<Nav />
Desc:
Nav with <NavLink /> to homepage, companies, jobs. (Links will be hardcoded, not dynamic.)
-state: none
-props: none

<RouteList />
Desc:
Contain <Route />'s  to '/' (home), '/companies', '/companies:handle', '/jobs', 'jobs/:id', '*' (handle all other routes).
-state: none
-props:
    -'toggleLoading'

<CompaniesList />
Desc:
-Renders a <SearchBar /> and maps over company data to render <CompanyCard /> for each Company.
-Makes GET request for all companies. toggleIsLoading invoked when making request. (useEffect on first render)
-state:
    -companies (array)
-props:
    -toggleLoading

<CompanyCard />
Desc:
-Container for company info.
-When clicked, routes to '/companies/:handle'. <Link />
-state: none
-props:
    -company

<CompanyDetails />
Desc:
-Gives company description and lists jobs in <JobCard />s.
-gets company handle as param and uses to make a GET requst to '/companies/:handle'. (useEffect on first render)
    -Can assign this to a variable, don't need to store in state
-state: none
-props: none

<JobsList />
Desc:
-Renders a <SearchBar /> and maps over job data to render <JobCard /> for each job.
-Makes GET request for all jobs. toggleIsLoading invoked when making request. (useEffect on first render)
-state:
    -jobs (array)
-props:
    -toggleLoading

<JobCard />
Desc:
-Container for Job info.
-state: none
-prop:
    -job

<SearchBar />
Desc:
Takes user input and invokes function from props to execute search.
State:
    -formData (user input)
Props:
    -searchFunction (passed function to make request from parent, invoked onClick/onSubmit)
