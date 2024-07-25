import "./styles.css";
import { TimePicker } from "./components/DateTimePicker";
import { AntDDatePicker } from "./components/AntDDatePicker";
import { MyDatePicker } from "./components/DatePicker";
import { NativeDatePicker } from "./components/NativeDatePicker";
import styled from "styled-components";

import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default function App() {
  return (
    <div className="App">
      <h1>Date Picker test</h1>
      <Wrapper>
        <TimePicker />
      </Wrapper>
      <Wrapper>
        <AntDDatePicker />
      </Wrapper>
      <Wrapper>
        <MyDatePicker />
      </Wrapper>
      <Wrapper>
        <NativeDatePicker />
      </Wrapper>
    </div>
  );
}
