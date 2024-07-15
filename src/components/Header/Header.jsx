import style from "./nav.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div className={style.cont}>
        <div className={style.navbar}>
          <div className={style.logo}>
            <Link to="/" className={style.dec}>
              <h3>Masar Academy</h3>
            </Link>
          </div>
          <div className={style.links}>
            <Link to="/" className={style.decoration}>
              Home
            </Link>
            <Link to="/courses" className={style.decoration}>
              Courses
              <FontAwesomeIcon
                className={style.FontAwesomeIcon}
                icon={faCaretDown}
              />
              <div className={style.dropdown_content}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </Link>
            <Link to="/lesson" className={style.decoration}>
              Religious Lessons
              <FontAwesomeIcon
                className={style.FontAwesomeIcon}
                icon={faCaretDown}
              />
              <div className={style.dropdown_content}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </Link>
            <Link to="/about" className={style.decoration}>
              About
            </Link>
            <Link to="/contact" className={style.decoration}>
              Contact
            </Link>
          </div>
          <div className={style.search}>
            <input type="search" name="" id="" placeholder="Search in Site" />
            <FontAwesomeIcon
              className={style.FontAwesomeIconSearch}
              icon={faMagnifyingGlass}
            />
          </div>
          <div>
            <Link to="/login" className={style.decoration1}>
              <button className={style.btn1}>
                <FontAwesomeIcon
                  className={style.FontAwesomeIconUser}
                  icon={faUser}
                />
                Log in
              </button>
            </Link>
            <button className={style.btn2}>EN</button>
          </div>
        </div>
        <div className={style.shadow}></div>
      </div>
    </>
  );
}

export default Header;
