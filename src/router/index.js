import { createRouter, createWebHistory } from 'vue-router'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
        path: '/card/id',
          component: () => import('/src/views/TaskView.vue'),
        },
        {
          path: '/card/add',
          component: () => import('/src/views/NewTaskView.vue'),
        },
      ],
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/sign-in',
      name: 'authorization',
      component: SignInView
    },
    {
      path: '/sign-up',
      name: 'registration',
      component: SignUpView
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    }
  ],
})
// router.beforeEach((to, from, next) => {
//    // Берем токен
//    const token = localStorage.getItem('userInfo');

//    // Проверяем, действительно ли на маршруте нужна авторизация и есть ли токен
//    if (to.meta.requiresAuth && !token) {
//       next('/sign-in'); // Если нет, уводим на страницу входа
//    } else {
//       next(); // Иначе пропускаем пользователя
//    }
// });
export default router
