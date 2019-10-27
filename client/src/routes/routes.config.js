import Event from '../components/Event/'
import Article from "../components/Article/";
import Home from '../components/Home/'

export const routes = [
    {
        path: "/",
        component: Home,
      },
      {
        path: "/events",
        component: Event
      },
      {
        path: '/articles',
        component: Article,
      },
]