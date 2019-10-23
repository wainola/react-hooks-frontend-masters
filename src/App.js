const Pet = ({ name, breed, animal }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h1", {}, breed),
    React.createElement("h1", {}, animal)
  ]);
};

// Your code here
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Shepperd"
    }),
    React.createElement(Pet, {
      name: "Pelao",
      animal: "Dog",
      breed: "Chihuahua"
    }),
    React.createElement(Pet, {
      name: "Punes",
      animal: "Dog",
      breed: "Chihuahua"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
