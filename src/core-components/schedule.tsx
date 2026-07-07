import PeriodItem from "./period-item";
import PeriodList from "./period-list";
import ScheduleHeader from "./schedule-header";

export default function Schedule() {
    return (
        <div className="w-full py-20">
            <div className="mx-auto flex flex-col gap-8 max-w-170.5">
                <ScheduleHeader />
                <div className="space-y-3">
                    <PeriodList period="morning">
                        <PeriodItem
                            key="1"
                            time="09:00"
                            client="Ana Maria"
                            id="1"
                        />
                    </PeriodList>

                    <PeriodList period="afternoon">
                        Item
                    </PeriodList>

                    <PeriodList period="night">
                        Item
                    </PeriodList>
                </div>
            </div>            
        </div>
    )
}