import React, {useRef, useCallback} from 'react';
import Camera from 'react-camera-lib';

const Example1 = ()=>
{

  const cameraRef = useRef<Camera>(null);
  const imageRef = useRef<HTMLImageElement>(null);


  const getDataImage = useCallback(()=>
  {
    const dataImage = cameraRef.current?.getScreenDataImage();
    if(imageRef !== null)
    {
      const image:any = imageRef.current;

      image.src = dataImage;
    }
  },[cameraRef, imageRef]);

    return (
        <div>
            <Camera ref={cameraRef}/>
            <img ref={imageRef}/>
            <button onClick={getDataImage}>Get Image Date</button>
        </div>
    )
}

export default Example1;