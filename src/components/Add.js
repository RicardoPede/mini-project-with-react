import React, { useContext, useState } from "react";
import FormElement from "./FormElement.js";
import { NavLink } from "react-router-dom";
import { ElementContext } from "../context/ElementContext.js";

const Add = () => {
    // const NavLink = useNavLink();

    const { elements, setElements } = useContext(ElementContext);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const handleOnSubmit = (element) => {
        console.log(element);
        setElements(prevElements => [...elements, element]);
        setShouldRedirect(true);
    }

    if (shouldRedirect) {
        return <NavLink to="/" />;
    }

    return (
        <React.Fragment>
            <FormElement handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
}

export default Add;