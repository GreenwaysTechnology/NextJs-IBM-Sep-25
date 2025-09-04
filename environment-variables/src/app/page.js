export default function Home(){
  return <div className="m-50">
    <h1>Env File: {process.env.MESSAGE}</h1>
    <h1>Env Dev File :{process.env.NAME}</h1>
  </div>
}