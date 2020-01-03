import "../../css/resume.css";

const ResumePage = () => {
  return (
    <div className="resume-container">
      <div className="resume">
        <p>Click to download my <a href="/resume.pdf" target="_blank">resume </a> for the full experience</p>
        <img 
          src="/sebatMohamedResume.png" 
          alt="picture of sebat's resume"
          style={{width: '80%'}}
          className="resume-pic" 
        />
      </div>
    </div>
  );
};

export default ResumePage;
