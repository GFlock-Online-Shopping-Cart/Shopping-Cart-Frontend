import {
  Routes,
  Route,
} from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
import { Homepage } from "./pages/homePage";
import { AuthenticationGuard } from "./components/authenticationGuard";
import { ProfilePage } from "./pages/profilePage";
import { CartPage } from "./pages/cartPage";
import { ProducsPage } from "./pages/producsPage";
import { CheckoutPage } from "./pages/checkoutPage";

export const App = () => {
  // const { isLoading } =useAuth0();

  // if(isLoading) {
  //   return (
  //     <div>
        
  //     </div>
  //   )
  // }

  return (
    <Routes>
      {/* public routes */}
      <Route 
        path="/" 
        element={<Homepage/>} />

      <Route 
        path="/products" 
        element={<ProducsPage />} 
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

    </Routes>)
}