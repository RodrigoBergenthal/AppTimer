import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';




export default function ImagePickerExample() {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const [image, setImage] = useState(null);

  const [segundos,setarSegundos] = useState(0);
  const [minutos,setarMinutos] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [alarmeSound, setarAlarmeSound] = useState([
    {
      selecionado: true,
      som: 'alarme 1',
      file: 'alarme1.mp3'

    },
    {
      selecionado:false,
      som: 'alarme 2',
      file: 'alarme2.mp3'
    },

  ]);





  return (
    <View style={styles.container}>
      <Text style={{color:'white',fontSize:30}}>Selecione o seu tempo</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#54bf00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
