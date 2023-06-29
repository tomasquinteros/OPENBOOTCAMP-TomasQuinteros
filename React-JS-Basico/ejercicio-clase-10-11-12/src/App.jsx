import { useState } from "react"

export default function App() {
  const [ color, setColor ] = useState([0, 0, 0]);

  const [ colorInterval, setColorInterval ] = useState(0);
  const getColor = () => Math.floor(Math.random() * 256);

  const addColor = () => {
      const rgb = {
          r: getColor(),
          g: getColor(),
          b: getColor(),
      }

      return setColor([rgb.r, rgb.g, rgb.b])
  }
  
  const onChangeColor = () => {
      return setColorInterval(setInterval(addColor, 250))
  }

  const stopChangeColor = () => {
      return clearInterval(colorInterval)
  }

  const clickChangeColor = () => {
      return clearInterval(colorInterval)
  } 

  return (
      <div className="flex flex-col justify-center items-center gap-4 p-20">
          <div 
            id='rombo'
            style={{ width: '255px', height: '255px', backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}
            onMouseOver={onChangeColor}
            onMouseLeave={stopChangeColor}
            onDoubleClick={clickChangeColor}
              >
          </div>
          <p style={{ color: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}>Color: rgb({color[0]} , {color[1]} , {color[2]})</p>
      </div>
  )
}

