import React from "react";

const Footer = () => {
  return (
    <footer className="pt-4 pb-0 bg-teal-500">
      <div className="w-full md:flex justify-center text-white pl-4 pr-4 pb-2">
        <div className="md:w-1/3 flex justify-center">
          <div>
            <h2 className="text-lg">FOOTER CONTENT</h2>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div>
            <h2 className="text-lg">LINKS</h2>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
              <li>Link 5</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          {" "}
          <div>
            <h2 className="text-lg">LINKS</h2>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
              <li>Link 5</li>
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
