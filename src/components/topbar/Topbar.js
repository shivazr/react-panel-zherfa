
import { BsFillPersonFill } from "react-icons/bs"
import { AiOutlineBars, AiOutlineMail, AiOutlineBell, AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import "./Topbar.css"
import { useState } from "react"

function Topbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="topbarLinks">
          <div className='menu-icon' onClick={handleClick}>
            {click ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
          <div className={click ? 'nav-menu active' : 'nav-menu'}>
            <span className="topbarLink">Home</span>
            <span className="topbarLink">about</span>
            <span className="topbarLink">contact</span>
            <span className="topbarLink">home</span>
          </div>

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
