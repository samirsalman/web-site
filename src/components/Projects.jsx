import React from "react";
import { Row, Col, Typography, Timeline } from "antd";
const { deviceX } = require("html5-device-mockups");

const { Title } = Typography;

export default function Progress() {
  return (
    <div
      style={{
        paddingTop: "24px",
        marginTop: "128px",
        marginBottom: "128px",
        background: "#A83E32",
        color: "white"
      }}
    >
      <Title
        level={2}
        style={{ marginBottom: "84px", marginTop: "84px", color: "white" }}
      >
        I miei progetti
      </Title>

      <Row type="flex" justify="center" style={{ margin: "24px" }}>
        <Col xs={24} s={24} md={4} l={4} xl={4} style={{ margin: "24px" }}>
          <div class="device-wrapper">
            <div
              class="device"
              data-device="iPhone7"
              data-orientation="portrait"
              data-color="black"
            >
              <div class="screen">
                <img
                  src={require("../app1.png")}
                  width="100%"
                  height="100%"
                  alt="cocktailRoom"
                />
              </div>
              <div class="button"></div>
            </div>
          </div>
        </Col>
        <Col xs={24} md={18}>
          <Title level={1} style={{ textAlign: "left", color: "white" }}>
            COOCKTAIL ROOM
          </Title>
          <div style={{ fontSize: "22px", textAlign: "left" }}>
            Cocktail Room è un'applicazione, scritta in Flutter, che permette di
            cercare e salvare drinks da un database molto vasto. Per ogni drink
            sono elencati: ingredienti e preparazione. Inoltre sono presenti dei
            simpatici minigiochi da fare con i propri amici. Pubblicata intorno
            a Settembre 2019, è stata la mia prima applicazione a finire sullo
            store. È stata molto importante, mi ha infatti permesso di
            comprendere i principi fondamentali di Flutter e proseguire lo
            studio del Framework mettendo le mani sul "fuoco". Cocktail Room al
            momento è disponibile solo per Android.
          </div>
          <Row type="flex" justify="center">
            <Col xs={24} s={24}>
              <div
                style={{
                  marginTop: "24px",
                  marginBottom: "24px"
                }}
              >
                <a href="https://play.google.com/store/apps/details?id=it.salmanapp.cocktailroom">
                  <img
                    src={require("../playstore.png")}
                    width="250px"
                    alt="download"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
