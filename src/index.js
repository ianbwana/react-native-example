import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation';
import { AppProviders } from './AppProviders';

export default function App() {
    return (
      <NavigationContainer>
          <AppProviders>
              <Navigation />
            </AppProviders>
        </NavigationContainer>
    );
}
