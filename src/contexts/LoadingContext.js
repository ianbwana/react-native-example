import {
	createContext,
	useState,
} from 'react';

export const LoadingContext = createContext();

function LoadingContextProvider({ children }) {
	const [loading, setLoading] = useState(false);
	const [loadingText, setLoadingText] = useState('');

	const toggleLoader = (state, content) => {
		setLoading(state);
		setLoadingText(content || '');
	};

	return (
		<LoadingContext.Provider value={{ loading, loadingText, toggleLoader }}>
			{children}
		</LoadingContext.Provider>
	);
}

export default LoadingContextProvider;
