import React from 'react';
import {Formik, setNestedObjectValues} from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';

const PswReset = () =>(
    <Formik initialValues={{email: "", password: ""}}
    onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
            console.log("Logging in", values)
        }, 500);
    }}
    //here to define the validation
    validationSchema = {Yup.object().shape({
        email: Yup.string()
            .email()
            .required("Required"),

        password: Yup.string()
            .required("No Password Provided")
            .min(8,"Password is too short, should be eight characters long")
            .matches(/(?=.*[0-9])/,"Password should contain a number")
    })}
    >
        {props => {
            const{
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;

            return(
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="password">New Password</label>
                        <input 
                            type="password"
                            value={values.password} 
                            name="password"
                            onChange = {handleChange}
                            onBlur = {handleBlur} 
                            placeholder="Enter your password"
                            className={errors.password && touched.password && "errors"}
                        />
                     </div>

                        {errors.email && touched.email &&(
                            <div className="input-feedback">{errors.email}</div>
                        )}
                    <div>
                        <label htmlFor="password">Re-type Password</label>
                        <input 
                            type="password"
                            value={values.password} 
                            name="password"
                            onChange = {handleChange}
                            onBlur = {handleBlur} 
                            placeholder="Enter your password"
                            className={errors.password && touched.password && "errors"}
                        />
                     </div>

                     {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                     )}
                    <div>
                        <Link to={'/login'}>
                            <button type="submit" disabled={isSubmitting}>Reset</button>
                        </Link>
                    </div>
                </form>
            )
        }}
    </Formik>
)

export default PswReset;