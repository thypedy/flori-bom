import img from "../assets/LOGO_pi.svg"
import "./Navbar.css"

function Navbar (){
    return(
        <div className="navbar">
            <div><img src={img} style={{width:"200px" , height:"80px"}} /></div>
            <nav>

                <div className="a">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/sobre">Sobre</a></li>
                        <li><a href="/contato">Contato</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/produtos">Produtos</a></li>
                    </ul>

                    <div class="fas fa-search"></div>

                </div>

            </nav>
        </div>
    )
}
export default Navbar