import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"
import MainLayout from "./Layouts/Main.layout"
import CreatePage from "./Pages/Create/Create.page"
import HomePage from "./Pages/Home/Home.page"

export default function App() {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
            </Route>
        )
    )

    return (
        <RouterProvider router={routes} />
    )
}