import React, { useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./TestimonialsSectionComponent.css";
import { StoredTestimonialsData, StoredTestimonialsBusinessData } from "../../Data/TestimonialsData";
import TestimonialsCardComponent from "../TestimonialsCardComponent/TestimonialsCardComponent";
import TitleComponent from '../TitleComponent/TitleComponent'
import prevImage from "../../assets/imgs/TestimonialsIcons/left-arrow.png";
import nextImage from "../../assets/imgs/TestimonialsIcons/right-arrow.png";

export default function TestimonialsSectionComponent() {

    const [swiperRef, setSwiperRef] = useState(null);
    const [toggleState, setToggleState] = useState(1);
    const [fade, setFade] = useState(false);
    const TestimonialsTabs = [
        { id: 1, label: "For Individuals", data: StoredTestimonialsData },
        { id: 2, label: "For Businesses", data: StoredTestimonialsBusinessData },
    ];
    const currentTestimonialsData = TestimonialsTabs.find(tab => tab.id === toggleState).data;

    //for swipping slider to prev slide
    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    //for swipping slider to next slide
    const nextHandler = () => {
        swiperRef.slideNext();
    };

    //swipping between tabs
    const toggleTab = (index) => {
        setFade(true);
        setTimeout(() => {
            setToggleState(index);
            setFade(false);
        }, 300);
    };

    return (
        <section className="AA-testimonials-section px-162 pb-150">
            <div className="title-tabs mb-100">
                {/* title custom component */}
                <TitleComponent
                    title="Our Testimonials"
                    desc="Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey"
                    highlightedWords={["Testimonials"]}
                    fw={false}
                />
                {/* tabs buttons */}
                <div className="tabs">
                    {TestimonialsTabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab fw-400 ${toggleState === tab.id ? "active-tab" : "" }`}
                            onClick={() => toggleTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="AA-slider-container">
                {/* left shadow for slider in large meduim screen */}
                <div className="AA-left-shadow" ></div>
                <div className={`fading ${fade ? 'fade-out' : 'fade-in'}`}>
                    {/* slidercomponent from swiper library */}
                    <Swiper
                        loop={true}
                        modules={[Autoplay, Navigation]}
                        slidesPerView={3}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        // responsive part in slider
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            993: { slidesPerView: 2 },
                            1300: { slidesPerView: 3 },
                        }}
                        onSwiper={(swiper) => setSwiperRef(swiper)} >
                            {/*  map all data from local storage  */}
                            {currentTestimonialsData.map((e, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <TestimonialsCardComponent data={e} />
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </div>
                {/* right shadow for slider in large meduim screen */}
                <div className="AA-right-shadow" ></div>
                {/* custom navigation button for slider */}
                <div className="AA-navigation-btns">
                    <button
                        className="AA-custom-swiper-navigation-prev"
                        onClick={prevHandler}
                        data-aos="fade-up"
                        >
                        <img className="AA-swiper-btn-icon" src={prevImage} alt="prev" />
                    </button>
                    <button
                        className="AA-custom-swiper-navigation-next"
                        onClick={nextHandler}
                        data-aos="fade-up"
                        >
                        <img className="AA-swiper-btn-icon" src={nextImage} alt="next" />
                    </button>
                </div>
            </div>

        </section>
    );
}