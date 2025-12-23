import React from "react";
import { Layout, Affix, Row, Col } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import logo from "../assets/img/logoco.png";

import MenuNav from "../components/nav/MenuNav";
import Sliders from "../components/Sliders";
import Who from "../components/Who";
import Services from "../components/Services";
import What from "../components/What";
import Problems from "../components/Problems";
import Contact from "../components/Contact";
import Ready from "../components/Ready";
import Footer from "../components/Footer";
const { Content, Header } = Layout;

const Home = () => {
  return (
    <Layout>
      <Affix offsetTop={0}>
        <div>
          <Row
            justify={"end"}
            style={{
              background: "linear-gradient(135deg, rgba(10, 95, 224, 0.95) 0%, rgba(10, 140, 207, 0.95) 50%, rgba(18, 227, 194, 0.95) 100%)",
              padding: "8px 24px",
              backdropFilter: "blur(10px)",
            }}
          >
            <Col>
              <FacebookFilled
                className="social-icon"
                style={{
                  fontSize: "18px",
                  color: "white",
                  marginRight: "12px",
                }}
              />
            </Col>
            <Col>
              <InstagramFilled
                className="social-icon"
                style={{
                  fontSize: "18px",
                  color: "white",
                  marginRight: "12px",
                }}
              />
            </Col>
            <Col>
              <TwitterCircleFilled
                className="social-icon"
                style={{
                  fontSize: "18px",
                  color: "white",
                }}
              />
            </Col>
          </Row>
          <Header className="move4ia-header" style={styles.header}>
            <div style={styles.logoContainer}>
              <img
                src={logo}
                alt="Move4IA Logo"
                className="move4ia-logo"
                style={styles.logo}
              />
            </div>
            <MenuNav />
          </Header>
        </div>
      </Affix>
      <Content>
        <Sliders />
        <div id="what">
          <Who />
        </div>

        <Services />

        <Problems />
        <div id="benefits">
          <Ready />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </Content>
    </Layout>
  );
};

const styles = {
  header: {
    zIndex: 1000,
    background: "linear-gradient(135deg, rgba(10, 95, 224, 0.98) 0%, rgba(10, 140, 207, 0.98) 50%, rgba(18, 227, 194, 0.98) 100%)",
    backgroundSize: "200% 200%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    boxShadow: "0 4px 20px rgba(10, 95, 224, 0.15)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    padding: "4px 0",
  },
  logo: {
    maxWidth: "140px",
    width: "auto",
    height: "auto",
    maxHeight: "50px",
    objectFit: "contain",
    filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))",
    transition: "all 0.3s ease",
    display: "block",
  },
};

export default Home;
