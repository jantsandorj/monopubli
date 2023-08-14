import { useState } from 'react';
import { createContext } from 'react';

/**
 * Context for List
 *
 * @param {ReactFragement} children
 * @returns {React.Context}
 */
export const ValidateContext = createContext({
    error: {},
    setError: () => {}
});

const FormWrapper = ({ children }) => {
    let [error, setError] = useState({});
    return <ValidateContext.Provider value={{ error, setError }}>{children}</ValidateContext.Provider>;
};

export default FormWrapper;
