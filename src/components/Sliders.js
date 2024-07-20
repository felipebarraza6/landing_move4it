import React from "react";
import { Carousel, Row, Col, Typography, Button } from "antd";
import { PlayCircleOutlined, FormOutlined } from "@ant-design/icons";

import { HashLink as Link } from "react-router-hash-link";
import slide1 from "../assets/img/slider1.png";

const { Title, Paragraph, Text } = Typography;

const Sliders = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <Carousel style={{ marginTop: "0px", zIndex: "0" }}>
      <div>
        <div
          style={{
            margin: "0px",
            height: "400px",
            width: "100%",
            padding: window.innerWidth > 900 ? "100px" : "20px",
            color: "#fff",
            backgroundImage: `url(${slide1})`,
            backgroundPosition: "center center",
          }}
        >
          <Row>
            <Col>
              <Title
                level={2}
                style={{
                  color: "white",
                  backgroundColor: "#001529",
                  opacity: window.innerWidth < 900 && "0.8",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <strong>Move4it:</strong> Transforma tu empresa, eleva tu equipo
              </Title>
            </Col>
          </Row>
          <Row>
            <Col
              span={24}
              style={{ marginLeft: window.innerWidth > 900 ? "20px" : "0px" }}
            >
              {window.innerWidth > 900 ? (
                <Text
                  style={{
                    color: "white",
                    fontSize: "20px",
                    backgroundColor: "#001529",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  Encuentra un estilo de vida balanceado, saludable y motivador.
                  ¡Eleva tu bienestar!
                </Text>
              ) : (
                <Paragraph
                  style={{
                    color: "white",
                    fontSize: "20px",
                    backgroundColor: "#001529",
                    opacity: window.innerWidth < 900 && "0.8",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  Encuentra un estilo de vida balanceado, saludable y motivador.
                  ¡Eleva tu bienestar!
                </Paragraph>
              )}
            </Col>
            <Col
              span={24}
              style={{
                marginTop: window.innerWidth > 900 ? "20px" : "0px",
                marginLeft: window.innerWidth > 900 ? "30px" : "0px",
              }}
            >
              <Button icon={<FormOutlined />} size="large" type="primary">
                <Link
                  smooth
                  to="#contact"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Empieza ahora
                </Link>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Carousel>
  );
};

export default Sliders;
