import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnimeView from '../views/anime/AnimeView.vue'
import AnimeDetailView from '../views/anime/AnimeDetailView.vue'
import AnimeDetailCategories from '../views/anime/AnimeDetailCategoriesView.vue'
import AnimeCategories from '../views/anime/AnimeCategoriesView.vue'
import AnimeSearchView from '../views/anime/AnimeSearchView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/anime',
      name: 'anime',
      component: AnimeView
    },
    {
      path: '/anime/search',
      name: 'animeSearch',
      component: AnimeSearchView
    },
    {
      path: '/anime/categorie',
      name: 'animeCategories',
      component: AnimeCategories
    },
    {
      path: '/anime/categorie/:categories',
      name: 'animeDetailCategories',
      component: AnimeDetailCategories
    },
    {
      path: '/anime/:id',
      name: 'animeId',
      component: AnimeDetailView,
      children: [
        {
          name: 'animeInfo',
          path: 'details',
          component: () => import('../components/AnimeInfo.vue')
        },
        {
          name: 'animeEpisodes',
          path: 'episodes',
          component: () => import('../components/AnimeEpisodes.vue')
        }
      ]
    }
  ]
})

export default router
