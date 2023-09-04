import React from "react";
import SihTrackTeamMember from "./SihTrackTeamMember";
import SihTrackTeamMember2 from "./SihTrackTeamMember2";

const InternalTrack = () => {
    return (
        <main>
            <div className="pb-4">
                <label
                    htmlFor="entry.1140397483"
                    className={`block font-GoogleSansDisplay-Bold text-sm pb-2 justify-left`}
                >
                    {/* {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"} */}
                    College Name
                </label>
                <p className="text-sm font-GoogleSansDisplay-Bold text-red-400 "></p>
                <input
                    className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
                    type="text"
                    name="entry.1140397483"
                    placeholder="Enter college name"
                />
            </div><br></br>
            <SihTrackTeamMember number="1" name="entry.1798544795" enrol="entry.2017700167" pnum="entry.1412862475" email="entry.1278285267"/> <br></br><br></br>
            <SihTrackTeamMember2 number="2" name="entry.740242797" enrol="entry.1829013685" pnum="entry.1712224845"/> <br></br><br></br>
            <SihTrackTeamMember2 number="3" name="entry.2123668264" enrol="entry.1770710862" pnum="entry.267696194"/> <br></br><br></br>
            <SihTrackTeamMember2 number="4" name="entry.649538948" enrol="entry.1329027880" pnum="entry.763355139"/> <br></br><br></br>
            <SihTrackTeamMember2 number="5" name="entry.1779581608" enrol="entry.1561910667" pnum="entry.1492833043"/> <br></br><br></br>
        </main>
        
    )
};

export default InternalTrack;