import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Main from "../../components/portfolio/index";
import { meta } from "../../content_option";
import "./style.css";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <div className="About-header projects">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Main />
      </div>
    </HelmetProvider>
  );
};
