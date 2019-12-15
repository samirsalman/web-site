import React from "react";
import { Card, Button, Row, Col, Icon, Typography } from "antd";
const { Meta } = Card;
const { Title } = Typography;

export default function Contacts() {
  return (
    <div style={{ marginTop: "64px", marginBottom: "64px" }}>
      <Row type="flex" justify="center">
        <Col span={20} style={{ margin: "24px" }}>
          <Title level={2} style={{ color: "#A83E32" }}>
            I miei Contatti
          </Title>
          <Card style={{ marginTop: 16 }}>
            <Meta
              description={
                <div>
                  <p>Telefono: +39 329 3346168</p>
                  <p>Email: samirsalman1997@gmail.com</p>
                  <br></br>

                  <Row type="flex" justify="center" gutter={[16, 16]}>
                    <a href="https://github.com/samirsalman">
                      {" "}
                      <Col md={8} xs={12}>
                        <Button type="ghost" className="btn">
                          <Icon type="github"></Icon>Github
                        </Button>
                      </Col>
                    </a>
                    <a href="https://www.linkedin.com/in/samir-salman-9bb92112a/">
                      <Col md={8} xs={12}>
                        <Button type="ghost">
                          <Icon type="linkedin"></Icon>LinkedIn
                        </Button>
                      </Col>
                    </a>
                    <a href="https://twitter.com/SamirSa29851308">
                      <Col md={8} xs={12}>
                        <Button type="ghost">
                          <Icon type="twitter"></Icon>Twitter
                        </Button>
                      </Col>
                    </a>
                    <a href="https://drive.google.com/open?id=11OIzzSqLkokeDl6kmXmXciGKoq2hZ8To">
                      <Col md={8} xs={12}>
                        <Button type="ghost">
                          <Icon type="book"></Icon>Curriculum Vitae
                        </Button>
                      </Col>
                    </a>
                  </Row>
                </div>
              }
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
