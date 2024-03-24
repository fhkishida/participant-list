import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 55,
    flex: 1,
    backgroundColor: "#131016",
    padding: 24
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold'
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16
  },
  input: {
    //colocar coisas uma do lado da outra
    //por form estar com flex direction row, o flex 1 pega o maximo que consegue horizontalmente
    flex: 1,
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#fdfcfe',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button:{
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    //colocar coisas uma do lado da outra
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  emptyListText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  }
})