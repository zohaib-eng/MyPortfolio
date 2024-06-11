import React from "react";
import { faDatabase, faBook, faUsers  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./aboutstyle.css"

const about = () => {
    return(
        <div className="aboutcontainer">
            <div className="row-1">
                <div className="self-text">
                    <h4>ABOUT MYSELF</h4>
                    <p>inappropriate behavior is often laughed off as “boys will be boys,”
                        women face higher conduct standards especially in the workplace. 
                        That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. 
                        inappropriate behavior is often laughed.
                    </p>
                </div>
                <div className="cards">
                <div className="card1">
                    <div className="snippet1">
                        <ul className="basic-info">
                            <li><FontAwesomeIcon icon={faDatabase} style={{ fontSize: "1.6em" }} className="icon" /></li>
                        </ul>
                        <h4>$2.5M</h4>
                        <p>Total Donation</p>
                    </div>
                </div>
                <div className="card2">
                    <div className="snippet2">
                        <ul className="basic-info2">
                            <li><FontAwesomeIcon icon={faBook} style={{ fontSize: "1.6em" }} className="icon" /></li>
                        </ul>
                        <h4>1465</h4>
                        <p>Total Projects</p>
                    </div>
                </div>
                <div className="card3">
                    <div className="snippet3">
                        <ul className="basic-info3">
                            <li><FontAwesomeIcon icon={faUsers} style={{ fontSize: "1.6em" }} className="icon" /></li>
                        </ul>
                        <h4>3965</h4>
                        <p>Total Volunteers</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="row-2">
                {/* <h4>x</h4> */}
            </div>
        </div>
    )
}


export default about;