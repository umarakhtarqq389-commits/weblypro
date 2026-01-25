// components/ContactPage.jsx
import React, { useState } from "react";
import { message, Form, Input, Button, Row, Col, Select } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
  UserOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import emailjs from "emailjs-com";
import { FaWhatsapp } from "react-icons/fa";

const { TextArea } = Input;
const { Option } = Select;

const ContactPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    SERVICE_ID: "service_0qghwdr",
    TEMPLATE_ID: "template_ygfjwk4",
    PUBLIC_KEY: "3xT9sU9xvSm7vbGMz",
  };

  const services = [
    "Website Development",
    "Shopify Development",
    "WordPress Development",
    "Digital Marketing",
    "Graphic Designing",
    "SEO Optimization",
    "Video Editing",
    "Mobile App Development",
    "Consultation",
    "Other",
  ];

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        phone: values.phone || "Not provided",
        service: values.service || "General Inquiry",
        message: values.message,
        to_email: "weblypro1@gmail.com",
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      message.success(
        "Message sent successfully! We'll contact you within 24 hours."
      );
      form.resetFields();
    } catch (error) {
      console.error("Email send error:", error);
      message.error(
        "Failed to send message. Please try again or call us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Contact <span className="gradient-text">WeblyPro</span>
            </h1>
            <p className="hero-subtitle">
              Get in touch with us. We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main">
        <div className="container">
          <Row gutter={[60, 60]}>
            {/* Contact Form */}
            <Col xs={24} lg={14}>
              <div className="form-wrapper">
                <h2 className="form-title">Send a Message</h2>

                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  className="contact-form"
                >
                  <Row gutter={20}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="name"
                        rules={[
                          { required: true, message: "Please enter your name" },
                          {
                            min: 2,
                            message: "Name must be at least 2 characters",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Your Full Name"
                          prefix={<UserOutlined />}
                          className="form-input"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your email",
                          },
                          {
                            type: "email",
                            message: "Please enter a valid email",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Email Address"
                          prefix={<MailOutlined />}
                          className="form-input"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        pattern: /^[0-9+\-\s()]*$/,
                        message: "Please enter a valid phone number",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Phone Number (Optional)"
                      prefix={<PhoneOutlined />}
                      className="form-input"
                    />
                  </Form.Item>

                  <Form.Item name="service">
                    <Select
                      size="large"
                      placeholder="Select Service (Optional)"
                      className="form-select"
                    >
                      {services.map((service, index) => (
                        <Option key={index} value={service}>
                          {service}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="message"
                    rules={[
                      { required: true, message: "Please enter your message" },
                      {
                        min: 10,
                        message: "Message must be at least 10 characters",
                      },
                    ]}
                  >
                    <TextArea
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="form-textarea"
                      maxLength={1000}
                      showCount
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      loading={loading}
                      icon={<SendOutlined />}
                      className="submit-btn"
                      block
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>

            {/* Contact Info */}
            <Col xs={24} lg={10}>
              <div className="info-wrapper">
                <div className="info-card">
                  <h3 className="info-title">Get in Touch</h3>
                  <p className="info-description">
                    Prefer direct contact? Here's how you can reach us:
                  </p>

                  <div className="contact-methods">
                    <div className="contact-method">
                      <div className="method-icon phone">
                        <PhoneOutlined />
                      </div>
                      <div className="method-content">
                        <h4>Call Us</h4>
                        <a href="tel:+923136928882" className="method-link">
                          +92 313 6928882
                        </a>
                        <p className="method-note">
                          Available 24/7 for urgent inquiries
                        </p>
                      </div>
                    </div>

                    <div className="contact-method">
                      <div className="method-icon email">
                        <MailOutlined />
                      </div>
                      <div className="method-content">
                        <h4>Email Us</h4>
                        <a
                          href="mailto:weblypro1@gmail.com"
                          className="method-link"
                        >
                          weblypro1@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="office-info">
                    <div className="method-icon location">
                      <EnvironmentOutlined />
                    </div>
                    <div>
                      <h4>Office Location</h4>
                      {/* Updated Location Text - 3 small lines */}
                      <p className="office-address">
                        147-A People's Colony No.1 Near Faisal Hospital
                        <br />
                        Faisalabad, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Full Width Google Map at Bottom */}
      </section>

      {/* Simple CTA */}
      <section className="simple-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss your ideas and create a plan for your business.</p>
            <div className="cta-actions">
              <a
                href="https://wa.me/923136928882?text=Hello%20WeblyPro%2C%20I%20came%20from%20your%20website%20and%20want%20to%20get%20more%20information."
                className="cta-btn primary whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="whatsapp-icon" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="full-width-map-container">
        <iframe
          title="WeblyPro Office Location - Full Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54391.417119027195!2d73.101822940794!3d31.412064750470775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1701643200000!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
