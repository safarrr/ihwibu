import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AnimeView from '../views/anime/AnimeView.vue'
import AnimeDetailView from '../views/anime/AnimeDetailView.vue'
import AnimeDetailCategories from '../views/anime/AnimeDetailCategoriesView.vue'
import AnimeCategories from '../views/anime/AnimeCategoriesView.vue'
import AnimeSearchView from '../views/anime/AnimeSearchView.vue'
import ArtView from '../views/art/ArtView.vue'
import QuotesView from '../views/quotes/QuotesView.vue'
import QuotesAnimeListView from '../views/quotes/QuotesAnimeListView.vue'
import QuotesAnimeView from '../views/quotes/QuotesAnimeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
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
          component: () => import('../components/anime/AnimeInfo.vue')
        },
        {
          name: 'animeEpisodes',
          path: 'episodes',
          component: () => import('../components/anime/AnimeEpisodes.vue')
        }
      ]
    },
    {
      path: '/art',
      name: 'art',
      component: ArtView
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: QuotesView
    },
    {
      path: '/quotes/list',
      name: 'quotesList',
      component: QuotesAnimeListView
    },
    {
      path: '/quotes/:anime',
      name: 'quotesAnime',
      component: QuotesAnimeView
    }
  ]
})

export default router
