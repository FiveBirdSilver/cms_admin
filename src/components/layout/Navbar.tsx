import { ReactNode, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Menu, MenuProps } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
type MenuItem = Required<MenuProps>["items"][number];

const Navbar = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [current, setCurrent] = useState<string>(location.pathname);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  const items: MenuItem[] = [
    {
      label: "데이터 관리",
      key: "/view",
      icon: <AppstoreOutlined />,
    },
    {
      label: "채널 관리",
      key: "/manage",
      icon: <SettingOutlined />,
    },
  ];
  return (
    <div className="w-full h-screen">
      <div className="fixed top-0 z-50 w-full h-16 bg-white border-b border-gray-100">
        <div className="flex items-center py-2 mx-auto my-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl font-PretendardM">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="font-PretendardR"
          />
        </div>
      </div>
      <div className="flex w-full h-full py-2 pt-24 pb-12 mx-auto my-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        {children}
      </div>
    </div>
  );
};

export default Navbar;
