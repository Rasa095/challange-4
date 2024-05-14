import styled from "styled-components";
interface Color{
    color:string;
}
export const Container=styled.div`
    width: 700px;
    height: 500px;
    margin: 0 auto;
    background-color: silver;
    display: flex;
    flex-direction: column;
    gap: 50px;
   
    
`
export const Button=styled.button`
        display: inline-block;
        margin: 15px auto;
        background-color: black;
        color: white;
`
export const FruitsContent=styled.div`
display: flex;
width: 100%;
 
`
export const Fruit=styled.div<Color>`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.color};
    border: 5px solid black;
`