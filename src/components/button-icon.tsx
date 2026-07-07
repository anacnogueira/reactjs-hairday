import { cva, type VariantProps } from "class-variance-authority"
import { Icon } from "./icon"

// eslint-disable-next-line react-refresh/only-export-components
export const buttonIconVariants = cva(
    "inline-flex items-center justify-center cursor-pointer grouo size-4"

);

// eslint-disable-next-line react-refresh/only-export-components
export const buttonIconIconVariants = cva(
    "size-full fill-yellow group-hover:fill-yellow-dark transition-colors"
);

interface ButtonIconProps extends React.ComponentProps<"button">,
    VariantProps<typeof buttonIconVariants>{
    icon: React.ComponentProps<typeof Icon>["svg"]
}

export default function ButtonIcon({
    className,
    icon,
    ...props
}: ButtonIconProps) {
    return (
        <button
            className={buttonIconVariants({className})}
            type="button"
            {...props}
        >
            <Icon svg={icon} className={buttonIconIconVariants()} />
        </button>
    )
}