import "./App.css";
import GrandPa from "./components/GrandPa/GrandPa";
// import ReusableForm from "./components/ReusableForm/ReusableForm";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import StatefulForm from "./components/StatefulForm/StatefulForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("Sign Up Data", data);
  // };

  // const handleUpdateProfileSubmit = (data) => {
  //   console.log("Update Data", data);
  // };

  return (
    <>
      <h1>Form Master</h1>
      <GrandPa />
      {/* <SimpleForm /> */}
      {/* <StatefulForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      {/* <ReusableForm formTitle="Sign UP" handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up right now</p>
        </div>
      </ReusableForm>

      <ReusableForm
        formTitle="Profile Update"
        submitBtnText="Update"
        handleSubmit={handleUpdateProfileSubmit}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Please keep your profile updated</p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
