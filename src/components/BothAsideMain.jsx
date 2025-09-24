import Aside from "./Aside";
import Main from "./Main";

const BothAsideMain = ()=>{
    return(
        <div className="container" id="wrapper" style={{display:'flex', justifyContent:'space-between', gap:'20px', marginTop:'20px', marginBottom:'20px', maxWidth:'1200px'}}>
            <Main/>
            <Aside/>
            
        </div>
    );
}

export default BothAsideMain;