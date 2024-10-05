# Todo app coding challenge

This application was created as part of a take-home coding test for a senior front end engineering position. In a production environment I likely would have opted to start using create-next-app since CRA is officially deprecated, but this application is tiny enough that I didn't think it was necessary to add server-side or SEO optimization in next.

Likewise in a production environment I'd likely be working with a component library. However since this a tiny app I opted to create both the components and the css from scratch. Again because the application is tiny I 
opted for straight CSS - in a larger application I'd likely add sass for ease of coding and use a combination
of global variables for ease of standardization and css modules to avoid style and namespace collisions. 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is NOT ejected - do so at your own risk!

Icons exported from figma doc

## Getting Started

In order for this application to run properly, you need to have a valid
REACT_APP_API_KEY value stored in your .env file on your local machine.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Roadmap / Current bugs
- Replace the checkbox element in the Todo component with one that both matches designs and is accessibility-friendly. This would require using an input element with a type of checkbox, hiding it, adding a label to point to it and displaying the styled checkbox on top of it, since
native `<input type="checkbox>` elements can't be styled in a manner consistent with figma.

- Add a test-coverage option. Currently running `npx jest --coverage` incorrectly shows failing tests and `npm test -- --coverage` shows zero coverage. 

- Once coverage is confirmed ensure test coverage is at or around 80% (this can vary depending on company / team preference but is a good guideline)
