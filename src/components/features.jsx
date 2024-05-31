import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className=" section-title">
          <h2>Programs:</h2>
        </div>
        <div className="">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p><b>{d.text}</b></p>
                <br></br>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
