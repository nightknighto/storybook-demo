import './Input.css'

interface InputProps {
    size: "sm" | "md" | "lg";
    [x: string]: string;
}

export default function Input({ size, ...rest }: InputProps) {
    return (
        <input className={`input ${size}`} {...rest} />
    ) 
}