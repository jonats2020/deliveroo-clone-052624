import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homescreen from './src/screens/Homescreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './src/screens/BasketScreen';
import PreparingOrderScreen from './src/screens/PreparingOrderScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homescreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen} options={{ presentation: "fullScreenModal", headerShown: false }} />
          <Stack.Screen name="Delivery" component={DeliveryScreen} options={{ presentation: "fullScreenModal", headerShown: false }} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
