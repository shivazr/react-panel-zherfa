import { AiOutlineSearch } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { AiOutlineBars, AiOutlineMail, AiOutlineBell } from "react-icons/ai"

import "./Topbar.css"

function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Home</span>
        </div>
        {/* <span className="logo">LOGO</span> */}
      </div>
      {/* <div className="topbarCenter">
            <div className="searchbar">
                <AiOutlineSearch className="searchIcon"/>
                <input  placeholder="search" className="searchinput" />
            </div>
        </div> */}
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <AiOutlineMail />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <AiOutlineBars />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <AiOutlineBell />
            <span className="topbarIconBadge">1</span>
          </div>
          {/* <img src="" className="topbarImg" /> */}
        </div>



      </div>
    </div>
  )
}

export default Topbar
