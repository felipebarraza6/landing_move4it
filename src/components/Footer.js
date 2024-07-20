import React from "react";
import { Row, Col, Typography, Card, Button } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import logo from "../assets/img/logoco.png";

const { Paragraph, Title } = Typography;

const Footer = () => {
  return (
    <Row
      align="middle"
      justify={"space-evenly"}
      style={{ padding: "50px", backgroundColor: "white" }}
    >
      <Col>
        <img src={logo} width={"100px"} />
      </Col>
      <Col>
        <Paragraph
          style={{
            fontWeight: "600",
            textAlign: window.innerWidth < 900 && "center",
          }}
        >
          Eleva tu bienestar con Move4it: ¡Trabajo saludable, vida vibrante!
        </Paragraph>
      </Col>
      <Col>
        <Row justify={"end"} style={{ padding: "10px" }}>
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
      </Col>
    </Row>
  );
};

export default Footer;
