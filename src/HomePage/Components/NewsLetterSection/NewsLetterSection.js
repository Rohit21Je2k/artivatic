import React from "react";

import "./NewsLetterSection.css";
export default function NewsLetterSection() {
  return (
    <section className="news-letter">
      <div className="wrapper">
        <h1 className="heading">
          Lets build next-gen insurance & health products
        </h1>
        <hr className="hr-underline" />
        <div className="flex flex-jc-c">
          <button className="btn btn--dark btn--sm">Get a demo</button>
          <button className="btn btn--toggle btn--sm">Request Pricing</button>
        </div>
        <hr className="hr" />
        <div className="container">
          <h2>Subcribe to our newsletter</h2>
          <form>
            <input type="email" name="email" placeholder="E-mail" />
            <div className="icon"></div>
          </form>
        </div>
      </div>
    </section>
  );
}
