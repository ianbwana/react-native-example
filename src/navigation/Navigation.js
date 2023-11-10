import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import Login from '../screens/Login';
import Home from '../screens/Home';
import { AuthContext } from '../contexts/AuthContext';

const Stack = createNativeStackNavigator();

function Navigation() {
	const { user } = useContext(AuthContext);
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				gestureEnabled: false
			}}>
			{user.isAuthenticated ? (
				<Stack.Screen name='Home' component={Home} />
			) : (
				<Stack.Screen name='Login' component={Login} />
			)}
		</Stack.Navigator>
	);
}

export default Navigation;
