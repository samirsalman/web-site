import React from "react";
import Typist from "react-typist";
import { Row, Col, Avatar, Typography } from "antd";
const { Title } = Typography;

export default function Welcome() {
  return (
    <div>
      <Row
        className="title"
        type="flex"
        justify="center"
        style={{ height: window.innerHeight, color: "white" }}
      >
        <Col span={24}>
          <Row type="flex" justify="center">
            <Col span={20} style={{ margin: "24px" }}>
              <Avatar
                size={100}
                style={{
                  margin: "12px",
                  marginTop: "32px",
                  color: "#a83e32",
                  backgroundColor: "#fde3cf"
                }}
              >
                S
              </Avatar>
              <Title level={1} style={{ color: "#fff" }}>
                Samir Salman
              </Title>
            </Col>
          </Row>
          <Row>
            <Typist cursor={{ show: false }}>
              <Title level={4} style={{ color: "#fff" }}>
                Studente in Informatica Magistrale presso L'Università degli
                Studi di Roma "Tor Vergata".
              </Title>
              <br></br>

              <p style={{ color: "#fff" }}>"It's not a bug, it's a feature"</p>
            </Typist>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
