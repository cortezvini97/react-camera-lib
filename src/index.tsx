import * as React from 'react';
import {AlertError} from './styles';

export type CameraProps = Omit<React.HTMLProps<HTMLVideoElement>, "ref"> &
{
    audioConstraints?: MediaStreamConstraints["audio"];
    videoConstraints?: MediaStreamConstraints["video"];
}

interface States {
    error:boolean,
    recordedChunks: any
}

export default class Camera extends React.Component<CameraProps, States>
{
    constructor(props: CameraProps) 
    {
        super(props);
        this.state = {
            error:false,
            recordedChunks:[]
        }
    }

    video:HTMLVideoElement | null


    stream: MediaStream | null

    

    componentDidMount()
    {
        this.getStream()
    }

    private getStream()
    {
        const {videoConstraints, audioConstraints}:any = this.props;

        const constraints = {
            video: typeof videoConstraints !== "undefined" ? videoConstraints : true,
            audio:audioConstraints
        } 

        navigator.mediaDevices.getUserMedia(constraints).then(stream=>
        {
            this.stream = stream;
            this.loadVideo(null, stream)
        }).catch(error=>{
            this.loadVideo(error);
        })
    }

    private loadVideo (err: any ,stream?:MediaStream)
    {
        if(err != null || !stream)
        {
            this.setState({
                error:true
            })
            return
        }

        if(this.video != null)
        {
            this.video.srcObject = stream;
        }
    }

    private getCanvas(video:HTMLVideoElement)
    {
        let canvas: any = document.createElement("canvas");

        let canvasWidth: number = video.videoWidth;
        let canvasHeight:number = video.videoHeight;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        let context = canvas.getContext("2d")
        context.drawImage(video, 0, 0, canvasWidth, canvasHeight)
        return canvas;
    }

    getScreenDataImage()
    {
        if(this.video === null)
        {
            return;
        }
        let canvas = this.getCanvas(this.video);

        return canvas.toDataURL();

    }


    getImageFile()
    {
        if(this.video === null)
        {
            return;
        }
        let canvas = this.getCanvas(this.video);

        
        return this.dataUrltoFile(canvas.toDataURL("image/png"), "file.png");
    }

    private dataUrltoFile(dataUrl:string, filename: string)
    {
        var arr:any = dataUrl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = window.atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }

    render()
    {
        if(this.state.error)
        {
            return (
                <AlertError>
                    Você não pode acessar este recurso.
                </AlertError>
            )
        }

        return <video
            autoPlay
            ref={ref=>{
                this.video = ref
            }}
        />
    }
}

