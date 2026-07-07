import { UserSquareIcon } from "@phosphor-icons/react/dist/ssr";
import DatePicker from "../components/date-picker";
import InputText from "../components/input-text";
import Text from "../components/text";
import TimeSelect from "../components/time-select";
import Button from "../components/button";

const morningTimeSlots = ["09:00", "10:00", "11:00", "12:00"];
const afternoonTimeSlots = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const nightTimeSlots = ["19:00", "20:00", "21:00"];

export function Sidebar() {
    return (
        <aside 
            className="p-20 bg-gray-700 rounded-xl max-w-124.5 w-full flex flex-col gap-6">
                <div className="space-y-1 w-full">
                    <Text as="h2" variant="title-lg" className="text-gray-100">
                        Agende um atendimento
                    </Text>

                    <Text variant="text-sm" className="text-gray-300">
                         Selecione data, horário e informe o nome do cliente para criar o agendamento
                    </Text>
                </div>
                <form className="space-y-8">
                    <label className="flex flex-col gap-2 w-full">
                        <Text variant="text-md" className="text-gray-200">
                            Data
                        </Text>

                        <DatePicker />
                    </label>
                    <div className="flex flex-col gap-2">
                        <Text variant="text-md" className="text-gray-200">
                            Horários
                        </Text>
                        <div className="flex flex-col gap-2">
                             <Text variant="text-md" className="text-gray-200">
                                Manhã
                            </Text>
                            <div className="flex flex-wrap items-center gap-2">
                                {
                                    morningTimeSlots.map((morningTime) => (
                                        <TimeSelect
                                            name="time"
                                            value={morningTime}
                                            key={morningTime}
                                            selected={false}
                                            disabled={false}
                                        >
                                            {morningTime}
                                        </TimeSelect>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                             <Text variant="text-md" className="text-gray-200">
                                Tarde
                            </Text>
                            <div className="flex flex-wrap items-center gap-2">
                                {
                                    afternoonTimeSlots.map((afternoonTime) => (
                                        <TimeSelect
                                            name="time"
                                            value={afternoonTime}
                                            key={afternoonTime}
                                            selected={false}
                                            disabled={false}
                                        >
                                            {afternoonTime}
                                        </TimeSelect>
                                    ))
                                }
                            </div>
                        </div>

                         <div className="flex flex-col gap-2">
                             <Text variant="text-md" className="text-gray-200">
                                Noite
                            </Text>
                            <div className="flex flex-wrap items-center gap-2">
                                {
                                    afternoonTimeSlots.map((nightTime) => (
                                        <TimeSelect
                                            name="time"
                                            value={nightTime}
                                            key={nightTime}
                                            selected={false}
                                            disabled={false}
                                        >
                                            {nightTime}
                                        </TimeSelect>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <label className="flex flex-col gap-2 w-full">
                        <Text variant="text-md" className="text-gray-200">
                            Cliente
                        </Text>

                        <InputText
                            name="client"
                            icon={UserSquareIcon}
                            placeholder="Nome do cliente"
                        />
                    </label>
                    <Button type="submit">
                        Agendar
                    </Button>
                </form>
        </aside>

    )
}