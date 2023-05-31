import React, { useState } from 'react';
import Header from './Header';
import Svg from "../assets/images/img1.jpeg"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Loader from "../components/loader/Loader"


export default function Home(props) {
  const [Load, setLoad] = useState(false);
  const [files, setFiles] = useState([]);
  console.log("files", files[0])
  return (
    <>
      {Load ? <Loader /> : null}
      <Header setFiles={setFiles} files={files} />
      <div className="app-wrapper" style={{ backgroundColor: "#323232" }}>
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl mt-5">
            {/* <h1 className="app-page-title">Settings</h1> */}
            <hr className="mb-4" />
            <div className="row g-4 settings-section">
              <div className="col-12 col-md-6">
                <div className="section-intro" style={{ backgroundColor: "whitesmoke" }}>
                  <h3 className="section-title p-3">MRI Viewer</h3>
                  {files.map((files, i) => {
                            return <>
                  <TransformWrapper >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                      <React.Fragment>
                        <div className="tools mt-2 p-2">
                          <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomIn()}>ZOOM IN +</button>
                          <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomOut()}> ZOOM OUT -</button>
                          <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => resetTransform()}> RESET x</button>
                        </div>
                        <TransformComponent >
                      
                              <img src={files.preview} alt="test" className='mt-3' style={{ width: "100%" }} />
                    
                          {/* <div>Example text</div> */}
                        </TransformComponent>
                      </React.Fragment>
                    )}
                  </TransformWrapper>
                  <hr/>
                  </>
                })}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="section-intro" style={{ backgroundColor: "whitesmoke" }}>
                  <h3 className="section-title p-3">Labels Viewer</h3>

                  <TransformWrapper >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                      <React.Fragment>
                        <div className="tools mt-2">
                          <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomIn()}>ZOOM IN +</button>
                          <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomOut()}> ZOOM OUT -</button>
                          <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => resetTransform()}> RESET x</button>
                        </div>
                        <TransformComponent >
                          <img src={Svg} alt="test" className='mt-3' style={{ width: "100%" }} />
                          {/* <div>Example text</div> */}
                        </TransformComponent>
                      </React.Fragment>
                    )}
                  </TransformWrapper>
                </div>
              </div>
            </div>
            {/*//row*/}
            <hr className="my-4" />
            <div className="row g-4 settings-section">
              <div className="col-12 col-md-6">
                <div className="section-intro" style={{ backgroundColor: "whitesmoke" }}>
                  <h3 className="section-title p-3">MRI Viewer</h3>
                  <TransformWrapper >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                      <React.Fragment>
                        <div className="tools mt-2">
                          <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomIn()}>ZOOM IN +</button>
                          <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomOut()}> ZOOM OUT -</button>
                          <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => resetTransform()}> RESET x</button>
                        </div>
                        <TransformComponent >
                          <img src={Svg} alt="test" className='mt-3' style={{ width: "100%" }} />
                          {/* <div>Example text</div> */}
                        </TransformComponent>
                      </React.Fragment>
                    )}
                  </TransformWrapper>

                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="section-intro" style={{ backgroundColor: "whitesmoke" }}>
                  <h3 className="section-title p-3">Labels Viewer</h3>
                  <TransformWrapper >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                      <React.Fragment>
                        <div className="tools mt-2">
                          <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomIn()}>ZOOM IN +</button>
                          <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomOut()}> ZOOM OUT -</button>
                          <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => resetTransform()}> RESET x</button>
                        </div>
                        <TransformComponent >
                          <img src={Svg} alt="test" className='mt-3' style={{ width: "100%" }} />
                          {/* <div>Example text</div> */}
                        </TransformComponent>
                      </React.Fragment>
                    )}
                  </TransformWrapper>
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

