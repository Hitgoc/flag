import { useRef, useState } from "react";
import "../Components/styles/flagBody.css";
import "../font-awesome-4.7.0/css/font-awesome.css";
import "../fontawesome-free-5.15.3-web/css/fontawesome.css";

const FlagBody = () => {
  const [showList, setShowList] = useState();
  const [isSecondClick, setIsSecondClick] = useState();
  const [label, setLabel] = useState();

  const displayList = () => {
    setShowList(true);
    setIsSecondClick(true);
    if (isSecondClick) {
      setShowList(false);
      setIsSecondClick(false);
    }
  };

  const hover = (e) => {
    e.currentTarget.style.cursor = "pointer";
  };

  const flagRef = useRef();
  const circleRef = useRef();

  const lowColor = () => {
    flagRef.current.style.color = "lightgrey";
    circleRef.current.style.border = "2px dashed lightgrey";
    flagRef.current.style.transition = "ease-in-out 0.3s";
    circleRef.current.style.transition = "ease-in-out 0.3s";
    // circleRef.current.style.borderStyle = "dashed";
    setShowList(false);
    setIsSecondClick(false);
    setLabel("Low");
  };
  const mediumColor = () => {
    flagRef.current.style.color = "lightpink";
    circleRef.current.style.border = "2px solid lightpink";
    circleRef.current.style.borderStyle = "dashed";
    flagRef.current.style.transition = "ease-in-out 0.3s";
    circleRef.current.style.transition = "ease-in-out 0.3s";
    setShowList(false);
    setIsSecondClick(false);
    setLabel("Medium");
  };
  const highColor = () => {
    flagRef.current.style.color = "deepskyblue";
    circleRef.current.style.border = "2px solid deepskyblue";
    circleRef.current.style.borderStyle = "dashed";
    flagRef.current.style.transition = "ease-in-out 0.3s";
    circleRef.current.style.transition = "ease-in-out 0.3s";
    setShowList(false);
    setIsSecondClick(false);
    setLabel("High");
  };
  const criticalColor = () => {
    flagRef.current.style.color = "red";
    circleRef.current.style.border = "2px solid red";
    circleRef.current.style.borderStyle = "dashed";
    flagRef.current.style.transition = "ease-in-out 0.3s";
    circleRef.current.style.transition = "ease-in-out 0.3s";
    setShowList(false);
    setIsSecondClick(false);
    setLabel("Critical");
    flagRef.current.style.transition = "ease-in 1s";
  };
  const clearColor = () => {
    flagRef.current.style.color = "white";
    circleRef.current.style.border = "2px solid white";
    circleRef.current.style.borderStyle = "dashed";
    flagRef.current.style.transition = "ease-in-out 0.3s";
    circleRef.current.style.transition = "ease-in-out 0.3s";
    setShowList(false);
    setIsSecondClick(false);
    setLabel(null);
  };

  return (
    <div>
      <div id="card-body">
        <div id="card-content">
          <p>Likelihood</p>
          <div ref={circleRef} id="circle">
            <i
              ref={flagRef}
              onClick={displayList}
              onMouseOver={hover}
              id="flag"
              className="fa fa-flag fa-2x"
              aria-hidden
            />
          </div>
          {label && <div id="label">{label}</div>}
        </div>
        <div id="card-part">
          {showList && (
            <div id="list">
              <ul>
                <li onClick={lowColor} id="low">
                  Low
                </li>
                <li onClick={mediumColor} id="medium">
                  Medium
                </li>
                <li onClick={highColor} id="high">
                  High
                </li>
                <li onClick={criticalColor} id="critical">
                  Critical
                </li>
                <li onClick={clearColor} id="clear">
                  Clear
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlagBody;
