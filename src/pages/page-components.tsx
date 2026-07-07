import { TrashIcon, UserSquareIcon } from "@phosphor-icons/react";
import Button from "../components/button";
import DatePicker from "../components/date-picker";
import InputText from "../components/input-text";
import ButtonIcon from "../components/button-icon";
import TimeSelect from "../components/time-select";

export  default function PageComponents() {
    return (
        <main className="flex flex-col gap-8 p-2">
            <DatePicker />
            <Button>Agendar</Button>
            <Button disabled>Agendar</Button>
            <InputText icon={UserSquareIcon} placeholder="Digite seu nome..." />
            <ButtonIcon icon={TrashIcon} />
            <TimeSelect>09:00</TimeSelect>
            <TimeSelect disabled>09:00</TimeSelect>
            <TimeSelect selected>09:00</TimeSelect>
        </main>
    )
}