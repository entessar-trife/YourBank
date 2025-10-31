import './UseCasesComponent.css'
import { UseCaseData } from '../../Data/UseCaseData'
import { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import IconGradient from '../IconGradient/IconGradient'

export default function UseCasesComponent({ reverse }) {
    const [counterState, setCounterState] = useState(false)
    // function for shortening
    const renderCard = (index) => (
        <div className='Af-UseCasesComponentSide-1-card' data-aos="flip-right" data-aos-delay="200">
            <IconGradient
            button={false}
            img={UseCaseData[reverse ? 1 : 0].properties[index].icon}
            />
            <span>{UseCaseData[reverse ? 1 : 0].properties[index].desc}</span>
        </div>
    );

    return (
        <>
        {/* side 1 */}
        {/* The value reverse to reverse the component */}
            <div className={reverse ? 'Af-UseCasesComponentReverse ' : 'Af-UseCasesComponent'}>
                <div className={reverse ? 'Af-UseCasesComponentSide-1-Reverse ' : 'Af-UseCasesComponentSide-1'} data-aos="fade-left">
                    {/* The upper section of the card */}
                    <div className='Af-cardTop'>
                        {renderCard(0)}
                        {renderCard(1)}
                    </div>
                    {/* The lower section of the card  */}
                    <div className='Af-cardBottom'>
                        {renderCard(2)}
                        {renderCard(3)}
                    </div>
                </div>
                {/* side 2 */}
                <div className='Af-UseCasesComponentSide-2'>
                    {/* side 2 title */}
                    <div className='Af-UseCasesComponentSide-2-title'>
                        <h4 className='fs-30 fw-500' data-aos="fade-up">{UseCaseData[reverse ? 1 : 0].heading.title}</h4>
                        <p className='f-18 fw-300' data-aos="fade-up" data-aos-delay="200">{UseCaseData[reverse ? 1 : 0].heading.desc}</p>
                    </div>
                    {/* Addition for counter from react-scroll-trigger and react-countup library */}
                    <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                        <div className='Af-UseCasesComponentSide-2-rating'>
                            <div className='Af-rate'>
                                {!reverse && <h3 className='f-58'>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={78}
                                            duration={2.75}>
                                        </CountUp>
                                    }
                                    %</h3>}
                                {reverse && <h3 className='f-58'>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={65}
                                            duration={2.75}>
                                        </CountUp>
                                    }
                                    %
                                </h3>}
                                {!reverse && <p className='f-18 fw-300'>{UseCaseData[0].rating[0].desc}</p>}
                                {reverse && <p className='f-18 fw-300'>{UseCaseData[1].rating[0].desc}</p>}
                            </div>
                            
                            <div className='Af-line'>
                                {/* Dashed line */}
                            </div>
                            <div className='Af-rate'>
                                {!reverse && <h3 className='f-58'>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={63}
                                            duration={2.75}>
                                        </CountUp>
                                    }
                                    %
                                </h3>}
                                {reverse && <h3 className='f-58'>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={70}
                                            duration={2.75}>
                                        </CountUp>
                                    }
                                    %
                                </h3>}
                                {!reverse && <p>{UseCaseData[0].rating[1].desc}</p>}
                                {reverse && <p>{UseCaseData[1].rating[1].desc}</p>}
                            </div>
                            <div className='Af-line'>
                            {/* Dashed line */}
                            </div>
                            <div className='Af-rate'>
                                {!reverse && <h3 className='f-58'>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={91}
                                            duration={2.75}>
                                        </CountUp>
                                    }
                                    %
                                </h3>}
                                {reverse && <h3 className='f-58'>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={45}
                                            duration={2.75}>
                                        </CountUp>
                                    }
                                    %
                                </h3>}
                                {!reverse && <p>{UseCaseData[0].rating[2].desc}</p>}
                                {reverse && <p>{UseCaseData[1].rating[2].desc}</p>}
                            </div>
                        </div>
                    </ScrollTrigger>
                    {/* button */}
                    <div className='Af-UseCasesComponentSide-2-button'>
                        <button className='Af-Btn'>Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}