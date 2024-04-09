import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Element = ({ element, handleDeleteElement }) => {
    // console.log(element);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    if (shouldRedirect) {
        return <NavLink to={`/edit/${element.id}`} />;
    }
    return (
        <div className="col">
            <div className="element-card ">
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title className="text-center">{element.name}</Card.Title>
                        <Card.Text>{element.description}</Card.Text>
                        <Card.Text>{element.responsible}</Card.Text>
                        <Card.Text>{element.priority}</Card.Text>
                        <Card.Text>{element.level}</Card.Text>
                        <Card.Text>{element.date}</Card.Text>
                        <Button variant="primary" onClick={() => setShouldRedirect(true)}>Editar</Button>{" "}
                        <Button variant="danger" onClick={() => handleDeleteElement(element.id)}>Eliminar</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Element;