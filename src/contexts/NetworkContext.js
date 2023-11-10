import { createContext, useState } from 'react';

export const NetworkContext = createContext({
    isConnected: false,
    setIsConnected: () => null,
});

function NetworkContextProvider({ children }) {
    const [isConnected, setIsConnected] = useState(false);
    return (
        <NetworkContext.Provider value={{ isConnected, setIsConnected }}>
            {children}
        </NetworkContext.Provider>
    );
}

export default NetworkContextProvider;
