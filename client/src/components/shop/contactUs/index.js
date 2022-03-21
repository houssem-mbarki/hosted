import React from "react";
import Layout from "../layout";

const ContactUsComponent = (props) => {
  return (
    <div className="flex flex-col items-center justify-center my-32">
      <span className="text-center text-gray-700 text-4xl font-bold tracking-widest">
      </span>
       <div className="text-center text-gray-700 text-4xl font-bold tracking-widest">
  <h4>Informations</h4>
  <div class="flex flex-col items-center justify-center my-32">
    <div class="data">29 nahj nakhil borj cedria afh Tunis Tunisia</div>
  </div>
        <div class="flex flex-col items-center justify-center my-32">
      <div class="data">
        Call Us :
        <a href="tel:+216 58 01 72 89">+216 58 01 72 89</a>
       </div>
    </div>
    <div class="flex flex-col items-center justify-center my-32">
      <div class="data email">
      Email us  :
         <a href="mailto:hassou23955@gmail.com">hassou23955@gmail.com</a>
       </div>
    </div>
  </div>
    </div>
  );
};

const ContactUs = (props) => {
  return <Layout children={<ContactUsComponent />} />;
};

export default ContactUs;

