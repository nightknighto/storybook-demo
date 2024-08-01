
type Props = {
    variant?: "green" | "red" | "yellow"
}

export default function Light({variant='green'}: Props) {
    return (
        <div
            style={{
                backgroundColor: variant,
                borderRadius: "50%",
                height: "50px",
                width: "50px"
            }}
        ></div>
    )
}