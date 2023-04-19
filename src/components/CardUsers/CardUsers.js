import React from 'react'
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs'
import './CardUsers.css'
import { LineChart, Line } from 'recharts';
import { BarChart, Bar } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function CardUsers() {
    const contentCard = [
        {
            number: '26K',
            num2: '(-12.4%)',
            icon: <FiArrowDown />,
            title: 'Users',
            cover: 'https://img.icons8.com/external-filled-outline-icons-pause-08/1x/external-charts-business-filled-outline-icons-pause-08-3.png',
            color:'blue',
            // style: {
            //     backgroundColor: 'blue',
            // },

        },
        {
            number: '$6.200',
            num2: '(40.9%)',
            icon: <FiArrowUp />,
            title: 'Income',
            cover: 'https://img.icons8.com/ios/100/combo-chart--v1.png',
            color:'green',
        },
        {
            number: '2.49',
            num2: '(84.7%)',
            icon: <FiArrowUp />,
            title: 'Users',
            cover: 'https://img.icons8.com/external-filled-outline-icons-pause-08/1x/external-charts-business-filled-outline-icons-pause-08-3.png',
            color:'yellow',
        },
        {
            number: '26K',
            num2: '(-12.4%)',
            icon: <FiArrowDown />,
            title: 'Users',
            cover: 'https://img.icons8.com/ios/100/combo-chart--v1.png',
            color: 'pink',
          
        },
    ]
    const data = [
        {
            name: 'Page A',
            uv: 32
        },
        {
            name: 'Page A1',
            uv: 42
        },
        {
            name: 'Page A2',
            uv: 51
        },
        {
            name: 'Page A3',
            uv: 60
        },
        {
            name: 'Page A4',
            uv: 95
        },
    ]
    return (
        <>
            <section>
                <div className="conutainer">
                    <div className="row">
                        {/* {contentCard.map((val) => { */}
                        {/* return ( */}
                        <>
                      
                            <div className="course-item" style={{ backgroundColor: 'blue' }}  >
                                <div className="top-content">
                                    <div className="left-content">
                                        <h2 className="num1">26k</h2>
                                        <span className='num2'>(-12.4% <FiArrowDown /> ) </span>
                                    </div>
                                    <BsThreeDotsVertical className="right-icon" />
                                </div>
                                <h2 className='users'>Users</h2>

                                <div className="chart">
                                {/* <ResponsiveContainer width="100%" height={100}> */}
                                    <BarChart width={300} height={100} data={data}>
                                        <Bar dataKey="uv" fill="#fff" />
                                    </BarChart>
                                    {/* </ResponsiveContainer> */}
                                </div>
                            </div>
                            <div className="course-item" style={{ backgroundColor: 'green' }}  >
                                <div className="top-content">
                                    <div className="left-content">
                                        <h2 className="num1">26k</h2>
                                        <span className='num2'>(-12.4% <FiArrowDown /> ) </span>
                                    </div>
                                    <BsThreeDotsVertical className="right-icon" />
                                </div>
                                <h2 className='users'>Users</h2>

                                <div className="chart">
                                    <LineChart width={300} height={100} data={data}>
                                        <Line type="monotone" dataKey="uv" stroke="#fff" />
                                    </LineChart>

                                </div>
                            </div>
                            <div className="course-item" style={{ backgroundColor: 'pink' }}  >
                                <div className="top-content">
                                    <div className="left-content">
                                        <h2 className="num1">26k</h2>
                                        <span className='num2'>(-12.4% <FiArrowDown /> ) </span>
                                    </div>
                                    <BsThreeDotsVertical className="right-icon" />
                                </div>
                                <h2 className='users'>Users</h2>

                                <div className="chart">
                                    <AreaChart width={300} height={100} data={data}>
                                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#fff" style={{float:'right'}} />
                                    </AreaChart>
                                </div>
                            </div>
                            <div className="course-item" style={{ backgroundColor: 'yellow' }}  >
                                <div className="top-content">
                                    <div className="left-content">
                                        <h2 className="num1">26k</h2>
                                        <span className='num2'>(-12.4% <FiArrowDown /> ) </span>
                                    </div>
                                    <BsThreeDotsVertical className="right-icon" />
                                </div>
                                <h2 className='users'>Users</h2>

                                <div className="chart">
                                    <BarChart width={300} height={100} data={data}>
                                        <Bar dataKey="uv" fill="#fff" />
                                    </BarChart>

                                </div>
                            </div>
                          
                        </>
                        {/* ) */}
                        {/* })} */}




                    </div>
                </div>
            </section>
        </>
    )
}

export default CardUsers
