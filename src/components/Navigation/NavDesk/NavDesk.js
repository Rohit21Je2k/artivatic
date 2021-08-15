import React, { useState } from "react";

import NavBanner from "../NavBanner/NavBanner";
import "./NavDesk.css";
export default function DeskNav() {
  const [navNumber, setNavNumber] = useState(0);
  function handleMouseOver(e) {
    const navNo = Number(e.currentTarget.getAttribute("data-number"));

    setNavNumber((prevNumber) => {
      if (navNo === prevNumber) {
        return 0;
      }
      return navNo;
    });
  }
  return (
    <div className="nav__menu">
      <button
        className="nav__link selected"
        onClick={handleMouseOver}
        data-number="0"
      >
        Home
      </button>
      <button className="nav__link" onClick={handleMouseOver} data-number="1">
        Products
      </button>
      {navNumber === 1 ? (
        <NavBanner
          row1={{
            title: "Products",
            grid: [
              {
                name: "AUSIS",
                info: "AI UW System",
                subGrid: [
                  { title: "Life Underwriting", list: ["Individual", "Group"] },
                  {
                    title: "Health Underwriting",
                    list: ["Individual", "Family"],
                  },
                  {
                    title: "Alternative Underwriting",
                    list: ["Financial", "Health"],
                  },
                  {
                    title: "SME Underwriting",
                    list: ["Business"],
                  },
                  {
                    title: "Travel Underwriting",
                    list: ["Travel"],
                  },
                ],
              },
              {
                name: "ALFRD",
                info: "AI Claims Platform",
                subGrid: [
                  {
                    title: "Life Claims",
                    list: ["Accidental", "Death", "Disability", "Maturity"],
                  },
                  {
                    title: "Health Claims",
                    list: [
                      "Reuimbresement",
                      "OPD",
                      "Provider Network",
                      "Tariff System",
                      "TPA Network",
                    ],
                  },
                  {
                    title: "Auto Claims",
                    list: [
                      "Pre-Inspection",
                      "Damage Detection",
                      "Estimation",
                      "Investigation",
                      "Invoic Processing",
                    ],
                  },
                  {
                    title: "Property Claims",
                    list: [
                      "Pre-Inspection",
                      "Damage Detection",
                      "Estimation",
                      "Investigation",
                    ],
                  },
                  {
                    title: "Commercial Claims",
                    list: ["Document Process", "Estimation"],
                  },
                ],
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
            ],
          }}
          row2={{
            title: "OCR/ICR Engine",
            grid: [
              { name: "Early Claims", info: "tagline about topic" },
              {
                name: "Preinsurance Verification /PIVC",
                info: "tagline about topic",
              },
              {
                name: "SecondQuote Engine",
                info: "tagline about topic",
              },
              {
                name: "Inspection systems",
                info: "tagline about topic",
              },
            ],
          }}
        />
      ) : (
        ""
      )}
      <button className="nav__link" onClick={handleMouseOver} data-number="2">
        Cloud API
      </button>
      {navNumber === 2 ? (
        <NavBanner
          row1={{
            title: "Cloud API Platform",
            grid: [
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
            ],
          }}
        />
      ) : (
        ""
      )}
      <button className="nav__link" onClick={handleMouseOver} data-number="3">
        Solutions
      </button>
      {navNumber === 3 ? (
        <NavBanner
          row1={{
            title: "Solutions",
            grid: [
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
            ],
          }}
        />
      ) : (
        ""
      )}
      <button className="nav__link" onClick={handleMouseOver} data-number="4">
        Resource
      </button>
      {navNumber === 4 ? (
        <NavBanner
          row1={{
            title: "Resource",
            grid: [
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
            ],
          }}
        />
      ) : (
        ""
      )}
      <button className="nav__link" onClick={handleMouseOver} data-number="5">
        Covid 19 tools
      </button>
      {navNumber === 5 ? (
        <NavBanner
          row1={{
            title: "Covid 19 tools",
            grid: [
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
            ],
          }}
        />
      ) : (
        ""
      )}
      <button className="nav__link" onClick={handleMouseOver} data-number="6">
        Growth
      </button>
      {navNumber === 6 ? (
        <NavBanner
          row1={{
            title: "Customer Growth",
            grid: [
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
            ],
          }}
        />
      ) : (
        ""
      )}
      <button className="nav__link" onClick={handleMouseOver} data-number="7">
        Company
      </button>
      {navNumber === 7 ? (
        <NavBanner
          row1={{
            title: "Company",
            grid: [
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
            ],
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}
