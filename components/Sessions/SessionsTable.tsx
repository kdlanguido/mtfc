import { SessionsI } from '@/constants/interfaces';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button, TextField, TableSortLabel } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { SessionModalState } from '@/stores/App.store';
import QrCodeIcon from '@mui/icons-material/QrCode';
import SessionsModal from './SessionsModal';

export default function SessionsTable() {

    const [, setSessionModalState] = useAtom(SessionModalState)
    const [sessions, setSessions] = useState<SessionsI[]>([])
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredSessions = sessions.filter((member) =>
        member.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const fetchSessionsAdmin = async () => {
        const response = await fetch("/api/sessions");
        const data = await response.json();
        setSessions(data)
    }

    const handleScannerClick = () => {
        setSessionModalState(true)
    }

    useEffect(() => {
        fetchSessionsAdmin()
    }, [])

    return (<>
        <div>
            <div className="flex justify-between mb-4 mt-4">
                <TextField
                    className='bg-white w-[300px] border rounded !font-[10px]'
                    label="Search Members"
                    variant="filled"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    size="small"
                />

                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<QrCodeIcon />}
                    onClick={handleScannerClick}
                >
                    Scan
                </Button>
            </div>

            <TableContainer>
                <Table className="bg-white border rounded" aria-label="basic table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='!font-bold ' style={{ width: '20%' }}>Client ID</TableCell>
                            <TableCell className='!font-bold'>Full Name</TableCell>
                            <TableCell className='!font-bold' style={{ width: '12%' }}>Time</TableCell>
                            <TableCell className='!font-bold' style={{ width: '12%' }}>Status</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '8%' }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredSessions.map((session, index) => (
                            <TableRow key={index}>
                                <TableCell>{session.userId}</TableCell>
                                <TableCell>{session.fullName}</TableCell>
                                <TableCell>{session.time}</TableCell>
                                <TableCell>{session.status}</TableCell>
                                <TableCell className='!text-center'>
                                    <IconButton color="primary">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>

        <SessionsModal />
    </>
    );
}
