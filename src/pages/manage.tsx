import { useState } from "react";
import { Button, Table } from "antd";

import channeldata from "../data/channel.json";
import groupdata from "../data/group.json";
import useModal from "../hooks/useModal";
import CustomCard from "../components/elements/Card";
import CustomList from "../components/elements/List";
import CustomSelect from "../components/elements/Select";
import CustomModal from "../components/elements/Modal";
import CustomInput from "../components/elements/Input";
import CustomButton from "../components/elements/Button";

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
          <CustomSelect label="그룹명" options={groupdata.select} />
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
          <CustomButton text="그룹생성" onClick={() => openModal("createGroup")} type="default" />
        </div>
        <CustomCard
          title="채널 관리"
          content={
            <Table
              onRow={(record, _rowIndex) => {
                return {
                  onClick: () => {
                    setSelectRow(record);
                    openModal("updateChannel");
                  },
                };
              }}
              columns={channelcolumns as any}
              dataSource={channeldata.table}
              pagination={false}
            />
          }
        />
        <CustomCard
          title="그룹 관리"
          content={<CustomList data={groupdata.list} action={true} isUpdate={() => openModal("updateGroup")} />}
        />
      </div>
      <CustomModal
        isOpen={isOpen("updateChannel")}
        title="채널"
        onOk={() => closeModal("updateChannel")}
        onCancel={() => closeModal("updateChannel")}
        content={
          <div className="flex flex-col justify-start gap-4">
            <CustomSelect label="그룹명" options={groupdata.select} value={selectRow?.group} />
            <CustomInput
              label="이름"
              value={selectRow?.name || ""}
              onChange={(e) => setSelectRow({ ...selectRow, name: e.target.value })}
            />
            <CustomInput
              label="URL"
              value={selectRow?.url || ""}
              onChange={(e) => setSelectRow({ ...selectRow, url: e.target.value })}
            />
            <div className="grid items-center grid-cols-[1fr_4fr] gap-3 text-sm">
              <p>수집여부</p>
              <div className="flex gap-3">
                <CustomButton text="수집" type={selectRow?.flag === "수집" ? "default" : "disabled"} />
                <CustomButton text="중지" type={selectRow?.flag === "중지" ? "default" : "disabled"} />
              </div>
            </div>
          </div>
        }
      />
      <CustomModal
        isOpen={isOpen("createGroup")}
        title="그룹생성"
        onOk={() => closeModal("createGroup")}
        onCancel={() => closeModal("createGroup")}
        content={
          <div className="flex flex-col justify-start gap-4">
            <CustomInput label="그룹명" value={""} onChange={(e) => console.log(e.target.value)} />
          </div>
        }
      />
      <CustomModal
        isOpen={isOpen("updateGroup")}
        title="그룹수정"
        onOk={() => closeModal("updateGroup")}
        onCancel={() => closeModal("updateGroup")}
        content={
          <div className="flex flex-col justify-start gap-4">
            <CustomInput label="그룹명" value={""} onChange={(e) => console.log(e.target.value)} />
          </div>
        }
      />
    </div>
  );
}
export default Manage;
