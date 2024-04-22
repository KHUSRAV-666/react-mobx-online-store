import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import Shop from "./pages/Shop";
import {
  BASKET_ROUTE,
  CHECKOUT_ROUTE,
  CONTACTS_ROUTE,
  NOT_FOUND_ROUTE,
  PRODUCT_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts/routes_link";
import Product from "./pages/Product";
import Basket from "./pages/Basket";
import Checkout from "./pages/Checkout";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={SHOP_ROUTE} element={<Layout />}>
      <Route index element={<Shop />} />
      <Route path={PRODUCT_ROUTE} element={<Product />} />
      <Route path={CONTACTS_ROUTE} element={<Contacts />} />
      <Route path={BASKET_ROUTE} element={<Basket />} />
      <Route path={CHECKOUT_ROUTE} element={<Checkout />} />
      <Route path={NOT_FOUND_ROUTE} element={<NotFound />} />
    </Route>
  )
);

export default router;
