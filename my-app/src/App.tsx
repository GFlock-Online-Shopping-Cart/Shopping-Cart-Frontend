import {
  Routes,
  Route,
} from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Homepage } from "./pages/homePage";
import { AuthenticationGuard } from "./components/authenticationGuard";
import { ProfilePage } from "./pages/profilePage";
import { CartPage } from "./pages/cartPage";
import { ProductsPage } from "./pages/productsPage";
import { CheckoutPage } from "./pages/checkoutPage";
import { SingleProductPage } from "./pages/singleProductPage";
import { ProductsByCategoryPage } from "./pages/productsByCategoryPage";
import { OrderHistoryPage } from "./pages/orderHistoryPage";
import { SingleOrderPage } from "./pages/singleOrderPage";
export const App = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route 
        path="/products" 
        element={<ProductsPage />} 
      />

      <Route
        path="/single-product/:productId"
        element={<SingleProductPage />}
      />

      <Route 
        path="/products/categoryId/:categoryId"
        element={<ProductsByCategoryPage/>}
      />

      {/* protected routes */}
      <Route 
        path="/profile" 
        element={<AuthenticationGuard component={ProfilePage} />} 
      />
      <Route 
        path="/cart"
        element={<AuthenticationGuard component={CartPage} />}
      />

      <Route
        path="/checkout"
        element={<AuthenticationGuard component={CheckoutPage} />}
      />

      <Route 
        path="/order-history"
        element={<AuthenticationGuard component={OrderHistoryPage} />}
      />

      <Route 
        path="/single-checkout/:checkoutId"
        element={<AuthenticationGuard component={SingleOrderPage} />}
      />

    </Routes>)
}