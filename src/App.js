const Pet = (props) => (
  React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('p', {}, props.breed),
  ])
)

const App = () => {
  // return null;
  return React.createElement('div', { id: 'test' }, [
    React.createElement('h1', {}, 'Adopt Me'),
    React.createElement(Pet, {name: 'Tommy', animal:'Dog', breed:'Hutch'}),
    React.createElement(Pet, {name: 'Anne', animal:'Cat', breed:'CatWoman'}),
    React.createElement(Pet, {name: 'Nagin', animal:'Snake', breed:'Rattle'}),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById('root'));
