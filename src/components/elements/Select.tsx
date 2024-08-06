import { Select } from "antd";

interface Select {
  label: string;
  options: {
    value: string;
    label: string;
  }[];
}

const CustomSelect = (props: Select) => {
  const { label, options } = props;
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="flex items-baseline justify-center gap-3 text-sm">
      <p>{label}</p>
      <Select style={{ width: 150 }} defaultValue={"전체"} onChange={handleChange} options={options} />
    </div>
  );
};
export default CustomSelect;
