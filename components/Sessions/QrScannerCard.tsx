import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import QrScanner from './QrScanner';
import { useAtom } from 'jotai';
import { SessionClientInformation, SessionModalState } from '@/stores/App.store';

export default function QrCodeScannerCard() {
    const [sessionClientInformation,] = useAtom(SessionClientInformation)
    const [, setSessionModalState] = useAtom(SessionModalState)


    const recordSession = async (status: string) => {
        try {
            if (sessionClientInformation) {
                const response = await fetch(status == "timein" ? `/api/sessions/time-in` : `/api/sessions/time-out`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId: sessionClientInformation._id,
                        fullName: sessionClientInformation.fullName
                    })
                });

                if (!response.ok) {
                    throw new Error('Session failed to submit');
                }

                alert(`Session recorded successfully.`);
                setSessionModalState(false)

            } else {
                alert(`Please scan client QR first!`)
            }
        } catch (error) {

        }

    }

    return (
        <Card sx={{ width: 450 }}>
            <div className='text-center'>
                <Typography level="title-lg">Session QR Scanner</Typography>
                <Typography level="body-sm">Scan client's QR to add session</Typography>
            </div>
            <QrScanner />
            <CardContent orientation="horizontal" className="justify-between">
                <div>
                    <Typography level="body-xs">Client Name:</Typography>
                    <Typography sx={{ fontSize: 'xs' }}>{sessionClientInformation ? sessionClientInformation.fullName : "Scan to find client..."}</Typography>
                </div>
                <div >
                    <Button
                        className="mr-2"
                        variant="solid"
                        size="md"
                        color="primary"
                        onClick={() => {
                            recordSession("timein")
                        }}
                    >
                        Time - In
                    </Button>
                    <Button
                        variant="solid"
                        size="md"
                        color="primary"
                        className="!ml-2"
                        sx={{ alignSelf: 'center', fontWeight: 500 }}
                        onClick={() => {
                            recordSession("timeout")
                        }}
                    >
                        Time - Out
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
