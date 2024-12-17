import { useEffect, useRef, useState } from "react"

export default function CodeInput() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputStatus, setInputStatus] = useState<string>("")
    const [color, setColor] = useState<string>("")

    const checkInputStatus = () => {
        switch (inputStatus) {
            case "error":
                setColor("outline-red-400")
                return;
            case "success":
                setColor("outline-green-400")
                return;
            case "focused":
                setColor("outline-blue-400")
                return;
            case "unfocused":
                setColor("outline-transparent")
                return;

            default:
                setColor("outline-transparent")
                return;
        }
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (
            /^\d$/.test(e.key) ||
            ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Enter"].includes(e.key)
        ) {
            return;
        }
    
        e.preventDefault();
    }

    const handleFocus = () => {
        setInputStatus('focused');
    };
    
    const handleBlur = () => {
        if (inputRef.current && inputRef.current !== document.activeElement && inputRef.current.value.length < 8 && inputRef.current.value.length > 0) {
          setInputStatus('error');
          return;
        } 
        
        if (inputRef.current && inputRef.current === document.activeElement) {
            setInputStatus('focused');
            return;
        }
        
        setInputStatus('unfocused');
        return;
    };
    
    const handleChange = () => {
        if (inputRef.current && inputRef.current.value.length >= 8) {
          setInputStatus('success');
          return;
        }

        if (inputRef.current && inputRef.current.value.length < 8 && inputRef.current === document.activeElement) {
            setInputStatus('focused');
            return;
        }

        setInputStatus('unfocused');
        return;
    }

    useEffect(() => {
        checkInputStatus()
        console.log(inputStatus, color)
    }, [inputStatus])

    return (
        <section className="flex items-center gap-2">
            <div 
                className={`
                    w-36 h-10 bg-white rounded-lg flex items-center justify-center  outline transition-[outline-color] duration-100 border-zinc-900 border-2
                    ${color}
                `}
            >
                <input 
                    type="text" 
                    maxLength={8} 
                    className="w-full h-full bg-transparent outline-none text-xl text-start px-4 tracking-widest"
                    onKeyDown={onKeyDown}
                    ref={inputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
            </div>

            <button className="w-min h-full flex items-center gap-2 justify-center whitespace-nowrap bg-emerald-400 rounded-lg px-3 py-1 text-lg text-white">
                    Join lobby
            </button>
        </section>
    )
}