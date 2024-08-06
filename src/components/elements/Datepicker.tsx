import dayjs from "dayjs";
import { DatePicker } from "antd";

const CustomDatepicker = () => {
  const { RangePicker } = DatePicker;
  return (
    <div className="flex items-baseline justify-center gap-3 text-sm">
      <p>날짜</p>
      <RangePicker defaultValue={[dayjs().subtract(7, "d"), dayjs()]} disabled={[false, true]} />
    </div>
  );
};
export default CustomDatepicker;
