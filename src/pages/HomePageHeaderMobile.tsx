import Link from "@docusaurus/Link";
import React from "react";
import "./mobileHomePage.css";

export default function HomePageHeaderMobile() {
  return (
    <div className="homePageHeader">
      <div className="header-text">欢迎来到Tohsaka888<br />的个人博客</div>
      <Link className="button button--secondary button--lg" to="/docs/intro">
        开始阅读文档
      </Link>
    </div>
  );
}
