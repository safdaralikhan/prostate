import React, { useState } from 'react';
import Header from './Header';
// import Svg from "../assets/images/img1.jpeg"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Loader from "../components/loader/Loader"
import { BaseUrl } from "../baseurl/BaseUrl"
import { toast } from 'react-toastify';
import * as markerjs2 from "markerjs2";
import { useRef } from 'react';

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
  // xias state 
  const [mrixaxis, setMrixaxis] = useState(0);
  const [mriyaxis, setMriyaxis] = useState(0);
  const [wholexaxis, setWholexaxis] = useState(0);
  const [wholeyaxis, setWholeyaxis] = useState(0);
  const [centralxaxis, setCentralxaxis] = useState(0);
  const [centralyaxis, setCentralyaxis] = useState(0);
  const [perixaxis, setPerixaxis] = useState(0);
  const [periyaxis, setPeriyaxis] = useState(0);
// onhover state 
  const [style, setStyle] = useState("");
  const [style2, setStyle2] = useState("");
  const [style3, setStyle3] = useState("");
  const [style4, setStyle4] = useState("");

  const imgRef = useRef([]);
  const imgRef2 = useRef([]);
  const imgRef3 = useRef([]);
  const imgRef4 = useRef([]);

  const OnMouse = (e, key) => {
    // console.log("enativeEvent", e, key)
    if (key === "mri") {

      setMrixaxis(e.nativeEvent.offsetX)
      setMriyaxis(e.nativeEvent.offsetY)
    }
    else if (key === "whole") {

      setWholexaxis(e.nativeEvent.offsetX)
      setWholeyaxis(e.nativeEvent.offsetY)
    }
    else if (key === "central") {

      setCentralxaxis(e.nativeEvent.offsetX)
      setCentralyaxis(e.nativeEvent.offsetY)
    }
    else {
      setPerixaxis(e.nativeEvent.offsetX)
      setPeriyaxis(e.nativeEvent.offsetY)
    }

  }

  function showMarkerArea(i) {

    if (imgRef.current !== null) {
      // create a marker.js MarkerArea
      const markerArea = new markerjs2.MarkerArea(imgRef.current[i]);
      // attach an event handler to assign annotated image back to our image element
      markerArea.addEventListener("render", (event) => {
        if (imgRef.current[i]) {
          imgRef.current[i].src = event.dataUrl;
        }
      });
      // launch marker.js
      markerArea.show();
    }
  }

  function showMarkerArea2(i) {
    console.log("safdar2")
    if (imgRef2.current !== null) {
      // create a marker.js MarkerArea
      const markerArea = new markerjs2.MarkerArea(imgRef2.current[i]);
      // attach an event handler to assign annotated image back to our image element
      markerArea.addEventListener("render", (event) => {
        if (imgRef2.current[i]) {
          imgRef2.current[i].src = event.dataUrl;
          console.log("safdar2==>", imgRef2.current[i].src = event.dataUrl)

        }
      });

      // launch marker.js
      markerArea.show();
    }
  }

  function showMarkerArea3(i) {
    console.log("safdar2")
    if (imgRef3.current !== null) {
      // create a marker.js MarkerArea
      const markerArea = new markerjs2.MarkerArea(imgRef3.current[i]);
      // attach an event handler to assign annotated image back to our image element
      markerArea.addEventListener("render", (event) => {
        if (imgRef3.current[i]) {
          imgRef3.current[i].src = event.dataUrl;


        }
      });

      // launch marker.js
      markerArea.show();
    }
  }

  function showMarkerArea4(i) {
    console.log("safdar2")
    if (imgRef4.current !== null) {
      // create a marker.js MarkerArea
      const markerArea = new markerjs2.MarkerArea(imgRef4.current[i]);
      // attach an event handler to assign annotated image back to our image element
      markerArea.addEventListener("render", (event) => {
        if (imgRef4.current[i]) {
          imgRef4.current[i].src = event.dataUrl;


        }
      });

      // launch marker.js
      markerArea.show();
    }
  }
  const UploadApi = () => {
    if (files.length > 0) {
      setLoad(true);

      var formdata = new FormData();
      // formdata.append("model", Condition);
      for (var i = 0; i < files.length; i++) {
        formdata.append("files", files[i]);
      }
      // formdata.append("action", action);


      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      fetch(`${BaseUrl.baseUrl}prostrate/prediction/?action=${action}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          setLoad(false);
          if (result.status) {
            console.log("result", action)
            if (action === "Whole") {

              setData(result.predictedframes)

            } else if (action === "Peripheral") {

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
                <div className="section-intro" style={{ backgroundColor: "whitesmoke", }}>
                  <h3 className="section-title p-3">MRI Viewer</h3>
                  <div style={{ overflow: "scroll", height: "500px" }}>
                    {files.map((files, i) => {
                      return <div onMouseLeave={() => setStyle("")} onMouseEnter={() => setStyle(i)}>

                        <TransformWrapper key={i}  >
                          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                            <React.Fragment>
                              {style === i ?
                                <>
                                  <div className="tools mt-2 p-2" >
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomIn()}>ZOOM IN +</button>
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomOut()}> ZOOM OUT -</button>
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => resetTransform()}> RESET x</button>
                                  </div>
                                  <div className=" mt-2 p-2 d-flex justify-content-start" >
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "black" }}>{mrixaxis} x-Axis</button>
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "black" }}>{mriyaxis} y-Axis</button>
                                  </div>
                                </>
                                : ""}
                              <div onMouseMove={(e) => OnMouse(e, "mri")}>
                                <TransformComponent >
                                  <div onClick={() => showMarkerArea(i)}>
                                    <img ref={(el) => imgRef.current[i] = el} src={files.preview} alt="test" className='mt-3' style={{ width: "100%" }} />
                                  </div>

                                </TransformComponent>
                              </div>
                            </React.Fragment>
                          )}
                        </TransformWrapper>
                        <hr />
                      </div>
                    })}
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="section-intro" style={{ backgroundColor: "whitesmoke", }}>
                  <h3 className="section-title p-3">Whole Viewer</h3>
                  <div style={{ overflow: "scroll", height: "500px" }}>
                    {Data.map((v, i) => {
                      return <div onMouseLeave={() => setStyle2("")} onMouseEnter={() => setStyle2(i)}>
                        <TransformWrapper >
                          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                            <React.Fragment>
                              {style2 === i ?
                                <>
                                  <div className="tools mt-2">
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomIn()}>ZOOM IN +</button>
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomOut()}> ZOOM OUT -</button>
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => resetTransform()}> RESET x</button>
                                  </div>
                                  <div className=" mt-2 p-2 d-flex justify-content-start" >
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "black" }}>{wholexaxis} x-Axis</button>
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "black" }}>{wholeyaxis} y-Axis</button>
                                  </div>
                                </>
                                : ""}
                              <div onMouseMove={(e) => OnMouse(e, "whole")}>
                                <TransformComponent key={i}>
                                  <div onClick={() => showMarkerArea2(i)}>
                                    <img crossorigin="anonymous" ref={(el) => imgRef2.current[i] = el} src={BaseUrl.baseUrl + v} alt="test" className='mt-3' style={{ width: "100%" }} />
                                  </div>
                                </TransformComponent>
                              </div>
                            </React.Fragment>
                          )}
                        </TransformWrapper>
                        <hr />
                      </div>

                    })}
                  </div>
                </div>
              </div>
            </div>
            {/*//row*/}
            <hr className="my-4" />
            <div className="row g-4 settings-section">
              <div className="col-12 col-md-6">
                <div className="section-intro" style={{ backgroundColor: "whitesmoke", }}>
                  <h3 className="section-title p-3">Central Viewer</h3>
                  <div style={{ overflow: "scroll", height: "500px" }}>
                    {central.map((v, i) => {
                      return <div onMouseLeave={() => setStyle3("")} onMouseEnter={() => setStyle3(i)}>
                        <TransformWrapper >
                          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                            <React.Fragment>
                              {style3 === i ?
                                <>
                                  <div className="tools mt-2">
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomIn()}>ZOOM IN +</button>
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomOut()}> ZOOM OUT -</button>
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => resetTransform()}> RESET x</button>
                                  </div>
                                  <div className=" mt-2 p-2 d-flex justify-content-start" >
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "black" }}>{centralxaxis} x-Axis</button>
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "black" }}>{centralyaxis} y-Axis</button>
                                  </div>
                                </>
                                : ""}
                              <div onMouseMove={(e) => OnMouse(e, "central")}>
                                <TransformComponent >
                                  <div onClick={() => showMarkerArea3(i)}>
                                    <img crossorigin="anonymous" ref={(el) => imgRef3.current[i] = el} src={BaseUrl.baseUrl + v} alt="test" className='mt-3' style={{ width: "100%" }} />
                                  </div>
                                </TransformComponent>
                              </div>
                            </React.Fragment>
                          )}
                        </TransformWrapper>
                        <hr />
                      </div>
                    })}

                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="section-intro" style={{ backgroundColor: "whitesmoke", }}>
                  <h3 className="section-title p-3">Peripheral Viewer</h3>
                  <div style={{ overflow: "scroll", height: "500px" }}>
                    {peripheral.map((v, i) => {
                      return <div onMouseLeave={() => setStyle4("")} onMouseEnter={() => setStyle4(i)}>
                        <TransformWrapper >
                          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                            <React.Fragment>
                              {style4 === i ?
                                <>
                                  <div className="tools mt-2">
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomIn()}>ZOOM IN +</button>
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => zoomOut()}> ZOOM OUT -</button>
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "#14ccb0" }} onClick={() => resetTransform()}> RESET x</button>
                                  </div>
                                  <div className=" mt-2 p-2 d-flex justify-content-start" >
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "black" }}>{perixaxis} x-Axis</button>
                                    <button className='btn btn-success mx-1' style={{ color: "white", backgroundColor: "black" }}>{periyaxis} y-Axis</button>
                                  </div>
                                </>
                                : ""}
                              <div onMouseMove={(e) => OnMouse(e, "peri")}>
                                <TransformComponent >
                                  <div onClick={() => showMarkerArea4(i)}>
                                    <img crossorigin="anonymous" ref={(el) => imgRef4.current[i] = el} src={BaseUrl.baseUrl + v} alt="test" className='mt-3' style={{ width: "100%" }} />
                                  </div>
                                </TransformComponent>
                              </div>
                            </React.Fragment>
                          )}
                        </TransformWrapper>
                        <hr />
                      </div>
                    })}

                  </div>

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

