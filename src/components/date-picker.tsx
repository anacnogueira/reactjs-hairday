/* eslint-disable react-refresh/only-export-components */
import { CalendarIcon, CaretDownIcon } from "@phosphor-icons/react";
import { Icon } from "./icon";
import { cva } from "class-variance-authority";
import { useRef } from "react";
import { textVariants } from "./text";
import { twMerge } from "tailwind-merge";

export const datePickerVariantsContainer = cva(`
    cursor-pointer focus-within:border-yellow-dark transition-colors
    p-3 rounded-xl border border-gray-500 
    flex items-center justify-center gap-2
`);

export const datePickerVariantsIcon = cva("size-5 fill-yellow");

export const datePickerVariantsInput = cva(`
    cursor-pointer w-full outline-none [&::-webkit-calendar-picker-indicator]:hidden
    [&::webkit-inner-spin-button]:hidden [&::webkit-outer-spin-button]:hidden
`);

interface DatePickerProps extends React.ComponentProps<"input"> {
    icon?: React.ComponentProps<typeof Icon>["svg"]

}

export default function DatePicker({
    icon = CalendarIcon,
    className,
    ...props
}: DatePickerProps) {
    const dateRef = useRef<HTMLInputElement>(null);

    const openDatePicker = () => {
        if (dateRef.current && typeof dateRef.current.showPicker === "function") {
            dateRef.current.showPicker();        
        } else {
            dateRef.current?.focus();
        }
    }

    return (
        <button
            className={datePickerVariantsContainer({ className })}
            type="button"
            onClick={openDatePicker}
        >
            <Icon svg={icon} className={datePickerVariantsIcon()} />
            <input 
                ref={dateRef}
                type="date"
                className={twMerge(
                    datePickerVariantsInput({
                        className: twMerge(
                            textVariants({ className: "text-gray-200" }),
                            "max-w-24"
                        ),
                    })
                )}
                min={new Date().toISOString().split("T")[0]}
                { ...props}
            />
            <Icon svg={CaretDownIcon} className="ml-auto size-4 fill-gray-300" />
        
        </button>
    )
}