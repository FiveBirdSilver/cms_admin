import { Select } from "antd";

interface Select {
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  value?: string;
  defaultValue?: string;
}

const CustomSelect = (props: Select) => {
  const { label, options, value, defaultValue } = props;

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="grid items-center grid-cols-[1fr_4fr] gap-3 text-sm">
      <p className="text-center">{label}</p>
      <Select
        style={{ width: 160 }}
        defaultValue={defaultValue}
        value={value}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};
export default CustomSelect;
