import Navbar from "./Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
     <div>
      <div>
        <p > NAIROBI BASED FREELANCE SOFTWARE COMPANY</p>
        <p style={{fontSize: 36, fontWeight:"bolder"}}>Software That </p>
        <p>Powers</p>
        <p>Your Business</p>
        <span>
          <span
          style={{
            background: "#d40f0f",
            height: 40 ,
            width: 200,
            marginRight: 10 
          }}
          >Get a Quote</span>
          <span>View Projects</span>
        </span>
      </div>
      <div></div>
     </div>
    </div>
  )
}
