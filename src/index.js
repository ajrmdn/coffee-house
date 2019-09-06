var heading = React.createElement('h1', {}, 'Welcome to Lakes Cold Brews!');
var brewName = React.createElement('h3', {}, 'Morning Brew');
var brewFlav = React.createElement('h3', {}, 'Morning Brew');
var brewBrand = React.createElement('h3', {}, 'Blake Brews');
var brewPrice = React.createElement('h3', {}, '$3');
var app = React.createElement('div', {}, heading);

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);
