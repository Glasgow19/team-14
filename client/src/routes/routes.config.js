import EventList from "../components/EventList/";
import ArticleList from "../components/ArticleList/";
import FactList from "../components/FactList/";
import Home from "../components/Home/";

export const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/events",
    component: EventList
  },
  {
    path: "/articles",
    component: ArticleList
  },
  {
    path: "/facts",
    component: FactList
  }
];
