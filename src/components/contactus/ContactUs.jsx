import React, { useContext, useEffect, useState } from 'react'
import "./ContactUs.css";
import frame from "../../assets/frame.png";
import logo from "../../assets/image/contact us/logo.png";
import { GrClose } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import cock from "../../assets/image/contact us/cock.png";
import baseModel from '../../model/base.model';
import contactModel from '../../model/contact.model';
import { helper } from '../../lib/helper';
import Select from 'react-select';
import _ from 'lodash';
import AuthContext from '../../utility/Usecontext';

const ContactUs = () => {

  const{setContact, contact }=useContext(AuthContext)
  const closePopup = () => {

    setContact(false);
    document.getElementById('homeDiv').classList.remove('background-blur');
    document.getElementById('homeDiv').classList.remove('remove-scroll');
    document.getElementById('homeDiv').classList.remove('restrictHeight');
  }
  const [countries, setCountries] = useState([]);
  const [countryOptions, setCountryOptions] = useState([]);
  const [selectCountry, setSelectCountry] = useState(null);
  useEffect(() => {
    baseModel.countrylist().then((countryRes) => {
      //console.clear();
      //console.log("countryRes",countryRes)
      let countriesList = _.orderBy(countryRes, [function (o) { return o.name.common; }], ['asc']);
      const opt = [];
      countriesList?.map((item, index) => {
        //console.log(item.flags.png);
        //console.log(item.name.common);
        opt.push({ value: item.idd.root + item.idd.suffixes, label: '(' + item.idd.root + item.idd.suffixes + ') ' + item.name.common })
      });
      if (opt.length > 0) {
        //console.log("opt", opt);
        setCountryOptions(opt);
      }
    }).catch((error) => {
      console.log(error);
    });
    console.log("countries", countries);
  }, []);
  const onCountrySelect = (e) => {
    setSelectCountry(e);
  };

  const validateNumber = (e) => {
    if (/\D/g.test(e.target.value)) {
      e.target.value = e.target.value.replace(/\D/g, '');
    }
  }

  const onSubmit = (async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    //console.clear();
    //console.log("data ", formData);
    await contactModel.submitContact(formData).then((res) => {
      if(res?.data?.is_error === false) {
        closePopup();
        helper.sweetalert.toast(res?.data?.message);
      } else {
        helper.sweetalert.toast(res?.data?.message, "warning");
      }
      //console.log("respnse => ",res.data);
    }).catch((error) => {
      console.error(error.response?.data)
    })
  });

  return (
    <>
      {contact ? (
        <div className='c'>
          <div className="c-wrapper">

            <div className="c-items-wrapper">
              <div className="c-header">
                <div className="c-left">
                  <p>Get in touch</p>
                </div>
                <div className="c-middle">
                  <img src={cock} alt="" className="c-middle-img" />
                </div>
                <div className="c-right">
                  <img src={logo} className="c-logo" alt="logo" />
                </div>
              </div>
              <form onSubmit={onSubmit} encType="multipart/form-data">
                <div className="input-background">
                  <input type="text" placeholder='YOUR NAME' className="f-input" type="text" name='contact_name' required />
                  <input type="text" placeholder='YOUR LOCATION' className="f-input" type="text" name='contact_location' required />
                  <input type="text" placeholder='YOUR EMAIL ADDRESS' className="f-input" type="email" name='contact_email' required />
                </div>
                <div className='f-input-item'>
                  {/* <input type="text" placeholder='COUNTRY CODE' className="f-input-code" /> */}
                  <Select
                    isSearchable
                    options={countryOptions}
                    name={"contact_country"}
                    value={selectCountry}
                    onChange={onCountrySelect}
                  />
                  <input type="text" placeholder='PHONE NUMBER' name='contact_cont' className="f-input-mobile" maxLength={10} onKeyUp={validateNumber} required />
                </div>
                <div className="input-background">
                  <input type="text" placeholder='SUBJECT' className="f-input" name='contact_subject' required />
                  <textarea type="text" placeholder='YOUR MESSAGE' name='contact_message' className="f-input-multi" rows={6} />
                  <button className='f-submit-btn' type='submit'>SUBMIT</button>
                </div>
              </form>
              <div className='f-footer'>
                <div className="f-footerleft"><a href="mailto:hello@thecrazycockwhisky.com" className='mailclass'>hello@thecrazycockwhisky.com</a></div>
                <div className='f-footerright'>
                  <div className="f-footerright-item">STAY CONNECTED</div>
                  <div className="f-footerright-item"><FaFacebookF /></div>
                  <div className="f-footerright-item"><BsInstagram /></div>

                </div>
              </div></div>
            <img src={frame} className='c-frame' alt='frame' />
            <div className='c-close' onClick={closePopup}>< GrClose /></div>

          </div>
        </div>
      ) : null}
    </>
  )
}

export default ContactUs