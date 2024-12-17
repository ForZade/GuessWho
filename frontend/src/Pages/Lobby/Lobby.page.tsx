import { useEffect, useState } from "react"
import Button from "../../components/Button"
import { useParams } from "react-router-dom"

interface PlayerProps {
    username: string
    avatar: string
}

export default function LobbyPage() {
    const { code } = useParams();

    const [me, setMe] = useState<PlayerProps>({
        username: "",
        avatar: ""
    });

    const [opponent, setOpponent] = useState<PlayerProps>({
        username: "",
        avatar: ""
    })

    useEffect(() => {
        setMe({
            username: localStorage.getItem("username") || "",
            avatar: localStorage.getItem("avatar") || ""
        });
    }, []);



    return (
        <main className="w-full h-full grid place-items-center">
            <div className="w-min h-min flex flex-col items-center justify-center gap-10">
                <section className="w-full h-12 bg-indigo-950 rounded-lg text-white font-bold text-2xl tracking-[1rem] grid place-items-center">
                    {code}
                </section>

                <section className="w-min h-min flex items-center gap-12 select-none">
                    <div className="w-96 h-[454px] bg-indigo-950 rounded-lg flex flex-col justify-center items-center">
                        <div className="aspect-square w-full bg-red-400">

                        </div>

                        <h1 className="text-3xl text-white font-bold py-4">{me.username}</h1>
                    </div>

                    <div className="w-96 h-[454px] bg-indigo-950 rounded-lg flex flex-col justify-center items-center">
                        <div className="aspect-square w-full bg-red-400">

                        </div>

                        <h1 className="text-3xl text-white font-bold py-4">{opponent.username ? opponent.username : <span className="animate-pulse text-base">Waiting for opponent...</span>}</h1>
                    </div>
                </section>

                <Button className="bg-emerald-400 text-white text-xl w-full rounded-lg shadow-lg font-semibold">
                    Start Game
                </Button>
            </div>
        </main>
    )
}