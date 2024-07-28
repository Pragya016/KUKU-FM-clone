import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TabsPanel() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '700px', display: 'flex', justifyContent: 'space-between' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{ width: '100%' }}
        TabIndicatorProps={{
          style: {
            backgroundColor: '#ee4130' 
          }
        }}
      >
        <Tab 
          label="Episodes" 
          sx={{ 
            width: '25%', 
            color: '#ee4130', 
            '&.Mui-selected': { color: '#ee4130' }
          }} 
        />
        <Tab 
          label="Details" 
          sx={{ 
            width: '25%', 
            color: '#ee4130', 
            '&.Mui-selected': { color: '#ee4130' }
          }} 
        />
        <Tab 
          label="Review" 
          sx={{ 
            width: '25%', 
            color: '#ee4130', 
            '&.Mui-selected': { color: '#ee4130' }
          }} 
        />
        <Tab 
          label="Cast & Crew" 
          sx={{ 
            width: '25%', 
            color: '#ee4130', 
            '&.Mui-selected': { color: '#ee4130' }
          }} 
        />
      </Tabs>
    </Box>
  );
}
