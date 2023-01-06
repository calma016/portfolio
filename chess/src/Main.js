import React, {useRef, useState} from "react";

import Tiles from "./Components/Tiles"
import "./Main.css"
import piece from "./Model/piece.json"

const Main = () => {
    let chessBoard = new Array()
    const chessBoardRef = useRef();
    function grabPiece(e)
    {
        
        
        if(e.target.classList.value === "piece")
        {
            
            let element = document.getElementById('chessboardPiece');
            console.log(e.target.style.padding );
   
            e.target.style.positon = "absolute";
            e.target.style.top = "20px";
            e.target.style.positon = "50px"
            
            element.style.background = "black";
  
            
            
            

            
        }
    }
    
    for(let i = 8 - 1; i >= 0; i--)
    {
        for(let j = 0; j < 8; j++)
        {
            let pieceName; let pieceImage;
            piece.Pieces.forEach((p)=>{
                console.log("pX " + p.xCord + " i " + i + " pY " + p.yCord + " j " + j)
                if(parseInt(p.xCord) === i && parseInt(p.yCord) === j)
                {
                    console.log("works");
                    pieceName = p.pieceName;
                    pieceImage = p.imageUrl;

                }
            })
            chessBoard.push(
                
                <Tiles 
                    tileNum = {j + i + 2}
                    pieceName = {pieceName}
                    pieceImage = {pieceImage}
                />
            )
            
            
            
        
        }   
    }
    return(
        <section className = "mainPage">
                <div 
                    className = "chessboard" 
                    ref = {chessBoardRef}
                    onMouseDown= {(e)=> grabPiece(e)}
                >
                    {chessBoard}
                </div>
        </section>
    )
}
export default Main;