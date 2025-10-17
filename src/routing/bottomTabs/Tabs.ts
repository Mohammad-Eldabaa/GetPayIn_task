import Categories from "../../home/categories/categories";
import Home from "../../home/Home";
import ProductsPage from "../../home/products/productsPage";

const tabs = [
  {
    name: "Categories",
    title: "categories",
    component: Categories,
    icon: "grid-outline",
  },
  {
    name: "AllProduct",
    title: "products",
    component: ProductsPage,
    icon: "cube-outline",
  },
  {
    name: "MyAccount",
    title: "person",
    component: Home,
    icon: "person-outline",
  },
];

export default tabs;
