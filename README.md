## Context: About Prince's Theatre

#### <a href="https://princes-theatre-zeta.vercel.app/">Live Demo</a>

Prince's Theatre is a simple objective oriented application where it helps users to choose the best streaming provider for playing their favorite star wars title at the best value possible. The application is taking advantage of an API that provides a number of popular star wars titles along with their details including 2 different fees for Cinema World and Film World streaming providers. The lower price tag is indicated by a yellow background and is recommended to users.

![Screenshot](public/PTSS.png)

## Tech stack

- React <br/>
- Sass for CSS <br/>
- Axios for API calls
- React Testing Library for unit testing

## Instruction: How to run, install and test

- Clone the project by `git clone https://github.com/SirvanD/Princes-Theatre.git` <br/>

- To install dependencies run `npm install`

- To run the application run `npm start`

- To test the application run `npm run test`

## Architecture and wireframe

Prince's Theatre is an only front-end app that is making use of react Axios library for making API calls to a given endpoint where data is fetched. The main application is broken down into components of sections including Header, About, Movie Card, and Movie List, while Movie Card is itself split into 2 parts of main and Movie Price for ease of testing and increasing readability.

Furthermore, a simple wireframe has initially been designed for more understanding of concept and to visualise the problem.

![Screenshot](public/wireframe.png)

## Testing and test cases

![Screenshot](public/UnitTest.png)

Following Unit tests have been conducted using Integrated React Testing Library:

- Component Header has been Tested with it's textcontent for protection against manipulation.
- Component About has been rendered with it's two child components of subtitle and content.
- Component Movie Card is more extensively tested with mock props, to ensure movie title and poster are correctly rendered.
- Component Movie Price given mock inputs is tested to ensure less expensive fare is highlighted and the other one is not.

## Assumptions and decision trade-offs

As I was advised and also shown in Postman tests, the API is returning inconsistent information, in that, an approach has to be taken in which the end user is still viewing information. To tackle the reliability issue, the API call is retried in case of a failure up to 15 times, which in trade off, can be adding an extra time to loading the data. Hence, a loading message has been implemented to be shown to users in between calling the API and successfully fetching the data.

React Component unit testing was a new topic to me, hence learning and implementing the tests was at the same time a pleasant experience and a time-consuming one. I think to design an integration test for the API calling component using axiosmock would be a good next step.
