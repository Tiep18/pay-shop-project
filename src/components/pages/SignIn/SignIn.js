import classNames from "classnames/bind";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "./SignIn.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import routes from "config/routes";

const cx = classNames.bind(styles);

function LogIn() {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleOnSubmit = (value) => {
        console.log(value);
    };

    return (
        <Container className="mt-3">
            <h5 className="heading">Sign In</h5>
            <Row>
                <Col className="col-12 col-md-6 col-xl-4 mx-auto">
                    <Form onSubmit={handleSubmit(handleOnSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control
                                {...register("fullName", {
                                    required: "This field is required",
                                })}
                                placeholder="Enter your full name"
                                isInvalid={!!errors.fullName}
                            />
                            <Form.Control.Feedback
                                style={{ color: "red" }}
                                type="inValid"
                            >
                                {errors.fullName?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                {...register("email", {
                                    required: "This field is required",
                                    pattern: {
                                        // eslint-disable-next-line no-useless-escape
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: "Invalid email address",
                                    },
                                })}
                                placeholder="Enter your email"
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback
                                style={{ color: "red" }}
                                type="inValid"
                            >
                                {errors.email?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                {...register("password", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Password must be at least 8 characters",
                                    },
                                })}
                                placeholder="Enter your password"
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback
                                type="inValid"
                                style={{ color: "red" }}
                            >
                                {errors.password?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="Password"
                                {...register("confirmPwd", {
                                    required: "This field is required",
                                    validate: {
                                        value: (v) =>
                                            v === watch("password") ||
                                            "Your passwords do no match",
                                    },
                                })}
                                placeholder="Confirm Password"
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback
                                type="inValid"
                                style={{ color: "red" }}
                            >
                                {errors.confirmPwd?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                {...register("isAgreeWithTerms", {
                                    required: "This field is required",
                                })}
                                type="checkbox"
                                label="I agree with Pay Shop"
                                className="me-1"
                            />
                            <Link href="/" className={cx("link")}>
                                terms and Conditions
                            </Link>
                        </Form.Group>
                        <Button
                            variant="secondary"
                            type="submit"
                            className="w-100"
                        >
                            Submit
                        </Button>
                    </Form>
                    <Row className="mt-1">
                        <Link to={routes.login} className={cx("link")}>
                            Log in to your account
                        </Link>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default LogIn;
