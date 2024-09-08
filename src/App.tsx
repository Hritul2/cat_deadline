import { useRecoilValue } from "recoil";
import DateInfo from "./DateInfo";
import MainContent from "./MainContent";
import { sendMessage } from "./utils/sendTelegramMessage";
import {
  currentDateState,
  dilrState,
  quantsState,
  verbalState,
  daysUntilCATState,
} from "./recoil_store/store";

function App() {
  // const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const dilr = useRecoilValue(dilrState);
  const quants = useRecoilValue(quantsState);
  const verbal = useRecoilValue(verbalState);
  const currentDate = useRecoilValue(currentDateState);
  const daysUntilCAT = useRecoilValue(daysUntilCATState);

  const message = `
  You did:
  - DILR questions: ${dilr}
  - Quants questions: ${quants}
  - Verbal questions: ${verbal}
  On: ${currentDate}
  There are ${daysUntilCAT} days until CAT 2024.
  `;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-32 bg-gray-900 p-12">
      <DateInfo />
      <div className="flex flex-col items-center">
        <MainContent />
        {/* Export Button */}
        <button
          onClick={() => sendMessage(message)} // Open modal on click
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-lg transition-all text-2xl"
        >
          Export
        </button>
      </div>
    </div>
  );
}

export default App;
