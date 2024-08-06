import { Table } from "antd";

import CustomSelect from "../components/elements/Select";
import { channelcolumns, channeldata } from "../data/channel";
import { groupcolumns, groupdata } from "../data/group";

function Manage() {
  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex justify-between px-4">
        <div className="flex gap-8">
          <CustomSelect
            label="그룹명"
            options={[
              { value: "전체", label: "전체" },
              { value: "한국", label: "한국" },
              { value: "미국", label: "미국" },
            ]}
          />
          <CustomSelect
            label="수집여부"
            options={[
              { value: "전체", label: "전체" },
              { value: "수집중", label: "수집중" },
              { value: "중지", label: "중지" },
            ]}
          />
        </div>
        <button className="px-3 text-xs text-white rounded-md bg-main_color">그룹생성</button>
      </div>
      <div className="grid w-full gap-6 grid-cols-main_grid">
        <div className="flex flex-col bg-white rounded-md min-h-main_box">
          <Table columns={channelcolumns as any} dataSource={channeldata} pagination={false} />
        </div>
        <div className="bg-white rounded-md min-h-main_box">
          <Table columns={groupcolumns as any} dataSource={groupdata} pagination={false} />
        </div>
      </div>
    </div>
  );
}
export default Manage;
