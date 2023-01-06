import "./Tiles.css"
const Tiles = (props) => {
    return (
        <section className = {props.tileNum % 2 === 0 ? "tile-light" : "tile-dark"}>
            <div 
                id = "chessboardPiece" 
                className = "piece" 
                style = {{
                    backgroundImage: `url(${props.pieceImage})`,   
                    position: "relative",
                }}
            
            >
                
            </div>   
        </section>
    )
}
export default Tiles;