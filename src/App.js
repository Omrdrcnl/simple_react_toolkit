import { useDispatch, useSelector } from "react-redux";
import UserShow from "./components/User_show";

import { setFirstname, setLastname, setAge } from "./redux/userSlice";

function App() {
  //const authState = useSelector(state => state.auth)
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(">> APP USER STATE", userState);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <label className="form-label">İsim</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => dispatch(setFirstname(event.target.value))}
                placeholder="Lütfen isminizi yazın"
              />
            </div>

            <div className="col-12 mt-3">
              <label className="form-label">Soyisim</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => dispatch(setLastname(event.target.value))}
                placeholder="Lütfen soyisminizi yazın"
              />
            </div>

            <div className="col-12 mt-3">
              <label className="form-label">Yaş</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => dispatch(setAge(event.target.value))}
                placeholder="Lütfen yaşınızı yazın"
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <UserShow />
        </div>

        <div className="col-6">
          İsim: {userState.firstname}
          <br />
          Soyisim: {userState.lastname}
          <br />
          Yaş: {userState.age}
        </div>
      </div>
    </div>
  );
}

export default App;
