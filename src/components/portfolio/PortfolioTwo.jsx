import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const tabList = ["All", "User Interfaces", "3D Models & Renderings", "UI/UX Research"];

const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/plantpulsecover.png",
        title: "Plant Pulse",
        meta: "User Interfaces",
        portfolioLink:
          "https://dribbble.com/shots/22349928-Plant-Pulse-Website",
      },
      {
        img: "/img/portfolio/1.png",
        title: "Corvette",
        meta: "3D Models & Renderings",
        portfolioLink:
          "https://dribbble.com/shots/22327981-Blender-Corvette",
      },
      {
        img: "/img/portfolio/snoozycover.png",
        title: "SnoozyTales",
        meta: "User Interfaces",
        portfolioLink:
          "https://dribbble.com/shots/22328001-SnoozyTales-AI-story-creator",
      },
      {
        img: "/img/portfolio/mclaren.png",
        title: " McLaren",
        meta: "3D Models & Renderings",
        portfolioLink: "https://dribbble.com/shots/22327984-Blender-McLaren",
      },
      {
        img: "/img/portfolio/sassyclassycover.png",
        title: "Sassy & Classy Makeup",
        meta: "User Interfaces",
        portfolioLink:
          "https://dribbble.com/shots/22339500-Sassy-Classy-Makeup-Mockup",
      },
      {
        img: "/img/portfolio/hollowknightcover.png",
        title: " Hollow knight",
        meta: "3D Models & Renderings",
        portfolioLink: "https://dribbble.com/shots/22348651-HollowKnight-3D-Model-Rendering",
      },
      // {
      //   img: "/img/portfolio/7.jpg",
      //   title: " Sweet Cherry",
      //   meta: "Photography",
      //   portfolioLink:
      //     "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      // },
      // {
      //   img: "/img/portfolio/3.jpg",
      //   title: "Behance Shoot",
      //   meta: "Branding",
      //   portfolioLink: "https://www.behance.net/ib-themes",
      // },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/plantpulsecover.png",
        title: "Plant Pulse",
        meta: "User Interfaces",
        portfolioLink:
          "https://dribbble.com/shots/22349928-Plant-Pulse-Website",
      },
      {
        img: "/img/portfolio/snoozycover.png",
        title: "SnoozyTales",
        meta: "User Interfaces",
        portfolioLink: "https://dribbble.com/shots/22328001-SnoozyTales-AI-story-creator",
      },
      {
        img: "/img/portfolio/sassyclassycover.png",
        title: "Sassy & Classy Makeup",
        meta: "User Interfaces",
        portfolioLink: "https://dribbble.com/shots/22339500-Sassy-Classy-Makeup-Mockup",
      },
      // other User Interfaces items
    ],
  },
  {
    porftoliItems: [
      // 3D Models items
      {
        img: "/img/portfolio/1.png",
        title: "Corvette",
        meta: "3D Models & Renderings",
        portfolioLink:
          "https://dribbble.com/shots/22327981-Blender-Corvette",
      },
      {
        img: "/img/portfolio/hollowknightcover.png",
        title: " Hollow knight",
        meta: "3D Models & Renderings",
        portfolioLink: "https://dribbble.com/shots/22348651-HollowKnight-3D-Model-Rendering",
      },
      {
        img: "/img/portfolio/mclaren.png",
        title: " McLaren",
        meta: "3D Models & Renderings",
        portfolioLink: "https://dribbble.com/shots/22327984-Blender-McLaren",
      }
    ],
  },
  {
    porftoliItems: [
      // Research Papers
      {
        img: "/img/portfolio/page1.png",
        title: " 3D Integration Research",
        meta: "UI/UX Research",
        portfolioLink: "https://www.dropbox.com/scl/fi/lxdnl98h017svttdcs728/3DbyJamesCollick.pdf?rlkey=cav8o54x9piuvfw99gxxn04jf&dl=0",
      }
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="shane_tm_section" id="portfolio">
      <div className="shane_tm_portfolio">
        <div className="container">
          <div className="positon-relative">
            <div className="shane_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>James Collick</span>
                  <h3>Design Portfolio</h3>
                </div>
              </div>
            </div>
            {/* End shane_tm_title */}

            <div className="portfolio_filter">
              <Tabs>
                <TabList>
                  {tabList.map((val, i) => (
                    <Tab key={i}>{val}</Tab>
                  ))}
                </TabList>
                {/* End tablist */}
                <div className="portfolio_list has-effect">
                  {tabListContent.map((tabContent, i) => (
                    <TabPanel key={i}>
                      <ul className="gallery_zoom">
                        {tabContent.porftoliItems.map((val, i) => (
                          <li
                            key={i}
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay={val.delayAnimation}
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a
                                  href={val.portfolioLink}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  <img src={val.img} alt="portfolio" />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href={val.portfolioLink}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    {val.title}
                                  </a>
                                </h3>
                                <span>{val.meta}</span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </TabPanel>
                  ))}
                  {/* End tabpanel */}
                </div>
                {/* End list wrapper */}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;