"use client";

import { useEffect, useState } from "react";
import {
  Scanner,
  useDevices,
  outline,
  boundingBox,
  centerText,
} from "@yudiel/react-qr-scanner";
import { SessionClientInformation } from "@/stores/App.store";
import { useAtom } from "jotai";

export default function QrScanner() {
  const [deviceId, setDeviceId] = useState<string | undefined>(undefined);
  const [tracker, setTracker] = useState<string | undefined>("centerText");
  const [pause, setPause] = useState(false);
  const [sessionClientInformation, setSessionClientInformation] = useAtom(SessionClientInformation)

  function getTracker() {
    switch (tracker) {
      case "outline":
        return outline;
      case "boundingBox":
        return boundingBox;
      case "centerText":
        return centerText;
      default:
        return undefined;
    }
  }

  const fetchUserInformation = async (userId: string) => {

    const response = await fetch(`/api/user/get-information-by-id/${userId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch user information');
    } else {

      const userInformation = await response.json();

      setSessionClientInformation((prevState) => ({
        ...prevState,
        _id: userId,
        fullName: userInformation.fullName,
      }));
    }
  }


  const handleScan = async (userId: string) => {
    try {

      setPause(true);
      fetchUserInformation(userId)
      setPause(false);

    } catch (error) {
      console.error("Error fetching user information:", error);
      alert("Failed to fetch user information.");
      setPause(false);
    }
  };

  return (
    <Scanner
      formats={[
        "qr_code",
        // "micro_qr_code",
        // "rm_qr_code",
        // "maxi_code",
        // "pdf417",
        // "aztec",
        // "data_matrix",
        // "matrix_codes",
        // "dx_film_edge",
        // "databar",
        // "databar_expanded",
        // "codabar",
        // "code_39",
        // "code_93",
        // "code_128",
        // "ean_8",
        // "ean_13",
        // "itf",
        // "linear_codes",
        // "upc_a",
        // "upc_e",
      ]}
      constraints={{
        deviceId: deviceId,
      }}
      onScan={(detectedCodes) => {
        handleScan(detectedCodes[0].rawValue);
      }}
      onError={(error) => {
        console.log(`onError: ${error}'`);
      }}
      styles={{ container: { height: "100%", width: "100%", border: "1px solid gray", borderRadius: "5px", borderStyle: "dashed", padding: "2px" } }}
      components={{
        audio: true,
        onOff: true,
        torch: true,
        zoom: true,
        finder: false,
        tracker: getTracker(),
      }}
      allowMultiple={true}
      scanDelay={2000}
      paused={pause}
    />
  );
}
