import React from "react";

import logo from "../../assets/logo-light.svg";
import ssl from "../../assets/png/SSL_certificate 1.png";
import iso from "../../assets/png/iso_27001-150x150 1.png";
import hippa from "../../assets/png/hipaa-artivatic 1.png";
import "./Footer.css";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div className="about">
          <div className="text">
            <img src={logo} alt="logo" className="logo" />
            <p className="para">
              Artivatic’s AI- Native SaaS Solutions for insurance & health
              services as modular building blocks powered by best-in-class API
              gateway helps in driving innovation & collaboration with intuitive
              workflows, seamless integration, data driven decisions, individual
              level risk assessment, new age product offerings, dynamic pricing,
              automation, smart underwriting, smart claims processing, enhanced
              customer experience, persistence & collections, distributions with
              AI, ML & Data.
            </p>
          </div>
          <div className="connect flex flex-jc-sb flex-ai-c">
            <h3>Connect</h3>
            <p>-</p>
            <span className="icon FB-icon"></span>
            <span className="icon LD-icon"></span>
            <span className="icon YT-icon"></span>
            <span className="icon IG-icon"></span>
            <span className="icon TW-icon"></span>
            <span className="icon VC-icon"></span>
          </div>
          <div className="imgs flex flex-jc-sb">
            <img src={ssl} alt="ssl" className="ssl" />
            <img src={iso} alt="iso" className="iso" />
            <img src={hippa} alt="hippa" className="hippa" />
          </div>
        </div>
        <div className="grid">
          <div className="col-1 flex flex-col">
            <div className="products links">
              <h2>Products</h2>
              <a href="/">AUSIS</a>
              <a href="/">ASPIRE</a>
              <a href="/">INFRD</a>
              <a href="/">ALFRED</a>
              <a href="/">MIO</a>
              <a href="/">PRODX</a>
            </div>
            <div className="solutions links">
              <h2>Solutions</h2>
              <a href="/">Life Insurance</a>
              <a href="/">Health Insurance</a>
              <a href="/">SME Insurance</a>
              <a href="/">Distributors</a>
              <a href="/">Sales & Marketing</a>
              <a href="/">TPA & Hospitals</a>
              <a href="/">Embedded Insurance</a>
              <a href="/">Group Health</a>
              <a href="/">Byte-sized</a>
              <a href="/">B2B Enterprises & Distributors</a>
            </div>
          </div>

          <div className="col-2 flex flex-col">
            <div className="company links">
              <h2>Company</h2>
              <a href="/">About us</a>
              <a href="/">Customers & Partners</a>
              <a href="/">Contact Us</a>
              <a href="/">Career</a>
            </div>
            <div className="covid-19 links">
              <h2>Covid-19 Tools</h2>
              <a href="/">AI Based Video KYC</a>
              <a href="/">Video Conferencing</a>
              <a href="/">Chat & Branch</a>
              <a href="/">Video App for Agent & POS</a>
              <a href="/">CRM & Lead Management</a>
              <a href="/">Remote Customer Support</a>
            </div>
            <div className="data-privacy links">
              <h2>Data & Privacy</h2>
              <a href="/">Privacy</a>
              <a href="/">Terms</a>
              <a href="/">Security & Disclaimer</a>
              <a href="/">Data Protection</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
