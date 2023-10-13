import React from 'react';
import CountUp from 'react-countup';

function CounterStat({ propsCounterStat }) {

    return (
        <>
            {propsCounterStat.map((item, index) => {
                return (
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="counter-stat">
                            <i class={item.icon}></i>
                            <CountUp start={0} end={item.number} duration={2} separator="," useEasing={true}>
                                {({ countUpRef }) => (
                                    <span className="h3" ref={countUpRef} />
                                )}
                            </CountUp>
                            <p>{item.title}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default CounterStat;