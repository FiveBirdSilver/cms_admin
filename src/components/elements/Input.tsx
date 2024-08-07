interface InputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = (props: InputProps) => {
  const { label, value, onChange } = props;

  return (
    <div className="grid items-center grid-cols-[1fr_4fr] gap-3 text-sm">
      <p>{label}</p>
      <input
        value={value}
        onChange={onChange}
        className="py-1 pl-2 border border-gray-300 rounded-md outline-none max-w-40"
      />
    </div>
  );
};
export default CustomInput;
