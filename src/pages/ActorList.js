const ActorList = ({ actors}) => {
    return (
        <div className="actor-list">
            {actors.map((actor) => (
                <div className="actorobj" key={actor.id}>
                    <h2>{actor.actorid} {actor.firstname} {actor.lastname}</h2>
                </div>
            ))}
        </div>
    )
}

export default ActorList;