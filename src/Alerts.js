/** Component for rendering error messages.
 *
 * Props: errors
 * State: none
 *
 * LoginForm/SignupForm/ProfileForm -> Alerts
 */

function Alerts({ errors }) {
  return (
    <>
    <ul>
    {errors.map(error => <li>{error.message}</li>)}
    </ul>
    </>
  )
}

export default Alerts;