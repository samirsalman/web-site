import React from "react";
import { Layout, Menu, Row, Col, Avatar } from "antd";
import { Typography } from "antd";
const { Title } = Typography;

export default function Skills() {
  return (
    <div style={{ marginTop: "128px", marginBottom: "128px" }}>
      <Title style={{ color: "#A83E32" }} level={2}>
        Alcune delle mie Skills
      </Title>
      <Row type="flex" justify="space-around" align="middle">
        <Col span={8} type="flex" style={{ width: "250px", margin: "24px" }}>
          <img
            src="https://img.icons8.com/bubbles/2x/database.png"
            alt="db"
          ></img>
          Creazione, gestione e interrogazione di Database SQL e NoSQL
        </Col>
        <Col span={8} type="flex" style={{ width: "250px", margin: "24px" }}>
          <img
            src="https://www.evosmart.it/wp-content/uploads/2019/09/android-logo.jpg"
            width="240px"
            alt="db"
          ></img>
          Android e Flutter Dev
        </Col>
        <Col span={8} type="flex" style={{ width: "250px", margin: "24px" }}>
          <img
            src="https://www.tosolini.info/wp-content/uploads/2018/02/feat-nodejs-1440x564_c.png"
            alt="db"
            width="240px"
          ></img>
          Sviluppo backend con NodeJS
        </Col>
      </Row>
    </div>
  );
}
