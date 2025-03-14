import { IUser } from '@/constants/interfaces';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { MemberModalStateEdit, SelectedMember } from '@/stores/App.store';
import MemberModalEdit from './MemberModalEdit';

export default function MembersTable() {

    const [, setMemberModalState] = useAtom(MemberModalStateEdit)
    const [, setSelectedMember] = useAtom(SelectedMember)
    const [members, setMembers] = useState<IUser[]>([])
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClickEdit = (member: IUser) => {
        setSelectedMember(member)
        setMemberModalState(true)
    }

    const filteredMembers = members.filter((member) =>
        member.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const fetchMembersAdmin = async () => {
        const response = await fetch("/api/user/get-members");
        const data = await response.json();
        setMembers(data)
    }

    useEffect(() => {
        fetchMembersAdmin()
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
            </div>

            <TableContainer>
                <Table className="bg-white border rounded" aria-label="basic table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='!font-bold' style={{ width: '10%' }}>Image</TableCell>
                            <TableCell className='!font-bold'>Full Name</TableCell>
                            <TableCell className='!font-bold' style={{ width: '10%' }}>Gender</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '10%' }}>Email</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '10%' }}>Date Joined</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '10%' }}>Last Attendance</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '8%' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredMembers.map((member, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <img
                                        src={member.profileUrl}
                                        alt={member.fullName}
                                        height={80}
                                        width={80}
                                    />
                                </TableCell>
                                <TableCell>{member.fullName}</TableCell>
                                <TableCell>{member.gender}</TableCell>
                                <TableCell>{member.email}</TableCell>
                                <TableCell className='!text-center'> </TableCell>
                                <TableCell className='!text-center'> </TableCell>
                                <TableCell className='!text-center'>
                                    <IconButton color="primary" onClick={() => { handleClickEdit(member) }}>
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
            <MemberModalEdit fetchMembers={fetchMembersAdmin} />
        </div>
        <div>
            {/* <ProductModalAdd fetchProduct={fetchProductAdmin} /> */}
        </div>
    </>
    );
}
