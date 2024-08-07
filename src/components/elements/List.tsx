import { List } from "antd";

interface DataType {
  key: number;
  name: string;
  content?: string;
  count?: number;
}

interface List {
  data: DataType[];
  action?: boolean;
  isUpdate?: () => void;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const CustomList = (props: List) => {
  const { data, action, isUpdate, setState } = props;

  const hadleOnClick = (item: string) => {
    isUpdate;
    setState(item);
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item: DataType, _index) => (
        <List.Item key={item.key}>
          <List.Item.Meta title={item.name} description={item?.content || ""} />
          {item.count && <div>{item.count}</div>}
          {action && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <a onClick={(e) => hadleOnClick(item.name)}>수정</a>
              <span>|</span>
              <a>삭제</a>
            </div>
          )}
        </List.Item>
      )}
    />
  );
};
export default CustomList;
