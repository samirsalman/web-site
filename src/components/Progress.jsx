import React from "react";
import { Row, Col, Typography, Timeline } from "antd";
const { Title } = Typography;

export default function Progress() {
  return (
    <div style={{ marginTop: "128px", marginBottom: "128px" }}>
      <Title level={2} style={{ color: "#A83E32" }}>
        I miei progressi
      </Title>
      <Row type="flex" justify="center">
        <Col>
          <Timeline mode="alternate">
            <Timeline.Item color="green">
              Iscrizione all'Università Ottobre 2016
            </Timeline.Item>
            <Timeline.Item color="green">
              Laurea Triennale in Informatica 25 Ottobre 2019
            </Timeline.Item>
            <Timeline.Item color="green">
              Iscrizione alla Laurea Magistrale in Informatica Ottobre 2019
            </Timeline.Item>
            <Timeline.Item color="gray">Termine degli studi</Timeline.Item>
            <Timeline.Item color="gray">Futuro..</Timeline.Item>
          </Timeline>
        </Col>
      </Row>
    </div>
  );
}
