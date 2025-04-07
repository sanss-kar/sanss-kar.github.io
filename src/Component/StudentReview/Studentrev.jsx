import React, { useRef } from "react";
import "./Studentrev.css";
import next_btn from "../../assets/next-icon.png";
import prev_btn from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Studentrev = () => {
  const slider =  useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img src={next_btn} alt="" className="next-btn" onClick={slideForward} />
      <img src={prev_btn} alt="" className="back-btn" onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Rohan Sharma</h3>
                  <span>Student, Bihar</span>
                </div>
              </div>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              perspiciatis possimus unde deserunt minus accusamus quia deleniti.
              Fuga corporis mollitia molestiae, quis voluptates distinctio odit,
              culpa, fugit optio modi vitae!
            </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Rohan Sharma</h3>
                  <span>Student, Bihar</span>
                </div>
              </div>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              perspiciatis possimus unde deserunt minus accusamus quia deleniti.
              Fuga corporis mollitia molestiae, quis voluptates distinctio odit,
              culpa, fugit optio modi vitae!
            </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Rohan Sharma</h3>
                  <span>Student, Bihar</span>
                </div>
              </div>
           
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              perspiciatis possimus unde deserunt minus accusamus quia deleniti.
              Fuga corporis mollitia molestiae, quis voluptates distinctio odit,
              culpa, fugit optio modi vitae!
            </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Rohan Sharma</h3>
                  <span>Student, Bihar</span>
                </div>
              </div>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              perspiciatis possimus unde deserunt minus accusamus quia deleniti.
              Fuga corporis mollitia molestiae, quis voluptates distinctio odit,
              culpa, fugit optio modi vitae!
            </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Studentrev;
