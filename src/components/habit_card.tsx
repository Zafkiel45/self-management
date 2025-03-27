import { Plus } from "../../public/svg_components/plus";

interface argsSignature {
  title: string;
  currentData: string;
  icon: React.JSX.Element;
  iconColor: string;
}

export const HabitCard = ({
  currentData,
  icon,
  iconColor,
  title,
}: argsSignature) => {
  const responsiveClasses = "lg:p-5 lg:gap-10 lg:max-h-36 w-full";

  return (
    <div
      className={`bg-[#181818] border border-[#595959] ${responsiveClasses} flex items-center justify-between rounded-md shadow-md`}
    >
      <div className="flex gap-5 items-center">
        <div className={`${iconColor} rounded-sm shadow-sm p-3`}>{icon}</div>
        <div className="flex flex-col gap-1">
          <div className="font-semibold">{title}</div>
          <div className="text-gray-400">Este mês: {currentData}</div>
        </div>
      </div>
      <div>
        <button className="p-2 cursor-pointer border border-[#595959] rounded-md shadow-sm">
          <Plus className="fill-white"/>
        </button>
      </div>
    </div>
  );
};
