import { useState } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

function FormField({
    getvalue = () => {},
    required = false,
    isEmail = false,
    minlength,
    validate,
    value,
    onChange,
    type,
    placeholder,
}) {
    // const [value, setValue] = useState("");
    const [isInvalid, setIsInvalid] = useState(true);
    const [msg, setMsg] = useState("");

    const listMsg = {
        required: "Vui long nhap truong nay",
        email: "Email nhap vao khong chinh xac",
        minlength: `Vui long nhap toi thieu ${minlength} ky tu`,
    };

    const handleBlur = (e) => {
        const value = e.target.value;
        const message = validate(value);
        if (message) {
            setIsInvalid(true);
            setMsg(message);
        }
        // if (value === "") {
        //     if (required) {
        //         setIsInvalid(true);
        //         setMsg(listMsg.required);
        //     }
        // } else {
        //     if (isEmail) {

        //         validateEmail(va)
        //         setMsg(listMsg.email);
        //     }
        //     if (minlength) {
        //         if (value.length <= minlength) {
        //             setIsInvalid(true);
        //             setMsg(listMsg.minlength);
        //         }
        //     }
        // }
    };

    const handleOnChange = (e) => {
        // setValue(e.target.value);
        setIsInvalid(false);
        onChange(e);
        // getvalue(type, e.target.value);
    };

    return (
        <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
                // value={value}
                onChange={handleOnChange}
                onBlur={handleBlur}
                type={type}
                placeholder={placeholder}
            />
            {isInvalid && <Form.Text>{msg}</Form.Text>}
        </Form.Group>
    );
}

FormField.propTypes = {
    getvalue: PropTypes.func,
    require: PropTypes.bool,
    isEmail: PropTypes.bool,
    minlength: PropTypes.number,
    validate: PropTypes.func,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};

export default FormField;
