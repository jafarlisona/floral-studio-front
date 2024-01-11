import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
function Add() {
  const navigate = useNavigate();
  function handleSubmit(values) {
    fetch("http://localhost:3000/flowers", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((x) => navigate("/"));
  }
  return (
    <section className="add">
      <Formik
        initialValues={{ image: "", name: "", price: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.image) {
            errors.image = "Required";
          }
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.price) {
            errors.price = "Required";
          } else if (!/^[0-9.,]+$/.test(values.price)) {
            errors.price = "Enter only numbers";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleSubmit(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form">
              <label htmlFor="image">Image :</label>
              <div className="input">
                {" "}
                <Field
                  type="text"
                  name="image"
                  id="image"
                  placeholder="Enter image URL"
                />
                <ErrorMessage name="image" component="span" />
              </div>
            </div>
            <div className="form">
              <label htmlFor="name">Name :</label>
              <div className="input">
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                />
                <ErrorMessage name="name" component="span" />
              </div>
            </div>
            <div className="form">
              <label htmlFor="price">Price :</label>
              <div className="input">
                <Field
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Enter price"
                />
                <ErrorMessage name="price" component="span" />
              </div>
            </div>
            <button type="submit">ADD</button>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default Add;
