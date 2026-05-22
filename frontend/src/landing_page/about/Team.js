import React from "react";

function AboutMe() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 fw-bold">Profile</h1>

      <div className="row align-items-center">

        
        <div className="col-md-4 text-center">
         <div className="img-wrapper">
  <img
    src="images/akshay.jpg"
    alt="Akshay"
    className="profile-img"
  />
</div>

          <h4 className="mt-3 fw-semibold">Akshay Byri</h4>
         <p className="text-muted">
  Software Engineer | MERN Stack Developer
</p>
        </div>

       
        <div className="col-md-8">
          <p className="about-text">
I am a Full Stack Web Developer with a strong foundation in full stack web development, focused on building scalable and user-friendly web applications. I work across both frontend and backend technologies to create complete end-to-end solutions.
</p>

<p className="about-text">
I enjoy solving real-world problems, writing clean and maintainable code, and continuously learning new technologies. This Zerodha clone project reflects my ability to design and develop modern web applications with a focus on performance and user experience.
</p>

         

 <div className=" connect-row mt-4">
  <p className="connect-title">Connect with me :</p>


 <div className="social-icons">

  <a 
    href="https://www.linkedin.com/in/akshaybyri1102/" 
    target="_blank" 
    rel="noreferrer"
  >
    <i className="bi bi-linkedin"></i>
  </a>

  <a 
    href="https://github.com/Akshay-byri-9" 
    target="_blank" 
    rel="noreferrer"
  >
    <i className="bi bi-github"></i>
  </a>

  <a href="mailto:akshaybyri5@gmail.com">
    <i className="bi bi-envelope-fill"></i>
  </a>

</div>

</div>
        </div>

      </div>
    </div>
  );
}

export default AboutMe;