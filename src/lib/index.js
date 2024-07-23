import React, { useState } from 'react';
import './datetimepicker.css';

const DatetimePicker = ({ value, onChange }) => {
  const [date, setDate] = useState(value?.split(' ')[0] || '');
  const [time, setTime] = useState(value?.split(' ')[1] || '');

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    triggerChange(newDate, time);
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setTime(newTime);
    triggerChange(date, newTime);
  };

  const triggerChange = (newDate, newTime) => {
    if (onChange) {
      onChange(newDate + ' ' + newTime);
    }
  };

  return (
    <div className="datetime-picker">
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        className="date-input"
      />
      <input
        type="time"
        value={time}
        onChange={handleTimeChange}
        className="time-input"
      />
    </div>
  );
};

export default DatetimePicker;