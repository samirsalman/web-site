import React from "react";
import { Row, Col } from "antd";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function TweetComponent() {
  return (
    <Row type="flex" justify="center">
      <Col md={12} xs={20} style={{ margin: "24px" }}>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="SamirSa29851308"
          options={{ height: 400 }}
        />
      </Col>
    </Row>
  );
}
