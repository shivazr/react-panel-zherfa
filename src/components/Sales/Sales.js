import React from 'react'
import Client from './Client'
import './Salies.css'
import DaysSales from './DaysSales'

function Sales() {
    return (
        <>
            <section >
                <div className="container-sales">
                    <div className="wrapper">
                        <div className="text-title">
                            <p className='title-sales'>Traffic & Sales</p>
                        </div>
                        <div className="clients">
                            <div className="item-clients">
                                <p>مشتری جدید</p>
                                 <h3>9,123</h3>
                            </div>
                            <div className="item-clients">
                                <p>New Clients</p>
                                <h3>9,123</h3>
                            </div>
                            <div className="item-clients">
                                <p>New Clients</p>
                                <h3>9,123</h3>
                            </div>
                            <div className="item-clients">
                                <p>New Clients</p>
                                <h3>9,123</h3>
                            </div>
                        </div>
                        <Client />
                    </div>

                </div>
            </section>


        </>
    )
}

export default Sales
