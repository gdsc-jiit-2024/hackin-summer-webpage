import React, { useState } from 'react'
import formImage from "./form.png";
import './Form.css'
import SihTrack from './SihTrack'
import InternalTrack from './InternalTrack'

const Form = () => {
  const [visible, setVisible] = useState(null); //true = sih track, false = internal track
  const [teamName, setTeamName] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
    console.log(teamName);
  };

  const handleTrackChange = (e) => {
    setSelectedTrack(e.target.value);
    setVisible(e.target.value === 'SIH Track');
  };

  return (
    <main className="items-center flex pt-32 pb-32 justify-center ">
        <form
          className=" bg-white flex rounded-lg w-3-5 font-GoogleSansDisplay-Regular main-div"
          action='https://docs.google.com/forms/d/e/1FAIpQLScsqfXzh6A9JD6ibyVTWJNbGXevfyZC96RpR2mjc9bGg4GO8Q/formResponse'
        >
          <div className="flex-1 text-gray-700 custom-height overflow-y-scroll p-10 bg-main">
            <h1 className="text-3xl pb-2 font-GoogleSansDisplay-Bold">
              Wanna Participate? 👋
            </h1>
            <p className="text-lg  text-gray-500">
              Fill in the form below to register your team for the Hackin' Summers 2023.
            </p>
            <div className="mt-6 ">
              
              <div className="pb-4">
                <label
                  htmlFor="entry.2132389311"
                  className={`block font-GoogleSansDisplay-Bold text-sm pb-2`}
                >
                    Team Name
                </label>

                <p></p>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="text"
                  name={visible == true ? "entry.2132389311" : "entry.1715659558"}
                  placeholder="Enter your team name"
                  value={teamName}
                  onChange={handleTeamNameChange}
                />
              </div>
              
              
              <div className='pb-4 block'>
                <label htmlFor="entry.1078271427" className='font-GoogleSansDisplay-Bold text-sm pb-2 pr-4'>Select Track</label>
                <select className='p-2' name='entry.1078271427' 
                value={selectedTrack} onChange={handleTrackChange}
                >
                  <option value="" selected disabled>Select a track</option>
                  <option value="SIH Track" onClick={ ()=>setVisible(true) }>SIH Track</option>
                  <option value="Internal Track" onClick={ ()=>setVisible(false) }>Internal Track</option>
                </select>
              </div><br></br>

              {visible && 
                (
                  <SihTrack/>
                )
              }

              {visible==false && 
                (
                  <InternalTrack/>
                )
              }
              
              
              <button
                type="submit"
                disabled={selectedTrack==="" || teamName==="" ? true : false}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                // onMouseOver={()=>{return "Enter team name and select a track to enable this button"}}
                className={`button font-GoogleSansDisplay-Bold text-sm text-white py-3 mt-6 rounded-lg w-full disabled ${selectedTrack==="" || teamName==="" ? "bg-gray-500" : "bg-teal-500"} `}
              >
                Start Hackin'!
              </button>
              {isHovering && (selectedTrack==="" || teamName==="") && (
                <p>"Enter team name and select a track to enable this button"</p>
              )}
            </div>
          </div>

          <div className="relative flex-1">
            <img
              className=" object-cover rounded-lg image-dim"
              fill
              priority
              src={formImage}
              alt="form-learn"
            />
          </div>

        </form>
    </main>
  )
}

export default Form