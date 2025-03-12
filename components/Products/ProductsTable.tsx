import { ProductI } from '@/constants/interfaces';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Button, TextField, TableSortLabel } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { ProductModalState, ProductModalStateAdd, SelectedProduct } from '@/stores/App.store';
import ProductModalEdit from '@/components/Products/ProductModalEdit';
import ProductModalAdd from '@/components/Products/ProductModalAdd';

export default function ProductTable() {

    const [productModalState, setProductModalState] = useAtom(ProductModalState)
    const [productModalStateAdd, setProductModalStateAdd] = useAtom(ProductModalStateAdd)
    const [selectedProduct, setSelectedProduct] = useAtom(SelectedProduct)
    const [products, setProducts] = useState<ProductI[]>([])
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClickEdit = (product: ProductI) => {
        setSelectedProduct(product)
        setProductModalState(true)
    }

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const fetchProductAdmin = async () => {
        const response = await fetch("/api/products/");
        const data = await response.json();
        setProducts(data)
    }

    useEffect(() => {
        fetchProductAdmin()
    }, [])

    return (<>
        <div>
            <div className="flex justify-between mb-4 mt-4">
                <TextField
                    className='bg-white w-[300px] border rounded !font-[10px]'
                    label="Search Products"
                    variant="filled"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    size="small"
                />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={() => { setProductModalStateAdd(true) }}
                >
                    Add Product
                </Button>
            </div>

            <TableContainer>
                <Table className="bg-white border rounded" aria-label="basic table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='!font-bold' style={{ width: '10%' }}>Image</TableCell>
                            <TableCell className='!font-bold' style={{ width: '25%' }}>Product Name</TableCell>
                            <TableCell className='!font-bold'>Description</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '8%' }}>Category</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '5%' }}>Price</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '5%' }}>Stocks</TableCell>
                            <TableCell className='!font-bold !text-center' style={{ width: '8%' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredProducts.map((product, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <img
                                        src={product.imgUrl}
                                        alt={product.name}
                                        height={80}
                                        width={80}
                                    />
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell> </TableCell>
                                <TableCell className='!text-center'>{product.price}</TableCell>
                                <TableCell className='!text-center'> </TableCell>
                                <TableCell className='!text-center'>
                                    <IconButton color="primary" onClick={() => { handleClickEdit(product) }}>
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
            <ProductModalEdit fetchProduct={fetchProductAdmin} />
        </div>
        <div>
            <ProductModalAdd fetchProduct={fetchProductAdmin} />
        </div>
    </>
    );
}
