const BottomSheet = ({ children }) => {
  const [isAmimate, setIsAnimate] = React.useState(false);
  React.useEffect(() => {
    setIsAnimate(true);

    return () => {
      setIsAnimate(false);
    };
  }, []);
  return (
    <main className="h-screen w-screen fixed left-0 top-0 z-30">
      <section
        className={`absolute bottom-0 left-0 w-screen overflow-scroll h-fit pb-10 bg-main-black  transition-all z-40 ${
          isAmimate ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <header className="sticky w-full top-0 bg-main-black p-5 flex justify-between z-50">
          <button>취소</button>
          <button>다음</button>
        </header>
        {/* <article className="grid grid-cols-3 gap-2 w-screen px-4">
          {GOLF_ZONE_TABLE?.map((el) => {
            return <GolfZone key={el} zoneId={el} />;
          })}
        </article> */}
        {children}
      </section>
      <div className="w-full h-full bg-black opacity-50 z-30 touch-none overflow-hidden" />
    </main>
  );
};
