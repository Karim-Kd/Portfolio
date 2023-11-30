import {
  SiTypescript,
  SiNodedotjs,
  SiAngularjs,
  SiMicrosoftsqlserver,
  SiCss3,
  SiHtml5,
  SiDotnet
} from 'react-icons/si';
import { Title } from '../../components/typography'
import theme from '../../styles/theme/theme';
import { Container, ContainerWrapper, SubTitle, Wrapper } from './styles';

export default function Projects() {
  return (
    <Container>
      <Title title="Professional experience" color={theme.colors.background} />
      <ContainerWrapper>
        <Wrapper>
          <div data-aos="fade-left" data-aos-duration="1500">
            <SubTitle> Angular/Dotnet Developer </SubTitle>
            <h1> TSI-ERP : Migration of an existant Erp WinForms app to a Web app</h1>
            <p> Implemented RESTful APIs and backend functionalities using .NET6 and C#.</p>
            <p> Created frontend interfaces using Angular, HTML, CSS, and Typescript and NGPrime.</p>
            <p> Utilized Git/Github for efficient code management and collaboration with other developers.</p>
            <p> Used SQL Server and SSMS to manage the database.</p>
          </div>
          <div data-aos="fade-up-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <h4> <SiAngularjs /> <SiTypescript /> <SiMicrosoftsqlserver /> <SiCss3 /> <SiHtml5 /> <SiNodedotjs /> <SiDotnet /></h4>
          </div>
        </Wrapper>
      </ContainerWrapper>
      <ContainerWrapper>
        <Wrapper>
          <div data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <h4> <SiAngularjs /> <SiTypescript /> <SiCss3 /> <SiHtml5 /> <SiNodedotjs /></h4>
          </div>
          <div data-aos="fade-right" data-aos-duration="1500">
            <SubTitle> Angular Developer </SubTitle>
            <h1>  Parcel-Service : Working on a delivery app </h1>
            <p> Created frontend interfaces using Angular, HTML, CSS, and Typescript and NGPrime.</p>
            <p> Utilized Git/Github for efficient code management and collaboration with other developers.</p>
          </div>
        </Wrapper>
      </ContainerWrapper>
      <ContainerWrapper >
        <Wrapper>
          <div data-aos="fade-left" data-aos-duration="1500">
            <SubTitle> Angular/Dotnet Developer</SubTitle>
            <h1>  Newrest FI’Care : Working on an app that tracks Newrest Drivers.</h1>
            <p> Implemented RESTful APIs and backend functionalities using .NET6 and C#.</p>
            <p> Created frontend interfaces using Angular, HTML, CSS, and Typescript 
            and Angular-Material.</p>
            <p> Utilized Git/AzureDevops for efficient code management and collaboration with other developers.</p>
            <p> Used SQL Server and SSMS to manage the database</p>
            <p> Generating reports using SSRS (SQL Server Reporting Services).</p>
          </div>
          <div data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <h4> <SiAngularjs /> <SiTypescript /> <SiMicrosoftsqlserver /> <SiCss3 /> <SiHtml5 /> <SiNodedotjs /> <SiDotnet /></h4>
          </div>
        </Wrapper>
      </ContainerWrapper>
    </Container>
  );
}