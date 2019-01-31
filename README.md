![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## React Testing 

### Author: Heather Cherewaty

### Links and Resources
[![Build Status](https://www.travis-ci.com/hcherewaty/react-testing.svg?branch=master)](https://www.travis-ci.com/hcherewaty/react-testing)

* [repo](https://github.com/hcherewaty/react-testing)
* [Code Sandbox](https://codesandbox.io/s/54196mn70x)
* [Travis](https://www.travis-ci.com/hcherewaty/react-testing)

### Modules
#### `index.js`

##### Exported Values and Methods
* Connection to sandbox app upon visiting link established in Links and Resources.
* Content is rendered onto `index.html` by way of import of `app.js` onto `index.js`.
* Styling defined in `design` directory: `counter.scss`, `header.scss`, and `footer.scss`.
* `counter` component defined in `components/counter.js`.
* `header` component defined in `components/header.js`.
* `footer` component defined in `components/footer.js`. 


#### Running the app
* The react apps will start and load once the sandbox links are visited.

#### Tests
* When `>> ` is clicked, expect counter value to increase and change color.
* When `<< ` is clicked, expect counter value to decrease and change color.
* When `>> ` is clicked, expect span element to update to reflect new state.
* When `<< ` is clicked, expect span element to update to reflect new state.