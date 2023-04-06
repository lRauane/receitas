import { Text, View, StyleSheet } from "react-native";

export function Ingredients({data}){
  return(
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Text>{data.amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff",
    marginBottom: 14,
    flexDirection:'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 4
  },
  name:{
    fontWeight: 500,
    fontSize: 16,
  }
})