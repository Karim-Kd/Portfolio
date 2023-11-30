import { Container, TextContainer, InfosContainer, CodeItem, TextItem } from './styles';
import Animation from '../../components/animation'
import TextLoop from 'react-text-loop/lib/components/TextLoop';

export default function Home() {
  const calculateAge = (bornYear: number): number => {
    return new Date().getFullYear() - bornYear;
  }

  return (
    <>
      <Container data-aos="fade-up">
        <div>
          <TextContainer>
            <TextItem>
              <h1>Hello World<span>,</span></h1>
              <h2>I am Karim,</h2>
              <h2>a {""}
                <TextLoop>
                  <span className="highlight">Dotnet developer</span>
                  <span className="highlight">Angular developer</span>
                  <span className="highlight">Full-Stack developer</span>
                </TextLoop>
              </h2>
            </TextItem>
          </TextContainer>
          <InfosContainer>
            <CodeItem data-aos="zoom-in">
              <span className="comment">{`//My profile`}</span>
              <span className="purple">Profile</span> {'\u007B'}
              <div>
                Full-Name: <span className="blue">Karim Kdaiem</span>,
              </div>
              <div>
                Age: <span className="blue">{calculateAge(2000)}</span>,
              </div>
              <div>
                Local: {'\u007B'}
                <div>
                  City: <span className="blue">Tunis</span>, <br />
                  Country: <span className="blue">Tunisia</span>,
                </div>
                {'\u007D'},
              </div>
              {'\u007D'}
            </CodeItem>
          </InfosContainer>
        </div>
        <Animation path={`/nextjs-ssg-portfolio/web-developer.json`} />
      </Container>
    </>
  );
}