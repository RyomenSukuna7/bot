import './page.css';
export default async function Message(){
  const data=await fetch("http://localhost:3000/DB");
  const result=await data.json();

  return result;
}