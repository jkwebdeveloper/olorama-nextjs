"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import contactbg from "../../public/assets/contact-bg.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Formik } from "formik";
import { contactValidation } from "@/app/Validations";
import { Fragment } from "react";
import { BiErrorCircle } from "react-icons/bi";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = "6LfP1YwpAAAAAJhxVRt5TXdiBelLJhTt5ddYFaaK";

//secret key = 6LfP1YwpAAAAAM31AKXN8_ZPvsThZiy1znekMXbE

const ContactUsSection = () => {
  const [loading, setLoading] = useState();
  const [recaptchavalue, SetRecaptchaValue] = useState("");
  const onChange = (value) => {
    SetRecaptchaValue(value);
    console.log(value, "recaptcha");
  };
  const captchaRef = useRef();
  return (
    <div
      className="py-11"
      style={{
        backgroundImage: `url(${contactbg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      {/* <Image src={require("../../public/assets/contact-bg.png")} className='relative'/> */}
      <div className="space-y-10">
        <div className=" text-white space-y-2">
          <h1 className="font-semibold text-2xl text-center">Contact us</h1>
          <p className="text-center">
            Describe your project here and we will respond your questions within
            24 hours (don’t worry, we won’t send you spam …):
          </p>
        </div>
        <div className="bg-white shadow-md p-5 space-y-5 container xl:w-1/2 w-11/12 mx-auto">
          <div>
            <p className="font-semibold text-xl uppercase">Get in touch</p>
            <p>Reach out to us for any inquiry</p>
          </div>
          <Formik
            initialValues={contactValidation.initialState}
            validationSchema={contactValidation.schema}
            onSubmit={(values, action) => {
              console.log(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
              <Fragment>
                <div className="space-y-5">
                  <div className="grid grid-cols-1">
                    <div>
                      <label htmlFor="">Full Name</label>
                      <input
                        type="text"
                        placeholder="YOUR NAME *"
                        name="name"
                        className="border border-[#C4C4C4] w-full outline-none p-2 rounded-[4px]"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <span
                        className="error"
                        style={{ color: "red", fontSize: "13px" }}
                      >
                        {errors.name}
                      </span>
                      {errors.name && touched.name ? (
                        <BiErrorCircle
                          style={{
                            float: "right",
                            marginTop: "5px",
                            color: "red",
                          }}
                        />
                      ) : null}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <div>
                      <label htmlFor="">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="EMAIL ADDRESS *"
                        className="border border-[#C4C4C4] w-full outline-none p-2 rounded-[4px]"
                        value={values.email}
                        onChange={handleChange("email")}
                        onBlur={handleBlur("email")}
                      />
                      <span
                        className="error"
                        style={{ color: "red", fontSize: "13px" }}
                      >
                        {errors.email}
                      </span>
                      {errors.email && touched.email ? (
                        <BiErrorCircle
                          style={{
                            float: "right",
                            marginTop: "5px",
                            color: "red",
                          }}
                        />
                      ) : null}
                    </div>
                    <div>
                      <label htmlFor="">Phone number</label>
                      <PhoneInput
                        country={"us"}
                        countryCodeEditable={false}
                        enableSearch={true}
                        inputProps={{
                          name: "phone",
                        }}
                        onChange={(value) =>
                          setFieldValue("phone", "+".concat(value).trim())
                        }
                        value={values.phone}
                        inputStyle={{
                          width: "100%",
                          padding: "1.2rem 0 1.2rem 3rem",
                        }}
                        disabled={loading}
                      />
                      <span
                        className="error"
                        style={{ color: "red", fontSize: "13px" }}
                      >
                        {errors.phone}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <label htmlFor="">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="MESSAGES *"
                      cols="30"
                      rows="4"
                      className="border border-[#C4C4C4] w-full min-h-[200px] max-h-[200px] outline-none p-2 rounded-[4px]"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span
                      className="error"
                      style={{ color: "red", fontSize: "13px" }}
                    >
                      {errors.message}
                    </span>
                    {errors.message && touched.message ? (
                      <BiErrorCircle
                        style={{
                          float: "right",
                          marginTop: "5px",
                          color: "red",
                        }}
                      />
                    ) : null}
                  </div>
                  {/* <ReCAPTCHA
                    // style={{ padding: "15px 15px" }}
                    sitekey={SITE_KEY}
                    name="recaptchaToken"
                    onChange={onChange}
                    ref={captchaRef}
                  />
                  {recaptchavalue !== "" ? null : (
                    <span
                      className="error"
                      style={{ color: "red", fontSize: "13px" }}
                    >
                      {errors.recaptchaToken}
                    </span>
                  )} */}
                  {/* <button
                    type="submit"
                    className="blue_button uppercase mx-auto"
                    onClick={handleSubmit}
                  >
                    {loading ? "Loading..." : "Submit"}
                  </button> */}
                  <div className="btn w-fit">
                    <button
                      type="submit"
                      className="btn-content uppercase blue_button"
                      onClick={handleSubmit}
                    >
                      {loading ? "Loading..." : "Submit"}
                    </button>
                  </div>
                </div>
              </Fragment>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
