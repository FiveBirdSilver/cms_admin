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
    <div className="flex items-baseline gap-3 text-sm">
      <p className="min-w-9">{label}</p>
      <Select style={{ width: 150 }} defaultValue={"전체"} value={value} onChange={handleChange} options={options} />
    </div>
  );
};
export default CustomSelect;
