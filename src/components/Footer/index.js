import React from "react";

const Footer = () => {
  return (
    <footer className="pt-4 pb-0 bg-teal-500">
      <div className="w-full md:flex justify-center text-white pl-4 pr-4 pb-2">
        <div className="md:w-1/3 flex justify-center">
          <div>
            <h2 className="text-lg">Application info</h2>
            <p>
              This is test app with react, redux, formik, yup and accuweather
              api
            </p>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div>
            <h2 className="text-lg">SOCIAL</h2>
            <ul>
              <li className="hover:text-black cursor-pointer">Facebook</li>
              <li className="hover:text-black cursor-pointer">Linkedin</li>
              <li className="hover:text-black cursor-pointer">Twitter</li>
              <li className="hover:text-black cursor-pointer">Telegram</li>
              <li className="hover:text-black cursor-pointer">YouTube</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          {" "}
          <div>
            <h2 className="text-lg">WORK</h2>
            <ul>
              <li className="hover:text-black cursor-pointer">Trello</li>
              <li className="hover:text-black cursor-pointer">Slack</li>
              <li className="hover:text-black cursor-pointer">GitHub</li>
              <li className="hover:text-black cursor-pointer">Bitbucket</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-teal-400 p-2">
        <p>© 2020 Copyright: Weather-App</p>
      </div>
    </footer>
  );
};

export default Footer;
