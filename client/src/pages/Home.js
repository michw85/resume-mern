import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import Slider from "../components/Slider";

export const HomePage = () => {
  const history = useHistory(); // for redirect
  const auth = useContext(AuthContext); // take token for headers in data
  const { request } = useHttp(); // get object from hook http
  const [link, setLink] = useState(""); // local state for handmade changes

  // hook for update input's field -> library materialize
  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  // if press "Enter" -> make a link
  const pressHandler = async (event) => {
    if (event.key === "Enter") {
      try {
        // get object(data) link with information
        const data = await request(
          "/api/link/generate",
          "POST",
          { from: link },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );
        history.push(`/detail/${data.link._id}`);
      } catch (e) {}
    }
  };
  return (
    <>
      <Slider />
      <div class="home-stack-section">
        <div class="my-home-stack-section">
          <h3 class="main-content-title">
            Stack of technologies used to create that site
          </h3>
          <div class="my-home-stack-block">
            <h4 class="my-home-stack-position">
              MERN:{" "}
              <span class="my-home-stack-company">
                MongoDB, ExpressJS, ReactJS, NodeJS
              </span>
            </h4>
            <ul class="my-home-stack-lists">
              <li class="my-home-stack-list-item">
                Backend:
                <p>
                  Node.js, Express.js, Middlewares
                </p>
              </li>
              <li class="my-home-stack-list-item">
                Database: 
                <p>MongoDB, Mongoose</p>
              </li>
              <li class="my-home-stack-list-item">
                Frontend:
                <p>
                  Authorization, React.js, Fetch, Hooks, WebToken
                </p>
              </li>
              <li class="my-home-stack-list-item">
                <p>HTML, CSS, JavaScrypt, JSX </p>
              </li>
              <li class="my-home-stack-list-item">
                Libraries
                <p>npm: materializecss, bootstrap, jsonwebtoken, express-validator, bcryptjs </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s8 offset-s2" style={{ paddingTop: "2rem" }}>
          <h6>
            An example of an application's work on adding a link to the Database
          </h6>
          <div className="input-field">
            <input
              placeholder="Enter link"
              id="link"
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              onKeyPress={pressHandler}
            />
            <label htmlFor="link">Add a new link to the database</label>
          </div>
          <p>You can look at the added link on the page: Example of links</p>
        </div>
      </div>
    </>
  );
};
