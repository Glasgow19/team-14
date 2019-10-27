import Event from "../components/Event/";
import Article from "../components/Article/";
import ArticleList from "../components/ArticleList";
import Home from "../components/Home/";
import Story from "../components/SuccessStory/StoryDetailView";
import FactList from "../components/FactList";

export const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/events",
    component: Event
  },
  {
    path: "/article",
    component: Article
  },

  {
    path: "/admin",
    component: Home
  },
  {
    path: "/articles",
    component: ArticleList
  },
  {
    path: "/info",
    component: FactList
  },

  {
    path: "/story",
    component: Story
  }
];
