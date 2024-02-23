
import React, { useState } from 'react';
import ReactPlayer from 'react-player'
function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleUpload = () => {
      if (selectedFile) {
        if (selectedFile.type === 'application/vnd.ms-powerpoint' || selectedFile.name.endsWith('.ppt') || selectedFile.name.endsWith('.pptx')) {
          // File is a PowerPoint file, perform upload logic here
          console.log('Uploading PowerPoint file:', selectedFile);
        } else {
          alert('Please select a PowerPoint file (PPT or PPTX) to upload.');
        }
      } else {
        alert('Please select a file to upload.');
      }
    };
  
    return (
      <div>
        <form className='uploader' onClick={() => { document.querySelector("#file").click(); }}>
          <label htmlFor="file">Upload a ppt File</label>
          <div style={{ width: "10%" }}>
            <img style={{ width: "100%" }} src="images/upload.png" alt="" />
          </div>
          <input type="file" id='file' accept=".ppt, .pptx" onChange={handleFileChange} hidden/>
          {selectedFile && (
          <div>
            <p>Selected file: {selectedFile.name}</p>
          </div>
        )}
        </form>
        
      </div>
    );
  }



function Panel(){
    return(
        <div className="main">
            <div className="left">
                <div className="logo">
                    <div className='logo-div-one'>
                    <img src="images/Designer.png" alt="" />
                    </div>
                    <div>
                    <h2 className='logo-heading' >VisualAi</h2>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className='heading'>
                    <div className='logo-div-two'>
                        <img src="images/Designer.png" alt="" />
                    </div>
                    <p > <span >VisualAi</span> |Your Personal AI Workspace</p>
                </div>
                
                <h2>Upload Your PPT and get the video</h2>
                
                <FileUpload/>
                <div style={{width:"100%",display:'flex',justifyContent:"center"}}>
                    <button className='submit'>Submit</button>
                    
                </div>
                <div className="player">
                    <h1>Video of Computer vision</h1>
                    <ReactPlayer  controls={true} url='images/sorting-visulizer.mp4' />
                </div>
            </div>
        </div>
    );
}
export default Panel;