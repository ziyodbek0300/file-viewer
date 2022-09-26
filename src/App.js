import React, {useEffect, useRef, useState} from 'react';
import FileViewer from 'react-file-viewer';
import {CustomErrorComponent} from 'custom-error';
import fileImg from "./QoraQo'rg'on.png";
import filePDF from "./qwerty.pdf";
import file from "./Extlst-test.pptx";
import RViewerJS from 'viewerjs-react'
import 'viewerjs-react/dist/index.css'

// const type = 'png'
const type = 'pdf'

function App() {
    const [view, setView] = useState(false);
    const [page, setPage] = useState(15);
    const numRef = useRef(null);

    return (<div>
        <div id={"first"} style={{padding: '10px'}}>
            <button onClick={() => setView(!view)} style={{margin: '10px'}}>Show</button>
            {view && <div style={{width: '50%', margin: '0 auto'}}>
                <FileViewer
                    fileType={type}
                    filePath={file}
                    errorComponent={CustomErrorComponent}
                    onError={() => console.log()}/>
            </div>}
        </div>
        <div id={"second"}>
            <div style={{margin: '100px'}}>
                <input type="number" ref={numRef}/>
                <button onClick={() => setPage(numRef.current.value)}>Hello</button>
            </div>
            <iframe src={`${file}#page=${page}`} frameBorder={0} style={{height: '100vh', width: '90vw'}}></iframe>
        </div>
        <div id={"third"}>
            <RViewerJS>
                <img src={fileImg} alt={"sakjdf"}/>
            </RViewerJS>
        </div>
    </div>);

}

export default App;
