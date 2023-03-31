import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./component/rootLayout";

const routers = createBrowserRouter([
  { path: "/", 
        element: <RootLayout/>,
        children: [
            { path:"contact", element: "Contact Page"},
            { path:"products", element: "Products Page"},
        ]  
    },
  { path: "about", element: "About page" },
]);

export default routers;
