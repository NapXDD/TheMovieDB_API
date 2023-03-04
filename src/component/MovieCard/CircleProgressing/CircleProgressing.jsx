import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import s from "./circleprogressing.module.css"
import "react-circular-progressbar/dist/styles.css";
import "./circleCustom.css"

export default function CirclrProgressing({data}){
    return(
        <CircularProgressbar
        value={data.vote_average*10}
        text={`${(data.vote_average*10).toFixed()}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#081C22",
          textColor: "#fff",
          pathColor:(data.vote_average*10).toFixed() > 70 ? "#20CA77": 
                        (data.vote_average*10).toFixed() <= 70 ? "#D0D331" : "red",
          trailColor: "transparent",
          textSize: "16px",
        })}
        className={s.circleProgressing}
      />
    )
}