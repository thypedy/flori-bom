import "./Home.css";
import video1 from "../assets/videoHome.mp4"

function Home(){
   return (
    <div>
        <section id="main">
        <video src={video1} muted autoPlay loop></video>
        <div className="overlay"></div>
        </section>
    </div>
   )
}
export default Home