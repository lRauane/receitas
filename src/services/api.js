import axios from "axios";
// rodar com IPVA4 json-server –watch -d 180 –host SEU-IP db.json

const api = axios.create({
  baseURL: 'http://192.168.1.115:3000/'
})

export default api