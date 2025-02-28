"use client"
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { PricingI } from '@/constants/interfaces';
import { useAtom } from 'jotai';
import { UserInformation } from '@/stores/UserInfo.store';

export default function PricingCard({ PricingInformation }: { PricingInformation: PricingI }) {

    const [userInformation,] = useAtom(UserInformation)
    const pricingId = PricingInformation._id
    const userId = userInformation._id

    const handleClickJoin = async () => {
        try {
            const response = await fetch("/api/membership/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId,
                    pricingId
                }),
            })

            const data = await response.json();

            if (response.status === 201) {
                alert('Subscription Successful')
            } else {
                console.error("Error:", data.message);
            }

        } catch (error) {
            console.error("An error occurred while submitting the form:", error);
        }
    }

    return (
        <Card size="lg" variant="outlined" className="w-80 !h-100">
            <Chip size="sm" variant="outlined" color="neutral">
                Regular
            </Chip>
            <Typography level="h2">{PricingInformation.name}</Typography>
            <Divider inset="none" />
            <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                {PricingInformation.inclusions.map((item) => (
                    <ListItem key={item}>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        {item}
                    </ListItem>
                ))}
            </List>
            <Divider inset="none" />
            <CardActions>
                <Typography level="title-lg" sx={{ mr: 'auto' }}>
                    ₱{PricingInformation.price}{' '}
                    <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
                        / month
                    </Typography>
                </Typography>
                <Button
                    variant="soft"
                    color="neutral"
                    endDecorator={<KeyboardArrowRight />}
                    onClick={handleClickJoin}
                >
                    Join
                </Button>
            </CardActions>
        </Card>
    );
}
