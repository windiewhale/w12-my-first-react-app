function Beer({info, num}) {
    const {title, sub, text} = info

    return (
        <div className="beer">
            <h3>{title}</h3>
            <h4>{sub}</h4>
            <p>{text}</p>
            <button onClick={() => console.log(`clicked`)}>click me</button>
        </div>
    )
}

export default Beer