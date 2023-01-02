
function ClassRow(props) {
    const { id, date, start_time, end_time, price, style, level, instructor, studio, handleAddClass, loggedIn, usertype } = props;

    if (loggedIn && usertype == "student") {
        return (
            <React.Fragment>
                <tr key={id}>
                    <td>
                        <span className="date">{date}</span>
                    </td>
                    <td>
                        <span className="start time">{start_time}</span>
                    </td>
                    <td>
                        <span className="end time">{end_time}</span>
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
                            name="add-to-schedule"
                            className="btn btn-sm btn-success d-inline-block"
                            onClick={() => handleAddClass(id)}
                        >
                            Add to Schedule
                        </button>
                    </td>
                </tr>
        </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <tr key={id}>
                    <td>
                        <span className="date">{date}</span>
                    </td>
                    <td>
                        <span className="start time">{start_time}</span>
                    </td>
                    <td>
                        <span className="end time">{end_time}</span>
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
                </tr>
        </React.Fragment>
        );
    }
  }

function AllClasses(props) {
    const { classinstances, addClassToSchedule, loggedIn, usertype } = props;
    const classRows = [];
  
    for (const classinstance of Object.values(classinstances)) {
        
      const classRow = (
        <ClassRow
          id={classinstance.classinst_id}
          date={new Date(classinstance.date).toUTCString().split(' ').slice(0, 4).join(' ')}
          start_time={new Date(classinstance.start_time).toLocaleTimeString("en-US", { timeZone: 'UTC', hour: "2-digit", minute: "2-digit", hour12: true })}
          end_time={new Date(classinstance.end_time).toLocaleTimeString("en-US", { timeZone: 'UTC', hour: "2-digit", minute: "2-digit", hour12: true })}
          price={classinstance.price}
          style={classinstance.style}
          level={classinstance.level}
          instructor={classinstance.instructor}
          studio={classinstance.studio}
          handleAddClass={addClassToSchedule}
          loggedIn={loggedIn}
          usertype={usertype}
        />
      );
        
      classRows.push(classRow);

    }

    return (
      <React.Fragment key={classinstances.id}>
        <h2>Upcoming Classes</h2>
        <div id="class-schedule">
            <div>
                <table className="class">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Price</th>
                            <th>Style</th>
                            <th>Level</th>
                            <th>Instructor</th>
                            <th>Studio</th>
                        </tr>
                    </thead>
                    <tbody>
                    {classRows}
                    </tbody>
                </table>
            </div>
        </div>
      </React.Fragment>
    );
  }

// function Table(props) {

//     const { classinstances, addClassToSchedule, loggedIn } = props;

//     const [tableData, setTableData] = React.useState(Object.values(classinstances));
   
//     const columns = [
//      { label: "Date", accessor: "date" },
//      { label: "Start Time", accessor: "start_time" },
//      { label: "End Time", accessor: "end_time" },
//      { label: "Price", accessor: "price" },
//      { label: "Style", accessor: "style" },
//      { label: "Level", accessor: "level" },
//      { label: "Instructor", accessor: "instructor" },
//      { label: "Studio", accessor: "studio" },
//     ];
   
//     return (
//      <>
//       <table className="table">
//        <TableHead columns={columns} />
//        <TableBody columns={columns} tableData={tableData} />
//       </table>
//      </>
//     );
//    };

// const TableHead = ({ columns }) => {
//     return (
//      <thead>
//       <tr>
//        {columns.map(({ label, accessor }) => {
//         return <th key={accessor}>{label}</th>;
//        })}
//       </tr>
//      </thead>
//     );
//    };

// const TableBody = ({ tableData, columns }) => {
//     return (
//      <tbody>
//       {tableData.map((data) => {
//        return (
//         <tr key={data.id}>
//          {columns.map(({ accessor }) => {
//           const tData = data[accessor] ? data[accessor] : "——";
//           return <td key={accessor}>{tData}</td>;
//          })}
//         </tr>
//        );
//       })}
//      </tbody>
//     );
//    };

//   function AllUsers(props) {
//     const { users, setUsers } = props;
//     const allUsers = [];
  
//     for (const user of Object.values(users)) {
//       const userRow = (
//         <UserRow
//           id={user.user_id}
//           fname={user.fname}
//           lname={user.lname}
//           email={user.email}
//         />
//       );
  
//       allUsers.push(userRow);
//     }
  
//     return (
//       <React.Fragment key={users.id}>
//         <h2>Users</h2>
//         <div id="users">
//             <div>
//                 <table className="users">
//                     <thead>
//                         <tr>
//                             <th>First Name</th>
//                             <th>Last Name</th>
//                             <th>Email</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {allUsers}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//       </React.Fragment>
//     );
//   }


//   function UserRow(props) {
//     const { id, fname, lname, email } = props;

//     return (
//         <React.Fragment>
//             <tr key={id}>
//                 <td>
//                     <span className="fname">{fname}</span>
//                 </td>
//                 <td>
//                     <span className="lname">{lname}</span>
//                 </td>
//                 <td>
//                     <span className="email">{email}</span>
//                 </td>
//             </tr>
//       </React.Fragment>
//     );
//   }


function Schedule(props) {
    const { user, schedule, setSchedule, classinstances, removeClassFromSchedule } = props;
    const tableData = [];

    // Student Schedule

    const onClick = (classinst_id) => {
        removeClassFromSchedule(classinst_id);
        fetchSchedule();
    }
    const fetchSchedule = () => {
        fetch(`/api/${user.id}`)
        .then((response) => response.json())
        .then((result) => {
        const classes = Object.values(result);
        classes.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)
        });
        setSchedule(classes);
        });
    }

    React.useEffect(() => {
        fetchSchedule();
    }, []);

    for (const classinst_id in schedule) {

        const newClass = schedule[Number(classinst_id)];

        tableData.push(
        <tr key={classinst_id}>
            <td>{newClass.date}</td>
            {/* <td>${melonCost.toFixed(2)}</td> */}
            <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-success d-inline-block"
                        onClick={() => onClick(newClass.classinst_id)}
                    >
                        Remove
                    </button>
                </td>
        </tr>,
        );
    }

    // Studio Schedule

    const [classtype, setClasstype] = React.useState("");
    const [startDate, setStartDate] = React.useState("");
    const [endDate, setEndDate] = React.useState("");
    const [startTime, setStartTime] = React.useState("");
    const [endTime, setEndTime] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [style, setStyle] = React.useState("");
    const [level, setLevel] = React.useState("");
    const [instructor, setInstructor] = React.useState("");
    const [studioSchedule, setStudioSchedule] = React.useState("");

    const current = new Date();
    const today = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`

    const classOptions = ["Choose below", "One-Time", "Weekly"];
    const styleOptions = ["Choose below", "FOUNDATIONS", "HIPHOP", "KPOP"];
    const levelOptions = ["Choose below", 
                            "BEGINNER", "INTERMEDIATE", "ADVANCED",
                            "MASTER", "ALL"];
    
    const studioData = [];

    const onStudioClick = (classinst_id) => {
        removeStudioClass(classinst_id);
        location.reload();
        fetchStudioSchedule();
    }
    const fetchStudioSchedule = () => {
        fetch(`/api/studio/${user.id}`)
        .then((response) => response.json())
        .then((result) => {
          const classes = Object.values(result);
          classes.sort(function(a,b){
            return new Date(a.date) - new Date(b.date)
          });
          setStudioSchedule(classes);
        });
    }
    function removeStudioClass(classId) {
        fetch(`/studio/${user.id}/${classId}`, {
            method: "POST",
            headers: {                
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                user_id: user.id,
                class_id: classId
            }),
        });
    }

    React.useEffect(() => {
        fetchStudioSchedule();
    }, []);

    for (const classinst_id in studioSchedule) {

        const newStudioClass = studioSchedule[Number(classinst_id)];

        studioData.push(
        <tr key={classinst_id}>
            <td>{newStudioClass.date}</td>
            {/* <td>${melonCost.toFixed(2)}</td> */}
            <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-success d-inline-block"
                        onClick={() => onStudioClick(newStudioClass.classinst_id)}
                    >
                        Remove
                    </button>
                </td>
        </tr>
        );
    }

    function setDate(date) {
        setStartDate(date);
        setEndDate(date);
    }

    function addClassInstanceToSchedule() {

        let addClassInstance = fetch(`/studio/${user.id}`, {
            method: "POST",
            headers: {                
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                user_id: user.id,
                start_date: startDate,
                end_date: endDate,
                start_time: startTime, 
                end_time: endTime, 
                price: price, 
                style: style, 
                level: level, 
                instructor: instructor, 
                sname: user.sname
            }),
            
        });
    }

    if (user.usertype === "student"){
        return (
            <React.Fragment>
            <h1>My Schedule</h1>
            <div className="col-6">
                <table className="table">
                <thead>
                    <tr>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>{tableData}</tbody>
                </table>
                {/* <p className="lead">Total: ${totalCost.toFixed(2)}</p> */}
            </div>
            </React.Fragment>
        );
    } else if (user.usertype === "studio") {
        return (
            <React.Fragment>
                <form onSubmit={addClassInstanceToSchedule}>
                    <h3>{user.sname}</h3>
                    <h1>Schedule</h1>
                    <div>
                        <label>
                            Please select the type of class you'd like to submit:
                            <select 
                                id="classtypes" 
                                value={classtype} 
                                required={true} 
                                onChange={(evt) => setClasstype(evt.target.value)}
                                >
                                {classOptions.map((value) => (
                                <option value={value} key={value}>
                                    {value}
                                </option>
                                ))}
                            </select>
                        </label>
                        <label hidden={ classtype !== 'One-Time' ? true : false }>
                            Date:
                            <input type="date" min={today} 
                                    id="date"
                                    name="date" 
                                    hidden={ classtype !== 'One-Time' ? true : false } 
                                    required={ classtype === 'One-Time' ? true : false }
                                    onChange={(evt) => setDate(evt.target.value)} />
                        </label>
                        <label hidden={ classtype !== 'Weekly' ? true : false }>
                            Start Date:
                            <input type="date" min={today} 
                                    id="start_date" 
                                    name="start_date" 
                                    hidden={ classtype !== 'Weekly' ? true : false } 
                                    required={ classtype === 'Weekly' ? true : false }
                                    onChange={(evt) => setStartDate(evt.target.value)} />
                        </label>
                        <label hidden={ classtype !== 'Weekly' ? true : false }>
                            End Date:
                            <input type="date" min={today} 
                                    id="end_date" 
                                    name="end_date" 
                                    hidden={ classtype !== 'Weekly' ? true : false } 
                                    required={ classtype === 'Weekly' ? true : false }
                                    onChange={(evt) => setEndDate(evt.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Start Time:
                            <input type="time"
                                    id="start_time"
                                    value={startTime}
                                    required={true}
                                    onChange={(evt) => setStartTime(evt.target.value)} />
                        </label>
                        <label>
                            End Time:
                            <input type="time"
                                    id="end_time"
                                    value={endTime}
                                    required={true}
                                    onChange={(evt) => setEndTime(evt.target.value)} />
                        </label>
                        <label>
                            Price: $
                            <input type="number" min="1" step="1" placeholder="0.00"
                                    id="price"
                                    value={price}
                                    required={true}
                                    onChange={(evt) => setPrice(evt.target.value)} />
                        </label>
                        <label>
                            Style:
                            <select 
                                id="style" 
                                value={style} 
                                required={true} 
                                onChange={(evt) => setStyle(evt.target.value)}
                                >
                                {styleOptions.map((value) => (
                                <option value={value} key={value}>
                                    {value}
                                </option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Level:
                            <select 
                                id="level" 
                                value={level} 
                                required={true} 
                                onChange={(evt) => setLevel(evt.target.value)}
                                >
                                {levelOptions.map((value) => (
                                <option value={value} key={value}>
                                    {value}
                                </option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Instructor:
                            <input type="text"
                            id="instructor" 
                            value={instructor} 
                            required={true} 
                            onChange={(evt) => setInstructor(evt.target.value)}
                            />
                        </label>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            <div>
                <table className="table">
                <thead>
                    <tr>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {studioData}
                </tbody>
                </table>
            </div>
            </React.Fragment>
        );
    }

    
}


function Navbar({loggedIn, handleLogOut}) {

  if (loggedIn){
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
    
            {/* <h4>
            <ReactRouterDOM.NavLink
              to="/all-users"
              activeClassName="navlink-active"
              className="nav-link"
            >
              All Users (Testing)
            </ReactRouterDOM.NavLink>
            </h4> */}
            <h4>
            <ReactRouterDOM.NavLink
              to="/schedule"
              activeClassName="navlink-active"
              className="nav-link"
            >
              Schedule
            </ReactRouterDOM.NavLink>
            </h4>

            <h4>
            <ReactRouterDOM.NavLink
              to="/"
              onClick={handleLogOut}
              activeClassName="navlink-active"
              className="nav-link"
            >
              Log Out
            </ReactRouterDOM.NavLink>
            </h4>
            
          </section>
        </nav>
    );
  } else {

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

            {/* <h4>
            <ReactRouterDOM.NavLink
            to="/all-users"
            activeClassName="navlink-active"
            className="nav-link"
            >
            All Users (Testing)
            </ReactRouterDOM.NavLink>
            </h4> */}

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
}

function Login({handleLogin, setEmail, setPassword}) {

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });

    

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h4>
                    Login
                </h4>
                <label>
                Email:
                <input type="text" id="email" name="email" onChange={setEmail} />
                </label>
                <label>
                    Password:
                    <input type={values.showPassword ? "text" : "password"} id="password" name="password" onChange={setPassword} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <ReactRouterDOM.Link to='/create'>Create A New Account</ReactRouterDOM.Link>
        </div>
    );
}

function CreateAccount(props) {
    const [fname, setFName] = React.useState("");
    const [lname, setLName] = React.useState("");
    const [usertype, setUsertype] = React.useState("");
    const [sname, setSName] = React.useState("");
    const [website, setWebsite] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });

    const options = ["Choose below", "student", "studio"];

    let handleSubmit = async (evt) => {
        evt.preventDefault();

        let newUser = await fetch("/create", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                fname: fname,
                lname: lname,
                usertype: usertype,
                sname: sname,
                website: website,
                email: email,
                password: password,
            }),
        });

        if(newUser.status===200){
            alert("Congratulations, your account has been created and you can now login!");
            location.reload();

        } else if (newUser.status===401) {
            alert("Sorry, that email is already being used. Please try again with a different email.");
            location.reload();

        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <h4>
                Create Account
            </h4>
            <label>
                Account Type:
                <select 
                    id="usertypes" 
                    value={usertype} 
                    required={true} 
                    onChange={(evt) => setUsertype(evt.target.value)}>
                    {options.map((value) => (
                    <option value={value} key={value}>
                        {value}
                    </option>
                    ))}
                </select>
            </label>
            <label hidden={ usertype !== 'student' ? true : false }>
                First Name:
                <input type="text"  
                    id="fname" 
                    name="fname" 
                    hidden={ usertype !== 'student' ? true : false } 
                    required={ usertype === 'student' ? true : false } 
                    onChange={(evt) => setFName(evt.target.value)} />
            </label>
            <label hidden={ usertype !== 'student' ? true : false }>
                Last Name:
                <input type="text" 
                    id="lname" 
                    name="lname" 
                    hidden={ usertype !== 'student' ? true : false } 
                    required={ usertype === 'student' ? true : false } 
                    onChange={(evt) => setLName(evt.target.value)}  />
            </label>
            <label hidden={ usertype !== 'studio' ? true : false }>
                Studio Name:
                <input type="text" 
                    id="sname" 
                    name="sname" 
                    hidden={ usertype !== 'studio' ? true : false } 
                    required={ usertype === 'studio' ? true : false } 
                    onChange={(evt) => setSName(evt.target.value)}  />
            </label>
            <label hidden={ usertype !== 'studio' ? true : false }>
                Studio Website:
                <input type="text"
                    id="website"
                    name="website" 
                    hidden={ usertype !== 'studio' ? true : false } 
                    required={ usertype === 'studio' ? true : false } 
                    onChange={(evt) => setWebsite(evt.target.value)}  />
            </label>
            <label>
                Email:
                <input type="text" 
                    id="email" 
                    name="email" 
                    required={true} 
                    onChange={(evt) => setEmail(evt.target.value)} />
            </label>
            <label>
                Password:
                <input type={values.showPassword ? "text" : "password"} 
                    id="password" 
                    name="password" 
                    required={true} 
                    onChange={(evt) => setPassword(evt.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>

    )
    
}