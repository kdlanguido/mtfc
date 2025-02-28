import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { ProductI } from '@/constants/interfaces';
import { CardMedia } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';


export default function ProductCard({ ProductInformation }: { ProductInformation: ProductI }) {
    return (
        <Card sx={{ width: 450 }}>
            <div>
                <Typography level="title-lg">{ProductInformation.name}</Typography>
                <Typography level="body-sm">{ProductInformation.description}</Typography>
            </div>
            <CardMedia
                className="object-contain w-[180px] h-[180px] mx-auto my-5"
                image={ProductInformation.imgUrl}
                title="Store Item"
            />
            <CardContent orientation="horizontal">
                <div>
                    <Typography level="body-xs">Total price:</Typography>
                    <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>₱{ProductInformation.price}</Typography>
                </div>
                <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    aria-label="Explore Bahamas Islands"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 400, fontSize: '11px' }}
                >
                    <ShoppingCart className="mr-2" />
                    ADD TO CART
                </Button>
            </CardContent>
        </Card>
    );
}
