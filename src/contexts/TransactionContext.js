import { createContext, useState } from 'react';

export const TransactionContext = createContext();

function TransactionContextProvider({ children }) {
    const [formVisible, setFormVisible] = useState(false);

    const toggleTransactionForm = () => {
        setFormVisible(!formVisible);
    };

    return (
        <TransactionContext.Provider
            value={{
                formVisible,
                toggleTransactionForm,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
}

export default TransactionContextProvider;
