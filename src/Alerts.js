import "./Alerts.css";

/** Component for rendering error messages.
 *
 * Props: errors
 *
 * State: none
 *
 * Consumes Context: None
 *
 * LoginForm/SignupForm/ProfileForm -> Alerts
 */

function Alerts({ errors }) {
  // console.log(alerts);
  // return (
  //   <>
  //     <ul className="Alerts">
  //       {alerts.messages.map((msg, idx) => (
  //         <li className="Alerts-message" key={idx}>
  //           {msg}
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );
  return (
    <>
      <ul className="Alerts">
        {Array.isArray(errors[0].message) &&
          errors[0].message.map((msg, idx) => (
            <li className="Alerts-message" key={idx}>
              {msg}
            </li>
          ))}
        {!Array.isArray(errors[0].message) && <p>{errors[0].message}</p>}
      </ul>
    </>
  );
}

export default Alerts;
