import React from "react";
import { Row, Col, Form, Input, Button, Typography } from "antd";
import { SendOutlined, ClearOutlined } from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const Contact = () => {
  const [form] = Form.useForm();
  return (
    <Row justify={"center"} align={"middle"}>
      {window.innerWidth > 900 ? (
        <>
          <Col xs={24} lg={12} xl={12} style={{ padding: "50px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.4584936660503!2d-70.57090081731253!3d-33.411289004831836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cee76f877c59%3A0x12a13b6465081368!2sAv.%20Manquehue%20Sur%20520%2C%20205%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1703015378788!5m2!1ses-419!2scl"
              style={{ width: "100%", minHeight: "60vh", border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col xs={24} lg={12} xl={12} style={{ padding: "50px" }}>
            <Title level={2}>Contacto</Title>
            <Paragraph style={{ textIndent: "10px" }}>
              Estamos aquí para escucharte y responder cualquier consulta. Tu
              bienestar es nuestra prioridad, así que no dudes en ponerte en
              contacto. ¡Estamos listos para ayudarte a activar tu mejor versión
            </Paragraph>
            <Form layout="vertical" form={form}>
              <Row>
                <Col span={12} style={{ paddingRight: "10px" }}>
                  <Form.Item label="Nombre" name="name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Apellido" name="last_name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ paddingRight: "10px" }}>
                  <Form.Item label="Teléfono" name="phone">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Correo" name="email">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ paddingRight: "10px" }}>
                  <Form.Item label="Asunto" name="subject">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Empresa" name="enterprise">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Mensaje" name="message">
                    <Input.TextArea rows={5} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item>
                    <Button
                      type="primary"
                      style={{ marginRight: "10px" }}
                      icon={<SendOutlined />}
                    >
                      Enviar
                    </Button>
                    <Button
                      icon={<ClearOutlined />}
                      onClick={() => {
                        form.resetFields();
                      }}
                    >
                      Limpiar
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </>
      ) : (
        <>
          <Col xs={24} lg={12} xl={12} style={{ padding: "50px" }}>
            <Title level={2}>Contacto</Title>
            <Paragraph style={{ textIndent: "10px" }}>
              Estamos aquí para escucharte y responder cualquier consulta. Tu
              bienestar es nuestra prioridad, así que no dudes en ponerte en
              contacto. ¡Estamos listos para ayudarte a activar tu mejor versión
            </Paragraph>
            <Form layout="vertical" form={form}>
              <Row>
                <Col span={12} style={{ paddingRight: "10px" }}>
                  <Form.Item label="Nombre" name="name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Apellido" name="last_name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ paddingRight: "10px" }}>
                  <Form.Item label="Teléfono" name="phone">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Correo" name="email">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12} style={{ paddingRight: "10px" }}>
                  <Form.Item label="Asunto" name="subject">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Empresa" name="enterprise">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Mensaje" name="message">
                    <Input.TextArea rows={5} />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item>
                    <Button
                      type="primary"
                      style={{ marginRight: "10px" }}
                      icon={<SendOutlined />}
                    >
                      Enviar
                    </Button>
                    <Button
                      icon={<ClearOutlined />}
                      onClick={() => {
                        form.resetFields();
                      }}
                    >
                      Limpiar
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col xs={24} lg={12} xl={12} style={{ padding: "50px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.4584936660503!2d-70.57090081731253!3d-33.411289004831836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cee76f877c59%3A0x12a13b6465081368!2sAv.%20Manquehue%20Sur%20520%2C%20205%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1703015378788!5m2!1ses-419!2scl"
              style={{ width: "100%", minHeight: "60vh", border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </>
      )}
    </Row>
  );
};

export default Contact;
