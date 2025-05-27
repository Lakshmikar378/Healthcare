export default function CalendarView() {
  const calendarData = [
    { day: 25, times: ["10:00", "11:00", "12:00"] },
    { day: 26, times: ["08:00", "09:00", "10:00"] },
    { day: 27, times: ["12:00", "—", "13:00"] },
    { day: 28, times: ["10:00", "13:00", "—"] },
    { day: 29, times: ["—", "14:00", "16:00"] },
    { day: 30, times: ["12:00", "14:00", "15:00"] },
    { day: 31, times: ["10:00", "10:00", "11:00"] }
  ];

  return (
    <div className="calendar-section">
      <h3>October 2021</h3>
      <table className="calendar-table">
        <thead>
          <tr>
            {["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"].map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="days-row">
            {calendarData.map((day) => (
              <td key={day.day}>{day.day}</td>
            ))}
          </tr>
          {[0, 1, 2].map(rowIdx => (
            <tr key={rowIdx}>
              {calendarData.map((day) => (
                <td key={`${day.day}-${rowIdx}`}>
                  {day.times[rowIdx]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}