# COVID-TRACKER

The COVID Tracking Project collects and publishes the most complete testing data available for all Countries around the world from [Rapid API](https://rapidapi.com/api-sports/api/covid-193/). It allows you to display data based on the selection of countries and also to filter data based on New Cases,Cases per Million population, Deaths per million population.

# Live Demo

Open [https://covid-tracker-d5f0b.web.app/](https://covid-tracker-d5f0b.web.app/) to view it in the browse.

# Preview
![New cases](https://github.com/nithin0803/covid-tracker/blob/main/images/Screenshot%20(97).png)

![Recovered](https://github.com/nithin0803/covid-tracker/blob/main/images/Screenshot%20(98).png)

## Mobile Preview

![Mobile view](https://github.com/nithin0803/covid-tracker/blob/main/images/Untitled-1.png)


## Table of content
  - [Features](#features)
  - [TechStack](#techstack)
  - [Development](#development)

## Features
- **Displays Country's status on selecting country** 
  - User can select the country from dropdown items.
  - **New Cases and Deaths** status are displayed with top red border.
  - and **Recovered Cases** status with green.
  - Onclick on the status div will also trigger events to display the particular status on     Map
  - Total **New Cases, Recovered and Deaths** are displayed at the end of each status div.
- **Map Display**
  - Map is displayed using default center co-ordinates.
  - Country's status pops up including country's Flag when user clicks on the country           inside the map.
  - The circle marker radius on map is directly dependent on the number of cases.
- **Table Display**
  - A list of countries and their respective data like Total
     cases, Critical Cases, Active Cases, Deaths, Recovered Cases are displayed inside the    table
  - By default list is sorted on the basis of “new cases”
  - Users can sort the list according to “deaths per 1 Million population” or
“cases per 1 Million population”.
  - and also remember's the filters of users across page loads.
  - Thumbs down to switch the camera off.

## TechStack
![React](https://miro.medium.com/max/800/1*h1ueBUA6NqDXIO3rhnT-PA.png) </br>
**React.JS**</br>
**Material UI**</br>
**Firebase** - Hoisting</br>
**React Leaflet** - MAP

## Development

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
