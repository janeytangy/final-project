// import { format, utcToZonedTime } from 'date-fns'

function ClassRow(props) {
    const { id, date, start_time, end_time, price, style, level, instructor, studio, addToSchedule } = props;

    return (
        <React.Fragment>
        <div className="class table">
            <table className="class">
                <tbody>
                    <tr>
                        <td>
                            <span className="date">{date}</span>
                        </td>
                        <td>
                            <span className="start time">{start_time}</span>
                        </td>
                        <td>
                            <span className="end time">{new Date(end_time).getHours()}:{new Date(end_time).getMinutes(2)}</span>
                        </td>
                        <td>
                            <span className="price">${price.toFixed(2)}</span>
                        </td>
                        <td>
                            <span className="style">{style}</span>
                        </td>
                        <td>
                            <span className="level">{level}</span>
                        </td>
                        <td>
                            <span className="instructor">{instructor}</span>
                        </td>
                        <td>
                            <span className="studio">{studio}</span>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-sm btn-success d-inline-block"
                                onClick={() => addToSchedule(id)}
                            >
                                Add to Schedule
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

      </React.Fragment>
    );
  }

function AllClasses(props) {
    const { classinstances, addClassToSchedule } = props;
    const classRows = [];
  
    for (const classinstance of Object.values(classinstances)) {
      const classRow = (
        <ClassRow
          id={classinstance.classinst_id}
          date={new Date(classinstance.date).toDateString()}
          start_time={classinstance.start_time}
          end_time={classinstance.end_time}
          price={classinstance.price}
          style={classinstance.style}
          level={classinstance.level}
          instructor={classinstance.instructor}
          studio={classinstance.studio}
          addToSchedule={addClassToSchedule}
        />
      );
  
      classRows.push(classRow);
    }
  
    return (
      <React.Fragment key={classinstances.id}>
        <h2>Upcoming Classes</h2>
        <div id="class-schedule">
            <div>{classRows}
            </div>
        </div>
      </React.Fragment>
    );
  }


function Navbar(props) {

  return (
    <nav>
      <section>
        <h4>
        <ReactRouterDOM.NavLink
          to="/"
          activeClassName="navlink-active"
          className="nav-link"
        >
          Home
        </ReactRouterDOM.NavLink>
        </h4>
        <h4>
        <ReactRouterDOM.NavLink
          to="/login"
          activeClassName="navlink-active"
          className="nav-link"
        >
          Sign Up / Login
        </ReactRouterDOM.NavLink>
        </h4>
      </section>
    </nav>
  );
}


function UserInfo(props) {
    const { email, password} = props;
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });

    return (
        <form>
            <label>
                Email:
                <input type="text" name="email" />
            </label>
            <label>
                Password:
                <input type={values.showPassword ? "text" : "password"} name="password" />
            </label>
        </form>
    )
}


function Login(props) {

    return (
        <div>
            <form>
                <label>
                    Login
                </label>
                <input type="submit" value="Submit" />
            </form>
            {/* <Link to='/create'>Create A New Account</Link> */}
        </div>
    )
    
}

function CreateAccount(props) {

    return (
        <form>
            <label>
                Create Account
            </label>
            <label>
                First Name:
                <input type="text" name="first-name" />
            </label>
            <label>
                Last Name:
                <input type="text" name="last-name" />
            </label>
            <label>
                Account Type:
                <select>
                    <option selected value="student">Student</option>
                    <option value="instructor">Instructor</option>
                    <option value="studio">Studio</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>

    )
    
}