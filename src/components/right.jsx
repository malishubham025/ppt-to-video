import ReactPlayer from 'react-player';
import React, { useState } from 'react';
import Loader from "./loader";

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    var [name,setName]=React.useState("");
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (selectedFile) {
            setName("File Uploading");
            setLoading(true); // Set loading to true when starting upload
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
                .then(data => {
                    // setLoading(false); // Set loading to false when upload completes
                    if (!data.ok) {
                        alert('Upload Failed!');
                    }
                    else{
                         return data.json();
                    }
                        
                })
                .then((data)=>{
                    setName("File Uploading 50%");
                    const images_presence = data.images_presence;
                    const file_path=data.file_path;
                    fetch('http://127.0.0.1:8000/image_presence', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json' // Set content type to JSON
                        },
                        body: JSON.stringify({  // Convert data to JSON format
                            images_presence: images_presence,
                            file_path: file_path
                        })
                    })                    
                    .then((responce)=>{
                        setName("File Uploading 100%");
                        setLoading(false); 
                        if (!responce.ok) {
                            alert('processing  Failed!');
                        }
                        else{
                            setName("File Uploading 80%");
                            setLoading(true);
                             return responce.json();
                        }
                    })
                    .then((responce)=>{
                        setName("uploading 100%");

                        fetch('http://127.0.0.1:8000/image_explain', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json' // Set content type to JSON
                        },
                        body: JSON.stringify({  // Convert data to JSON format
                            "explanations":responce.explanations,
                            "images_presence":responce.images_presence,
                            "Title":responce.Title,
                            "file_paths":responce.file_paths
                        })
                        }).then((responce)=>{
                            if(responce.ok){
                                setName("uploading complete");
                               
                                setTimeout(()=>{
                                    setLoading(false);
                                },5000);
                            }
                            else{
                                alert("error");
                            }
                        })   
                    })
                })
                .catch(error => {
                    setLoading(false); // Set loading to false in case of error
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
            {loading && <Loader  name={name}/>} {/* Display loader when loading is true */}
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

function Right() {
    return (
        <div className="right">
            <div className='heading'>
                <div className='logo-div-two'>
                    <img src="images/Designer.png" alt="" />
                </div>
                <p> <span>VisualAi</span> |Your Personal AI Workspace</p>
            </div>
            <h2>Upload Your PPT and get the video</h2>
            <FileUpload />
        </div>
    );
}

export default Right;
