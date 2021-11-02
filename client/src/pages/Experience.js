import React from "react";

// const styles = {
//          span: { className: "my-work-experience-company" }
// }
export const Experience = () => {
  return (
    <div class="main-content-section">
      <div class="my-work-experience-section">
        <h3 class="main-content-title">Work Experience</h3>
        {/* <!-- Company 3 --> */}
        <div class="my-work-experience-company-block">
          <h4 class="my-work-experience-position">
            Web developer{" "}
            <span class="my-work-experience-company">
              ThemeREX Web Studio (Envato)
            </span>
          </h4>
          <p class="main-content-period">
            February 2021 - up to now{" "}
            <span class="main-content-divider">|</span>{" "}
            Nikolaev(Ukraine)/Australia
          </p>
          <ul class="my-work-experience-lists">
            <li class="my-work-experience-list-item">
              Layout of 15-page sites on WordPress
              <p>Using WordPress, Elementor, WooCommerce</p>
            </li>
            <li class="my-work-experience-list-item">
              Layout of one-page(landing page) sites
              <p>HTML5, CSS3/SCSS, JS / PHP </p>
            </li>
          </ul>
        </div>
        {/* <!-- Company 2 --> */}
        <div class="my-work-experience-company-block">
          <h4 class="my-work-experience-position">
            Front-end developer{" "}
            <span class="my-work-experience-company">Freelance</span>
          </h4>
          <p class="main-content-period">
            June 2020 - August 2020 <span class="main-content-divider">|</span>{" "}
            Nikolaev/Ochakov(Ukraine)
          </p>
          <ul class="my-work-experience-lists">
            <li class="my-work-experience-list-item">
              Сreation of a site for the recreation center "Parus"
            </li>
            <li class="my-work-experience-list-item">
              HTML5, CSS, JS / PHP, jQuery
            </li>
            <li class="my-work-experience-list-item">http://parus.inf.ua/</li>
          </ul>
        </div>
        {/* <!-- Company 1 --> */}
        <div class="my-work-experience-company-block">
          <h4 class="my-work-experience-position">
            Student of software development{" "}
            <span class="my-work-experience-company">
              Computer Academy STEP{" "}
            </span>
          </h4>
          <p class="main-content-period">
            June 2018 - December 2020{" "}
            <span class="main-content-divider">|</span> Nikolaev(Ukraine)
          </p>
          <ul class="my-work-experience-lists">
            <li class="my-work-experience-list-item">
              Learning JS, PHP, C#, Java;
            </li>
            <li class="my-work-experience-list-item">
              Using jQuery, Bootstrap, ReactJS+Node.JS, AngularJS, ASP.Net;
            </li>
            <li class="my-work-experience-list-item">
              Working with Databases (MySQL (MariaDB), MS SQL Server, MongoDB),
              phpMyAdmin, mongoose;
            </li>
            <li class="my-work-experience-list-item">
              Working with Github, Azure, Jira;
            </li>
            <li class="my-work-experience-list-item">
              Application development using Windows Forms and WPF
              (https://github.com/michw85/To_Do_List, / TextRedactor, /
              chatbot_wpf);
            </li>
            <li class="my-work-experience-list-item">
              Exploring Shopify (Liquid);
            </li>
            <li class="my-work-experience-list-item">
              Working with Adobe XD, Figma
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- My education section --> */}
      <div class="my-education-section">
        <h3 class="main-content-title">Education</h3>
        <h4 class="my-education-university">
        Institute of Public Administration at the P.Mogila NSHU
        </h4>
        <h5 class="my-education-speciality">Specialty - Master of Public Administration in the field of economics.</h5>
        <p class="main-content-period">
          September 2006 - October 2007 <span class="main-content-divider">|</span>{" "}
          Ukraine
        </p>
        <h4 class="my-education-university">
        Petro Mogila Nikolaev State Humanitarian University (NSHU)
        </h4>
        <h5 class="my-education-speciality">Specialty - Master of Political Science</h5>
        <p class="main-content-period">
          September 2001 - July 2006 <span class="main-content-divider">|</span>{" "}
          Ukraine
        </p>
      </div>
    </div>
  );
};
