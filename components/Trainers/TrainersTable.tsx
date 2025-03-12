import { TrainerI } from '@/constants/interfaces';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button, TextField, TableSortLabel } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { SelectedTrainer, TrainerModalStateAdd, TrainerModalStateEdit } from '@/stores/App.store';
import TrainersModalEdit from './TrainersModalEdit';
import TrainersModalAdd from './TrainersModalAdd';

export default function TrainersTable() {

    const [, setTrainerModalStateEdit] = useAtom(TrainerModalStateEdit)
    const [, setTrainerModalStateAdd] = useAtom(TrainerModalStateAdd)
    const [, setSelectedTrainer] = useAtom(SelectedTrainer)
    const [trainers, setTrainers] = useState<TrainerI[]>([])
    const [searchTerm, setSearchTerm] = useState("");

    const handleClickEdit = (trainer: TrainerI) => {
        setSelectedTrainer(trainer)
        setTrainerModalStateEdit(true)
    }

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredTrainers = trainers.filter((trainer) =>
        trainer.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const fetchTrainersAdmin = async () => {
        const response = await fetch("/api/trainers/");
        const data = await response.json();
        setTrainers(data)
    }

    useEffect(() => {
        fetchTrainersAdmin()
    }, [])

    return (<>
        <div>
            <div className="flex justify-between mb-4 mt-4">
                <TextField
                    className='bg-white w-[300px] border rounded !font-[10px]'
                    label="Search Trainers"
                    variant="filled"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    size="small"
                />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={() => { setTrainerModalStateAdd(true) }}
                >
                    Add Trainer
                </Button>
            </div>

            <TableContainer>
                <Table className="bg-white border rounded" aria-label="basic table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='!font-bold' style={{ width: '10%' }}>Image</TableCell>
                            <TableCell className='!font-bold' >Name</TableCell>
                            <TableCell className='!font-bold ' style={{ width: '20%' }}>Schedule</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '13%' }}>Email</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '13%' }}>Phone</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '8%' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredTrainers.map((trainer, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <img
                                        src={trainer.profileUrl}
                                        alt={trainer.fullName}
                                        height={80}
                                        width={80}
                                    />
                                </TableCell>
                                <TableCell>{trainer.fullName}</TableCell>
                                <TableCell>{trainer.instructorSchedule.replace(",", "\t")}</TableCell>
                                <TableCell className='!text-center'>{trainer.email}</TableCell>
                                <TableCell className='!text-center'>{trainer.phone}</TableCell>
                                <TableCell className='!text-center'>
                                    <IconButton color="primary" onClick={() => { handleClickEdit(trainer) }}>
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
        <div>
            <TrainersModalEdit fetchTrainers={fetchTrainersAdmin} />
        </div>
        <div>
            <TrainersModalAdd fetchTrainers={fetchTrainersAdmin} />
        </div>
    </>
    );
}
