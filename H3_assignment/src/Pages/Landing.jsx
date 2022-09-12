import { useSelector } from "react-redux"

import "../Pages/Landing.css"


export const Landing=()=>{

    const gotdata=useSelector((state)=>state.mydata)

    console.log(gotdata)


    return(
        <div>
            
            <div className="databox">

            {gotdata.length<=0?<h1>Loading...</h1>:
            <table>
                <thead>
                    <tr>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Market Cap</td>

                        <td>VWAP (24Hr)</td>
                        <td>Supply</td>
                        <td>Volume(24Hr)</td>
                        <td>Change(24Hr)</td>
                    </tr>
                </thead>
                <tbody>
                {
                gotdata.map((e)=>{
                return(
                    
                    <tr key={e.id} >
                        <td>{e.rank}</td>
                        <td style={{textAlign:"left"}}><img style={{width:"30px",textAlign:"left",marginBottom:"-10px"}} src={`https://assets.coincap.io/assets/icons/${e.symbol.toLowerCase()}@2x.png`} alt="" />{e.name} <br /> <span  style={{margin:"15%",fontSize:"10px",color:"gray"}}>{e.symbol}</span>
                        </td>
                        <td>${Number(e.priceUsd).toFixed(2)}</td>
                        <td>${(Number(e.marketCapUsd)/1000000000).toFixed(2)}b</td>

                        <td>${Number(e.vwap24Hr).toFixed(2)}</td>
                        <td>{(Number(e.supply)/1000000).toFixed(2)}m</td>
                        <td>${(Number(e.volumeUsd24Hr)/1000000000).toFixed(2)}b</td>
                        <td className={Number(e.changePercent24Hr)<0?"red":"green"}>{Number(e.changePercent24Hr).toFixed(2)}%</td>
                    </tr>
                    
                )
                
            })}
            </tbody>
            </table>

            

            }
            
            </div>
        </div>
    )
}