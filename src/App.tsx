
import { useEffect, useState } from 'react';
import { Button,Container, FruitsContent,Fruit } from './App-styeled';


function App() {
  const color:string[]=["yellow","brown","green"]
  const fruits:{name:string,fact:string}[]=[{name:"banana",fact:"Im yellow in color"},{name:"peach",fact:"I have fuzy skin"},{name:"apple",fact:"i tend to be crunchy"}];
  const [isVisible,setIsVisible]=useState<Boolean>(false);
  const [nameButton,setNameButton]=useState <string>("");
  function setVisibiliti(){
    setIsVisible(!isVisible);
  }
  useEffect(()=>{
    if(isVisible){
      setNameButton("Hiden fact of Fruits")
    }
    else setNameButton("Show fact of Fruits");

  },[isVisible])
    return (
    <Container>
       <Button onClick={setVisibiliti}>{nameButton}</Button>
       <FruitsContent>
        {isVisible &&(
          fruits.map((frui,index)=>(
            <Fruit color={color[index]}>
              <p>{frui.name}</p> 
              <p>{frui.fact}</p>
              </Fruit>
          ))
        )}
      
          
       


       </FruitsContent>

    </Container>
    
  );
}

export default App;
