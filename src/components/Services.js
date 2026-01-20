import React, { useEffect, useState } from "react";
import { Row, Col, Card, Typography, Spin } from "antd";
import { ClearOutlined } from "@ant-design/icons";
import ContentService from "../services/content.service";

const { Title } = Typography;

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ContentService.getServices().then((response) => {
      setServices(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div
      className="section-fade-in"
      style={{
        padding: "10px 10px 50px 10px",
        background:
          "linear-gradient(135deg, rgba(10, 95, 224, 0.05) 0%, rgba(10, 140, 207, 0.08) 50%, rgba(18, 227, 194, 0.05) 100%)",
      }}
    >
      <Row justify="center" align="middle">
        <Col span={24}>
          <Title
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#0A5FE0",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
            }}
          >
            Valores
          </Title>
        </Col>
      </Row>

      {loading ? (
        <Row justify="center" style={{ padding: "50px" }}>
          <Spin size="large" />
        </Row>
      ) : (
        <Row justify="center" gutter={[16, 16]}>
          {services.map((service, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              lg={index === 2 || index === 3 ? 5 : 4} // Trying to mimic original layout logic roughly
              xl={index === 2 || index === 3 ? 5 : 4}
            >
              <Card
                icon={<ClearOutlined />} // Note: Original code only had icon on some cards.
                // If we want specific icons per service, we should add them to ContentService or map them here.
                // The original had ClearOutlined on 1st and last card on Mobile, and 1st and last on Desktop.
                // It seems somewhat arbitrary or decorative. I'll leave it simple or check index.
                hoverable
                style={{
                  width: "100%",
                  minHeight: "30vh",
                  height: "100%", // Flex height
                }}
              >
                <Card.Meta
                  title={service.title}
                  description={service.description}
                  avatar={(index === 0 || index === services.length - 1) ? <ClearOutlined /> : null}
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Services;
