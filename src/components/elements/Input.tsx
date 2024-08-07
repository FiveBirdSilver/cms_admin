interface Input {
  label: string;
  value: string;
}

const CustomInput = (props: Input) => {
  const { label, value } = props;

  return (
    <div className="flex items-center">
      <p className="min-w-12">{label}</p>
      <input value={value} className="py-1 pl-2 border border-gray-300 rounded-md" />
    </div>
  );
};
export default CustomInput;
