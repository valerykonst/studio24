'use client';

export default function AudioComponent({src, title, avatarClass}: {src: string; title: string, avatarClass:string}) {

  const t = (str:string):string => {
    return str.replace("{","<span>")
      .replace("}","</span>")
      .replace("[","<b>")
      .replace("]","</b>")
  }

  const handlePlay = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const audioEl = e.currentTarget.querySelector('audio');
    if (audioEl) {
      if(audioEl.paused) {
        audioEl.play();
        e.currentTarget.classList.add('pause');
      } else {
        audioEl.pause();
        e.currentTarget.classList.remove('pause');
      } 
  }
  };                 
    return (    
    <div className="audio-wrapper"> 
      <div className="audio-cntr">
        <div className={`avatar ${avatarClass}`}></div>
        <div className="play butt" onClick={handlePlay}>
          <audio>
            <source src={src} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <div className="mt-1 text-sm text-center">
        <span dangerouslySetInnerHTML={{__html: t(title)}} />
      </div>
    </div>
    );
}