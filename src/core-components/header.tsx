import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import LogoIcon from "../assets/logo.svg?react";

export default function Header({
    className,
    ...props
}: ComponentProps<"div">) {
    return (
        <header className={twMerge("py-3 px-5 bg-gray-600 rounded-br-xl", className )} {...props} >
            <LogoIcon alt="Logo" />
        </header>
    )

}