import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import DatePicker from "./components/date-picker";
import { Icon } from "./components/icon";
import InputText from "./components/input-text";
import Text from "./components/text";
import { SpinnerIcon, TrashIcon, UserSquareIcon } from "@phosphor-icons/react"
import TimeSelect from "./components/time-select";

 export default function App() {

  return (
    <div >
      <Text as="div" variant="title-lg">Agendamentos</Text>
      <Icon svg={SpinnerIcon} animate className="text-yellow" />
       <Button>Agendar</Button>
       <ButtonIcon icon={TrashIcon} />
       <InputText icon={UserSquareIcon} placeholder="Type your name"/>
       <DatePicker />
       <div className="flex items-center gap-2 py-2"> 
          <TimeSelect>09:00</TimeSelect>
          <TimeSelect disabled>09:00</TimeSelect>
          <TimeSelect selected>09:00</TimeSelect>
       </div>
       
    </div>
  )
}
