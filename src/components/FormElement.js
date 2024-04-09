import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const FormElement = (props) => {
    const [element, setElement] = useState(() => {
        return {
        name: props.element ? props.element.name : "",
        description: props.element ? props.element.description : "",
        responsible: props.element ? props.element.responsible : "",
        priority: props.element ? props.element.priority : "",
        level: props.element ? props.element.level : "",
        date: props.element ? props.element.date : ""
        };
    });

    const { name, description, responsible, priority, level, date } = element;

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const allFieldsFilled = name && description && responsible && priority && level;

        if (allFieldsFilled) {
            const element = {
                id: uuidv4(),
                name,
                description,
                responsible,
                priority,
                level,
                date: new Date(date).toDateString()
            };
            Swal.fire({
                icon: "success",
                title: "Elemento creado",
                showConfirmButton: false,
                timer: 1500,
            });
            props.handleOnSubmit(element);
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Por favor, complete todos los campos."
            });
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "level":
                if (value === "" || value.match(/^[0-9\b]+$/)) {
                    setElement((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setElement((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    }

    return (
        <div className="main-form">
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Nombre"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="description"
                        value={description}
                        placeholder="Descripción"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="responsible">
                    <Form.Label>Responsable</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="responsible"
                        value={responsible}
                        placeholder="Responsable"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="priority">
                    <Form.Label>Prioridad</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="priority"
                        value={priority}
                        placeholder="Prioridad"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="level">
                    <Form.Label>Nivel</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="level"
                        value={level}
                        placeholder="Nivel"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn">
                    Enviar
                </Button>
            </Form>
        </div>
    );
}

export default FormElement;