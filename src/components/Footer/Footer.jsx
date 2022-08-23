import React from 'react';
import './Footer.scss';
import OutLineBtn from '../../layout/buttons/OutLineBtn';
import { IoMail } from 'react-icons/io5';
import { HiIdentification } from 'react-icons/hi';
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="row row-cols-lg-3 row-cols-1 text-center gy-4"
    >
      <div className="col text-lg-start">
        <h3 className="text-uppercase">get in touch</h3>
        <ul className="list-unstyled ">
          <li>
            <span className="d-inline-block me-2 h4">
              <IoMail />
            </span>
            elkhorebykhaled@gmail.com
          </li>
          <li>
            <span className="d-inline-block me-2 h4 ">
              <HiIdentification />
            </span>
            01090771131
          </li>
        </ul>
      </div>
      <div className="col">
        <OutLineBtn>Contact me</OutLineBtn>
      </div>
      <div className="col text-lg-end">
        <span className="d-inline-block me-1 h4">
          <AiFillLinkedin />
        </span>
        <span className="d-inline-block me-1 h4">
          <AiFillFacebook />
        </span>
        <span className="d-inline-block me-1 h4">
          <AiFillTwitterSquare />
        </span>
        <p>Copyright ©️ 2022</p>
      </div>
    </footer>
  );
}
