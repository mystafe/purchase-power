import React from "react";

function Footer() {
  return (
    <div className="footer">
      <p>
        The data has been obtained from <br></br> the Central Bank of Turkey
        (TCMB).
      </p>
      <p>
        <strong>Note</strong> Data Updated Through June 2023 <>v2</>
      </p>

      <p></p>

      <div className="footer__links">
        <div className="footer__link--1">
          <a href="mailto:admess34@gmail.com" target="_blank" rel="noreferrer">
            Mustafa Evleksiz
          </a>
        </div>
        <div className="footer__link--2">
          <a
            href="https://www.linkedin.com/in/mustafa-e-728bb1a5/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="footer__link--3">
          <a href="https://github.com/mystafe" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
