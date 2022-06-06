import React from 'react';

export const NumberContext = React.createContext()

const NumberProvider = (props) => {
    const num = "0"
    return (
        <NumberContext.Provider value={{num}}>
            {props.children}
        </NumberContext.Provider>
    );
};

export default NumberProvider;