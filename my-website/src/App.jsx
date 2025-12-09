import { Route } from 'react-router-dom';
import './App.css';
import './index.css';
import AptitudeComponent from "./Aptitude/aptitude-component";
import GuruHemComponent from './guru-hem/guru-hem-component';
import PositionExampleComponent from './position-example/position-example-component';
import TrustedbyComponent from "./trusted-by/trusted-by-component";
import PropsPracticeTwo from "./props-practice-2/props-practice-2";
import PropsPractice from "./props-practice/props-practice";
import {Routes} from 'react-router-dom';
import FourOFourComponent from "./404-component/404-component";
import UseStateComponent from "./usestate-1st/use-state-component";
import UsestateformComponent from "./use-state-form/use-state-form-component";
import AdditionOperationComponent from "./addition-operation-in-state/addition-operation-component";
import UserSignInComponent from './RegisterForm/RegisterForm';
// NEW REGISTER FORM ROUTE
import RegisterForm from "./RegisterForm/RegisterForm";  // adjust path based on your folder


function App() {
  // const arr1 = [
  //   { name: "sai", mobile: "1234" },
  //   { name: "ragu", mobile: "5678" },
  // ];
  // return (
  //   <div className="app">
  //     {/* <AptitudeComponent /> */}
  //     {/* <GuruHemComponent /> */}
  //     {/* <PositionExampleComponent /> */}
  //     {/* <PropsPractice name="Sai" mobile="14234423243" /> */}
  //     {/* <PropsPracticeTwo data={arr1} /> */}
  //       {/* <TrustedbyComponent /> */}

  //   </div>
  // );
  return (
    <div>
      <Routes>
      <Route path="/" element={<AptitudeComponent/>}/>
      <Route path="/guru-hem" element={<GuruHemComponent/>}/>
      <Route path="/position-example" element={<PositionExampleComponent/>}/>
      <Route path="/trusted-by" element={<TrustedbyComponent/>}/>
      <Route path="/props-practice" element={<PropsPractice/>}/>
      <Route path="/props-practice-2" element={<PropsPracticeTwo/>}/>
      <Route path="*" element={<FourOFourComponent />} />
      <Route path="/use-state-practice" element={<UseStateComponent />} />
      <Route path="/use-state-form" element={<UsestateformComponent />} />
      <Route path="/addition-operation" element={<AdditionOperationComponent />} />
      <Route path="/user-signin" element={<UserSignInComponent />} />
      <Route path="/register" element={<RegisterForm />} />

      </Routes>
    </div>
  );
}

export default App;
