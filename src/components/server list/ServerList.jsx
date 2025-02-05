import './ServerList.scss'

export default function ServerList() {
    const servers = ["first", "second"]
    return(
        <div id="serverListContainer">
            <div id="serverList">
                {
                    servers.map((server, index) => {
                        return(
                            <div className="serverListItem">
                                {server[0]}
                            </div>
                        )
                    })
                }
            </div>
            <div id="serverListButtons">
                <div className="serverListButton">
                    <i className="fa-solid fa-plus"></i>
                </div>
                <div className="serverListButton">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    )
}