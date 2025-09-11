import axios from 'axios'
//import { fetchWords } from '@/services/api'
import { ref } from 'vue'
// Импортируем функции и компоненты
// ref - для создания реактивных переменных
// onMounted - для запуска кода при монтировании компонента
export const API_URL = 'https://wedev-api.sky.pro/api/kanban'
const words = ref([])
// ref([]) - массив для слов
const loading = ref(false)
// ref(false) - флажок, показывающий, что идёт загрузка
const error = ref('')
// ref('') - строка для текста ошибки
export async function fetchWords({ token }) {
   try {
      // Здесь начинается попытка сделать запрос
      const data = await axios.get(API_URL, {
         headers: {
            Authorization: 'Bearer ' + token,
         },
      })

      return data.data
      // Возвращаем именно data.data,
      // потому что библиотека axios кладет полезную нагрузку внутрь ключа data
   } catch (error) {
      // В случае ошибки выбрасываем исключение с сообщением
      throw new Error(error.message)
   }
  }
// eslint-disable-next-line no-unused-vars
const getWords = async () => {
   try {
      loading.value = true
      const data = await fetchWords({
      token: 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck',
      // Поскольку авторизация не реализована, передаем токен вручную
   })

   if (data) words.value = data

   } catch (err) {
      error.value = err

   } finally {
      loading.value = false
   }
}

// При успешном запросе сохраняем данные в words
// При ошибке записываем её в error
// В любом случае переводим загрузку в false
export async function postWord({ token, word }) {
   try {
      // Пробуем отправить данные на сервер
      const data = await axios.post(API_URL, word, {
         headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': '',
         },
      })
   // Возвращаем обновленный список слов
   return data.data.words
   } catch (error) {
      // Если что-то пошло не так, пробрасываем ошибку дальше
      throw new Error(error.message)
   }
}
export async function editWord({ token, id, word }) {
   try {
      // Пытаемся изменить слово на сервере
      const data = await axios.put(API_URL + id, word, {
         headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': '',
         },
      })
   // Возвращаем обновленный список слов
   return data.data.words
   } catch (error) {
      // Пробрасываем ошибку, чтобы обработать ее в вызывающем коде
      throw new Error(error.message)
   }
}
