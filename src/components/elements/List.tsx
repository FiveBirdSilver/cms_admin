import { List } from "antd";

interface DataType {
  id: number;
  name: string;
  content?: string;
  count?: number;
}
interface GroupType {
  id: number;
  name: string;
  type: "update" | "delete";
}

interface ListType {
  data: DataType[];
  action?: boolean;
  isUpdate?: () => void;
  setState?: React.Dispatch<React.SetStateAction<GroupType>>;
}

const CustomList = (props: ListType) => {
  const { data, action, isUpdate, setState } = props;

  const hadleOnUpdate = ({ id, name, type }: GroupType) => {
    isUpdate();
    setState({ id: id, name: name, type: type });
  };

  const hadleOnDelete = ({ id, name, type }: GroupType) => {
    setState({ id: id, name: name, type: type });
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item: DataType, _index) => (
        <List.Item key={item.id}>
          <List.Item.Meta title={item.name} description={item?.content || ""} />
          {item.count && <div>{item.count}</div>}
          {action && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <a onClick={() => hadleOnUpdate({ id: item.id, name: item.name, type: "update" })}>수정</a>
              <span>|</span>
              <a onClick={() => hadleOnDelete({ id: item.id, name: item.name, type: "delete" })}>삭제</a>
            </div>
          )}
        </List.Item>
      )}
    />
  );
};
export default CustomList;
