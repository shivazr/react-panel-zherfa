import React, { useEffect, useState } from 'react'
import './Traffic.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { BsCloudDownload} from 'react-icons/bs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Data,  medias } from '../data';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2100,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2100,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2100,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2100,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2100,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];




function Traffic() {
    const [skills, setSkills] = useState(
        Data.map(skill => ({ ...skill, currentPercent: 0 }))
    )

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSkills(prevSkills =>
                prevSkills.map(skill => {
                    const percentIncrease = Math.ceil(Math.random() * 10);
                    const newPercent = Math.min(
                        skill.percent,
                        skill.currentPercent + percentIncrease
                    );
                    return { ...skill, currentPercent: newPercent };
                })
            );
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <section >
                <div className="conutainer-traffic">
                    <div className="box">
                        <div className="traffic">
                            <div className="left-tra">
                                <h2>Traffic</h2>
                                <span>January - July 2021</span>
                            </div>
                            <div className="right-tra">


                                <ButtonGroup variant="outlined" color="primary" aria-label="outlined button group">
                                    <Button style={{ color: '#000', fontSize: "20px", border: "1px solid gray" }}>روز</Button>
                                    <Button style={{ backgroundColor: 'gray', color: 'white', fontSize: "20px", border: "1px solid gray" }}>ماه</Button>
                                    <Button style={{ color: '#000', fontSize: "20px", border: "1px solid gray" }}>سال</Button>
                                </ButtonGroup>
                                {/* <Button
                                variant="contained"
                                color="primary"
                                className="bg-black"
                            >
                                Click me
                            </Button> */}


                                {/* <Button className='bg-black  p-4' variant="contained" ><BsCloudDownload /></Button> */}
                                <Button variant="contained" style={{ backgroundColor: '#321fdb', color: 'white', padding: '10px', fontSize: "25px", marginRight: "10PX" }} ><BsCloudDownload /></Button>

                            </div>


                        </div>


                        <div className="line">
                            <ResponsiveContainer width="100%" height={400}>
                                <LineChart
                                    // width={400}
                                    // height={300}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 20,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    {/* <Legend /> */}
                                    <Line type="monotone" dataKey="pv" stroke="#2196F3" strokeWidth={2} activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="uv" stroke="green" strokeWidth={2} />
                                    <Line type="monotone" dataKey="amt" stroke="#F44236" strokeWidth={2} strokeDasharray="3 4 5 2" />

                                </LineChart>
                            </ResponsiveContainer>

                            <div className="container-progress">
                                <div className="container-content">
                                    {skills.map((skill, index) => {
                                        return (
                                            <>
                                                <div className="container-item" key={index}>
                                                    <p className='text1'>{skill.title}</p>
                                                    <div style={{ display: "flex" }}>
                                                        <span>  ({skill.percent}%)</span>
                                                        <p className='text2'>29.703 Users </p>

                                                    </div>

                                                    <div className="progress-area">
                                                        <div className="progress-bar"
                                                            style={{ width: `${skill.currentPercent}%`, backgroundColor: skill.color }}
                                                        //  style={{ ...val.style}}
                                                        >
                                                            {/* {skill.currentPercent}% */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}


                                </div>


                            </div>


                        </div>
                    </div>

                </div>
            </section>
            <div className="container-media">
                <div className="content-media">
                    {medias.map((media) =>{
                        return(
                        <>
                        <div className="content-item" >
                        <div className="icon-media" style={{ ...media.style}}>
                        <div className="iconfb">{media.icon}</div>
                              {/* <BsFacebook  className='iconfb'/> */}
                        </div>
                      
                        <div className="content-bottom ">
                            <div className="item-content right">
                                <p className='numk'>{media.numk}</p>
                                <p className='follow'>{media.follow}</p>
                            </div>
                            <div className="item-content ">
                                <p className='numk'>{media.nmnk2}</p>
                                <p className='follow'>{media.follow2}</p>
                            </div>
                        </div>
                    </div>
                        </>)
                    })}
                </div>
            </div>
        </>
    )
}

export default Traffic
