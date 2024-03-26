import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import Home from './src/screen/home';

export default function App() {

  return (
    <ScrollView>
      <StatusBar style="auto" />
      <Home /> 
    </ScrollView>
  );
}

