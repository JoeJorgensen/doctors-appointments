import { useContext } from "react";
import Card from "../components/Card";
import { DataContext } from "../providers/DataProvider";
const About = () => {
  const { dataDemo, setDataDemo } = useContext(DataContext);
  return (
    <div>
      <h1>About Page</h1>
      {/* <p>find me in the pages/About.js</p> */}

      {/* <h1>Features</h1> */}
      {/* <Card>
        <h3>Data Provider Setup</h3>
        <button onClick={() => setDataDemo("dataDemo changed in about")}>
          Change dataDemo
        </button>
        <p>dataDemo: {dataDemo}</p>
      </Card> */}

      <Card>
        <h3>An App For Doctors And Patients</h3>
        
      </Card>

      {/* <h3>Hooks</h3> */}
    </div>
  );
};

export default About;
