import Event from "../components/Event/";
import EventList from "../components/EventList/";
import Article from "../components/Article/";
import ArticleList from "../components/ArticleList";
import Home from "../components/Home/";
import Story from "../components/SuccessStory/StoryDetailView";
import FactList from "../components/FactList";
import Resource from "../components/Resource";
import ResourceList from "../components/ResourceList";

export const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/event",
    component: Event
  },
  {
    path: "/events",
    component: EventList
  },
  {
    path: "/article",
    component: Article
  },
  {
    path: "/articles",
    component: ArticleList
  },
  {
    path: "/admin",
    component: Home
  },
  {
    path: "/info",
    component: FactList
  },
  {
    path: "/story",
    component: Story
  },
  {
    path: "/resource",
    component: Resource
  },
  {
    path: "/resources",
    component: ResourceList
  }
];
