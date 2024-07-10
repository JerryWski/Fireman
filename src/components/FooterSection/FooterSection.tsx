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
        ©{currentYear()} &nbsp;
          <a aria-label='link to portfolio site'
            className='footer_link'
            href='https://jerrywski.dev'
          >
            Jerry_Wski.
          </a>
          &nbsp; Wszelkie prawa zastrzeżone
        </p>
        <a aria-label='privacy policy' className='privacy' href="/polityka-prywatnosci">Polityka Prywatności</a>
      </div>
    </>
  );
};

export default FooterSection;
