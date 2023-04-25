import React, { useEffect, useState } from 'react'
import { clientData, socials } from '../data'
import { GrUser, GrUserFemale } from 'react-icons/gr'


function Client() {
  const [progresses, setProgress] = useState()


  return (
    <>




      <div className="progress-client" >
        <div className="container-client">
          <div className="left-item">
            <div className="left-item-content">
              {clientData.map((client, index) => {
                return (
                  <>
                    <div className="item-client" key={index}>
                      <div className="item1"> <p>{client.day}</p></div>
                      <div className="item2">
                        <div className="progress-area-client">
                          <div className="progress-bar-client"
                            style={{ width: `${client.percent}%`, backgroundColor: client.color }}
                          ></div>
                        </div>

                        <div className="progress-area-client">
                          <div className="progress-bar-client"

                            style={{ width: `${client.percent2}%`, backgroundColor: client.color2 }}></div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}

            </div>
          </div>
          <div className="right-item">
            <div className="gender">
              <div className="male">
                <div className="top-ma">
                  <div className="icon-male">
                    <GrUser className='icon-m' />
                    <div className="text-male">Male</div>
                  </div>
                  <div className="center">53%</div>
                </div>
                <div className="progress-area-client">
                  <div className="progress-bar-client"></div>
                </div>
              </div>
              <div className="female">
                <div className="top-ma">
                  <div className="icon-male">
                    <GrUserFemale className='icon-male' />
                    <div className="text-male">Female</div>
                  </div>
                  <div className="center">53%</div>
                </div>
                <div className="progress-area-client">
                  <div className="progress-bar-client"></div>
                </div>
              </div>
            </div>
            <div className="social">
              {socials.map((social, index) => {
                return (
                  <>
                    <div className="top-ma">
                      <div className="icon-male" key={index}>
                         <div className="icon-male">{social.icon}</div>
                        <div className="text-male">{social.text}</div>
                      </div>
                      <div className="center">{social.centerSocial}</div>
                    </div>
                    <div className="progress-area-client">
                      <div className="progress-bar-client" style={{ backgroundColor: social.colorSocial }}></div>
                    </div>
                  </>
                )
              })}

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Client
