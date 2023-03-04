import s from "./logo.module.css"
import { Link } from "react-router-dom"

export default function Logo(){
    return(
        <div className={s.navbarLogo}>
            <Link to="/"><img src="..\public\assets\Logo\logo.svg" alt="logo" /></Link>
        </div>
    )
}