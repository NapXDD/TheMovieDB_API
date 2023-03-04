import Logo from "./Logo/Logo"
import Navigation from "./Navigation/Navigation"
import AddMovie from "./AddMovie/AddMovie"
import ProfileSetting from "./ProfileSetting/ProfileSetting"
import SearchIcon from "./Search/SeachIcon"
import "./navbar.css"

export default function Navbar(){

    return(
        <div className="navbar-container">
            <div className="navbar-content">
                <div className="navbar-left">
                    <div className="navbar-logo">
                        <Logo></Logo>
                    </div>
                    <div className="navbar-navigation">
                        <Navigation />
                    </div>
                </div>
                <div className="navbar-right">
                    <div className="add-movie">
                        <AddMovie />
                    </div>
                    <div className="profile-settings">
                        <ProfileSetting />
                    </div>
                    <div className="search">
                        <SearchIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}