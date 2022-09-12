import "../Components/Navbar.css"

export const Navbar=()=>{
    return(
        <div className="navmain">

            <h4>Coin</h4>
            <h4>Exchanges</h4>
            <h4>Swap</h4>
            <img style={{width:"80px",textAlign:"center"}} src="https://coincap.io/static/logos/black.svg" alt="" />
            <img   style={{width:"30px",height:"30px",marginTop:"1%"}} src="https://img.icons8.com/search" alt="" />
            <button style={{backgroundColor:"#18c683",color:"white",height:"35px",marginTop:"10px"}}>Connect Wallet</button>

        </div>
    )
}