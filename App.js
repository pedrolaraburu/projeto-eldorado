import { StatusBar, SafeAreaView, View, Text} from 'react-native';
import Carrinho from './src/screens/carrinho/index.js';
import Compra from './src/screens/Compra/'
import Detalhes from './src/screens/carrinho/components/detalhes.js'
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular" : Montserrat_400Regular,
    "MontserratBold" : Montserrat_700Bold
  }); 
  if(!fonteCarregada){
    return <AppLoading/>;
  }
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Carrinho">
          <Stack.Screen name="Carrinho" component={Carrinho}/>
          <Stack.Screen name="Compra" component={Compra}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
