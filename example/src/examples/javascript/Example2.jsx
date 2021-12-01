import React, {useRef, useCallback} from 'react';
import ReactDOM from 'react-dom';
import Camera from 'react-camera-lib';

const Example2 = ()=>
{

  const cameraRef = useRef(null);


  const upload = useCallback(()=>
  {
    const file = cameraRef.current.getImageFile();

    let formData = new FormData();
    formData.append("file", file);

    fetch('http://localhost/upload/upload.php', {method: "POST", body: formData});
   
  },[cameraRef]);

    return (
        <div>
            <Camera ref={cameraRef}/>
            <button onClick={upload}>Get Image Date</button>
        </div>
    )
}

export default Example2;