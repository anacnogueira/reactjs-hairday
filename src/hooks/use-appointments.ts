import useLocalStorage from "use-local-storage";
import { APPOINTMENTS_KEY, type Appointment } from "../models/appointment";

export default function useAppointments() {
    const hookLocalStorage = (useLocalStorage as any).default || useLocalStorage;
    const [appointments] = hookLocalStorage<Appointment[]>(APPOINTMENTS_KEY, []);

    return {
        appointments
    };

}