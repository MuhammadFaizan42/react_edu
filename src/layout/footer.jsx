import React from 'react'
import Footerlogo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer>
    <div className="page_width">
      <div className="inner_footer">
        <div className="colum_1">
          <img src={Footerlogo} alt="Logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy a type specimen book.
          </p>
        </div>
        <div className="colum_2">
          <h2>Company</h2>
          <ul>
            <li>
              <a href> How to Work </a>
            </li>
            <li>
              <a href>Papular Courses</a>
            </li>
            <li>
              <a href> Service</a>
            </li>
          </ul>
        </div>
        <div className="colum_2">
          <h2>Courses</h2>
          <ul>
            <li>
              <a href> Categories</a>
            </li>
            <li>
              <a href>Online Course</a>
            </li>
            <li>
              <a href> Video Course</a>
            </li>
          </ul>
        </div>
        <div className="colum_2">
          <h2>Support</h2>
          <ul>
            <li>
              <a href> FAQ </a>
            </li>
            <li>
              <a href>Help Center</a>
            </li>
            <li>
              <a href>Career</a>
            </li>
            <li>
              <a href>Privacy</a>
            </li>
          </ul>
        </div>
        <div className="colum_2">
          <h2>Contact info</h2>
          <p className="info">
            +0913-705-3875
          </p><br />
          <p className="info">
            ElizabethJ@jourrapide.com
          </p><br />
          <p className="info">
            4808 Skinner Hollow Road Days Creek, OR 97429
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <p className="copy">BookStore All Right Reserved, 2022</p>
    </div>
  </footer>
  )
}

export default Footer