import React, { useContext, useEffect, useState } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Tag, Typography, Button } from "antd";
import Zoom from "../springs/Zoom";
import TrailsMove from "../springs/TrailsMove";
import { fadeContext } from "../context/contexts";
import { getArticles } from "../request/request";

const Card = ({ setIsZoom, isZoom, index = 0 }): JSX.Element => {
  useEffect(() => {
    getArticles().then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <Zoom isZoom={index === isZoom}>
      <div
        className="article-card"
        onMouseOver={() => {
          setIsZoom(index);
        }}
        onMouseLeave={() => {
          setIsZoom(-1);
        }}
      >
        <div className="article-header">
          <div>header</div>
          <Button type={"primary"}>查看详情</Button>
        </div>
        <Tag color="cyan">javascript</Tag>
        <Typography className="article-intro">
          <Typography.Paragraph ellipsis={{ rows: 7, expandable: false }}>
            this is a intro this is a intro this is a intro this is a intro this
            is a intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a this
            is a intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro this is a intro this is a intro this is a intro this is a
            intro intro this is a intro
          </Typography.Paragraph>
        </Typography>
      </div>
    </Zoom>
  );
};

export default function SimpleBlogList(): JSX.Element {
  const arr = [1, 2, 3, 4, 5];
  const [isZoom, setIsZoom] = useState<number>(-1);
  const { height, headerHeight } = useContext(fadeContext);
  return (
    <div style={{ paddingTop: "20vh" }}>
      <div className="simple-header">
        文档列表
        <div className="buttons">切换菜单</div>
      </div>
      <TrailsMove
        amount={arr.length}
        isShow={height === -1 && headerHeight === -1}
      >
        <Card isZoom={isZoom} setIsZoom={setIsZoom} index={0}></Card>
      </TrailsMove>
    </div>
  );
}
