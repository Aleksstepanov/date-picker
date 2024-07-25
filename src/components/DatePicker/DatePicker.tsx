import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <a href="https://www.npmjs.com/package/react-datepicker">
        React-Date-Picker
      </a>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        dateFormat="Pp"
      />
    </div>
  );
};

export default MyDatePicker;
