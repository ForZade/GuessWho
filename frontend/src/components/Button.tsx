interface ButtonProps {
    children: React.ReactNode
    className?: string
}

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <button className={`px-4 py-2 rounded-full ${props.className}`}>
            {children}
        </button>
    )
}