interface ButtonProps {
  text: string;
  type: "default" | "error" | "disabled";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = (props: ButtonProps) => {
  const { text, type, onClick } = props;

  const buttonColor = type === "default" ? "bg-main_color" : type === "error" ? "bg-red-500" : "bg-gray-300";

  return (
    <button className={`px-3 text-xs text-white rounded-md ${buttonColor} min-h-7`} onClick={onClick}>
      {text}
    </button>
  );
};
export default CustomButton;
