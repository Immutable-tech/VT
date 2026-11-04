
export default function Navbar(){
    return(
        <div 
        style={{
            flex: 1,
            background: "#fff",
            height: 60,
            alignItems: "flex-end",
            alignContent: "flex-end",
            alignSelf: "flex-end",
            color: "black",



        }}
        >
            <span style={{ margin: 10, fontSize:20, alignSelf:"center"}}>Home</span>
            <span style={{ margin: 10, fontSize:20, alignSelf:"center"}}>About</span>
            <span style={{ margin: 10, fontSize:20, alignSelf:"center"}}>Chatbot</span>
            <span style={{ margin: 10, fontSize:20, alignSelf:"center"}}>Contact</span>
            <span style={{ margin: 10, fontSize:20, alignSelf:"center"}}>Services</span>
        </div>
    )
}