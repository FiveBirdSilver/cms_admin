import { useState } from "react";
import { Table } from "antd";

import { channeldata } from "../data/channel";
import { groupdata, groupSelect } from "../data/group";
import CustomCard from "../components/elements/Card";
import CustomList from "../components/elements/List";
import CustomSelect from "../components/elements/Select";
import CustomModal from "../components/elements/Modal";

import useModal from "../components/elements/useModal";
import CustomInput from "../components/elements/Input";

interface RowType {
  key: number;
  name: string;
  url: string;
  group: string;
  flag: string;
}

function Manage() {
  const { openModal, closeModal, isOpen } = useModal();
  const [selectRow, setSelectRow] = useState<RowType>();

  const channelcolumns = [
    {
      title: "그룹",
      dataIndex: "group",
      align: "center",
    },
    {
      title: "채널이름",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "URL",
      dataIndex: "url",
      align: "center",
    },

    {
      title: "수집여부",
      dataIndex: "flag",
      align: "center",
    },
  ];

  return (
    <div className="flex flex-col w-full gap-8 sm:px-5 md:px-5">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[6fr_4fr] xl:grid-cols-[6fr_4fr]">
        <div className="flex gap-6">
          <CustomSelect label="그룹명" options={groupSelect} />
          <CustomSelect
            label="수집여부"
            options={[
              { value: "전체", label: "전체" },
              { value: "수집중", label: "수집중" },
              { value: "중지", label: "중지" },
            ]}
          />
        </div>
        <div className="flex justify-end">
          <button className="px-3 text-xs text-white rounded-md bg-main_color">그룹생성</button>
        </div>
        <CustomCard
          title="채널 관리"
          content={
            <Table
              onRow={(record, _rowIndex) => {
                return {
                  onClick: () => {
                    setSelectRow(record);
                    openModal();
                  },
                };
              }}
              columns={channelcolumns as any}
              dataSource={channeldata}
              pagination={false}
            />
          }
        />
        <CustomCard title="그룹 관리" content={<CustomList data={groupdata} />} />
      </div>
      <CustomModal
        isOpen={isOpen}
        title="채널"
        onOk={closeModal}
        onCancel={closeModal}
        content={
          <div className="flex flex-col justify-start gap-4">
            <CustomSelect label="그룹명" options={groupSelect} value={selectRow?.group} />
            <CustomInput label="이름" value={selectRow?.name || ""} />
            <CustomInput label="URL" value={selectRow?.url || ""} />
            <CustomSelect
              label="수집여부"
              options={[
                { value: "전체", label: "전체" },
                { value: "수집중", label: "수집중" },
                { value: "중지", label: "중지" },
              ]}
              value={selectRow?.flag}
            />
          </div>
        }
      />
    </div>
  );
}
export default Manage;
