# react-camera-lib

Webcam component for React.

## Licence

MIT [LICENCE](https://github.com/cortezvini97/react-camera-lib/blob/master/LICENCE)

## Init

```shell
    # NPM
   npm i react-camera-lib

   # YARN
   yarn add react-camera-lib
```

## Usage Typescript

### Example I - GetImageDataURI (Typescript)

[Example I](https://github.com/cortezvini97/react-camera-lib/blob/master/example/src/examples/typescript/Example1.tsx)

```TSX
import React, {useRef, useCallback} from 'react';
import ReactDOM from 'react-dom';
import Camera from 'react-camera-lib';

const App = ()=>
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

ReactDOM.render(<App />, document.getElementById("root"))

```

### Example II - uploadImage (Typescript)

[Example II](https://github.com/cortezvini97/react-camera-lib/blob/master/example/src/examples/typescript/Example2.tsx)

```TSX
import React, {useRef, useCallback} from 'react';
import ReactDOM from 'react-dom';
import Camera from 'react-camera-lib';

const App = ()=>
{

  const cameraRef = useRef<Camera>(null);


  const upload = useCallback(()=>
  {
    const file: any = cameraRef.current?.getImageFile();

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

ReactDOM.render(<App />, document.getElementById("root"))
```

## Usage javascript

### Example I - GetImageDataURI (Javascript)

[Example I](https://github.com/cortezvini97/react-camera-lib/blob/master/example/src/examples/javascript/Example1.jsx)

```JSX
import React, {useRef, useCallback} from 'react';
import ReactDOM from 'react-dom';
import Camera from 'react-camera-lib';

const App = ()=>
{

  const cameraRef = useRef(null);
  const imageRef = useRef(null);


  const getDataImage = useCallback(()=>
  {
    const dataImage = cameraRef.current.getScreenDataImage();
    imageRef.current.src = dataImage;
  },[cameraRef, imageRef]);

    return (
        <div>
            <Camera ref={cameraRef}/>
            <img ref={imageRef}/>
            <button onClick={getDataImage}>Get Image Date</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
```

### Example II - uploadImage (Javascript)

[Example II](https://github.com/cortezvini97/react-camera-lib/blob/master/example/src/examples/javascript/Example2.jsx)

```JSX
import React, {useRef, useCallback} from 'react';
import ReactDOM from 'react-dom';
import Camera from 'react-camera-lib';

const App = ()=>
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

ReactDOM.render(<App />, document.getElementById("root"))
```
