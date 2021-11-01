import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import techi from "../img/techi.jpg";
import mystik from "../img/Mystik.png";
import nelson from "../img/Nelson.jpg";
import plumber from "../img/Landing-Plumber.jpg";
import advocate from "../img/advocate.png";
import eclipse from "../img/Landing.png";
import reactBooks from "../img/reactBooks.jpg";
import reactChat from "../img/reactChat.jpg";
import reactTodo from "../img/reactTodo.jpg";
import reactResume from "../img/react-resume.png";

// const styles = {
//   divContent: { className: "main-content-section" },
//   divProject: { className: "my-project-section" },
//   h3: { className: "main-content-title" },
//   h4: { className: "main-content-smalltitle" },
//   ol: { className: "my-project-list" },
//   li: { className: "my-project-item" },
//   span: { className: "mmy-project-content" },
//   a: { className: "my-project-link" },
//   img: { className: "my-img-link" },
//   spanBrecket: { className: "my-project-brecket" },
// };

const posts = [
  {
    id: 1,
    site: "http://template-kit.themerex.net/mystik/template-kit/home-1/",
    content: "HTML5, CSS3, WordPress, Elementor",
    img: mystik,
    className: "my-img-link",
  },
  {
    id: 2,
    site: "http://template-kit.axiomthemes.com/techie/template-kit/",
    content: "HTML5, CSS3, WordPress, Elementor",
    img: techi,
    className: "my-img-link",
  },

  {
    id: 3,
    site: "https://template-kit.ancorathemes.com/nelson/template-kit/shop/",
    content: "HTML5, CSS3, WordPress, Elementor, WooCommerce",
    img: nelson,
    className: "my-img-link",
  },
];
const siteLanding = [
  {
    id: 1,
    site: "https://plumbing-parts.themerex.net/splash-test/",
    secondSite: "https://github.com/michw85/landing-page",
    content: "HTML5, CSS3, PHP, JavaScript",
    img: plumber,
    className: "my-img-link3",
  },
  {
    id: 2,
    site: "https://condescending-kalam-4c7bf8.netlify.app/#",
    secondSite: "https://github.com/michw85/website",
    content: "HTML5, CSS3, JavaScript",
    img: advocate,
    className: "my-img-link4",
  },

  {
    id: 3,
    site: "https://naughty-wozniak-e3d3d9.netlify.app/",
    secondSite: "https://github.com/michw85/website_layout",
    content: "HTML5, CSS3, JavaScript",
    img: eclipse,
    className: "my-img-link3",
  },
];
const reactApp = [
  {
    id: 1,
    site: "Book store",
    secondSite: "https://github.com/michw85/website_react",
    content:
      "HTML5, CSS3, JavaScript, React, react-bootstrap, MySQL, Apache, Tomcat",
    img: reactBooks,
    className: "my-img-link2",
  },
  {
    id: 2,
    site: "Chat",
    secondSite: "https://github.com/michw85/react-chat",
    content: "HTML5, CSS3, JavaScript, React, react-bootstrap, websocket/fetch",
    img: reactChat,
    className: "my-img-link2",
  },

  {
    id: 3,
    site: "Todo-list",
    secondSite: "https://github.com/michw85/react-todo",
    content:
      "HTML5, CSS3, JavaScript, React, Node.js, react-bootstrap, babel, webpack, redux",
    img: reactTodo,
    className: "my-img-link2",
  },

  {
    id: 4,
    site: "Site resume-ReactJS",
    secondSite: "https://github.com/michw85/react-resume",
    content:
      "HTML5, CSS3, JavaScript, React, Node.js, react-bootstrap, hooks, router",
    img: reactResume,
    className: "my-img-link2",
  },
];

const allWP = [
  {
    id: 1,
    site: "http://template-kit.themerex.net/digie/template-kit/home-1/",
  },
  { id: 2, site: "http://template-kit.axiomthemes.com/techie/template-kit/" },
  {
    id: 3,
    site: "http://template-kit.axiomthemes.com/busy/template-kit/home-1/",
  },
  {
    id: 4,
    site: "http://template-kit.themerex.net/yeasty/template-kit/home-1/",
  },
  {
    id: 5,
    site: "http://template-kit.themerex.net/mystik/template-kit/home-1/",
  },
  {
    id: 6,
    site: "https://template-kit.ancorathemes.com/maxinet-internet-provider/template-kit/home-1-pro/",
  },
  {
    id: 7,
    site: "http://template-kit.axiomthemes.com/hoverex/template-kit/home-1/",
  },
  {
    id: 8,
    site: "https://template-kit.ancorathemes.com/gourmet/template-kit/home-1-pro/",
  },
  {
    id: 9,
    site: "http://template-kit.themerex.net/prider/template-kit/home-1/",
  },
  {
    id: 10,
    site: "https://template-kit.ancorathemes.com/nelson/template-kit/home-1/",
  },
  {
    id: 11,
    site: "https://template-kit.ancorathemes.com/veggie/template-kit/home-1/",
  },
  {
    id: 12,
    site: "https://template-kit.ancorathemes.com/clean-skin/template-kit/home-1/",
  },
  {
    id: 13,
    site: "http://template-kit.axiomthemes.com/sounder/template-kit/home-1/",
  },
  {
    id: 14,
    site: "http://template-kit.axiomthemes.com/mounty/template-kit/home1/",
  },
];

function SiteList(props) {
  return (
    <ol className="my-project-list">
      {props.posts.map((post) => (
        <li key={post.id} className="my-project-item">
          <span className="my-project-content">
            <a href={post.site} className="my-project-link">
              {post.site}
            </a>
            <p>
              <a href={post.secondSite} className="my-project-link">
                {post.secondSite}
              </a>
            </p>
            <p>
              <span className="my-project-brecket">[</span> {post.content}
              <span className="my-project-brecket"> ]</span>
            </p>
          </span>
          <img src={post.img} className={post.className} alt={"background-foto"}/>
        </li>
      ))}
    </ol>
  );
}

function SiteLists(props) {
  return (
    <ol className="my-project-list">
      {props.posts.map((post) => (
        <li key={post.id} className="my-project-item">
          <span className="my-project-content">
            <a href={post.site} className="my-project-link">
              {post.site}
            </a>
          </span>
        </li>
      ))}
    </ol>
  );
}

export const Works = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="main-content-section">
        <div className="my-project-section">
          <h3 className="main-content-title" style={{'marginBottom':'20px'}}>Projects</h3>
          <h4 className="main-content-smalltitle">
            WordPress - web developing
          </h4>
          <SiteList posts={posts} />

          <Button variant="success" onClick={handleShow}>
            More projects
          </Button>
        </div>
        <div className="my-project-section">
          <h4 className="main-content-smalltitle">Landing pages</h4>
          <SiteList posts={siteLanding} />
        </div>
        <div className="my-project-section">
          <h4 className="main-content-smalltitle">React app</h4>
          <SiteList posts={reactApp} />
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sites</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SiteLists posts={allWP} />
        </Modal.Body>
      </Modal>
    </>
  );
};
