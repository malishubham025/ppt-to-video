import React, { useState } from 'react';
function FileUpload(props) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
      if (selectedFile) {
          if (
              selectedFile.type === 'application/vnd.ms-powerpoint' ||
              selectedFile.name.endsWith('.ppt') ||
              selectedFile.name.endsWith('.pptx')
          ) {
              const formData = new FormData();
              formData.append('file', selectedFile); // Use 'file' as the key for FormData
  
              fetch('http://127.0.0.1:8000/upload', { // Send POST request to your backend endpoint
                  method: 'POST',
                  body: formData,
              })
              .then(response => {
                  if (response.ok) {
                      alert('Upload successful!');
                  } else {
                      alert('Upload failed.');
                  }
              })
              .catch(error => {
                  console.error('Error:', error);
                  alert('An error occurred while uploading.');
              });
          } else {
              alert('Please select a PowerPoint file (PPT or PPTX) to upload.');
          }
      } else {
          alert('Please select a file to upload.');
      }
  };
  

    return (
        <div>
            {/* {props.name=="true"?alert("hi")} */}
            <form className='uploader' onClick={() => { document.querySelector("#file").click(); }}>
                <label htmlFor="file">Upload a ppt File</label>
                <div style={{ width: "10%" }}>
                    <img style={{ width: "100%" }} src="images/upload.png" alt="" />
                </div>
                <input type="file" id='file' accept=".ppt, .pptx" onChange={handleFileChange} hidden />
                {selectedFile && (
                    <div>
                        <p>Selected file: {selectedFile.name}</p>
                    </div>
                )}
            </form>
            <div style={{ width: "100%", display: 'flex', justifyContent: "center" }}>
                <button className='submit' onClick={handleUpload}>Submit</button>
            </div>
        </div>
    );
}
export default FileUpload;