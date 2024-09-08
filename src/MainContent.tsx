import CounterBox from "./CounterBox";
import { useRecoilState } from "recoil";
import { dilrState, quantsState, verbalState } from "./recoil_store/store";

const MainContent = () => {
  const [dilr, setDilr] = useRecoilState(dilrState);
  const [quants, setQuants] = useRecoilState(quantsState);
  const [verbal, setVerbal] = useRecoilState(verbalState);

  const addDilr = () => setDilr(dilr + 1);
  const subDilr = () => setDilr(dilr > 0 ? dilr - 1 : 0);

  const addQuants = () => setQuants(quants + 1);
  const subQuants = () => setQuants(quants > 0 ? quants - 1 : 0);

  const addVerbal = () => setVerbal(verbal + 1);
  const subVerbal = () => setVerbal(verbal > 0 ? verbal - 1 : 0);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6 my-8 w-full">
      <CounterBox
        title="DILR"
        count={dilr}
        onIncrement={addDilr}
        onDecrement={subDilr}
      />
      <CounterBox
        title="Quants"
        count={quants}
        onIncrement={addQuants}
        onDecrement={subQuants}
      />
      <CounterBox
        title="VARC"
        count={verbal}
        onIncrement={addVerbal}
        onDecrement={subVerbal}
      />
    </div>
  );
};

export default MainContent;
