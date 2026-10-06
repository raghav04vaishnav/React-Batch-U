import React, { useState } from "react";
import useView from "./useView";
import useTheme from "./useTheme";
import UseHttp from "./UseHttp";

function Home() {
  const [search, setSearch] = useState("");
  const { view, viewToggle } = useView();
  const { theme, toggleTheme } = useTheme();
  const { users, loading, error } = UseHttp("https://dummyjson.com/users");

  const filterData = users.filter((item) =>
    item.firstName.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <button onClick={viewToggle}>{view === "card" ? "Table" : "Card"}</button>

      <button onClick={toggleTheme}>
        {theme ? "Dark Mode" : "Light Mode"}
      </button>

      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {view === "card" && (
        <div>
          {filterData.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.firstName} />

              <h2>
                {item.firstName} {item.lastName}
              </h2>

              <p>Age: {item.age}</p>
              <p>Email: {item.email}</p>
            </div>
          ))}
        </div>
      )}

      {view === "table" && (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filterData.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.firstName} {item.lastName}
                </td>

                <td>{item.age}</td>

                <td>{item.email}</td>

                <td>
                  <button>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
