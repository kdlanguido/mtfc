import { GymEquipmentI, ProductI } from '@/constants/interfaces';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button, TextField, TableSortLabel } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { GymEquipmentModalStateEdit, GymEquipmentModalStateAdd, SelectedGymEquipment } from '@/stores/App.store';
import GymEquipmentEdit from '@/components/GymEquipments/GymEquipmentEdit';
import GymEquipmentAdd from '@/components/GymEquipments/GymEquipmentAdd';


export default function GymEquipmentsTable() {

    const [, setGymEquipmentStateEdit] = useAtom(GymEquipmentModalStateEdit)
    const [, setGymEquipmentStateAdd] = useAtom(GymEquipmentModalStateAdd)
    const [, setSelectedGymEquipment] = useAtom(SelectedGymEquipment)
    const [gymEquipments, setGymEquipments] = useState<GymEquipmentI[]>([])
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClickEdit = (gymEquipment: GymEquipmentI) => {
        setSelectedGymEquipment(gymEquipment)
        setGymEquipmentStateEdit(true)
    }

    const filteredGymEquipments = gymEquipments.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const fetchGymEquipmentsAdmin = async () => {
        const response = await fetch("/api/equipments/");
        const data = await response.json();
        setGymEquipments(data)
    }

    useEffect(() => {
        fetchGymEquipmentsAdmin()
    }, [])

    return (<>
        <div>
            <div className="flex justify-between mb-4 mt-4">
                <TextField
                    className='bg-white w-[300px] border rounded !font-[10px]'
                    label="Search Equipment"
                    variant="filled"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    size="small"
                />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={() => { setGymEquipmentStateAdd(true) }}
                >
                    Add Equipment
                </Button>
            </div>

            <TableContainer>
                <Table className="bg-white border rounded" aria-label="basic table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='!font-bold' style={{ width: '15%' }}>Equipment Name</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '10%' }}>Contact</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '10%' }}>Qty</TableCell>
                            <TableCell className='!font-bold'>Vendor</TableCell>
                            <TableCell className='!font-bold !text-center'>Purchase Date</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '10%' }}>Price</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '10%' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredGymEquipments.map((gymEquipment, index) => (
                            <TableRow key={index}>
                                <TableCell>{gymEquipment.name}</TableCell>
                                <TableCell className='!text-center'>{gymEquipment.vendorDetails.contactNumber}</TableCell>
                                <TableCell className='!text-center'>{gymEquipment.qty}</TableCell>
                                <TableCell>{gymEquipment.vendorDetails.name}</TableCell>
                                <TableCell className='!text-center'>{new Date(gymEquipment.datePurchased).toLocaleDateString('en-US', {
                                    month: '2-digit',
                                    day: '2-digit',
                                    year: 'numeric'
                                }).replace(/\//g, '-')}</TableCell>
                                <TableCell className='!text-center'>{gymEquipment.price}</TableCell>
                                <TableCell className='!text-center'>
                                    <IconButton color="primary" onClick={() => { handleClickEdit(gymEquipment) }}>
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
            <GymEquipmentEdit fetchGymEquipments={fetchGymEquipmentsAdmin} />
        </div>
        <div>
            <GymEquipmentAdd fetchGymEquipments={fetchGymEquipmentsAdmin} />
        </div>
    </>
    );
}
