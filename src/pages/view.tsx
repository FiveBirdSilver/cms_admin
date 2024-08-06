import CustomSelect from "../components/elements/Select";
import CustomDatepicker from "../components/elements/Datepicker";
import { IoWarningOutline } from "react-icons/io5";

import { logdata } from "../data/errorLog";
import { countcolumns, countdata } from "../data/dataCount";

import { Table } from "antd";

interface DataType {
  key: number;
  channelname: string;
  message: string;
  count: number;
}

function View() {
  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex gap-8">
        <CustomSelect
          label="채널명"
          options={[
            { value: "전체", label: "전체" },
            { value: "네이버", label: "네이버" },
          ]}
        />
        <CustomDatepicker />
      </div>
      <div className="grid w-full gap-6 grid-cols-main_grid">
        <div className="flex flex-col bg-white rounded-md min-h-main_box">
          <div className="flex px-5 pt-5">
            <IoWarningOutline fontSize={28} color="red" />
          </div>
          {logdata.map((v: DataType) => (
            <div className="flex flex-col gap-3 px-5 py-3 border-b border-gray-300">
              <div className="flex justify-between">
                <span key={v.key} className="text-sm font-bold">
                  {v.channelname}
                </span>
                <span className="text-base">{v.count}</span>
              </div>
              <span className="text-sm">{v.message}</span>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-md min-h-main_box">
          <Table columns={countcolumns as any} dataSource={countdata} pagination={false} />
        </div>
      </div>
    </div>
  );
}
export default View;
