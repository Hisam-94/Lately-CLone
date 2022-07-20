import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = () => {

    function onChange(value) {
        console.log("Captcha value:", value);
    }
  return (
    <div className="App">
    <ReCAPTCHA
      sitekey="6LdxyQchAAAAAJ2JKHtBAUbQcs0mixVDLlgHD3_1"
      onChange={onChange}
    />
  </div>
  )
}

export default Captcha