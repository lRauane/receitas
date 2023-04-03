import {View, Text, StyleSheet} from 'react-native';

export function Detail(){
  return(
    <View style={styles.container}>
      <Text>Página de detalhes da receita</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'green'
  }
})