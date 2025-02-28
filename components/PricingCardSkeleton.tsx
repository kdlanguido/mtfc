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
import { Skeleton } from '@mui/material';

export default function PricingCardSkeleton() {
    return (
        <Card size="lg" variant="outlined" className="w-80 !h-100">
            <Skeleton variant="text" width="60%" />
            <Typography level="h2">      <Skeleton variant="text" width="60%" /></Typography>
            <Divider inset="none" />
            <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                <ListItem>
                    <Skeleton variant="text" width="100%" />
                </ListItem>
            </List>
            <Divider inset="none" />
            <CardActions>
                <Typography level="title-lg" sx={{ mr: 'auto' }}>
                </Typography>
                <Skeleton variant="text" width="40%" />
            </CardActions>
        </Card>
    );
}
