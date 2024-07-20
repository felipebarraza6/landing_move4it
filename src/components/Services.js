import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { ClearOutlined } from "@ant-design/icons";
const { Title } = Typography;
const Services = () => {
  return (
    <Row
      justify={window.innerWidth > 900 ? "space-between" : "center"}
      align={"middle"}
      style={{
        padding: "10px 10px 50px 10px",
        background:
          "linear-gradient(90deg, rgba(205,205,205,1) 0%, rgba(205,205,205,1) 20%, rgba(210,210,210,1) 31%, rgba(237,237,237,1) 62%, rgba(205,205,205,1) 88%)",
      }}
    >
      <Col span={24}>
        <Title style={{ textAlign: "center", marginBottom: "30px" }}>
          Valores
        </Title>
      </Col>
      {window.innerWidth < 900 ? (
        <>
          <Col
            style={{ marginBottom: window.innerWidth < 900 && "20px" }}
            xs={{}}
            lg={{ span: 4, offset: 0 }}
            xl={{ span: 4, offset: 0 }}
          >
            <Card
              icon={<ClearOutlined />}
              style={{
                width: window.innerWidth > 900 ? "100%" : "300px",
                minHeight: "30vh",
              }}
            >
              <Card.Meta
                title="Bienestar Integral"
                description="Creemos en la importancia de abordar la salud física y mental de manera holística, promoviendo el equilibrio entre cuerpo y mente."
              />
            </Card>
          </Col>
          <Col
            style={{ marginBottom: window.innerWidth < 900 && "20px" }}
            xs={{}}
            lg={{ span: 4, offset: 0 }}
            xl={{ span: 4, offset: 0 }}
          >
            <Card
              style={{
                width: window.innerWidth > 900 ? "100%" : "300px",
                minHeight: "30vh",
              }}
            >
              <Card.Meta
                title="Innovación Sostenible"
                description="Buscamos constantemente maneras creativas y sostenibles de mejorar y evolucionar nuestra plataforma para brindar la mejor experiencia a nuestros usuarios."
              />
            </Card>
          </Col>
          <Col
            style={{ marginBottom: window.innerWidth < 900 && "20px" }}
            xs={{}}
            lg={{ span: 5, offset: 0 }}
            xl={{ span: 5, offset: 0 }}
          >
            <Card
              style={{
                width: window.innerWidth > 900 ? "100%" : "300px",
                minHeight: "30vh",
              }}
            >
              <Card.Meta
                title="Colaboración y Comunidad"
                description="Valoramos la colaboración, el apoyo mutuo y la creación de una comunidad positiva que motive y empodere a todos los participantes."
              />
            </Card>
          </Col>
          <Col
            style={{ marginBottom: window.innerWidth < 900 && "20px" }}
            xs={{}}
            lg={{ span: 5, offset: 0 }}
            xl={{ span: 5, offset: 0 }}
          >
            <Card
              style={{
                width: window.innerWidth > 900 ? "100%" : "300px",
                minHeight: "30vh",
              }}
            >
              <Card.Meta
                title="Confidencialidad y Respeto"
                description="Respetamos y protegemos la privacidad y confidencialidad de nuestros usuarios, garantizando un ambiente seguro y de confianza."
              />
            </Card>
          </Col>
          <Col
            style={{ marginBottom: window.innerWidth < 900 && "20px" }}
            xs={{}}
            lg={{ span: 4, offset: 0 }}
            xl={{ span: 4, offset: 0 }}
          >
            <Card
              icon={<ClearOutlined />}
              style={{
                width: window.innerWidth > 900 ? "100%" : "300px",
                minHeight: "30vh",
              }}
            >
              <Card.Meta
                title="Inclusión"
                description="El programa esta diseñado para que todos puedan participar y tenemos la flexibilidad de adaptarlo a cualquier necesidad. "
              />
            </Card>
          </Col>
        </>
      ) : (
        <>
          <Col
            style={{ marginBottom: window.innerWidth < 900 && "20px" }}
            xs={{ span: 24 }}
            lg={{ span: 4, offset: 0 }}
            xl={{ span: 4, offset: 0 }}
          >
            <Card
              icon={<ClearOutlined />}
              style={{
                width: window.innerWidth > 900 ? "100%" : "300px",
                minHeight: "33vh",
              }}
            >
              <Card.Meta
                title="Bienestar Integral"
                description="Creemos en la importancia de abordar la salud física y mental de manera holística, promoviendo el equilibrio entre cuerpo y mente."
              />
            </Card>
          </Col>
          <Col
            style={{ marginBottom: window.innerWidth < 900 && "20px" }}
            xs={{ span: 24 }}
            lg={{ span: 4, offset: 0 }}
            xl={{ span: 4, offset: 0 }}
          >
            <Card
              style={{
                width: window.innerWidth > 900 ? "100%" : "300px",
                minHeight: "33vh",
              }}
            >
              <Card.Meta
                title="Innovación Sostenible"
                description="Buscamos constantemente maneras creativas y sostenibles de mejorar y evolucionar nuestra plataforma para brindar la mejor experiencia a nuestros usuarios."
              />
            </Card>
          </Col>
          <Col
            style={{ marginBottom: window.innerWidth < 900 && "20px" }}
            xs={{ span: 24 }}
            lg={{ span: 5, offset: 0 }}
            xl={{ span: 5, offset: 0 }}
          >
            <Card
              style={{
                width: window.innerWidth > 900 ? "100%" : "300px",
                minHeight: "33vh",
              }}
            >
              <Card.Meta
                title="Colaboración y Comunidad"
                description="Valoramos la colaboración, el apoyo mutuo y la creación de una comunidad positiva que motive y empodere a todos los participantes."
              />
            </Card>
          </Col>
          <Col
            style={{ marginBottom: window.innerWidth < 900 && "20px" }}
            xs={{ span: 24 }}
            lg={{ span: 5, offset: 0 }}
            xl={{ span: 5, offset: 0 }}
          >
            <Card
              style={{
                width: window.innerWidth > 900 ? "100%" : "300px",
                minHeight: "33vh",
              }}
            >
              <Card.Meta
                title="Confidencialidad y Respeto"
                description="Respetamos y protegemos la privacidad y confidencialidad de nuestros usuarios, garantizando un ambiente seguro y de confianza."
              />
            </Card>
          </Col>
          <Col
            style={{ marginBottom: window.innerWidth < 900 && "20px" }}
            xs={{ span: 24 }}
            lg={{ span: 4, offset: 0 }}
            xl={{ span: 4, offset: 0 }}
          >
            <Card
              icon={<ClearOutlined />}
              style={{
                width: window.innerWidth > 900 ? "100%" : "300px",
                minHeight: "33vh",
              }}
            >
              <Card.Meta
                title="Inclusión"
                description="El programa esta diseñado para que todos puedan participar y tenemos la flexibilidad de adaptarlo a cualquier necesidad. "
              />
            </Card>
          </Col>
        </>
      )}
    </Row>
  );
};

export default Services;
