import React from 'react';
import Header from './Header';
import Svg from "../assets/images/svg.jpg"


export default function Home(props) {

  return (
    <>
<Header/>
 
  <div className="app-wrapper" style={{backgroundColor:"#323232"}}>
    <div className="app-content pt-3 p-md-3 p-lg-4">
      <div className="container-xl mt-5">
        {/* <h1 className="app-page-title">Settings</h1> */}
        <hr className="mb-4" />
        <div className="row g-4 settings-section">
          <div className="col-12 col-md-6">
            <div className="section-intro" style={{backgroundColor:"whitesmoke"}}>
            <h3 className="section-title p-3">MRI Viewer</h3>
            <img className='mt-2 p-3' src={Svg} alt='' width={"100%"}/>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="section-intro" style={{backgroundColor:"whitesmoke"}}>
            <h3 className="section-title p-3">Labels Viewer</h3>
            <img src={Svg} className='mt-2 p-3' alt='' width={"100%"}/>
            </div>
          </div>
        </div>
        {/*//row*/}
        <hr className="my-4" />
        <div className="row g-4 settings-section">
          <div className="col-12 col-md-6">
            <div className="section-intro" style={{backgroundColor:"whitesmoke"}}>
            <h3 className="section-title">MRI Viewer</h3>
            <img src={Svg} alt='' className='mt-2 p-3' width={"100%"}/>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="section-intro" style={{backgroundColor:"whitesmoke"}}>
            <h3 className="section-title">Labels Viewer</h3>
            <img src={Svg} alt='' className='mt-2 p-3' width={"100%"}/>
            </div>
          </div>
        </div>
    
      </div>
      {/*//container-fluid*/}
    </div>
  
  </div>

    </>

  );
}

