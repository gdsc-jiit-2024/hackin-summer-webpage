import React from "react";
import "./tracks.css";

const Tracks = () => {
    return (
      <div className="MainFrame">
          <div className="Tracks-Text">TRACKS</div>
          <div className="Info">
            <p>
            The Smart India Hackathon qualification event of Hackin&#39; Summer &#39;23 consists of 6 tracks out of which 5
      are based on technologies, namely, AR/VR, Blockchain, Cybersecurity, ML/AI and Game Development. 6th track is
         open innovation.
            </p>
          </div>
          <div className="Path">
            <img className="bulb1" src={require("./bulb.png")}/>
            <img className="Path1" src={require("./Path.png")} />

            <div className="Circle1">
               <img className="AR" src={require("./ar.png")} />
                <div className="AR-Head">AR/VR</div>
                <p className="AR-statement">Statment 1 Includes all Smart India Hackathon 2023 Problem statements which make use of AR/VR</p>
               <img className="Path2"  src={require("./pathcurve.png")}/>
               <img className="Path3" src={require("./Path2.png")} />
               <img className="Code1" src={require("./code.png")} />
            </div>

            <div className="Circle2">
              <img className="BlockChain" src={require("./blockchain.png")} />
              <div className="Block-Head">BlockChain</div>
              <p className="Block-Statement">Includes all Smart India Hackathon 2023 problem statements which involve of BlockChain</p>
              <img className="Path4" src={require("./Path.png")} />
              <img className="Book1" src={require("./NoteBook.png")} />
            </div>

             <div className="Circle3">
              <img className="Cyber" src={require("./cyber.png")} />
              <div className="Cyber-Head">Cyber-Security</div>
              <p className="Cyber-Statement">Statement 1 Includes all Smart India Hackathon 2023 problem statements which make use of cyber security</p>
              <img className="Path2"  src={require("./pathcurve.png")}/>
               <img className="Path3" src={require("./Path2.png")} />
               <img className="Grp1" src={require("./grp.png")} />
            </div>

            <div className="Circle4">
              <img className="ML" src={require("./brain.png")} />
              <div className="ML-Head">ML / AI</div>
              <p className="ML-Statement">Includes all Smart India Hackathon 2023 problem statements which involve of Machine Learning</p>
              <img className="Path4" src={require("./Path.png")} />
              <img className="Book1" src={require("./NoteBook.png")} />
            </div>

            <div className="Circle5">
              <img className="Game" src={require("./cyber.png")} />
              <div className="Game-Head">Cyber-Security</div>
              <p className="Game-Statement">Statement 1 Includes all Smart India Hackathon 2023 problem statements which make use of cyber security</p>
              <img className="Path2"  src={require("./pathcurve.png")}/>
               <img className="Path3" src={require("./Path2.png")} />
               <img className="Grp1" src={require("./bulb.png")} />
            </div>

            <div className="Circle6">
              <img className="Inno" src={require("./cyber.png")} />
              <div className="Inno-Head">Open-Innovation</div>
              <p className="Inno-Statement">Statement 1 Includes all Smart India Hackathon 2023 problem statements which make use of cyber security</p>
            </div>
            
          </div>
      </div>
    )
}


export default Tracks;