import { useEffect, useRef, useState } from "react"

export default function UsernameInput() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const [inputStatus, setInputStatus] = useState<string>("")

    const handleFocus = () => {
        setInputStatus('focused');
    };

    const handleBlue = () => {
        if (usernameRef.current && usernameRef.current.value.length > 0) {
            localStorage.setItem("username", usernameRef.current.value);
        }

        setInputStatus('unfocused');
        return;
    };

    useEffect(() => {
        if (usernameRef.current) {
            usernameRef.current.value = localStorage.getItem("username") || "";
        }
    }, []);

    return (
        <section className="flex items-center gap-2">
            <div 
                className={`
                    w-80 h-12 bg-white rounded-lg flex items-center justify-center border-zinc-900 border-2 shadow-md outline transition-[outline-color] duration-100
                    ${inputStatus === "focused" ? "outline-blue-400" : "outline-transparent"}
                `}
            >
                <input 
                    ref={usernameRef}
                    type="text" 
                    maxLength={32} 
                    className="w-full h-full bg-transparent outline-none text-2xl text-center"
                    onFocus={handleFocus}
                    onBlur={handleBlue}
                />
            </div>
        </section>
    )
}