const name = "LawanGoud";
const className = "greeting";

const user = { firstName: "LawanGoud", lastName: "Bairi" };
const fullName = (user) => user.firstName + " " + user.lastName;
const element = (
  <div>
    <h1 className="{className}">HELLO {fullName(user)}</h1>
    <p>Good To See You</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
