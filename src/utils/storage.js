import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getFavorites(key) {
  const favorite = await AsyncStorage.getItem(key);
  return JSON.parse(favorite) || [];
}

export async function saveFavorite(key, newItem) {
  let myFavorites = await getFavorites(key);

  let hasItem = myFavorites.some((item) => item.id === newItem.id);
  if (hasItem) {
    console.log("item já salvo");
    return;
  }

  myFavorites.push(newItem);

  await AsyncStorage.setItem(key, JSON.stringify(myFavorites));

  console.log("salvo com sucesso");
}

export async function removeFavorite(id) {
  let receits = await getFavorites("@appReceitas");

  let myFavorite = receits.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("@appReceitas", JSON.stringify(myFavorite));
  console.log("Ite deletado com sucesso");
  return myFavorite;
}

export async function isFavorite(receits) {
  let myReceites = await getFavorites("@appReceitas");

  const favorite = myReceites.find((item) => item.id === receits.id);

  if (favorite) {
    return true;
  }

  return false;
}
