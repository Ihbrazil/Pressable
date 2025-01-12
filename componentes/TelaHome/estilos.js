import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  botao: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000',
    borderRadius: 20,
  },

  botaoTitle: {
    color: '#fff',
    fontWeight: "bold",
  },
  
  botao2: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 20,
    borderColor: '#000',
    borderWidth: 1
  },

  botao2Icon: {
    width: 25,
    height: 25,
    marginRight: 10
  },

  botao2Title: {
    color: '#000',
    fontWeight: "normal",
  },

  botao3: {
    justifyContent: "center",
    alignItems: "center",
    
    backgroundColor: '#4AD395',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },

  botao3Icon: {
    width: 25,
    height: 25,
  },

  botao4: {
    width: 250,
    backgroundColor: '#03fcf8',
    // borderRadius: 5,
    marginTop: 20,
    padding: 10,
    borderColor: '#334259',
    borderWidth: 1
  },

  botao4Titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  botao4paragrafo: {
    
    fontWeight: "normal",
  }
});

export default estilos;