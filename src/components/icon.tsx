import type React from "react";
import {cva, type VariantProps} from "class-variance-authority";

export const iconVariants = cva("", {
    variants: {
        animate: {
            true: "animate-spin",
            false: "",
        }
    },
    defaultVariants: {
        animate: false
    }
})

interface IconProps extends React.ComponentProps<"svg"> {
    svg: React.FC<React.ComponentProps<"svg">>;
}

export function Icon({
    svg: SvgComponent,
    className,
    animate,
    ...props
}: IconProps) {
    return (
        <SvgComponent className={iconVariants({animate, className})} {...props} />
    )
}