function App() {
    let [classinstances, setClass] = React.useState({});
    // const [users, setUsers] = React.useState({});
    let [schedule, setSchedule] = React.useState({});

    let [user, setUser] = React.useState({id:"",
                                            fname:"",
                                            lname:"",
                                            email:"",
                                            password:""});
    let [loggedIn, setLoggedIn] = React.useState(false);


    // Fetch all class instances from rest API
    React.useEffect(() => {
      fetch("/api/classinstances")
        .then((response) => response.json())
        .then((classData) => {
          setClass(classData);
        });
    }, []);

    // React.useEffect(() => {
    //     fetch("/api/users")
    //     .then((response) => response.json())
    //     .then((userData) => {
    //       setUsers(userData);
    //     });
    // }, []);


    // Login & Logout
    let handleLogin = async (evt) => {
        evt.preventDefault();

        let checkUser = await fetch("/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                email: user.email,
                password: user.password
            }),
        });

        if(checkUser.status===200){
            
            let userData = await fetch("/login", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    email: user.email,
                    password: user.password
                }),
            })
            .then((response) => response.json())
            .then((result) => setUser({id: result.id,
                                        fname: result.fname,
                                        lname: result.lname,
                                        email: result.email,
                                        password: result.password
            }));

            setLoggedIn(true);
            localStorage.setItem("isLoggedIn", true);

        } else if (checkUser.status===401){
            alert(checkUser.statusText);
        }
    };


    let handleLogOut = (evt) => {
        evt.preventDefault();
        setLoggedIn(false);
        // localStorage.clear();
        localStorage.setItem("isLoggedIn", false);
        setUser({id: "",
                fname:"",
                lname:"",
                email:"",
                password:""});
    };

    React.useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        setLoggedIn(isLoggedIn);
    }, []);


    // Save schedule sessions
    // React.useEffect(() => {
    //     const previousSchedule = localStorage.getItem('schedule');
    //     if (previousSchedule) {
    //     setSchedule(JSON.parse(previousSchedule));
    //     }
    // }, []);

    
    // React.useEffect(() => {
    //     localStorage.setItem('schedule', JSON.stringify(schedule));
    // }, [schedule]);


    // Add to / Remove from schedule

    function addClassToSchedule(classId) {

        let addClass = fetch(`/${user.id}`, {
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

        if (addClass.status===401){
            alert(addClass.statusText);
        }
    }


    function removeClassFromSchedule(classId) {

        setSchedule((currentSchedule) => {
            const newSchedule = { ...currentSchedule };
            delete newSchedule.classId;
            return newSchedule;
        });
    }
   
    
    // React.useEffect(() => {
    //     getSchedule()
    // }, []);
    
    // function getSchedule() {
    //     fetch(`/api/${user.id}`)
    //         .then((response) => response.json())
    //         .then((result) => {
    //             setSchedule(result);
    //         });
    // }
    
  
    return (
      <ReactRouterDOM.BrowserRouter>
        <div className="container-fluid">

          <Navbar loggedIn={loggedIn} handleLogOut={handleLogOut} />

          <ReactRouterDOM.Route exact path="/">
            <AllClasses classinstances={classinstances} 
                addClassToSchedule={addClassToSchedule} 
                loggedIn={loggedIn} />
          </ReactRouterDOM.Route>

          {/* <ReactRouterDOM.Route exact path="/all-users">
            <AllUsers users={users} />
          </ReactRouterDOM.Route> */}

          <ReactRouterDOM.Route exact path="/login">
          {loggedIn ? <ReactRouterDOM.Redirect to='/schedule' />:
            <Login handleLogin={handleLogin}
            setEmail={(evt) => setUser({ ...user, email: evt.target.value })}
            setPassword={(evt) => setUser({ ...user, password: evt.target.value })} />}
          </ReactRouterDOM.Route>

          <ReactRouterDOM.Route exact path="/create">
            <CreateAccount />
          </ReactRouterDOM.Route>

          <ReactRouterDOM.Route exact path="/schedule">
          {loggedIn ? <Schedule user={user}
                schedule={schedule}
                setSchedule={setSchedule}
                classinstances={classinstances} 
                removeClassFromSchedule={removeClassFromSchedule} />:
            <ReactRouterDOM.Redirect to='/' />}
          </ReactRouterDOM.Route>

        </div>
      </ReactRouterDOM.BrowserRouter>
    );
  }
  
  ReactDOM.render(<App />, document.querySelector('#class-schedule'));


