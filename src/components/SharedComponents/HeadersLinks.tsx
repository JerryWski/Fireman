import ArrowIcon from '../../utils/ArrowIcon';
import './HeadersLinks.css';

interface Props {
  href1: string;
  title1: string;
  href2: string;
  title2: string;
}


const HeadersLinks: React.FC<Props> = ({ href1, href2, title1, title2 }) => {
  return (
    <div className='headers-links'>
      <a href={href1}> {title1}</a>
      <ArrowIcon />
      <a href={href2}>{title2}</a>
    </div>
  );
};

export default HeadersLinks;
