import React, { useState } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Tag, Typography, Button } from "antd";
import Zoom from "../springs/Zoom";

export default function SimpleBlogList(): JSX.Element {
  const arr = [1, 2, 3, 4, 5];
  const [isZoom, setIsZoom] = useState<number>(-1);
  return (
    <div>
      <div className="simple-header">
        文档列表
        <div className="buttons">切换菜单</div>
      </div>
      {arr.map((item, index) => {
        return (
          <Zoom isZoom={isZoom === index} key={index}>
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
                  this is a intro this is a intro this is a intro this is a
                  intro this is a intro this is a intro this is a intro this is
                  a intro this is a intro this is a intro this is a intro this
                  is a intro this is a intro this is a intro this is a intro
                  this is a intro this is a intro this is a intro this is a
                  intro this is a intro this is a intro this is a intro this is
                  a intro this is a intro this is a intro this is a intro this
                  is a intro this is a intro this is a intro this is a intro
                  this is a intro this is a intro this is a intro this is a
                  intro this is a intro this is a intro this is a this is a
                  intro this is a intro this is a intro this is a intro this is
                  a intro this is a intro this is a intro this is a intro this
                  is a intro this is a intro this is a intro this is a intro
                  this is a intro this is a intro this is a intro this is a
                  intro this is a intro this is a intro this is a intro this is
                  a intro this is a intro this is a intro this is a intro this
                  is a intro this is a intro this is a intro this is a intro
                  this is a intro this is a intro this is a intro this is a
                  intro this is a intro this is a intro this is a intro this is
                  a intro this is a intro this is a intro this is a intro this
                  is a intro this is a intro this is a intro this is a intro
                  this is a intro this is a intro this is a intro this is a
                  intro this is a intro this is a intro this is a intro this is
                  a intro this is a intro this is a intro this is a intro this
                  is a intro this is a intro this is a intro this is a intro
                  intro this is a intro
                </Typography.Paragraph>
              </Typography>
            </div>
          </Zoom>
        );
      })}
    </div>
  );
}
