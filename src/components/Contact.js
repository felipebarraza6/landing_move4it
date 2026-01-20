import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Typography, message } from "antd";
import { SendOutlined, ClearOutlined } from "@ant-design/icons";
import ContactService from "../services/contact.service";

const { Title, Paragraph } = Typography;

const Contact = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await ContactService.sendMessage(values);
      if (response.data.success) {
        message.success(response.data.message);
        form.resetFields();
      } else {
        message.error("Error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      message.error("Hubo un problema al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.warning("Por favor completa los campos requeridos.");
  };

  return (
    <Row justify={"center"} align={"middle"}>
      <Col
        xs={{ span: 24, order: 2 }}
        lg={{ span: 12, order: 1 }}
        xl={{ span: 12, order: 1 }}
        style={{ padding: "50px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.4584936660503!2d-70.57090081731253!3d-33.411289004831836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cee76f877c59%3A0x12a13b6465081368!2sAv.%20Manquehue%20Sur%20520%2C%20205%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1703015378788!5m2!1ses-419!2scl"
          style={{ width: "100%", minHeight: "60vh", border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
      </Col>
      <Col
        xs={{ span: 24, order: 1 }}
        lg={{ span: 12, order: 2 }}
        xl={{ span: 12, order: 2 }}
        style={{ padding: "50px" }}
      >
        <Title level={2} style={{ color: "#0A5FE0", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Contacto</Title>
        <Paragraph style={{ textIndent: "10px" }}>
          Estamos aquí para escucharte y responder cualquier consulta. Tu
          bienestar es nuestra prioridad, así que no dudes en ponerte en
          contacto. ¡Estamos listos para ayudarte a activar tu mejor versión!
        </Paragraph>
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Nombre"
                name="name"
                rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
              >
                <Input placeholder="Juan" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Apellido"
                name="last_name"
                rules={[{ required: true, message: 'Por favor ingresa tu apellido' }]}
              >
                <Input placeholder="Pérez" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Teléfono" name="phone">
                <Input placeholder="+569..." />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Correo"
                name="email"
                rules={[
                  { required: true, message: 'Por favor ingresa tu correo' },
                  { type: 'email', message: 'Por favor ingresa un correo válido' }
                ]}
              >
                <Input placeholder="juan@empresa.com" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Asunto"
                name="subject"
                rules={[{ required: true, message: 'Por favor ingresa un asunto' }]}
              >
                <Input placeholder="Motivo del contacto" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Empresa" name="enterprise">
                <Input placeholder="Nombre de tu empresa" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Mensaje"
                name="message"
                rules={[{ required: true, message: 'Por favor escribe tu mensaje' }]}
              >
                <Input.TextArea rows={5} placeholder="Escribe tu mensaje aquí..." />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginRight: "10px" }}
                  icon={<SendOutlined />}
                  loading={loading}
                >
                  Enviar
                </Button>
                <Button
                  icon={<ClearOutlined />}
                  onClick={() => {
                    form.resetFields();
                  }}
                  disabled={loading}
                >
                  Limpiar
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default Contact;
