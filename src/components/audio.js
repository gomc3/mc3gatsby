import * as React from "react";

export default function AudioFile({ title, id, captionSrc, lang }) {
  return (
    <figure className='text-center'>
      <figcaption className='text-lg font-semibold text-blue-700'>
        {title}
      </figcaption>
      <audio controls className='mx-auto'>
        <source
          src={`https://docs.google.com/uc?id=${id}&export=open`}
          type='audio/mp3'
        />
        <track
          kind='captions'
          srcLang={lang ? lang : `en`}
          src='https://drive.google.com/file/d/1HTNbqZE-jt-UTEZBZCp3fJSEszTQVALl/view?usp=sharing'
        ></track>
        If you see this, then your browser does not support the{" "}
        <code>audio</code> element.
      </audio>
    </figure>
  );
}
