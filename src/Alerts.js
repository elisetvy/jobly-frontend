// import "./Alerts.css";

/** Component for rendering error messages.
 *
 * Props: alerts
 *
 * State: none
 *
 * Consumes Context: None
 *
 * LoginForm/SignupForm/ProfileForm -> Alerts
 */

function Alerts({ alerts }) {
  const color = alerts[0].type === "success" ? "bg-green-200 text-green-600" : "bg-red-200 text-red-600";

  return (
      <ul className={`Alerts ${color} font-bold rounded-md mt-2 mb-2 py-1`}>
        {Array.isArray(alerts[0].message) &&
          alerts[0].message.map((msg, idx) => (
            <li className="Alerts-message" key={idx}>
              {msg}
            </li>
          ))}
        {!Array.isArray(alerts[0].message) && <p>{alerts[0].message}</p>}
      </ul>
  );
}

export default Alerts;
