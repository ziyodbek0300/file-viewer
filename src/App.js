import React, { useState } from 'react';
import fileImg from "./QoraQo'rg'on.png";
import filePDF from "./qwerty.pdf";
import RViewerJS from 'viewerjs-react'
import 'viewerjs-react/dist/index.css'

// import FileViewer from 'react-file-viewer';
// import file from "./Extlst-test.pptx";
// const type = 'png'
// const type = 'pdf'
// const type = 'pptx'

function App() {
    const [page] = useState(15);

    return (<div>
        <div id={"second"} style={{ padding: '30px 0' }}>
            <h1>PPTX Viewer</h1>
            <iframe
                title={'PDF-Viewer'}
                src={`https://view.officeapps.live.com/op/embed.aspx?src=https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx`}
                frameBorder={0}
                style={{ height: '100vh', width: '90vw' }}></iframe>
        </div>

        <div id={"second"} style={{ padding: '30px 0' }}>
            <h1>PDF Viewer with page</h1>
            <iframe
                title={'PPTX-Viewer'}
                src={`${filePDF}#page=${page}`}
                frameBorder={0}
                style={{ height: '100vh', width: '90vw' }}></iframe>
        </div>

        <div id={"third"} style={{ padding: '30px 0' }}>
            <h1>Third way</h1>
            <RViewerJS>
                <img src={fileImg} alt={"sakjdf"} />
            </RViewerJS>
        </div>
    </div>);

}

export default App;
