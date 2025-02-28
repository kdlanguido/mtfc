import React, { ReactNode } from 'react';
import { Stack } from '@mui/material';
interface SectionStackProps {
  children: ReactNode;
}
const SectionStack: React.FC<SectionStackProps> = ({ children }) => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} sx={{ pb: { xs: 2, sm: 3, md: 7, }, pt: { xs: 2, sm: 3, md: 7 }, px: { xs: 2, sm: 3, md: 9 }, gap: { xs: 2, md: 2, lg: 2, xl: 5 }, }}>
      {children}
    </Stack>
  );
};
export default SectionStack;