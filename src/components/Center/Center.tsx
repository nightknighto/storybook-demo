import React from "react";
import './Center.css'

export default function Center({ children }: { children: React.ReactNode }) {
    return (<div className="center">{children}</div>)
}