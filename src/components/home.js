import React, { useState } from 'react';
import Header from './Header';
// import Svg from "../assets/images/img1.jpeg"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Loader from "../components/loader/Loader"
import { BaseUrl } from "../baseurl/BaseUrl"
import { toast } from 'react-toastify';


export default function Home(props) {
  const [Load, setLoad] = useState(false);
  // drag img state 
  const [files, setFiles] = useState([]);
  // showv  img state 
  const [Data, setData] = useState([]);
  const [peripheral, setPeripheral] = useState([]);
  const [central, setCentral] = useState([]);
// check condition state 
  const [action, setAction] = useState("");

  console.log("files", files[0])



  const UploadApi = () => {
    if (files.length > 0) {
      setLoad(true);

      var formdata = new FormData();
      // formdata.append("model", Condition);
      for (var i = 0; i < files.length; i++) {
        formdata.append("files", files[i]);
      }
      formdata.append("action", action);


      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      fetch(`${BaseUrl.baseUrl}prostrate/prediction/`, requestOptions)
        .then(response => response.json())
        .then(result => {
          setLoad(false);
          if (result.status) {
            console.log("result", action)
            if (action === "whole") {

              setData(result.predictedframes)

            } else if (action === "peripheral") {

              setPeripheral(result.predictedframes)
            } else {

              setCentral(result.predictedframes)
            }
            // setGif(result.predictedgif)
          } else {

            toast.error(result.essage, {
              position: toast.POSITION.TOP_CENTER
            });
          }
        })
        .catch(error => {
          setLoad(false)

          toast.error(error.essage, {
            position: toast.POSITION.TOP_CENTER
          });
        });
    } else {
      toast.error("plz select an image and category", {
        position: toast.POSITION.TOP_RIGHT
      });


    }
  }
  return (
    <>
      {Load ? <Loader /> : null}
      <Header setFiles={setFiles} files={files} setAction={setAction} action={action} UploadApi={UploadApi} />
      <div className="app-wrapper" style={{ backgroundColor: "#323232" }}>
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl mt-5">
            {/* <h1 className="app-page-title">Settings</h1> */}
            <hr className="mb-4" />
            <div className="row g-4 settings-section">
              <div className="col-12 col-md-6">
                <div className="section-intro" style={{ backgroundColor: "whitesmoke", overflow: "scroll", height: "500px" }}>
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
                      <hr />
                    </>
                  })}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="section-intro" style={{ backgroundColor: "whitesmoke", overflow: "scroll", height: "500px" }}>
                  <h3 className="section-title p-3">Whole Viewer</h3>
                  {Data.map((v, i) => {

                    return <>

                      <TransformWrapper >
                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                          <React.Fragment>
                            <div className="tools mt-2">
                              <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomIn()}>ZOOM IN +</button>
                              <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomOut()}> ZOOM OUT -</button>
                              <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => resetTransform()}> RESET x</button>
                            </div>
                            <TransformComponent >
                              <img src={BaseUrl.baseUrl + v} alt="test" className='mt-3' style={{ width: "100%" }} />
                              {/* <div>Example text</div> */}
                            </TransformComponent>
                          </React.Fragment>
                        )}
                      </TransformWrapper>
                    </>
                  })}
                </div>
              </div>
            </div>
            {/*//row*/}
            <hr className="my-4" />
            <div className="row g-4 settings-section">
              <div className="col-12 col-md-6">
                <div className="section-intro" style={{ backgroundColor: "whitesmoke", overflow: "scroll", height: "500px" }}>
                  <h3 className="section-title p-3">Central Viewer</h3>
                  {central.map((v, i) => {

                    return <>
                      <TransformWrapper >
                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                          <React.Fragment>
                            <div className="tools mt-2">
                              <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomIn()}>ZOOM IN +</button>
                              <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomOut()}> ZOOM OUT -</button>
                              <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => resetTransform()}> RESET x</button>
                            </div>
                            <TransformComponent >
                              <img src={BaseUrl.baseUrl + v} alt="test" className='mt-3' style={{ width: "100%" }} />
                              {/* <div>Example text</div> */}
                            </TransformComponent>
                          </React.Fragment>
                        )}
                      </TransformWrapper>
                    </>
                  })}


                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="section-intro" style={{ backgroundColor: "whitesmoke", overflow: "scroll", height: "500px" }}>
                  <h3 className="section-title p-3">Peripheral Viewer</h3>
                  {
                    peripheral.map((v, i) => {
                      return <>
                        <TransformWrapper >
                          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                            <React.Fragment>
                              <div className="tools mt-2">
                                <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomIn()}>ZOOM IN +</button>
                                <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomOut()}> ZOOM OUT -</button>
                                <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => resetTransform()}> RESET x</button>
                              </div>
                              <TransformComponent >
                                <img src={BaseUrl.baseUrl + v} alt="test" className='mt-3' style={{ width: "100%" }} />
                                {/* <div>Example text</div> */}
                              </TransformComponent>
                            </React.Fragment>
                          )}
                        </TransformWrapper>
                      </>
                    })
                  }

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

