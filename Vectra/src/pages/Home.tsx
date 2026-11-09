import Navbar from "./Navbar";
import Backgroundimg from "../assets/Backgroundimg.jpg";
import WebDevelopment from "../assets/WebDevelopment.jpg";
import DigitalMarketing from "../assets/DigitalMarketing.jpg";
import MobileAppDevelopment from "../assets/MobileDevelopment.jpg";
import MPesaIntegration from "../assets/MPesaIntergration.jpg";
import WhatsAppAutomation from "../assets/WhatsAppAutomation.jpg";
import UIUX from "../assets/UIUX.jpg";
import AIIntegration from "../assets/AIintergration.jpg";
import GraphicDesign from "../assets/GrapgicDesign.jpg";
import POS from "../assets/POS.jpg";
import BackendDevelopment from "../assets/BackendDevelopment.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "./Footer";



export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      background: "#f7f0f0"
    }}>
      <Navbar />
     <div>
      <div style={{
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        background:  `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Backgroundimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
      }}>
        <p style={{
          color: "#fff"
          }}> NAIROBI BASED FREELANCE SOFTWARE COMPANY</p>
        <p style={{
          fontSize: 50,
           fontWeight:"bolder",
           color: "#fff"
           }}>Software That <br />  Powers Your <br /> <span style={{color: "#c40e0e"}}>Business</span></p>
        <p style={{
          color: "#fff",
          fontSize: 22,
        }}> We are a technology company helping Kenyan businesses <br /> 
        compete and grow in the digital economy. From high-converting <br />
         websites to secure M-Pesa payment integrations and automated WhatsApp <br />
          systems, we deliver practical,reliable solutions every engagement backed <br /> 
          by a transparent contract and a commitment to results.</p>
        <span>
          <button
          style={{
            background: "#d40f0f",
            height: 50 ,
            width: 200,
            marginRight: 10,
            borderRadius: 5,
            color: "#fff",
            padding: 10,
            border: "none",
            marginBottom: "1rem",
            marginLeft: "1rem",
            fontWeight: "bold"
          }}
          >Get a Quote</button>
          <button
          style={{
            background: "#fff",
            height: 50 ,
            width: 200,
            marginRight: 10,
            borderRadius: 5,
            color: "#d40f0f",
            padding: 10,
            border: "none",
            marginBottom: "1rem",
            marginLeft: "1rem",
            fontWeight: "bold"
          }}
          >View Projects</button>
        </span>
      </div>
      <div>
        <p style={{
          alignSelf: "center",
          textAlign: "center",
          fontSize: 20,
          marginTop: "2rem",
          marginBottom: "2rem",
          color: "#d40f0f",
        }}>WHAT WE OFFER</p>
        <p style={{
          alignSelf: "center",
          textAlign: "center",
          fontWeight:"bold",
          fontSize: 35,
          marginTop: "2rem",
          marginBottom: "2rem",
          color: "#000000",
        }}>Ten Ways In Which We Serve You </p>
      </div>
     </div>
     <div className="service-grid" style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "1rem",
      padding: "2rem",
     }}>
      
       <span style={{
        display: "inline-block",
        flexDirection: "column",
        width: "fit-content",
        height: "29rem",
        background: "#fff",
        padding: "1rem",
        borderRadius: "1rem",
      }}>
        <img style={{
          height: "15rem",
          width: "16rem",
          borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem"
          
        }} src={WebDevelopment} alt="Web Development" />
        <p style={{fontSize: 30, color:"#d40f0f"}}>01</p>
        <p style={{fontSize: 20, color:"#000000", fontWeight:"bold"}}>Website Development</p>
        <p>Fast, mobile-first websites and web apps for shops, schools, hotels and service businesses.</p>
      </span>
       <span style={{
        display: "inline-block",
        flexDirection: "column",
        width: "fit-content",
        height: "29rem",
        background: "#fff",
        padding: "1rem",
        borderRadius: "1rem",
      }}>
        <img style={{
          height: "15rem",
          width: "16rem",
          borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem"
          
        }} src={MobileAppDevelopment} alt="Mobile App Development" />
        <p style={{fontSize: 30, color:"#d40f0f"}}>02</p>
        <p style={{fontSize: 20, color:"#000000", fontWeight:"bold"}}>Mobile App Development</p>
        <p >We build mobile apps for Android and iOS that help businesses reach more customers and increase revenue.</p>
      </span>
       <span style={{
        display: "inline-block",
        flexDirection: "column",
        width: "fit-content",
        height: "29rem",
        background: "#fff",
        padding: "1rem",
        borderRadius: "1rem",
      }}>
        <img style={{
          height: "15rem",
          width: "16rem",
          borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem"
          
        }} src={MPesaIntegration} alt="Payment Integration" />
        <p style={{fontSize: 30, color:"#d40f0f"}}>03</p>
        <p style={{fontSize: 20, color:"#000000", fontWeight:"bold"}}>Payment Integration</p>
        <p>We integrate M-Pesa and other payment systems into your website or mobile app to make it easy for customers to pay you.</p>
      </span>
       <span style={{
        display: "inline-block",
        flexDirection: "column",
        width: "fit-content",
        height: "29rem",
        background: "#fff",
        padding: "1rem",
        borderRadius: "1rem",
      }}>
        <img style={{
          height: "15rem",
          width: "16rem",
          borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem"
          
        }} src={WhatsAppAutomation} alt="WhatsApp Automation" />
        <p style={{fontSize: 30, color:"#d40f0f"}}>04</p>
        <p style={{fontSize: 20, color:"#000000", fontWeight:"bold"}}>WhatsApp Automation</p>
        <p>We build WhatsApp chatbots that can answer customer questions, take orders, and send notifications.</p>
      </span>
       <span style={{
        display: "inline-block",
        flexDirection: "column",
        width: "fit-content",
        height: "29rem",
        background: "#fff",
        padding: "1rem",
        borderRadius: "1rem",
      }}>
        <img style={{
          height: "15rem",
          width: "16rem",
          borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem"
          
        }} src={DigitalMarketing} alt="Digital Marketing" />
        <p style={{fontSize: 30, color:"#d40f0f"}}>05</p>
        <p style={{fontSize: 20, color:"#000000", fontWeight:"bold"}}>Digital Marketing</p>
        <p>We help businesses grow their online presence and reach more customers through social media marketing, SEO, and email marketing.</p>
      </span>
       <span style={{
        display: "inline-block",
        flexDirection: "column",
        width: "fit-content",
        height: "29rem",
        background: "#fff",
        padding: "1rem",
        borderRadius: "1rem",
      }}>  
        <img style={{
          height: "15rem",
          width: "16rem",
          borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem"
          
        }} src={UIUX} alt="UI/UX Design" />
        <p style={{fontSize: 30, color:"#d40f0f"}}>06</p>
        <p style={{fontSize: 20, color:"#000000", fontWeight:"bold"}}>UI/UX Design</p>
        <p>We design user interfaces and user experiences that are intuitive, engaging, and effective.</p>
      </span>
       <span style={{
        display: "inline-block",
        flexDirection: "column",
        width: "fit-content",
        height: "29rem",
        background: "#fff",
        padding: "1rem",
        borderRadius: "1rem",
      }}>
        <img style={{
          height: "15rem",
          width: "16rem",
          borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem"
          
        }} src={POS} alt="POS" />
        <p style={{fontSize: 30, color:"#d40f0f"}}>07</p>
        <p style={{fontSize: 20, color:"#000000", fontWeight:"bold"}}>POS & Business Systems</p>
        <p>We build point-of-sale systems and other business management software to help businesses run more efficiently.</p>
      </span>
       <span style={{
        display: "inline-block",
        flexDirection: "column",
        width: "fit-content",
        height: "29rem",
        background: "#fff",
        padding: "1rem",
        borderRadius: "1rem",
      }}>
        <img style={{
          height: "15rem",
          width: "16rem",
          borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem"
          
        }} src={BackendDevelopment} alt="Backend Development" />
        <p style={{fontSize: 30, color:"#d40f0f"}}>08</p>
        <p style={{fontSize: 20, color:"#000000", fontWeight:"bold"}}>Backend & API Development</p>
        <p>We build backend systems and APIs that power websites, mobile apps, and other software applications.</p>
      </span>
       <span style={{
        display: "inline-block",
        flexDirection: "column",
        width: "fit-content",
        height: "29rem",
        background: "#fff",
        padding: "1rem",
        borderRadius: "1rem",
      }}>
        <img style={{
          height: "15rem",
          width: "16rem",
          borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem"
          
        }} src={AIIntegration} alt="AI Integration" />
        <p style={{fontSize: 30, color:"#d40f0f"}}>09</p>
        <p style={{fontSize: 20, color:"#000000", fontWeight:"bold"}}>AI-Intergration</p>
        <p>Hands-on training that shows teams and individuals how to use AI in their everyday work</p>
      </span>
       <span style={{
        display: "inline-block",
        flexDirection: "column",
        width: "fit-content",
        height: "29rem",
        background: "#fff",
        padding: "1rem",
        borderRadius: "1rem",
      }}>
        <img style={{
          height: "15rem",
          width: "16rem",
          borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem"
          
        }} src={GraphicDesign} alt="Graphic Design" />
        <p style={{fontSize: 30, color:"#d40f0f"}}>10</p>
        <p style={{fontSize: 20, color:"#000000", fontWeight:"bold"}}>Graphic Design</p>
        <p>We create visually appealing graphics and branding materials that help businesses stand out and communicate their message effectively.</p>
      </span>

     </div>
     <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}>
      <div style={{
        flex: 1,
        minHeight: "24rem",
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Backgroundimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

      </div>
      <div style={{
        flex: 1,
        background: "#000",
        padding: "2rem",

      }}> 
      <p style={{color: "#d40f0f", fontSize: 30, }}>Spotlight</p>
      <p style={{
          fontSize: 40,
           fontWeight:"bolder",
           color: "#fff"
           }}>Business Websites & Web Apps</p>
           <p>From a first website to a full business system, We design, build and deploy clean software that is fast, secure and easy to use.</p>
           <span>
            <span style={{ 
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
            }}>
              <FaCheckCircle 
              style={{
                color: "#d40f0f",
                fontSize: "25px",
                flexShrink: 0
              }}
              /> <p style={{color: "#fff"}}>Responsive design for all screens</p>
            </span>
            <div style={{ width: "37rem", height: "1px", background:"rgba(255,255,255,0.2)"}}></div>
            <span style={{ 
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
            }}>
              <FaCheckCircle 
              style={{
                color: "#d40f0f",
                fontSize: "25px",
                flexShrink: 0
              }}
              /> <p style={{color: "#fff"}}>M-Pesa and WhatsApp integration</p>
            </span>
            <div style={{ width: "37rem", height: "1px", background:"rgba(255,255,255,0.2)"}}></div>
            <span style={{ 
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
            }}>
              <FaCheckCircle 
              style={{
                color: "#d40f0f",
                fontSize: "25px",
                flexShrink: 0
              }}
              /> <p style={{color: "#fff"}}>Admin dashboards and databases</p>
            </span>
            <div style={{ width: "37rem", height: "1px", background:"rgba(255,255,255,0.2)"}}></div>
            <span style={{ 
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
            }}>
              <FaCheckCircle 
              style={{
                color: "#d40f0f",
                fontSize: "25px",
                flexShrink: 0
              }}
              /> <p style={{color: "#fff"}}>SEO-ready, fast loading pages</p>
            </span>
            <div style={{ width: "37rem", height: "1px", background:"rgba(255,255,255,0.2)"}}></div>
            <span style={{ 
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1rem",
            }}>
              <FaCheckCircle 
              style={{
                color: "#d40f0f",
                fontSize: "25px",
                flexShrink: 0
              }}
              /> <p style={{color: "#fff"}}>Free support after launch</p>
            </span>
            <div style={{ width: "37rem", height: "1px", background:"rgba(255,255,255,0.2)"}}></div>
           </span>
           <button
           style={{
            height: "3rem",
            width: "35rem",
            borderRadius: "0.5rem",
            marginTop: "2rem",
            background: "#d40f0f",
            color: "#fff",
            border: "none",
           }}
           >Start a Project</button>
       </div>

     </div>
     <div style={{
      display: "flex",
      flexDirection: "row",
      background: "#a22424",
      justifyContent: "space-around",
     }}>
      <span>
        <p style={{
          fontSize: 40,
           color: "#fff"
           }}>4+</p>
        <p style={{ color: "#fff"}}>Projects Completed</p>
      </span>
      <div style={{ width: "1px", height: "6rem", alignSelf: "center", background:"rgba(255,255,255,0.2)"}}></div>
      <span>
        <p style={{
          fontSize: 40,
           color: "#fff"
           }}>8+</p>
        <p style={{ color: "#fff"}}>Core Technologies</p>
      </span>
      <div style={{ width: "1px", height: "6rem", alignSelf: "center", background:"rgba(255,255,255,0.2)"}}></div>
      <span>
        <p style={{
          fontSize: 40,
           color: "#fff"
           }}>24 HRS</p>
        <p style={{ color: "#fff"}}>Customer Support</p>
      </span>
      <div style={{ width: "1px", height: "6rem", alignSelf: "center", background:"rgba(255,255,255,0.2)"}}></div>
      <span>
        <p style={{
          fontSize: 40,
           color: "#fff"
           }}>100%</p>
        <p style={{ color: "#fff"}}>Delivery Rate</p>
      </span>
     </div>
     <div>
      <p style={{
          alignSelf: "center",
          textAlign: "center",
          fontSize: 20,
          marginTop: "2rem",
          marginBottom: "2rem",
          color: "#d40f0f",
        }}>featured work</p>
        <p style={{
          alignSelf: "center",
          textAlign: "center",
          fontWeight:"bold",
          fontSize: 35,
          marginTop: "2rem",
          marginBottom: "2rem",
          color: "#000000",
        }}>Projects We've Build </p>
        
     </div>
     <div style={{
      background: "#151515"
     }}><p style={{
          alignSelf: "center",
          textAlign: "center",
          fontWeight:"bold",
          fontSize: 25,
          marginTop: "2rem",
          marginBottom: "2rem",
          color: "#d40f0f",
        }}>Why Choose Vectra</p>
        <p style={{
          alignSelf: "center",
          textAlign: "center",
          fontWeight:"bold",
          fontSize: 35,
          marginTop: "2rem",
          marginBottom: "2rem",
          color: "#fff",
        }}>Built on Trust. Driven by Excellence. </p>
        <span style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          justifyContent: "space-around",
          padding: "2rem",
        }}>
          <span style={{
            display: "flex",
            flexDirection: "column",
            borderLeft: "2px solid #d40f0f",
          paddingLeft: "1rem",
          borderRadius: "5px",
          background: "#272424"
          }}>
            <p style={{
          alignSelf: "center",
          textAlign: "center",
          fontWeight:"bold",
          fontSize: 25,
          marginTop: "2rem",
          marginBottom: "2rem",
          color: "#fff",
          width: "14rem",
          
        }}>Fast Delivery</p>
            <p style={{color: "#fff"}}>Clear milestones and quick turnaround so you launch sooner.</p>
            </span>
          <span style={{
            display: "flex",
            flexDirection: "column",
            borderLeft: "2px solid #d40f0f",
          paddingLeft: "1rem",
          borderRadius: "5px",
          background: "#272424"
          }}>
            <p style={{
          alignSelf: "center",
          textAlign: "center",
          fontWeight:"bold",
          fontSize: 25,
          marginTop: "2rem",
          marginBottom: "2rem",
          color: "#fff",
          width: "16rem"
        }}>Mobile fast</p>
            <p style={{color: "#fff"}}>Every build works smoothly on the phones your customers use.</p>
            </span>
          <span style={{
            display: "flex",
            flexDirection: "column",
            borderLeft: "2px solid #d40f0f",
          paddingLeft: "1rem",
          borderRadius: "5px",
          background: "#272424"
          }}>
            <p style={{
          alignSelf: "center",
          textAlign: "center",
          fontWeight:"bold",
          fontSize: 25,
          marginTop: "2rem",
          marginBottom: "2rem",
          color: "#fff",
          width: "16rem"
        }}>Fair Pricing</p>
            <p style={{color: "#fff"}}>Transparent quotes with no hidden costs.</p>
            </span>
          <span style={{
            display: "flex",
            flexDirection: "column",
            borderLeft: "2px solid #d40f0f",
          paddingLeft: "1rem",
          borderRadius: "5px", 
          background: "#272424"
          
          }}>
            <p style={{
          alignSelf: "center",
          textAlign: "center",
          fontWeight:"bold",
          fontSize: 25,
          marginTop: "2rem",
          marginBottom: "2rem",
          color: "#fff",
          width: "16rem"
        }}>Secure Code</p>
            <p style={{color: "#fff"}}>Safe authentication, validated input and protected data.</p>
            </span>
        </span>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Backgroundimg})`,
          padding: "2rem",
          backgroundSize: "cover",
        }}>
          <p style={{
          alignSelf: "center",
          textAlign: "center",
          fontWeight:"bold",
          fontSize: 35,
          marginTop: "2rem",
          marginBottom: "2rem",
          color: "#fff",
        }}>Want Your Project Here?</p>
          <p style={{
          alignSelf: "center",
          textAlign: "center",
          fontSize: 20,
          marginTop: "2rem",
          marginBottom: "2rem",
          color: "#fff",
        }}>Lets Build Your next Project!</p>
          <span>
            <button
            style={{
              background: "#d40f0f",
              height: 50 ,
              width: 200,
              marginRight: 10,
              borderRadius: 5,
              color: "#fff",
              padding: 10,
              border: "none",
            }}>Chat On WhatsApp</button>
            <button
            style={{
              background: "transparent",
              height: 50 ,
              width: 200,
              marginRight: 10,
              borderRadius: 5,
              color: "#fff",
              padding: 10,
              border: "white 1px solid",

            }}
            >Email Us</button>
          </span>
        </div>
        <Footer />
    </div>
  )
}
