import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ElementContext = React.createContext();

const ElementProvider = ({ children }) => {
    const [elements, setElements] = useLocalStorage("elements", []);

    return (
        <ElementContext.Provider value={{ elements, setElements }}>
            {children}
        </ElementContext.Provider>
    );

}

// export default ElementProvider;
export { ElementContext, ElementProvider };