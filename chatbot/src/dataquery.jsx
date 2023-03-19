import React from "react";
import "./App.css";

function Chatquery(e){
    return(<div className="chat-parent" >
        <div  className="chat1" >
          {e.data.map(({ data, send }) => {
                  if(send==0){
                    return <div className="chat1"><div  className="surrond"><p className="p1">{data}</p></div></div>;
                  }else{
                    return <div className="chat2"><div className="surond2"><p className="p2">{data}</p></div></div>;
                  }
                })}
    </div>
    </div>)
}


export default Chatquery;