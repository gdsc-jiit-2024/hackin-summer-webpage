import React from 'react';
import SihTrackTeamMember from './SihTrackTeamMember';
import SihTrackTeamMember2 from './SihTrackTeamMember2';

const SihTrack = () => {
    return (
        <main>

        <div className="pb-4">
          <label
            htmlFor="entry.1686875027"
            className={`block font-GoogleSansDisplay-Bold text-sm pb-2 justify-left`}
          >
              Team Leader: Name
          </label>
          <p className="text-sm font-GoogleSansDisplay-Bold text-red-400 "></p>
          <input
            className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
            type="text"
            name="entry.1686875027"
            placeholder="Enter team leader's name"
          />
        </div>

        
        <div className="pb-4">
          <label
            htmlFor="entry.538205325"
            className={`block font-GoogleSansDisplay-Bold text-sm pb-2 justify-left`}
          >
              Team Leader: Enrollment number 
          </label>
          <p className="text-sm font-GoogleSansDisplay-Bold text-red-400 "></p>
          <input
            className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
            type="text"
            name="entry.538205325"
            placeholder="Enter team leader's enrollment number"
          />
        </div>

        <div className="pb-4">
          <label
            htmlFor="entry.2063044031"
            className={`block font-GoogleSansDisplay-Bold text-sm pb-2 justify-left`}
          >
              Team Leader: Phone Number
          </label>
          <p className="text-sm font-GoogleSansDisplay-Bold text-red-400 "></p>
          <input
            className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
            type="text"
            name="entry.2063044031"
            placeholder="Enter team leader's phone number"

          />
        </div>

        <div className='pb-4 block'>
          <label htmlFor="entry.1643312562" className=' font-GoogleSansDisplay-Bold text-sm pb-2 pr-4'>Select Campus</label>
          <select className='p-2' name='entry.1643312562'>
            <option value="" selected disabled>Select campus</option>
            <option value="Sector 62">62</option>
            <option value="Sector 128">128</option>
          </select>
        </div>
    
        <br></br><br></br>
        <SihTrackTeamMember number="1" name="entry.695479574" enrol="entry.905751537" pnum="entry.2041656692" email="entry.1089033927" sector="entry.744924545"/> <br></br><br></br>
        <SihTrackTeamMember2 number="2" name="entry.1878010387" enrol="entry.755817917" pnum="entry.1292032273" sector="entry.1636015585"/> <br></br><br></br>
        <SihTrackTeamMember2 number="3" name="entry.875078920" enrol="entry.1786388640" pnum="entry.1590197161" sector="entry.912280966"/> <br></br><br></br>
        <SihTrackTeamMember2 number="4" name="entry.1239144033" enrol="entry.1308771320" pnum="entry.1759705677" sector="entry.351837391"/> <br></br><br></br>
        <SihTrackTeamMember2 number="5" name="entry.1288137943" enrol="entry.120910981" pnum="entry.905087960" sector="entry.271580050"/> <br></br><br></br>

      </main>
    );
};

export default SihTrack;