import { HabitCard } from "@/components/habit_card";
import { MainContent } from "@/components/main_content";
import { School } from "../../../../public/svg_components/school";

export default function Habits() {
  return (
    <MainContent configs="flex-col">
      <HabitCard
        currentData="23"
        title="Estudos"
        iconColor="bg-pink-400/20"
        icon={<School className="fill-pink-400" />}
      />
      <HabitCard
        currentData="23"
        title="Recaída em vícios"
        iconColor="bg-red-600/20"
        icon={<School className="fill-red-600" />}
      />
      <HabitCard
        currentData="23"
        title="Superou vícios"
        iconColor="bg-green-400/20"
        icon={<School className="fill-green-400" />}
      />
    </MainContent>
  );
}
