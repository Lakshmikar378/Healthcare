// src/components/Shared/SimpleAppointmentCard.jsx
import { FaRegCalendarCheck } from "react-icons/fa";

export default function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="appointment-card">
      <div className="card-icon">
        <FaRegCalendarCheck />
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
    </div>
  );
}