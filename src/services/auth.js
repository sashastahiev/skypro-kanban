import axios from 'axios'
import { API_URL } from './api';
export async function signIn(userData) {
   try {
    const data = await axios.post(API_URL + "/login", userData, {
    headers: {
        "Content-Type": "",
    },
    })
    return data.data.user
  }
  catch (error) {
   throw new Error(error.response.data.error);
  }
}

export async function signUp({ name, login, password }) {
   try {
      const data = await axios.post(
   API_URL,
   { login, name, password },
   {
      headers: {
         "Content-Type": "",
      },
   })
  return data.data.user
  } catch (error) {
   console.log(error);
   throw new Error(error.response.data.error);
  }
}

// При ошибке выбрасываем исключение, т. к. хотим обработать её в вызывающем коде
// Возвращаем объект user, пришедший от сервера
