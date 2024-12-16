import Button from "../../components/Button";
import ProfileImageSelector from "./components/ProfileImageSelector";

export default function CreatePage() {
    return (
        <main className="w-full h-full flex flex-col items-center justify-center">
            <section className="flex flex-col gap-12">
                <header className="flex flex-col items-center gap-4">
                    <h1 className="text-3xl font-bold text-slate-100">Choose a nickname</h1>

                    <ProfileImageSelector />
                    
                    <div className="w-full py-2 px-4 bg-white rounded-full">
                        <input type="text" className="w-full h-full bg-transparent outline-none text-2xl text-center"/>
                    </div>
                </header>

                <Button className="bg-emerald-600 text-white text-xl">
                    Start
                </Button>
            </section>
        </main>
    )
}