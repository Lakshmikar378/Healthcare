import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import dash from "../../assets/dashboard.png";
import act from "../../assets/activity.png";

export default function DashboardMain() {
  return (
    <div className="dashboard-main">
      <div className="left-column">
        <h1>Dashboard</h1>
        <img src={dash} alt="dashboard"></img>
        <img src={act} alt="acitivity" />
      </div>
      <div className="right-column">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
}