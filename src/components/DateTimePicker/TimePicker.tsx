import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const TimePicker: React.FC = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <a href="https://www.npmjs.com/package/react-datetime-picker">
        React-DateTime-Picker
      </a>

      <DateTimePicker value={value} onChange={onChange} />
    </div>
  );
};

export default TimePicker;
