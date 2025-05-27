// src/components/DashboardMain/UpcomingSchedule.jsx
import { schedule } from "../../data/mockData";
import SimpleAppointmentCard from "../Shared/SimpleAppointmentCard";  // <-- ADD THIS IMPORT

export default function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {schedule.map(({ day, appointments }) => (
        <div key={day} className="schedule-day">
          <h4>On {day}</h4>
          {/* Add cards for each appointment */}
          {appointments.map((appointment) => (
            <SimpleAppointmentCard  // <-- USE HERE
              key={appointment.title}
              title={appointment.title}
              time={appointment.time}
            />
          ))}
        </div>
      ))}
    </div>
  );
}