import phoneIcon from '../assets/icons/phone.svg';
import mailIcon from '../assets/icons/mail.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import { contact } from '../data/links';

const rowClass =
  'flex items-center gap-[16px] font-mono font-medium text-[24px] tracking-[-0.48px] text-footer-text hover:underline max-md:text-[18px]';

export default function Footer() {
  return (
    <footer className="relative h-[351px] w-full bg-black max-md:h-auto max-md:pb-[48px]">
      <h2 className="absolute left-[34px] top-[29px] font-display text-[60px] whitespace-nowrap text-white max-md:static max-md:pt-[32px] max-md:pl-[16px] max-md:text-[40px]">
        let’s Connect
      </h2>

      <a
        href={contact.phoneHref}
        className={`${rowClass} absolute left-[50px] top-[118px] max-md:static max-md:mt-[24px] max-md:pl-[16px]`}
      >
        <span className="block size-[33px] shrink-0">
          <img src={phoneIcon} alt="" className="block size-full" />
        </span>
        {contact.phone}
      </a>

      <a
        href={contact.emailHref}
        className={`${rowClass} absolute left-[45px] top-[181px] max-md:static max-md:mt-[16px] max-md:pl-[16px]`}
      >
        <span className="block size-[38px] shrink-0 overflow-hidden">
          <img src={mailIcon} alt="" className="block size-full" />
        </span>
        {contact.email}
      </a>

      <a
        href={contact.linkedinHref}
        target="_blank"
        rel="noreferrer"
        className={`${rowClass} absolute left-[50px] top-[248px] max-md:static max-md:mt-[16px] max-md:pl-[16px]`}
      >
        <span className="block h-[32px] w-[28px] shrink-0">
          <img src={linkedinIcon} alt="" className="block size-full" />
        </span>
        <span className="max-md:break-all">{contact.linkedinLabel}</span>
      </a>
    </footer>
  );
}
