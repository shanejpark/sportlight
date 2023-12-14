export function Video(props: { src: string }) {
    return ( 
    <div className="aspect-h-9 aspect-w-16"> 
    <iframe className="rounded-lg" src={props.src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> 
    </div> ); }