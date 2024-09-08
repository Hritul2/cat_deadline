import useDateInfo from "../hooks/useDateInfo";

const DateInfo = () => {
  const { currentDate, daysUntilCAT } = useDateInfo(); // Get values from custom hook

  return (
    <div className="text-white text-lg md:text-xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 p-4 md:p-6 bg-gray-800 rounded-lg shadow-md">
      <div className="text-center md:text-left">
        <div className="text-2xl font-semibold">{currentDate}</div>
      </div>
      <div className="text-center md:text-right mt-2 md:mt-0">
        <div className="text-lg md:text-xl">
          Days until CAT 2024: <span className="font-bold">{daysUntilCAT}</span>
        </div>
      </div>
    </div>
  );
};

export default DateInfo;
