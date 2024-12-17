import CodeInput from "./components/CodeInput";
import Button from "../../components/Button";
import UsernameInput from "./components/UsernameInput";
import AvatarSelector from "./components/AvatarSelector";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <main className="w-full h-full flex flex-col items-center justify-center gap-4">
            <AvatarSelector />
            <UsernameInput />
            <Button className="bg-emerald-400 text-white text-xl w-48 rounded-lg shadow-lg font-semibold" onClick={() => navigate("/lobby")}>
                Create Lobby
            </Button>

            <section className="fixed bottom-0 right-0 p-4">
                <CodeInput />
            </section>
        </main>
    )
}