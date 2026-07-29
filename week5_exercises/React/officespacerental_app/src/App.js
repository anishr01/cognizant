import office from "./office.jpg";
import "./App.css";

function App() {
  const officeSpaces = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "WeWork",
      Rent: 65000,
      Address: "Bangalore"
    },
    {
      Name: "SmartWorks",
      Rent: 55000,
      Address: "Hyderabad"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Mumbai"
    }
  ];

  return (
    <div className="App">
      <h1>Office Space, at Affordable Range</h1>

      {officeSpaces.map((item, index) => (
        <div key={index}>
          <img
            src={office}
            width="25%"
            height="25%"
            alt="Office Space"
          />

          <h1>Name: {item.Name}</h1>

          <h3
            style={{
              color: item.Rent <= 60000 ? "red" : "green"
            }}
          >
            Rent: Rs. {item.Rent}
          </h3>

          <h3>Address: {item.Address}</h3>

          <br />
        </div>
      ))}
    </div>
  );
}

export default App;