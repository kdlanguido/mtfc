"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { ProductI } from "@/constants/interfaces";
import { ShoppingCart, Search } from '@mui/icons-material';
import { CartDrawerState, ViewProductItemId, ViewProductModalState } from "@/stores/StoreItem.store";
import { useAtom } from "jotai";
import { UserInformation } from "@/stores/UserInfo.store";

export default function StoreItemCard({
  ProductInfo,
}: {
  ProductInfo: ProductI;
}) {

  const router = useRouter();

  const [cartDrawerState, setCartDrawerState] = useAtom(CartDrawerState)
  const [userInformation,] = useAtom(UserInformation)
  const [viewItemId, setViewItemId] = useAtom(ViewProductItemId)
  const [, setViewProductModalState] = useAtom(ViewProductModalState)

  const handleViewItemClick = () => {
    setViewItemId(ProductInfo._id)
    setViewProductModalState(true)
  };

  const handleAddToCartClick = async (productId: string) => {
    try {
      const response = await fetch('/api/ecommerce/addtocart/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userInformation._id,
          productId: productId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }

      const data = await response.json();

      if (!cartDrawerState) {
        setCartDrawerState(true)
      }

    } catch (error) {
      console.error('Error adding product to cart:', error);
      alert('An error occurred while adding the product to the cart');
    }
  };


  return (
    <Card className="!inset-shadow-md py-2 relative w-[345] h-[320]">
      <CardMedia
        className="object-contain w-[180px] h-[180px] mx-auto"
        image={ProductInfo.imgUrl}
        title="Store Item"
      />
      <CardContent>
        <Typography className="text-center" component="div">
          {ProductInfo.name}
        </Typography>
      </CardContent>
      <CardActions className="flex absolute bottom-0 w-full">
        <Button
          className=" flex-1 !text-[10px] flex justify-center items-center"
          variant="contained"
          onClick={handleViewItemClick}
        >
          <Search className="mr-2" />
          View
        </Button>
        <Button
          className="flex-1 !text-[10px] flex justify-center items-center"
          variant="contained"
          onClick={() => handleAddToCartClick(ProductInfo._id)}
        >
          <ShoppingCart className="mr-2" />
          Add to Cart
        </Button>
      </CardActions>
    </Card>

  );
}
