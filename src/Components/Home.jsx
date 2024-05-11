import React from "react";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <div id="head">
        <div className="main-title">
          <h1>Welcome to React</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Architecto vitae eligendi saepe laborum ex, dolor magnam asperiores
            tempora,
            <br />
            magni explicabo alias in optio qui repellendus eius reprehenderit
            praesentium, rem quod?
          </p>
        </div>
        <div className="second-title">
          <h2>React is hard</h2>
          <p>
            <span>
              <strong>Why am I still here just to suffer...</strong>
            </span>
          </p>
        </div>
      </div>
      <div className="navlink">
        <a href="/#">Google</a>
        <hr />
        <a href="/Create">Create</a>
      </div>
      <hr />
      <section>
        <Contact />
      </section>
    </div>
  );
}
