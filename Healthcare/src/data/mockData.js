import { 
  FaTh, FaHistory, FaCalendarAlt, FaRegCalendarCheck,
  FaChartBar, FaWrench, FaCommentDots, FaLifeRing 
} from "react-icons/fa";

export const navItems = [
  { 
    name: "Dashboard", 
    icon: "FaTh" 
  },
  { 
    name: "History", 
    icon: "FaHistory" 
  },
  { 
    name: "Calendar", 
    icon: "FaCalendarAlt" 
  },
  { 
    name: "Appointments", 
    icon: "FaRegCalendarCheck" 
  },
  { 
    name: "Statistics", 
    icon: "FaChartBar" 
  },
  { 
    name: "Tools", 
    icon: "FaWrench" 
  },
  { 
    name: "Chat", 
    icon: "FaCommentDots" 
  },
  { 
    name: "Support", 
    icon: "FaLifeRing" 
  }
];

export const activities = [
  { title: "Healthy Heart", date: "26 Oct 2021" },
  { title: "Healthy Log", date: "26 Oct 2021" },
  { title: "Bone", date: "26 Oct 2021" }
];

// In src/data/mockData.js
export const schedule = [
  { day: "Thursday", appointments: [
    { title: "Health checkup complete", time: "11:00 AM" },
    { title: "Ophthalmologist", time: "14:00 PM" }
  ]},
  { day: "Saturday", appointments: [
    { title: "Cardiologist", time: "12:00 AM" },
    { title: "Neurologist", time: "16:00 PM" }
  ]}
];