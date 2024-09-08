import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentDateState, daysUntilCATState } from "../recoil_store/store";

const useDateInfo = () => {
  const [currentDate, setCurrentDate] = useRecoilState(currentDateState);
  const [daysUntilCAT, setDaysUntilCAT] = useRecoilState(daysUntilCATState);

  useEffect(() => {
    const today = new Date();
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const formattedDate = today.toLocaleDateString("en-GB", options);
    setCurrentDate(formattedDate);

    const catDate = new Date("2024-11-24");
    const diffInTime = catDate.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
    setDaysUntilCAT(diffInDays);
  }, [setCurrentDate, setDaysUntilCAT]);

  return { currentDate, daysUntilCAT }; // Return the state values
};

export default useDateInfo;
