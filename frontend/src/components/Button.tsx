interface ButtonProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <button className={`px-4 py-2 rounded-full hover:bg-opacity-90 transition-all active:brightness-110 ${props.className}`} onClick={props.onClick}>
                {children}
        </button>
    )
}