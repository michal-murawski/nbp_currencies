# Currencies list

###### Stack: 
 * React,
 * Redux,
 * Redux-Saga,
 * React-Router-Dom
 * Redux-Actions,
 * ramda,
 * material-ui,
 * json-server,
 * prettier,
 * jest,
 * enzyme.

 Steps to proceed in order to run the application:
 1. Clone the repository:
 `git clone https://github.com/Draer/nbp_currencies.git`
 2. Go into the project:
 `cd nbp_currencies`
 3. Install dependencies:
 `yarn`
 4. Start json-server:
 `yarn dev-server`
 5. In another terminal run client code:
 `yarn start`
 6. Run tests:
 `yarn test`
 7. Go to the provided localhost address and enjoy :)

I 'killed the fly with the bazooka', but only for a showcase. This is the first time when I used `redux-actions` because I wanted to verify how does the code looks like when we use this kind of approach.
We are fetching only one currencies table from the available API (table A). The applications has some simple tests examples because I simply did not have enough time to make 100% coverage.
I was not focusing on the visual side of the project. There is also table sorting implemented.

## Explanation
 * I used hard-coded error messages (api & removeAllFailure effect) as I did not want to spend more work in the json-server.
 * I assumed that favourites could come from another end-point, this is the reason I created separate store for them.
