import { SessionModalState } from "@/stores/App.store";
import Modal from "@mui/joy/Modal";
import "@uploadthing/react/styles.css";
import { useAtom } from "jotai";
import QrScanner from "./QrScanner";
import { Typography } from "@mui/joy";
import QrCodeScannerCard from "./QrScannerCard";

export default function SessionsModal() {

  const [sessionModalState, setSessionModalState] = useAtom(SessionModalState)

  return (
    <Modal
      open={sessionModalState}
      onClose={() => setSessionModalState(false)}
      className="flex justify-center items-center"
    >
      <QrCodeScannerCard />
    </Modal>
  );
}
