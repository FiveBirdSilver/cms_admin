import { List } from "antd";

interface DataType {
  key: number;
  name: string;
  content?: string;
  count?: number;
  update?: string;
}

interface List {
  data: DataType[];
}

const CustomList = (props: List) => {
  const { data } = props;

  console.log(data);
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item: DataType, _index) => (
        <List.Item
          key={item.key}
          actions={item.update ? [<a key="list-loadmore-edit">수정</a>, <a key="list-loadmore-more">삭제</a>] : []}
        >
          <List.Item.Meta title={item.name} description={item?.content || ""} />
          {item.count && <div>{item.count}</div>}
        </List.Item>
      )}
    />
  );
};
export default CustomList;
