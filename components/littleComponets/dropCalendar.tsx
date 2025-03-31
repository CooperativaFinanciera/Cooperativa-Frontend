"use client";
import React, { useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField, Grid } from '@mui/material';

interface DatePickerComponentProps {
  label?: string;
  initialDate?: Date;
  onDateChange?: (date: Date | null) => void;
  error?: boolean;
  helperText?: string;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({ label, initialDate, onDateChange, error, helperText }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate || new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (onDateChange) {
      onDateChange(date);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container justifyContent="space-around" className="w-full">
        <DatePicker
          label={label || "Seleccione su fecha de nacimiento"}
          value={selectedDate}
          onChange={handleDateChange}
          slotProps={{
            textField: (params) => (
              <TextField
                {...params}
                fullWidth
                error={error}
                helperText={helperText}
                InputProps={{
                  ...params.InputProps,
                  style: {
                    borderRadius: 10,
                    backgroundColor: "#f3f4f6", // Tailwind bg-gray-100
                    borderColor: error ? "#ef4444" : "rgb(35, 66, 99)",
                    borderWidth: "1px"
                  }
                }}
              />
            )
          }}
          />
      </Grid>
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
