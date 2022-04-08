import Beer from './Beer.jsx'

function Beers({list}) {
    /* console.log(props.list) */
    const a = 10

    /* console.log(<Beer info={list[0]} key={100} num={a}/>); */
    return (
        <div className="beers">
            {list.map((item, index) => <Beer info={item} key={index} num={a}/>)}
        </div>
    )
}
    
export default Beers