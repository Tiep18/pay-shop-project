import classNames from "classnames/bind";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "./LogIn.module.scss";
import { useForm } from "react-hook-form";

const cx = classNames.bind(styles);

function LogIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleOnSubmit = (value) => {
        console.log(value);
    };

    return (
        <Container className="mt-3">
            <Row>
                <Col className="col-12 col-md-6 col-xl-4 mx-auto">
                    <Form onSubmit={handleSubmit(handleOnSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                {...register("email", {
                                    required: "This is a required field",
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message:
                                            "The value is not a valid email address",
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
                                    required: "This is a required field",
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

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                {...register("remembered")}
                                type="checkbox"
                                label="Remember me"
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            className="w-100"
                        >
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LogIn;
