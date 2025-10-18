import Categories from "../../home/categories/categories";
import ProductsPage from "../../home/products/productsPage";
import User from "../../home/user/user";

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
    component: User,
    icon: "person-outline",
  },
];

export default tabs;
