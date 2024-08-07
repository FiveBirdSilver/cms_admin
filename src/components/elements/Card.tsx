interface Card {
  title: string;
  content: React.ReactNode;
}

const CustomCard = (props: Card) => {
  const { title, content } = props;

  return (
    <div className="bg-white rounded-lg min-h-main_box">
      <p className="p-4 font-bold">{title}</p>
      {content}
    </div>
  );
};
export default CustomCard;
