import { navItems } from "../../data/mockData"; // Correct import path
import { 
  FaTh, FaHistory, FaCalendarAlt, FaRegCalendarCheck,
  FaChartBar, FaWrench, FaCommentDots, FaLifeRing 
} from "react-icons/fa";

const iconMap = {
  FaTh: FaTh,
  FaHistory: FaHistory,
  FaCalendarAlt: FaCalendarAlt,
  FaRegCalendarCheck: FaRegCalendarCheck,
  FaChartBar: FaChartBar,
  FaWrench: FaWrench,
  FaCommentDots: FaCommentDots,
  FaLifeRing: FaLifeRing
};

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h3>General</h3>
      <ul>
        {navItems.map((item) => {
          const IconComponent = iconMap[item.icon];
          return (
            <li key={item.name}>
              {IconComponent && <IconComponent className="nav-icon" />}
              {item.name}
            </li>
          );
        })}
      </ul>
      <h3 id="settings">Settings</h3>
    </nav>
  );
}