import React from "react";

//import { useUserStore } from "shellApp/shared/store";
const CartPage = () => {
//  const user = useUserStore((state: { user: any; }) => state.user);
  return(
  <div>
    
    <h2>🧾 Cart Page (Orders Micro-Frontend)</h2>
    <p>Served from orders-app via Module Federation.</p>
     {/* <p>User from Shell: {user?.name}</p> */}
  </div>)

}

export default CartPage;
