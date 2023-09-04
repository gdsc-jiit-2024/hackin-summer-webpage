import React from "react";

const SihTrackTeamMember2 = (props) => {
    return (
        <main>

            <div className='pb-4 block'>
                <label
                    htmlFor={`${props.name}`}
                    className={`block font-GoogleSansDisplay-Bold text-sm pb-2 justify-left`}
                >
                {/* {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : "Name"} */}
                Team member {props.number} : Name
            </label>
            <p className="text-sm font-GoogleSansDisplay-Bold text-red-400 "></p>
            <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
                type="text"
                name={`${props.name}`}
                placeholder={`Enter team member ${props.number}'s name`}
                // onChange={formik.handleChange}
                // value={formik.values.name}
                // onBlur={formik.handleBlur}
            />
            </div>
        

            <div className='pb-4 block'>
                <label
                    htmlFor={`${props.enrol}`}
                    className={`block font-GoogleSansDisplay-Bold text-sm pb-2 justify-left`}
                >
                {/* {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : "Name"} */}
                Team member {props.number} : Enrollment number
                </label>
                <p className="text-sm font-GoogleSansDisplay-Bold text-red-400 "></p>
                <input
                    className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
                    type="text"
                    name={`${props.enrol}`}
                    placeholder={`Enter team member ${props.number}'s enrollment number`}
                    // onChange={formik.handleChange}
                    // value={formik.values.name}
                    // onBlur={formik.handleBlur}
                />
            </div>

            <div className='pb-4 block'>
                <label
                    htmlFor={`${props.pnum}`}
                    className={`block font-GoogleSansDisplay-Bold text-sm pb-2 justify-left`}
                >
                {/* {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : "Name"} */}
                Team member {props.number} : Phone number
                </label>
                <p className="text-sm font-GoogleSansDisplay-Bold text-red-400 "></p>
                <input
                    className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
                    type="text"
                    name={`${props.pnum}`}
                    placeholder={`Enter team member ${props.number}'s phone number`}
                    // onChange={formik.handleChange}
                    // value={formik.values.name}
                    // onBlur={formik.handleBlur}
                />
            </div>

            {props.sector!=undefined &&
                (<div className='pb-4 block'>
                    <label htmlFor={`${props.sector}`} className=' font-GoogleSansDisplay-Bold text-sm pb-2 pr-4'>Select Campus</label>
                    <select className='p-2' name={`${props.sector}`}>
                        <option value="" selected disabled>Select campus</option>
                        <option value="Sector 62">62</option>
                        <option value="Sector 128">128</option>
                    </select>
                </div>)
            }
        
        </main>
    )
};


export default SihTrackTeamMember2;