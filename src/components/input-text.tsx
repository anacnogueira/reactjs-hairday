/* eslint-disable react-refresh/only-export-components */
import { cva } from "class-variance-authority";
import { Icon } from "./icon";
import { textVariants } from "./text";


export const inputTextVariantsContainer = cva(`
    has-focus:border-yellow-dark transition-colors p-3
    rounded-xl border border-gray-500 flex items-center justify-center gap-2
`);

export const inputTextVariantsIcon = cva("size-5 fill-yellow");

export const inputTextVariants = cva("w-full outline-none text-gray-200 placeholder:text-gray-400");

interface InputTextProps extends React.ComponentProps<"input"> {
    icon: React.ComponentProps<typeof Icon>["svg"]
}

export default function InputText({
    className,
    icon,
    ...props
}: InputTextProps) {
    return (
        <label className={inputTextVariantsContainer({ className })}>
            <Icon svg={icon} className={inputTextVariantsIcon()}/>
            <input
                type="text"
                className={textVariants({
                    variant: "text-md",
                    className: inputTextVariants(),
                })}
                {...props}
            />
        </label>
    )
}