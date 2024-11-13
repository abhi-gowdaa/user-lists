import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./Root";

// import { Error } from "./pages/Error";
import UserList from "./UserList";
import UpdateUser from "./pages/UpdateUser"
import AddUser from "./pages/AddUser";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <UserList /> },
      { path: "update/:id", element: <UpdateUser /> },
      { path: "adduser", element: <AddUser /> },
    ],
   
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
