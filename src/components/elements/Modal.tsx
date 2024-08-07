import { Modal } from "antd";

interface Modal {
  title: string;
  isOpen: boolean;
  onOk: () => void;
  onCancel: () => void;
  content: React.ReactNode;
}

const CustomModal = (props: Modal) => {
  const { title, content, isOpen, onOk, onCancel } = props;
  return (
    <Modal title={title} open={isOpen} onOk={onOk} onCancel={onCancel}>
      {content}
    </Modal>
  );
};
export default CustomModal;
