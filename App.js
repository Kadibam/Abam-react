const parent = React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"This is Header line 1"),
    React.createElement("h1",{},"This is header line 2"),
]),
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{}," H2"),
    React.createElement("h2",{},"this is h2"),
]),
]);
console.log(parent);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);