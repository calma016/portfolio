//Importated Packages
import React, {useRef, useState, useEffect} from "react";
//Imported internal components
import Tiles from "./Components/Tiles"
import "./Main.css"
//import {piece} from "./Model/piece.js"

const Main = () => {
    //Array to hold tile components
    let chessBoard = []
    //chessBord element reference
    const chessBoardRef = useRef();
    //Create states for x coordinate and y coordinate
    const [xCoordinate, setXCoord] = useState(0); const [yCoordinate, setYCoord] = useState(0);
    //Create state for when pieces are grabbed
    const [grab, setGrab] = useState(false);
    //Piece array wiht multidimensional properties
    let piece = []
    //Pushing pieces into the array
    piece.push({imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png", xCord: 0, yCord: 0 })
    //Create a state for the pieces to refresh coordinates
    const [pieces, setPieces] = useState(piece);

    
    const GRID = 100
    function movePiece(e: React.MouseEvent)
    {
        if(e.target.classList.value === "piece" && grab)
        {

            let x = e.clientX - 50; let y = e.clientY - 50;
            e.target.style.position = "absolute";
            e.target.style.top = `${y}px`;
            e.target.style.left = `${x}px`;
        }
    }
    function dropPiece(e: React.MouseEvent)
    {
        if(e.target.classList.value === "piece" && grab)
        {
            let x = (Math.floor((e.clientX - chessBoardRef.current.offsetLeft) / 100))
            let y = (Math.abs(Math.ceil((e.clientY - chessBoardRef.current.offsetTop - 800) /100)))
            setPieces((value) => {
                const pieces = value.map((p) => {
                    if(parseInt(p.xCord) === xCoordinate  &&  parseInt(p.yCord) === yCoordinate)
                    {
                        console.log("works");
                        p.xCord = x;
                        p.yCord = y;   
                    }
                    return p;

                })
                return pieces;
            })
            setGrab(!grab);
     }
    }
    //Grab Piece Function
    function grabPiece(e: React.MouseEvent)
    {
            
            let element = document.getElementById('chessboardPiece');
            console.log(e.target.HTMLElement);
            if(e.target.classList.value === "piece" && chessBoardRef)
            {
                setXCoord(Math.floor((e.clientX - chessBoardRef.current.offsetLeft) / 100))
                setYCoord(Math.abs(Math.ceil((e.clientY - chessBoardRef.current.offsetTop - 800) /100)))
                const x = e.clientX - 100 / 2; const y = e.clientY - 100 / 2;
                
                e.target.style.position = "absolute";
                e.target.style.top = `${y}px`;
                e.target.style.left = `${x}px`;
                setGrab(!grab);

            }
        
    }
    
    for(let i = 8 - 1; i >= 0; i--)
    {
        for(let j = 0; j < 8; j++)
        {
            let pieceName; let pieceImage;
            pieces.forEach((p)=>{
                
                if(p.xCord === j && p.yCord === i)
                {
                    
                    pieceName = p.pieceName;
                    pieceImage = p.imageUrl;

                }
            })
            chessBoard.push(
                <Tiles 
                    tileNum = {j + i + 2}
                    pieceName = {pieceName}
                    pieceImage = {pieceImage}
                    key={`${j},${i}`}
                />
            )
            
            
            
        
        }   
    }
    return(
        <div className = "mainPage">
                <div 
                    className = "chessboard" 
                    ref = {chessBoardRef}
                    onMouseDown= {(e)=> grabPiece(e)}
                    onMouseMove = {(e) => movePiece(e)}
                    onMouseUp = {(e) => dropPiece(e)}
                >
                    {chessBoard}
                </div>
        </div>
    )
}
export default Main;