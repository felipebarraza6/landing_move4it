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
      <div>
        <Row
          justify={"end"}
          style={{ backgroundColor: "white", padding: "10px" }}
        >
          <Col>
            <FacebookFilled
              style={{
                fontSize: "20px",
                color: "#001529",
                marginRight: "10px",
              }}
            />
          </Col>
          <Col>
            <InstagramFilled
              style={{
                fontSize: "20px",
                color: "#001529",
                marginRight: "10px",
              }}
            />
          </Col>
          <Col>
            <TwitterCircleFilled
              style={{
                fontSize: "20px",
                color: "#001529",
              }}
            />
          </Col>
        </Row>
      </div>
      <Affix>
        <Header style={styles.header}>
          <div>
            <img src={logo} alt="logo" style={styles.logo} />
          </div>
          <MenuNav />
        </Header>
      </Affix>
      <Content>
        <Sliders />
        <div id="what">
          <Who />
        </div>

        <Services />
        <What />

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
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: "0 24px",
  },
  logo: {
    width: "100px",
  },
};

export default Home;
