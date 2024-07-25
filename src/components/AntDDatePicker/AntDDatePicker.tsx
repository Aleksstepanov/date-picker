import React, { useState } from "react";
import { DatePicker } from "antd";
import { dayjs, dateFormat } from "../../plugins";

const AntDDatePicker: React.FC = () => {
  const [value, onChange] = useState(dayjs("2024-07-24", dateFormat));

  return (
    <div>
      <a href="https://ant.design/components/date-picker">AntD</a>
      <DatePicker
        showTime
        value={value}
        onChange={(value, dateString) => {
          console.log("Selected Time: ", value);
          console.log("Formatted Selected Time: ", dateString);
          onChange(value);
        }}
      />
    </div>
  );
};

export default AntDDatePicker;
