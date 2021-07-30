import React, {
  useState,
  useRef,
  useContext,
  useEffect,
  HtmlHTMLAttributes,
} from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import SimpleBlogList from "../components/SimpleBlogList";
import HomepageFeatures from "../components/HomepageFeatures";
import FontFade from "../springs/FontFade";
import NormalFade from "../springs/NormalFade";
import BackgroundChange from "../springs/BackgroundChange";
import TransformLeft from "../springs/TransformLeft";
import { fadeContext } from "../context/contexts";
import useScreenHeight from "../hooks/useScreenHeight";
import "../css/homePage.css";

const HeaderText = ({ siteConfig }) => (
  <div>
    <h1 className="hero__title">{siteConfig.title}</h1>
    <p
      className="hero__subtitle"
      style={{ fontSize: "2.5rem", marginBottom: "4vh", fontWeight: "bold" }}
    >
      技术宅<span className="cancel_text">拯救即将</span>
      <span>毁灭</span>
      <span className="cancel_text">的</span>世界
    </p>
  </div>
);
function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <FontFade>
      <div className="backgroundImg">
        <div className="container">
          <HeaderText siteConfig={siteConfig} />
          <div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              开始阅读文档
            </Link>
          </div>
        </div>
      </div>
    </FontFade>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [fade, setFade] = useState<boolean>(false);
  const introRef = useRef<HTMLDivElement>();
  const headerRef = useRef<HTMLDivElement>();
  const height: Number = useScreenHeight(introRef);
  const headerHeight: Number = useScreenHeight(headerRef);
  console.log(height);
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="bak1"></div>
      <fadeContext.Provider value={{ fade, setFade, height, headerHeight }}>
        <BackgroundChange />
        <div ref={headerRef}>
          <HomepageHeader />
        </div>
        <div ref={introRef}>
          <main style={{ width: "100%", overflowY: "hidden" }}>
            <NormalFade>
              <TransformLeft isShow={height !== -1}>
                <div>
                  <HomepageFeatures />
                </div>
              </TransformLeft>
            </NormalFade>
          </main>
        </div>
        <SimpleBlogList />
      </fadeContext.Provider>
    </Layout>
  );
}
