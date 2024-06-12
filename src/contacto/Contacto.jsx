import { useState } from "react";
import { Form, Button, Image } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Swal from "../helpers/temaSwal";
import styles from "../contacto/Contact.module.css";
import {
  validateName,
  validateMail,
  validateMessage,
} from "./validationContact";

const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [asunto, setAsunto] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateNameOnChange = (value) => {
    const error = validateName(value);
    setNameError(error);
  };

  const validateEmailOnChange = (value) => {
    const error = validateMail(value);
    setEmailError(error);
  };

  const validateMessageOnChange = (value) => {
    const error = validateMessage(value);
    setMessageError(error);
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    if (nameError || emailError || messageError || !name || !email || !message) {
      console.log("Formulario inválido");
      return;
    }

    emailjs
      .sendForm(
        "service_pzoxzgk",
        "template_0wql1hq",
        event.target,
        "fpKrN9OxpAI2I60z3"
      )
      .then((response) => {
        console.log(response);
        setName("");
        setPhone("");
        setAsunto("");
        setEmail("");
        setMessage("");

        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Hemos recibido tu mensaje, un miembro del equipo te contactará en breve.",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error en el envío",
          text: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
        });
      });
  };

  const disableButton =
    !name || !email || !message || !!nameError || !!emailError || !!messageError;

    return (
        <div className={styles.container}>
          <div style={{
            border: "1px solid #dee2e6",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            margin: "20px auto",
            maxWidth: "90vw",
          }}>
            <Form onSubmit={sendEmail} style={{
              padding: "20px",
            }}>
              <div style={{
                backgroundColor: "#282A36",
                border: "1px solid #dee2e6",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
              }}>
                <h1 style={{ margin: "15px " }}>Contacto</h1>
                <h2> Deseas comunicarte, solo llena el formulario y seras contactado.</h2>
              </div>
        
              <div className={styles.contenedor}>
                <Form.Group controlId="formName" className={styles.formGroup}>
                  <Form.Label className={styles.formLabel}></Form.Label>
                  <Form.Control
                    className={styles.formControl}
                    type="text"
                    placeholder="Ingresa tu nombre"
                    name="user_name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      validateNameOnChange(e.target.value);
                    }}
                  />
                  <br></br>
                  <Form.Text className={styles.errorMessage}>{nameError}</Form.Text>
                </Form.Group>
        
                <Form.Group controlId="formEmail" className={styles.formGroup}>
                  <Form.Label className={styles.formLabel}></Form.Label>
                  <Form.Control
                    className={styles.formControl}
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    name="user_email" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmailOnChange(e.target.value);
                    }}
                  />
                  <br></br>
                  <Form.Text className={styles.errorMessage}>{emailError}</Form.Text>
                </Form.Group>
        
                <Form.Group controlId="formMessage" className={styles.formGroup}>
                  <Form.Label className={styles.formLabel} style={{marginTop:"10px"}}>Mensaje</Form.Label>
                  <br></br>
                  <Form.Control
                    className={styles.formControl}
                    as="textarea"
                    rows={4}
                    placeholder="Ingresa tu mensaje"
                    name="user_message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      validateMessageOnChange(e.target.value);
                    }}
                  />
                  <br></br>
                  <Form.Text className={styles.errorMessage}>{messageError}</Form.Text>
                </Form.Group>
        
                <hr />
                <Button variant="secondary" type="submit" disabled={disableButton} className={styles.boton}>
                  Enviar
                </Button>
              </div>
            </Form>
          </div>
        </div>
      );
    };
    
    export default Contacto;
