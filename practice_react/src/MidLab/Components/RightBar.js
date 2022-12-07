import { useState } from "react";
import "../Styles/RightBar.css";
import LoginData from "./Login/LoginData";
function RightBar(auth) {
    

    
    const[teams,setTeams]=useState([


        {live:"Not Covered Live",tossed:"Sindh Choose To Bat",
            
        team1:{team:"Sindh",logo:"./img2/Sindh.png",score:1,wicket:1,over:3,},
         team2:{team:"Balochistan",logo:"./img2/balochistan.png",score:0,wicket:0,over:0,}},

         
        {  live:"Covered Live",tossed:"",
            
        team1:{team:"Southeren Punjab",logo:"./img2/southPunjab.png",score:0,wicket:0,over:0,},
        team2:{team:"Central Punjab",logo:"./img2/centPunjab.png",score:15,wicket:0,over:18.4,}}
    ]);
    

    

    const Admin=(score)=>{

        if (auth.admin) {
            return <button onClick={()=>{Score(score)}}
            >+</button>
        }
        else{

            return null
        }
    }

    const Score=(sc)=>{

        setTeams(teams.filter((src)=>
        (
            src.team1.score=sc+1 
            )))
    }


    const Over=(over)=>{
       
        if (over!==0) {
            return <p>
                ({over} ov)
            </p>
        }
        else{
            return null;
        }
    }

    const Wicket=(w,s)=>{
      
        if (s!=0) {
            
            if (w!=0) {
                return <p style={{fontWeight:"bold",marginLeft:"4px"}}> {s}/{w}</p>
            }
            else return <p style={{fontWeight:"bold",marginLeft:"4px"}}>{s}</p>
        }else return null;
       

    }
    
    return ( 

        <div id="mainScorer">
           {

             teams.map((ref)=>
             (

                <div id="scorerCard">
                  <p>
                    {ref.live}
                  </p>
                  <div id="team1" className="teams">
                    <img src={ref.team1.logo} id="team1Logo" />
                    <p id="teamName">
                        {ref.team1.team}
                    </p>

                    <div id="scorer">
                       
                        {Over(ref.team1.over)}
                        {Wicket(ref.team1.wicket,ref.team1.score)}
                        {Admin(ref.team1?.score)}
                        </div>
            

                    </div>
                    <div id="team2" className="teams">
                        
                    <img src={ref.team2.logo} id="team1Logo" />
                    <p id="teamName">
                        {ref.team2.team}
                    </p>  
            
                    <div id="scorer">
                       
                       {Over(ref.team2.over)}
                       {Wicket(ref.team2.wicket,ref.team2.score)}
                       {Admin(ref.team2?.score)}
                       </div>
                  
                        </div>

                        <p>
                            {ref.tossed}
                        </p>
                    </div>
             )
                 
             )

           }
        </div>
     );
}

export default RightBar;