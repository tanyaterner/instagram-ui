
import React from 'react';
import './Register.scss';
import {Formik , Field, Form} from 'formik';
import {registerSchema} from "./register.schema";


function Register(props) {
    return (
        <div>
            <h1>Register</h1>
            <Formik
                initialValues={{username:'', email:'',password:'',agreeToTerms:false }}
                validationalSchema={registerSchema}>
            <Form>
                <div className="form-group mb-3">
                    <label htmlFor="username">Username</label>
                    <Field className="form-control" id="username" name="username"/>
                    <ErrorMessage name="username" component="div"/>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <Field type="email" className="form-control" name="email"/>
                    <ErrorMessage name="email" component="div"/>

                    <div className="form-group mb-3">
                        <label>Password</label>
                        <Field type ="password" className="form-control" id="password" name="password"/>
                        <ErrorMessage name="password" component="div"/>
                    </div>
                    <div className="form-group" form-check mb-3 >
                        <Field type ="checkbox" className="form-check-input" id="agreeToTerms" name="checkbox"/>
                        <ErrorMessage name="checkbox" component="div"/>
                        <label className="form-check-label" htmlFor="agreeToTerms">Agree To Terms</label>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success ">Register</button>
                    </div>
                </div>
            </Form>
            </Formik>
        </div>
    );
}

export default Register;