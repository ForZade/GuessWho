import { Icon } from "@iconify/react"

export default function ProfileImageSelector() {
    return (
        <section className="w-min h-min items-center flex gap-2">
            <button className="w-10 h-10 grid place-items-center rounded-full hover:bg-slate-100 hover:bg-opacity-20">
                <Icon icon="tabler:chevron-left" className="w-8 h-8 text-slate-100" />
            </button>

            <div className="w-48 h-48 bg-indigo-950 rounded-lg">
                <img src="" alt="" />
            </div>

            <button className="w-10 h-10 grid place-items-center rounded-full hover:bg-slate-100 hover:bg-opacity-20">
                <Icon icon="tabler:chevron-right" className="w-8 h-8 text-slate-100" />
            </button>
        </section>
    )
}