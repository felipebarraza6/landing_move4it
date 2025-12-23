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
      style={{
        padding: "60px 50px",
        background: "linear-gradient(135deg, rgba(10, 95, 224, 0.98) 0%, rgba(10, 140, 207, 0.98) 50%, rgba(18, 227, 194, 0.98) 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background elements */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "300px",
          height: "300px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "-5%",
          width: "200px",
          height: "200px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50%",
          filter: "blur(30px)",
        }}
      />
      
      <Col style={{ zIndex: 1 }}>
        <img
          src={logo}
          alt="Move4IA Logo"
          style={{
            maxWidth: "140px",
            width: "auto",
            height: "auto",
            maxHeight: "50px",
            objectFit: "contain",
            display: "block",
            filter: "drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3)) brightness(1.2) contrast(1.1)",
          }}
        />
      </Col>
      <Col style={{ zIndex: 1 }}>
        <Paragraph
          style={{
            fontWeight: "600",
            textAlign: window.innerWidth < 900 && "center",
            color: "white",
            fontSize: window.innerWidth > 900 ? "16px" : "14px",
            margin: 0,
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          Eleva tu bienestar con Move4IA: ¡Trabajo saludable, vida vibrante!
        </Paragraph>
      </Col>
      <Col style={{ zIndex: 1 }}>
        <Row justify={window.innerWidth > 900 ? "end" : "center"} style={{ padding: "10px" }}>
          <Col>
            <FacebookFilled
              className="social-icon"
              style={{
                fontSize: "22px",
                color: "white",
                marginRight: "12px",
              }}
            />
          </Col>
          <Col>
            <InstagramFilled
              className="social-icon"
              style={{
                fontSize: "22px",
                color: "white",
                marginRight: "12px",
              }}
            />
          </Col>
          <Col>
            <TwitterCircleFilled
              className="social-icon"
              style={{
                fontSize: "22px",
                color: "white",
              }}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;
