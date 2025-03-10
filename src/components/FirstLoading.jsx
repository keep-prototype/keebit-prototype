import React from 'react';

export const FirstLoading = () => {
  const [isFirst, setIsFirst] = React.useState(true);
  const [isAnimate, setIsAnimate] = React.useState(false);
  const audioRef = React.useRef(null);
  

  React.useEffect(() => {
    setIsAnimate(true);

    if (audioRef.current) {
      audioRef.current.muted = true;
      audioRef.current.play().then(() => {
        audioRef.current.muted = false;
      }).catch(error => console.error("Audio play error:", error));
    }


    setTimeout(() => {
      setIsFirst(false);
    }, 3000);
  }, []);
  if (isFirst) {
    return (
      <main
        className={`${
          isAnimate ? 'bg-main-black' : 'bg-dark-gray'
        } fixed top-0 left-0 w-screen h-screen flex flex-col gap-10 items-center justify-center z-50 transition-2s text-main-orange`}
      >
        <audio ref={audioRef} src="https://paju.s3.ap-northeast-2.amazonaws.com/keebit-init-audio.mp3" preload="auto" />
        <p
          className={`text-lg scale100 transition-2s opacity-100 color-black logo-font ${
            isAnimate
              ? 'transform scale-200 transition-2s opacity-0 color-white'
              : ''
          }`}
        >
          KEEBIT
        </p>
        {/* <p
          className={`text-lg scale100 transition-2s opacity-100 color-black logo-font-2 ${
            isAnimate
              ? 'transform scale-200 transition-2s opacity-0 color-white'
              : ''
          }`}
        >
          KEEBIT
        </p> */}
      </main>
    );
  }
};
