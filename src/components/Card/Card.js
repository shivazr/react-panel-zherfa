import React from 'react'
import './Card.css'
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import{BsThreeDotsVertical} from 'react-icons/bs'

function Card() {
 
    const contentCard = [
        {
            number: '26K',
            num2: '(-12.4%)',
            icon: <FiArrowDown />,
            title: 'Users',
            cover:'https://img.icons8.com/external-filled-outline-icons-pause-08/1x/external-charts-business-filled-outline-icons-pause-08-3.png',
            style: {
                backgroundColor: 'blue',
              },
            
        },
        {
            number: '$6.200',
            num2: '(40.9%)',
            icon: <FiArrowUp />,
            title: 'Income',
             cover:'https://img.icons8.com/ios/100/combo-chart--v1.png',
            style: {
                backgroundColor: 'green',
              },
        },
        {
            number: '2.49',
            num2: '(84.7%)',
            icon: <FiArrowUp />,
            title: 'Users',
            cover:'https://img.icons8.com/external-filled-outline-icons-pause-08/1x/external-charts-business-filled-outline-icons-pause-08-3.png',
            style: {
                backgroundColor: 'yellow',
              },
        },
        {
            number: '26K',
            num2: '(-12.4%)',
            icon: <FiArrowUp />,
            title: 'Users',
            cover:'https://img.icons8.com/ios/100/combo-chart--v1.png',
            style: {
                backgroundColor: 'pink',
              },
        },
    ]
   
    return (
        <>
            <section className="card ">
                <div className="container mx-auto ">
                    <div className="content ">
                        { contentCard.map((val)=>{
                            return(
                                <>
                                <div className="box" style={{ ...val.style }} >
                      
                       
                                    <div className="items p- "  >
                                        <div className="items-top">
                                            <div className="item" >
                                             <span>{val.icon}</span>
                                              <span className='num'>{val.num2}</span>
                                             <h2 className='num'>{val.number}</h2>
                                         
                                         
                                    
                                        </div> 
                                         <BsThreeDotsVertical className="icon"/>
                                        <h2 className='title'>{val.title}</h2> 
                                      
                                        </div>
                                        <div className="imgcover">
                                          <img className='img' src={val.cover}  />  
                                        </div>
                                        
                                          <h2 className='t2' ></h2> 
                                        
                                    </div>
                                </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card
