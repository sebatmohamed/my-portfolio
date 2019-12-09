import '../../css/home.css';
import Typewriter from 'typewriter-effect';


const background = {
    top: "50%",
    left: "50%",
    filter: "blur(16px)",
    overflow: "hidden",
    position: "fixed",
    minWidth: "110%",
    transform: "translateX(-50%) translateY(-50%)",
    minHeight: "110%",
    zIndex: -1
}

function Main() {
    return(
        <div className="main">

            <div className="container">

                <div className="text">
                    <div className="major">Welcome! My name is Sebat Mohamed</div>
                    <Typewriter
                        options={{
                        strings: ["Web Developer", "Lifelong Learner", "React Lover", "HTML & CSS expert", "Front-end Developer"],
                        autoStart: true,
                        loop: true,
                        }}
                    />
                    <div className="minor">Check out some of my incredible work and let's connect!</div>
                </div>
                
            </div>

            <div>
                <img
                    src="http://www.twitrcovers.com/wp-content/uploads/2015/01/San-Francisco-l.jpg"
                    // src="https://image.shutterstock.com/image-vector/abstract-health-medical-science-consist-260nw-1145748344.jpg"
                    // src="https://live.staticflickr.com/4326/35912916822_633eea8e5b_b.jpg"
                    style={background}
                />
            </div>


        </div>
    )
}


export default Main