import "./Tiles.css"
const Tiles = (props) => {
    return (
        <div className = {props.tileNum % 2 === 0 ? "tile-light" : "tile-dark"}>
            {props.pieceImage != null ? 
                <div 
                id = "chessboardPiece" 
                className = "piece" 
                style = {{
                    backgroundImage: `url(${props.pieceImage})`,   
                   
                }}
                >
                
                </div>
                :
                null  
            
        
        
        
            }
             
        </div>
    )
}
export default Tiles;