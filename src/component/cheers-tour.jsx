import DescribeTour from "./describe-tour";
import Vietnam from "./vietnam";
import '../css/cheers.css';

export default function CheerTour() {
  return (
    <>
      <div className="flex items-center justify-center pt-16">
        <div className="container relative px-10">
          <div className="tour-main">
            <p className="text-[#B34B1E] font-bold">START WITH</p>
            <div className="tour text-5xl font-extrabold">
              <div className="text-[#B34B1E] font-bold">HA GIANG</div>
              <div className="text-[#B34B1E] font-bold">CHEERS TOUR</div>
            </div>
          </div>
          <div className="absolute tour-vn top-0 left-0 px-4 flex items-center justify-center" >
            <DescribeTour></DescribeTour>
            <Vietnam></Vietnam>
          </div>
        </div>
      </div>
    </>
  );
}
