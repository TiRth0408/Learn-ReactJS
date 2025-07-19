const containerDiv = React.createElement("div", {
    id: "container"
}, [
    React.createElement("div", {
        id: "container1"
    }, [
        React.createElement("h1", {}, "I am heading 1"),
        React.createElement("h2", {}, "I am heading 2")
    ]),
    React.createElement("div", {
        id: "container1"
    }, [
        React.createElement("h1", {}, "I am heading 1"),
        React.createElement("h2", {}, "I am heading 2")
    ])
]);
console.log(containerDiv);
const root = ReactDOM.createRoot(document.getElementById("navbar"));
root.render(containerDiv);

//# sourceMappingURL=Learn ReactJS.6bd02f5a.js.map
