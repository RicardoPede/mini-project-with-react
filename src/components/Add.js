import React, { useContext, useEffect, useState } from "react";
import FormElement from "./FormElement.js";
import { useNavigate } from "react-router-dom";
import { ElementContext } from "../context/ElementContext.js";
import Swal from "sweetalert2";

const Add = () => {
    const navigate = useNavigate();

    const { elements, setElements } = useContext(ElementContext);
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [counter, setCounter] = useState(3);

    const handleOnSubmit = (element) => {
        console.log(element);
        setElements(prevElements => [...elements, element]);
        setShouldRedirect(true);
    }

    useEffect(() => {
        if (shouldRedirect && counter > 0) {
            const timer = setTimeout(() => {
                Swal.fire({
                    title: "Elemento añadido",
                    text: `Serás redirigido en ${counter} segundos.`,
                    icon: "success",
                    timer: 900,
                    timerProgressBar: true,
                    showConfirmButton: false
                });
                setCounter(counter - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (shouldRedirect && counter === 0) {
            Swal.fire({
                title: "Elemento añadido",
                text: "Redirigiendo...",
                icon: "success",
                timer: 1000,
                timerProgressBar: true,
                showConfirmButton: false
            });
            navigate("/");
        }
    }, [shouldRedirect, counter, navigate]);

    return (
        <React.Fragment>
            <FormElement handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
}

export default Add;