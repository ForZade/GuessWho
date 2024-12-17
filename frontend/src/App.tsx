import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements, Navigate } from "react-router-dom"
import MainLayout from "./Layouts/Main.layout"
import HomePage from "./Pages/Home/Home.page"
import LobbyPage from "./Pages/Lobby/Lobby.page"

export default function App() {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/lobby">
                    <Route index element={<Navigate to="/" />} />
                    <Route path=":code" element={<LobbyPage />} />
                </Route>
            </Route>
        )
    )

    return (
        <RouterProvider router={routes} />
    )
}