import React ,{useState} from 'react'
import style from './recommended.module.css'
import {faArrowRight , faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Recommended() {
    
    const [clicked , setClicked] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardWidth = 300;
    const totalCards = 5;


    const handelCarousel=()=>{
        if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    setClicked(false);
    }


    const handelCarousel2=()=>{
         if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    setClicked(true);
    }



  return (
    <>
      <div className={style.rec_secCarousle}>

       <div className={style.rec_sec_top}>
         <div className={style.rec_sec_top_left}>
         <h4>Courses Recommended For You</h4>
         </div>
     <div className={style.rec_sec_top_right}>
<div className={style.rec_sec_top_line_parent}>
<div className={clicked == false? style.rec_sec_top_line: style.rec_sec_top_line_move }>
</div>
</div>
         <div className={style.rec_sec_top_back}  onClick={handelCarousel}>
         <FontAwesomeIcon 
         className={style.rec_sec_top_back_icon}
          icon={faArrowLeft}/>
            </div>
         <div className={style.rec_sec_top_forward} onClick={handelCarousel2}>
         <FontAwesomeIcon className={style.rec_sec_top_back_icon} icon={faArrowRight}/>
         </div>
     </div>
       </div>


       <div className={style.rec_sec_bottom} style={{ transform: `translateX(${currentIndex * cardWidth}px)` }}>
  <div className={style.courseCard}></div>
  <div className={style.courseCard}></div>
  <div className={style.courseCard}></div>
  <div className={style.courseCard}></div>
  <div className={style.courseCard}></div>
</div>
<button className={style.carButton}> Watch all Video Lessons </button>
      </div>
    </>
  )
}

export default Recommended





/* <div  className={clicked == false? style.courseCardDefault: style.courseCard }></div>
<div  className={clicked == false? style.courseCardDefault: style.courseCard }></div>
<div  className={clicked == false? style.courseCardDefault: style.courseCard }></div> */


    /* <div className={style.rec_sec_bottom} style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}>
          <div className={style.courseCard}></div>
          <div className={style.courseCard}></div>
          <div className={style.courseCard}></div>
          <div className={style.courseCard}></div>
          <div className={style.courseCard}></div>
        </div> */
        /* <div className={style.rec_sec_bottom}>
                    {[...Array(totalCards)].map((_, index) => (
                        <div
                            key={index}
                            className={style.courseCard}
                            style={{ transform: `translateX(-${currentIndex * 300}px)` }}
                        ></div>
                    ))}
                </div> */