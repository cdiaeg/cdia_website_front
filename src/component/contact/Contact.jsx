import React, { useContext, useRef } from "react";
import "./contact.css";
import { Col, Row } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import { langContext } from "../../langContext/LangContext";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { MdLocationOn, MdOutlinePhoneInTalk } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
  let { lang } = useContext(langContext);
  const { t } = useTranslation();
  const form = useRef();
  console.log(lang, "hh");

  function validateEmail(value) {
    let error;
    if (!value) {
      error =
        lang == "en" ? "please enter email" : "الرجاء إدخال البريد الإلكتروني";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error =
        lang == "en"
          ? "Invalid email address"
          : "عنوان البريد الإلكتروني غير صالح";
    }
    return error;
  }

  function validateUsername(value) {
    let error;
    if (!value) {
      error = lang == "en" ? "please enter name" : "الرجاء إدخال الاسم";
    } else if (value.trim().length < 3) {
      error =
        lang == "en"
          ? "name must be at least 3 characters"
          : "يجب أن يتكون الاسم من 3 أحرف على الأقل";
    }
    return error;
  }
  function validateSubject(value) {
    let error;
    if (!value) {
      error = lang == "en" ? "please enter subject" : "الرجاء إدخال الموضوع";
    } else if (value.trim().length < 3) {
      error =
        lang == "en"
          ? "subject must be at least 3 characters"
          : "يجب أن يكون الموضوع 3 أحرف على الأقل";
    }
    return error;
  }

  function validatePhone(value) {
    let error;
    // You can add additional phone number validation logic if needed
    const phoneRegex = /^01\d{9}$/; // Regex to match "01" followed by 9 digits

    if (!value) {
      error =
        lang == "en" ? "please enter phone number" : "الرجاء إدخال رقم الهاتف";
    } else if (!phoneRegex.test(value)) {
      error = lang == "en" ? "Invalid phone number" : "رقم الهاتف غير صحيح";
    }

    return error;
  }

  function validateMessage(value) {
    let error;

    if (!value) {
      error = lang == "en" ? "please enter message" : "الرجاء إدخال الرسالة";
    } else if (value.trim().length < 3) {
      error =
        lang == "en"
          ? "message must be at least 3 characters"
          : "يجب أن تتكون الرسالة من 3 أحرف على الأقل";
    }
    return error;
  }

  return (
    <div className="contact-component">
      <div className="container">
        {/* <button onClick={notify}>Notify</button> */}
        <ToastContainer />

        <Row>
          <Col lg={6} className="mb-3 ">
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                phone: "",
                message: "",
              }}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                axios
                  .post("https://cdiaeg.com/api/contact-us/create", values, {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                  .then((response) => {
                    // Handle the successful response
                    console.log(response.data);
                    resetForm();
                    toast.success("success");
                  })
                  .catch((error) => {
                    // Handle the error
                    resetForm();
                    console.error("Error:", error);
                    // toast("Wow so easy!");
                    toast.error(error?.message);
                  });
              }}
            >
              {({ errors, touched, isValidating }) => (
                <Form
                  ref={form}
                  className="d-flex flex-wrap  justify-content-between "
                >
                  <div className="wrapperInput">
                    <Field
                      name="name"
                      validate={validateUsername}
                      placeholder={lang === "en" ? "Your Name" : "اسمك"}
                      style={{
                        borderColor: errors.name && touched.name && "red",
                      }}
                    />
                    {errors.name && touched.name && (
                      <div className=" error ">{errors.name}</div>
                    )}
                  </div>
                  <div className="wrapperInput">
                    <Field
                      name="email"
                      placeholder={
                        lang === "en" ? "Enter Email" : "ادخل البريد الالكتروني"
                      }
                      type="email"
                      validate={validateEmail}
                      style={{
                        borderColor: errors.email && touched.email && "red",
                      }}
                    />
                    {errors.email && touched.email && (
                      <div className="error ">{errors.email}</div>
                    )}
                  </div>
                  <div className="wrapperInput">
                    <Field
                      name="subject"
                      placeholder={lang === "en" ? "Subject" : "الموضوع"}
                      validate={validateSubject}
                      style={{
                        borderColor: errors.subject && touched.subject && "red",
                      }}
                    />
                    {errors.subject && touched.subject && (
                      <div className="error">{errors.subject}</div>
                    )}
                  </div>
                  <div className="wrapperInput">
                    <Field
                      name="phone"
                      placeholder={lang === "en" ? "Phone" : "رقم الهاتف"}
                      validate={validatePhone}
                      style={{
                        borderColor: errors.phone && touched.phone && "red",
                      }}
                    />
                    {errors.phone && touched.phone && (
                      <div className="error">{errors.phone}</div>
                    )}
                  </div>
                  <div className="wrapper-textarea">
                    <Field
                      as="textarea"
                      name="message"
                      placeholder={lang === "en" ? "Message" : "الرسالة"}
                      validate={validateMessage} // Assign the validation function here
                      style={{
                        borderColor: errors.message && touched.message && "red",
                      }}
                    />

                    {errors.message && touched.message && (
                      <div className="error">{errors.message}</div>
                    )}
                  </div>
                  <button type="submit">
                    {lang === "en" ? "Send Message" : "ارسل الرساله"}
                  </button>
                </Form>
              )}
            </Formik>
          </Col>
          <Col lg={6}>
            <div className="contant ms-lg-5 ">
              <h6>{t("contactGet")}</h6>
              <h2 className="title">{t("freeQuote")}</h2>
              <div className="wrapIcons mt-md-5">
                <div className="d-flex  align-items-center mb-3  ">
                  <div className="icon">
                    <MdLocationOn />
                  </div>
                  <div className="text">
                    <p>{t("ourAddress")}</p>
                    <span>{t("Address")}</span>
                  </div>
                </div>
                <div className="d-flex  align-items-center mb-3 ">
                  <div className="icon">
                    <HiOutlineMail />
                  </div>
                  <div className="text">
                    <p>{t("EmailAddress")}</p>
                    <span>{t("enmail")}</span>
                  </div>
                </div>
                <div className="d-flex  align-items-center  ">
                  <div className="icon">
                    <MdOutlinePhoneInTalk />
                  </div>
                  <div className="text">
                    <p>{t("CallNow")}</p>
                    <span>{t("call")}</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
