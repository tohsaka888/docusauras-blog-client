import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import "../css/homePage.css";

const FeatureList = [
  {
    title: "方便理解",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        博客内采用markdown作为文档展示。使用docusaurus提供的codeblock主题插件，在学习完毕后不妨自己敲敲代码，加深印象
      </>
    ),
  },
  {
    title: "关注最新前端技术",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        包含React,Vue及其相关的技术栈,同时关注deno,node等技术(JavaScript天下第一！！！)如果你也想学习，欢迎来逛逛
      </>
    ),
  },
  {
    title: "网站相关",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>本站点基于docusaurus，前端使用react+tsx，后端采用deno+mongodb.项目地址:https://github.com/tohsaka888/docusauras-blog-client</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{title}</div>
        <p style={{ fontWeight: "bold", textAlign: "left", fontSize: "1rem" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="info">
      <section className={styles.features} style={{ zIndex: 2 }}>
        <div className="container card">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
