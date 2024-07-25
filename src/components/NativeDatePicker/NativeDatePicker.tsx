import React, { FC } from "react";
import styled from "styled-components";

interface DatePickerProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
  }
`;

const DatePicker: FC<DatePickerProps> = ({ value, onChange }) => {
  return (
    <DateInput type="date" value={value} onChange={onChange && onChange} />
  );
};

export default DatePicker;
