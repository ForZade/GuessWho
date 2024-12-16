import { useEffect, useState } from "react"

export default function CodeInput() {

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (
            /^\d$/.test(e.key) ||
            ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Enter"].includes(e.key)
        ) {
            return;
        }
    
        e.preventDefault();
    }

    return (
        <section className="flex items-center gap-2">
            <div className={`w-48 h-12 bg-white rounded-lg flex items-center justify-center border-zinc-900 border-2 shadow-md focus:outline focus:outline-blue-400`}>
                <input 
                    type="text" 
                    maxLength={6} 
                    className="w-full h-full bg-transparent outline-none text-2xl text-center caret-blue-400"
                    onKeyDown={onKeyDown}
                />
            </div>
        </section>
    )
}