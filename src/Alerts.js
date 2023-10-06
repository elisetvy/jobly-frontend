import "./Alerts.css";

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
  const color = alerts[0].type === "success" ? "Alerts-success" : "Alerts-error";

  return (
      <ul className={`Alerts ${color}`}>
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
