import monitorStand from '../assets/icons/monitor-stand.svg';
import oncosearchShot from '../assets/img/oncosearch.webp';
import yardPhone from '../assets/img/yard-phone.webp';
import yardTablet from '../assets/img/yard-tablet.webp';

/**
 * The desktop-monitor illustration beside OncoSearch. Figma builds it from
 * four gradient rectangles plus a vector stand, so it is rebuilt here rather
 * than flattened to an image — only the screenshot itself is a bitmap.
 */
export function OncoSearchMockup() {
  return (
    <div className="relative h-[388px] w-[500px] shrink-0 overflow-hidden">
      {/* stand neck + base */}
      <div className="absolute left-[248.915px] top-[319.889px] h-[68.03px] w-[62.171px]">
        <img src={monitorStand} alt="" className="block size-full" />
      </div>
      <div
        className="absolute left-[208.042px] top-[380.881px] h-[7.038px] w-[143.916px] rounded-[1.351px]"
        style={{
          backgroundImage:
            'linear-gradient(171.03deg, #000 5.4358%, #8b8b8b 49.041%, #000 95.459%)',
        }}
      />

      {/* bezel, screen well, screenshot */}
      <div
        className="absolute left-[60px] top-[12.317px] h-[322.108px] w-[440px] rounded-[8.105px]"
        style={{
          backgroundImage:
            'linear-gradient(112.95deg, #000 5.4358%, #636363 49.041%, #000 95.459%)',
        }}
      />
      <div className="absolute left-[68.588px] top-[19.953px] h-[282.801px] w-[422.825px] rounded-[1.351px] border-[0.338px] border-[#e6e6e6] bg-[#f1f1f1]" />
      <img
        src={oncosearchShot}
        alt="OncoSearch dashboard"
        className="absolute left-[68px] top-[20px] h-[301px] w-[424px] max-w-none object-cover"
      />
    </div>
  );
}

/**
 * Two overlapping device shots beside the Yard Management System write-up.
 * They deliberately bleed past the 509×388 box — the card clips them.
 */
export function YardMockup() {
  return (
    <div className="relative h-[388px] w-[509px] shrink-0">
      <img
        src={yardPhone}
        alt="Yard Management System on mobile"
        className="absolute left-[-6px] top-[4px] h-[445px] w-[321px] max-w-none object-cover"
      />
      <img
        src={yardTablet}
        alt="Yard Management System on tablet"
        className="absolute left-[215px] top-[62px] h-[425px] w-[309px] max-w-none object-cover"
      />
    </div>
  );
}
