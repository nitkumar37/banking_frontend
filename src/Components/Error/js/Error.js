import "../css/error.css"
import { useState, useEffect } from "react";


function Error(props){
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

    return(

        
        <div className={`${loading ? 'loading' : ''} error`}>
          <h1>500</h1>
          <h2>Unexpected Error </h2>
          <div className="gears">
              <div className="gear one">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              </div>
              <div className="gear two">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              </div>
              <div className="gear three">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              </div>
          </div>
        </div>
      );
}
export default Error;