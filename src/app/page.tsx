import Child from "./child";


export default function Home() {


  const name = "Muhammad Uzair";
  const age = 24;
  const city = "Karachi"; 


  return (
  <div>
    <Child name ={name} age={age} city={city}/>
  </div>
  );
}
