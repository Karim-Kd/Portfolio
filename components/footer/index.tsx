import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container } from './styles';

export default function Footer() {
  function onHandleRedirect(url: string) {
    window.open(url, "_blank");
  }

  return (
    <Container>
      <div className="container">
        <section>
          <AiOutlineGithub
            onClick={() => onHandleRedirect('https://github.com/Karim-Kd')}
          />
          <AiFillLinkedin
            onClick={() => onHandleRedirect('https://www.linkedin.com/in/karim-kd/')}
          />
        </section>
      </div>
    </Container>
  );
}