import React from "react";

const About = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                  <div
                    className="main"
                    style={{ backgroundImage: "url(img/about/blenderme.png)" }}
                  ></div>
                </div>

                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>About Me</span>
                  <h3>Creative UI/UX Designer based in Detroit, Michigan</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                  I'm a proud graduate of Herzing University, having earned my Bachelor of Science degree, magna cum laude, with a 3.8 GPA. For the past four years, I've worked as a freelance UI/UX designer, blending aesthetics with usability to create meaningful digital experiences.

My journey into interface design and development began in the early days of MySpace, where I first discovered the thrill of customizing layouts, editing code, and exploring the power of digital self-expression. That formative experience sparked a lifelong fascination with user interfaces and marked the moment I became a student of the digital art world.

Today, I bring that same curiosity, creativity, and precision to every project I take on. Whether I'm wireframing a new app, designing a seamless user flow, or coding responsive interfaces, I'm driven by the idea that great design isn't just about how something looks — it's about how it feels to use.

With an eye toward innovation and a deep respect for intuitive design, I'm eager to contribute to forward-thinking teams and help shape technology that's as beautiful as it is functional.
                  </p>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="img/resume/resume.png" download>
                    Download CV
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default About;
