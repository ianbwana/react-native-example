import AuthContextProvider from './contexts/AuthContext';
import NetworkContextProvider from './contexts/NetworkContext';
import TransactionContextProvider from './contexts/TransactionContext';
import AlertContextProvider from './contexts/AlertContext';
import LoadingContextProvider from './contexts/LoadingContext';

const compose = (providers) => providers.reduce(
    (Previous, Current) =>
        function ({ children }) {
            return (
                <Previous>
                    <Current>{children}</Current>
                </Previous>
            );
        },
);

// eslint-disable-next-line import/prefer-default-export
export const AppProviders = compose([
    AlertContextProvider,
    LoadingContextProvider,
    NetworkContextProvider,
    TransactionContextProvider,
    AuthContextProvider,
]);
