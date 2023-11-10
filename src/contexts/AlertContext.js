import {
    createContext,
    useState,
} from 'react';

export const AlertContext = createContext();

function AlertContextProvider(props) {
    const [visible, setVisible] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [alertType, setAlertType] = useState('');

    const showAlert = (type, content) => {
        setAlertType(type);
        setVisible(true);
        setAlertText(content || '');
    };

    const closeAlert = () => {
        setVisible(false);
    };

    return (
      <AlertContext.Provider
          value={{
                alertType,
                visible,
                alertText,
                showAlert,
                closeAlert,
            }}
        >
          {props.children}
        </AlertContext.Provider>
    );
}

export default AlertContextProvider;
