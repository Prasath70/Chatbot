import React, { useEffect, useRef, useState } from "react";
import Chatquery from "./dataquery";
import "./App.css";
import axios from "axios";

function Chatbot(e) {
  //   var data = [
  //     { data: "haiiiiiiiiiiiiiiiii", send: 1 },
  //     { data: "What are some of the recent developments at L&T", send: 0 },
  //   ];
//   const Messages = ({ messages }) => {

//     const messagesEndRef = useRef(null)
  
//     const scrollToBottom = () => {
//       messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//     }
//   }
  
//     useEffect(() => {
//         scrollToBottom()
//       }, [messages]);
  const [data, Setdata] = useState([]);
  const [Typing, Settyping] = useState("");
  const Newrequest = (e) => {
    e.preventDefault();
    var a = { data: Typing, send: 1 };
    Settyping("")
    // Setdata([...data, a]);

    axios.get(`http://192.168.43.119:8000/data/${Typing}`).then((response) => {
      var b = response.data;
      Setdata([...data, a,b]);
console.log(data) 
   });
  };
  return (
    <div className="botparent">
      <Chatquery data={data} />
      <form 
        onSubmit={(e) => {
          Newrequest(e);
        }}
      > 

        <input
          className="footer"
          value={Typing}
          onChange={(e) => {
            Settyping(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default Chatbot;
