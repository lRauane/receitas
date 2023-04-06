import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { FoodList } from "../../components/foodList";

export function Search({}) {
  const route = useRoute();
  const [receipes, setReceipes] = useState([]);

  useEffect(() => {
    async function FetchReceipes() {
      const response = await api.get(`/foods?name_like=${route.params?.name}`);
      setReceipes(response.data);
    }

    FetchReceipes();
  }, [route.params?.name]);

  return (
    <View style={styles.container}>
       <FlatList
        showsVerticalScrollIndicator={false}
        data={receipes}
        ListEmptyComponent={() => <Text style={styles.text}>Não encontramos o que está buscando :(</Text>}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  text:{
    fontSize: 16
  }
});
