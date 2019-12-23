import React from "react";
import "./App.css";
import { Layout } from "antd";
import { Typography } from "antd";
import { Card } from "antd";
import TweetComponent from "./components/TweetComponent";
import Skills from "./components/Skills";
import Progress from "./components/Progress";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Welcome from "./components/Welcome";

const { Meta } = Card;
const { Title } = Typography;
const { Header } = Layout;

function App() {
  return (
    <div className="App">
      <Header
        style={{ height: window.innerHeight, background: "#A83E32" }}
        className="header__bg"
      >
        <Welcome></Welcome>
      </Header>
      <TweetComponent></TweetComponent>
      <Skills></Skills>
      <Projects></Projects>
      <Progress></Progress>
      <Contacts></Contacts>

      <p style={{ color: "#A83E32" }}>Sito realizzato da Samir Salman</p>
    </div>
  );
}

export default App;
