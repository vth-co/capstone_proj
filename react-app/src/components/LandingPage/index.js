import LoginForm from "../auth/LoginModal/LoginForm";
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="h1-loginform-container">
      <h1 className="sentence" >Organize it all with Taskless</h1>
      <div className="landing-page-login-form">
      <LoginForm />
      </div>
      </div>
      <div className="landing-page-image-container">
        <img src="../../../static/landingPage.jpg" alt=""></img>
      </div>
    </div>
  );
};

export default LandingPage;
