import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import { Icon } from "./components/icon";
import Text from "./components/Text";
import { SpinnerIcon, TrashIcon } from "@phosphor-icons/react"

 export default function App() {

  return (
    <div >
      <Text as="div" variant="title-lg">Agendamentos</Text>
      <Icon svg={SpinnerIcon} animate className="text-yellow" />
       <Button>Agendar</Button>
       <ButtonIcon icon={TrashIcon} />
    </div>
  )
}
