import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
  const today = new Date()
  const month = today.toLocaleString('default', { month: 'long' });
  const date = today.getFullYear() + ' ' + month + ' ' + today.getDate();

  console.log(date)
  const [participants, setParticipants] = useState<string[]>([]) 
  const [inputName, setInputName] = useState('')

  function handleParticipantAdd() {
    if(participants.includes(inputName) || inputName == '')
      return Alert.alert("Could not add", "User already exists or the input is empty")

    setParticipants(prevState => [...prevState, inputName])
    setInputName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Delete", `Delete participant ${name}?`, [
      {
        text: "yes",
        onPress: () => setParticipants(prevState => prevState.filter((participant) => participant !== name))
      },
      {
        text: "No",
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>

      <Text style={styles.eventName}>Event name</Text>

      <Text style={styles.eventDate}>{date}</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Participant name"
          placeholderTextColor="#6b6b6b"
          value={inputName}
          // tem duas formas de fazer o onChangeText, ou onChangeText={(e) => setInputName(e)} ou a abaixo
          onChangeText={setInputName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({item, index}) => (
          <Participant 
            key={`${item}-${index}`} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)}
          />)
        }
        ListEmptyComponent={<Text style={styles.emptyListText}>Ninguém chego no evento ainda? Adicione participantes</Text>}
      />
    </View>
  )
}
