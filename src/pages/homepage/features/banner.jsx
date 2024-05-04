import React from 'react'
import BannerImg from '../../../assets/top1.png'
import first_img from '../../../assets/online-test 1.png'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="page_width">
            <div className="banner_inner">
            <div className="content">
                <h2>
                    The <span>Smart</span> <br />
                    Choice For <span>Future </span> 
                </h2>
                <p>
                Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the... 
                </p>
                <div className="search_box">
                    <input type="text" placeholder='Search for Location ...' className= 'search_box_input' />
                    <button>Continue</button>
                </div>
            </div>
            <div className="img">
                <img src={BannerImg} width='100%' alt='banner_img' />
            </div>

            </div>
        </div>
        <div className="short_banner">
            <div className="first_container">
                <div className="first_img">
                    <img src={first_img} alt="img" />
                </div>
                <div className="first_text">
                    <h2>Learn The Latest Skills</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.</p>
                </div>
            </div>
            <div className="second_container">
                <div className="second_imag">

                </div>
                <div className="second_test">
                    <p>2nd</p>
                </div>
            </div>
            <div className="third_container">
                <div className="third_imag">

                </div>
                <div className="third_test">
                    <p>third</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Banner