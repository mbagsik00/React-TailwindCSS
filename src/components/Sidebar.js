import { FaBeer, FaDribbble, FaDev, FaTheRedYeti } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<FaBeer size={24} />} />
      <SideBarIcon icon={<FaDribbble size={24} />} />
      <SideBarIcon icon={<FaDev size={24} />} />
      <SideBarIcon icon={<FaTheRedYeti size={24} />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'Tooltip text' }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default Sidebar;
