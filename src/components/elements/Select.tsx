import { Select } from "antd";

interface Select {
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  value?: string;
}

const CustomSelect = (props: Select) => {
  const { label, options, value } = props;

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="grid items-center grid-cols-[1fr_4fr] gap-3 text-sm">
      <p>{label}</p>
      <Select style={{ width: 160 }} defaultValue={"전체"} value={value} onChange={handleChange} options={options} />
    </div>
  );
};
export default CustomSelect;
