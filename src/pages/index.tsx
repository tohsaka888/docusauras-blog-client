import React, { useState, useRef, useCallback, useEffect } from "react";
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
import useIsThroughScreen from "../hooks/useIsThroughScreen";
import "../css/homePage.css";
import { Checkbox, Form, Input, Modal, message } from "antd";
import { login } from "../request/request";
import { getLoginStatus } from "../request/request";
import "./index.module.css";
import useIsMobile from "../hooks/useIsMobile";
import HomePageHeaderMobile from "./HomePageHeaderMobile";

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
  const [visiable, setVisiable] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [loginUser, setLoginUser] = useState<string>("");
  const sendLoginRequest = useCallback(async () => {
    const username: string = form.getFieldValue("username");
    const password: string = form.getFieldValue("password");
    const data = await login(username, password);
    if (data.code === 200) {
      if (data.message === "登陆成功") {
        message.success(`${username},${data.message}~`);
        sessionStorage.setItem("cookie", data.cookie);
      } else {
        message.error(`${data.message}`);
      }
    } else if (data.code === 300) {
      message.error(`${data.error}`);
    } else {
      message.warning("网络错误");
    }
    setVisiable(false);
  }, []);
  useEffect(() => {
    getLoginStatus().then((data) => {
      setLoginUser(data.username);
    });
  });
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
            <div
              onClick={() =>
                !loginUser
                  ? setVisiable(true)
                  : message.success("检测已登录,正在跳转,请稍等~")
              }
              className="button button--secondary button--lg"
              style={{
                background: "rgb(24, 144, 255)",
                color: "#fff",
                marginLeft: "2vw",
              }}
            >
              {loginUser ? "撰写新文章" : "管理员登录"}
            </div>
          </div>
        </div>
      </div>
      <Modal
        visible={visiable}
        title="登陆"
        okText={"登陆"}
        cancelText={"取消"}
        onCancel={() => setVisiable(false)}
        onOk={sendLoginRequest}
      >
        <Form
          form={form}
          style={{ marginTop: "4vh" }}
          name="login"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名!" }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 4, span: 16 }}
          >
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
        </Form>
      </Modal>
    </FontFade>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [fade, setFade] = useState<boolean>(false);
  const introRef = useRef<HTMLDivElement>();
  const headerRef = useRef<HTMLDivElement>();
  const cardRef = useRef<HTMLDivElement>();
  const isShowIntro: boolean = useIsThroughScreen(introRef, true);
  const isShowHeader: boolean = useIsThroughScreen(headerRef, false);
  const isShowCard: boolean = useIsThroughScreen(cardRef, false);
  const isMobile: boolean = useIsMobile();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="bak1"></div>
      <fadeContext.Provider
        value={{ fade, setFade, isShowCard, isShowHeader, isShowIntro }}
      >
        <BackgroundChange />
        <div ref={headerRef} style={{ height: "100vh" }}>
          {isMobile ? <HomePageHeaderMobile /> : <HomepageHeader />}
        </div>
        <div ref={introRef} style={{height: "max-content"}}>
          <main style={{ width: "100%", overflowY: "hidden" }}>
            <NormalFade>
              <TransformLeft isShow={isShowIntro}>
                <div>
                  <HomepageFeatures />
                </div>
              </TransformLeft>
            </NormalFade>
          </main>
        </div>
        <div ref={cardRef}>
          <SimpleBlogList />
        </div>
      </fadeContext.Provider>
    </Layout>
  );
}
