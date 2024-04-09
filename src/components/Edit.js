import React, { useContext, useState } from "react";
import FormElement from "./FormElement.js";
import { useNavigate, useParams } from "react-router-dom";
import { ElementContext } from "../context/ElementContext.js";
import Swall from "sweetalert2";

const Edit = () => {

    const navigate = useNavigate();
    const { elements, setElements } = useContext(ElementContext);
    const { id } = useParams();
    const elementEdit = elements.find((element) => element.id === id);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    if (shouldRedirect) {
        navigate("/")
    }

    const handleOnSubmit = (element) => {
        try {
            const filteredElements = elements.filter((element) => element.id !== id);
            setElements([...filteredElements, element]);
            Swall.fire({
                icon: "success",
                title: "Elemento actualizado",
                showConfirmButton: false,
                timer: 1500,
            });
            setShouldRedirect(true);
        } catch (error) {
            console.error(error)
            Swall.fire({
                icon: "error",
                title: "Error",
                text: "Ocurrió un error al actualizar el elemento.",
            });
        }
    }

    return (
        <React.Fragment>
            <FormElement element={elementEdit} handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
}

export default Edit;