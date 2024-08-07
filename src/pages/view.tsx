import CustomSelect from "../components/elements/Select";
import CustomDatepicker from "../components/elements/Datepicker";

import { logdata } from "../data/errorLog";
import { countdata } from "../data/dataCount";
import { channelSelect } from "../data/channel";

import CustomCard from "../components/elements/Card";
import CustomList from "../components/elements/List";

function View() {
  return (
    <div className="flex flex-col w-full gap-8 sm:px-5 md:px-5">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[6fr_4fr] xl:grid-cols-[6fr_4fr]">
        <div className="flex gap-6">
          <CustomSelect label="채널명" options={channelSelect} />
          <CustomDatepicker />
        </div>
        <div></div>
        <CustomCard title="수집 오류" content={<CustomList data={logdata} />} />
        <CustomCard title="수집 개수" content={<CustomList data={countdata} />} />
      </div>
    </div>
  );
}
export default View;
