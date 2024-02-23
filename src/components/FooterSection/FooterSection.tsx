import './FooterSection.css'

const FooterSection: React.FC = () => {
  const currentYear = (): number => {
    return new Date().getFullYear();
  };
  return (
    <>
        <span className='footer_overline'></span>
      <div className='footer'>
        <p className='footer_year'>
        ©{currentYear()} 
          <a
            className='footer_link'
            href='https://jerrywski.github.io/Portfolio-Site/'
          >
            Jerry_Wski.
          </a>
          &nbsp; Wszelkie prawa zastrzeżone
          <a href="">
          </a>
        </p>
        <a className='privacy' href="/">Polityka Prywatności</a>
      </div>
    </>
  );
};

export default FooterSection;
