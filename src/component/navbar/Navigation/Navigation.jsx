import "./navigation.css"

export default function Navigation(){

    const navigation = [
        {
            label: "Movies",
            children: ["Popular", "Now Playing", "Upcoming", "Top Rated"]
        },
        {
            label: "TV Shows",
            children: ["Popular", "Airing Today", "On TV", "Top Rated"]
        },
        {
            label: "People",
            children: ["Popular People"]
        },
        {
            label: "More",
            children: ["Discussions", "Leaderboard", "Support", "API"]
        },
    ]

    return(
        <div className="Navigation">
            <ul className="navigation-list">
                {
                    navigation.map((item, index) => (
                        <li key={index}>{item.label}</li>
                    ))
                }
            </ul>
        </div>
    )
}