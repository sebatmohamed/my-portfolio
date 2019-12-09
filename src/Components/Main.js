import '../../css/home.css';

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
                    <div className="minor">Check out some of my incredible work and let's connect!</div>
                </div>
                
            </div>

            <div>
                <img
                    src="https://media0.giphy.com/media/1oF1KAEYvmXBMo6uTS/giphy.gif"
                    style={background}
                />
            </div>


        </div>
    )
}


export default Main