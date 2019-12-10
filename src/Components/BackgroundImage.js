function BackgroundImage() {

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
      };

  return (
    <div>
      <img
        src="http://www.twitrcovers.com/wp-content/uploads/2015/01/San-Francisco-l.jpg"
        style={background}
      />
    </div>
  );
}

export default BackgroundImage