import React from "react";

import NavBanner from "../navBanner/navBanner";
import "./deskNav.css";
export default function deskNav() {
  function handleClick(e) {
    const navBanner = e.currentTarget.nextSibling;
    document.querySelector(".navBanner.show")?.remove("show");
    navBanner.classList.add("show");
  }
  return (
    <div className="nav__menu">
      <button className="nav__link selected">Home</button>
      <button className="nav__link" onClick={handleClick}>
        Products
      </button>
      <NavBanner
        title="Products"
        grid={[
          { name: "AUSIS", info: "AI UW System" },
          {
            name: "ALFRD",
            info: "AI Claims Platform",
          },
          {
            name: "ASPIRE",
            info: "360 Intelligence Platform",
          },
          {
            name: "MIO",
            info: "Sales, Pos, Marketing Servicing",
          },
          {
            name: "INFRD",
            info: "Insurance API Cloud Platform",
          },
          {
            name: "INFRD",
            info: "Design & Distribution Platform",
          },
        ]}
      />
      <button className="nav__link" onClick={handleClick}>
        Cloud API
      </button>
      <NavBanner
        title="Cloud API Platform"
        grid={[
          { name: "Overview", info: "Tag line" },
          {
            name: "Health API",
            info: "Tag line",
          },
          {
            name: "Insurance API",
            info: "Tag line",
          },
          {
            name: "Distribution API",
            info: "Tag line",
          },
          {
            name: "OCR API",
            info: "Tag line",
          },
          {
            name: "Sales API",
            info: "Tag line",
          },
          {
            name: "Risk API",
            info: "Tag line",
          },
          {
            name: "Govt API",
            info: "Tag line",
          },
        ]}
      />
      <button className="nav__link" onClick={handleClick}>
        Solutions
      </button>
      <NavBanner
        title="Solutions"
        grid={[
          { name: "Life Insurance", info: "Tag line" },
          {
            name: "Health Insurance",
            info: "Tag line",
          },
          {
            name: "SME Insurance",
            info: "Tag line",
          },
          {
            name: "Distributors",
            info: "Tag line",
          },
          {
            name: "Sales & Marketing",
            info: "Tag line",
          },
          {
            name: "Reinsurance",
            info: "Tag line",
          },
          {
            name: "TPA & Hospitals",
            info: "Tag line",
          },
        ]}
      />
      <button className="nav__link" onClick={handleClick}>
        Resource
      </button>
      <NavBanner
        title="Resource"
        grid={[
          { name: "Overview", info: "Tag line" },
          {
            name: "Blogs",
            info: "Tag line",
          },
          {
            name: "Blogs",
            info: "Tag line",
          },
          {
            name: "Investors",
            info: "Tag line",
          },
          {
            name: "Ebooks",
            info: "Tag line",
          },
          {
            name: "Reports",
            info: "Tag line",
          },
          {
            name: "Webinars",
            info: "Tag line",
          },
          {
            name: "Podcast",
            info: "Tag line",
          },
          {
            name: "Video",
            info: "Tag line",
          },
        ]}
      />
      <button className="nav__link" onClick={handleClick}>
        Covid 19 tools
      </button>
      <NavBanner
        title="Covid 19 tools"
        grid={[
          { name: "Video Communication", info: "Tag line" },
          {
            name: "Remote Sales",
            info: "Tag line",
          },
          {
            name: "Employee Engagement",
            info: "Tag line",
          },
          {
            name: "Communication",
            info: "Tag line",
          },
          {
            name: "Content",
            info: "Tag line",
          },
          {
            name: "Cowin App",
            info: "Tag line",
          },
          {
            name: "CRM",
            info: "Tag line",
          },
          {
            name: "Lead management",
            info: "Tag line",
          },
          {
            name: "Video app",
            info: "Tag line",
          },
        ]}
      />
      <button className="nav__link" onClick={handleClick}>
        Growth
      </button>
      <NavBanner
        title="Customer Growth"
        grid={[
          { name: "Overview", info: "Tag line" },
          {
            name: "Webinars",
            info: "Tag line",
          },
          {
            name: "Academy",
            info: "Tagline",
          },
          {
            name: "Events",
            info: "Tagline",
          },
          {
            name: "Videos",
            info: "Tagline",
          },
        ]}
      />
      <button className="nav__link" onClick={handleClick}>
        Company
      </button>
      <NavBanner
        title="Company"
        grid={[
          { name: "About Us ", info: "Tag line" },
          {
            name: "Partners",
            info: "Tag line",
          },
          {
            name: "Investors",
            info: "Tag line",
          },
          {
            name: "Team",
            info: "Tag line",
          },
          {
            name: "News & Media",
            info: "Tag line",
          },
          {
            name: "Data & Security",
            info: "Tag line",
          },
          {
            name: "Customers",
            info: "Tag line",
          },
          {
            name: "GDRP",
            info: "Tag line",
          },
          {
            name: "Contact Us",
            info: "Tag line",
          },
        ]}
      />
    </div>
  );
}
