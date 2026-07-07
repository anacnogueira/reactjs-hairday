import { TrashIcon } from "@phosphor-icons/react";
import ButtonIcon from "../components/button-icon";
import Text from "../components/text";

interface PeriodItemProps {
    id: string;
    time: string;
    client: string;
}

export default function PeriodItem({
    id,
    time,
    client
}: PeriodItemProps) {
    return (
        <li className="flex items-center gap-5 py-1">
            <Text variant="title-md">{time}</Text>
            <Text variant="text-md" className="w-full">{client}</Text>
            <ButtonIcon 
                icon={TrashIcon}
                className="shrink-0 fill-yellow"
            />
        </li>
    );
}