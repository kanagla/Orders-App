// import React from "react";
// import { useUserStore } from "shellApp/shared/store"; // ✅ works via Module Federation
// //const useUserStore = React.lazy(() => import("shellApp/shared/store"));
// const OrdersPage = () => {
//   const user = useUserStore((state: { user: any; }) => state.user);

//   return (
//     <div>
//       <h2>Orders Page</h2>
//       <p>User from Shell: {user?.name}</p>
//     </div>
//   );
// };

// export default OrdersPage;
