import "./Experience.css";

function Experience() {
  return (
    <div className="experience">
      <div className="flex">
        <div className="text">
          <div className="left-margin">
            <h1 className="header-text">3+ years working experience</h1>
            <p className="paragraph">
              Over the years, I have builts products for large and small
              businesses all across the country, ranging from marketing websites
              to complex commercial websites, all with an emphasis on providing
              fast, elegant and accesible user experiences
            </p>
            <p className="paragraph">
              Currently, I work at African Trainovation Consult as a Frontend
              Engineer where i build applications using Reactjs
            </p>

            <p className="paragraph">
              Before now, the prinicipal frontend Engineer at 720degree
              Innovation Hub, where i built different user interfaces using
              modern web technologies
            </p>

            <a href="https://my.indeed.com/rdp/c804a2e2ca457810/pdf">
              <button>Download Resume</button>
            </a>
          </div>
        </div>
        <div className="box">
          <div className="image-box">
            <img className="vector-image" src="/images/vector.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
