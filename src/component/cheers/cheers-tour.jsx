import DescribeTour from "./describe-tour";
import Vietnam from "./vietnam";
import '../../css/cheers.css';

export default function CheerTour() {
  return (
    <>
      <div className="flex items-center justify-center pt-16">
        <div className="cheertour-main container relative">
          <div className="tour-main absolute">
            <p className="text-[#B34B1E] font-bold">START WITH</p>
            <div className="tour text-5xl font-extrabold">
              <div className="text-[#B34B1E] font-bold">HA GIANG</div>
              <div className="text-[#B34B1E] font-bold">CHEERS TOUR</div>
            </div>
          </div>
          <div className="tour-vn flex items-center justify-between">
            <DescribeTour></DescribeTour>
            <Vietnam></Vietnam>
          </div>
        </div>
      </div>
    </>
  );
}
