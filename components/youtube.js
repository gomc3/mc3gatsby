import * as React from "react";

export default function YouTube(props) {
  const youTubeId = props.url.substring(props.url.length - 11);
  return (
    <div className='aspect-w-16 aspect-h-9'>
      <iframe
        title={props.title}
        className='rounded-md absolute inset-0'
        src={`https://www.youtube.com/embed/${youTubeId}`}
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        loading='lazy'
        allowFullScreen
        srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
                <a href=https://www.youtube.com/embed/${youTubeId}?autoplay=1>
                  <img 
                    src=https://img.youtube.com/vi/${youTubeId}/hqdefault.jpg 
                    alt='${props.title}'>
                  <span>&#x25BA;</span>
                </a>`}
      ></iframe>
    </div>
  );
}
