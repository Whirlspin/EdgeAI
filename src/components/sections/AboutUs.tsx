import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { Info } from "../cards/Info";

export const AboutUs = () => {
  return (
    <section id="about-us">
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
              src="https://images.pexels.com/photos/7651011/pexels-photo-7651011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="nutcase"
            />
          </div>
        </div>

        <div className="w-full md:max-w-7/12 lg:1/2 flex flex-col">
          <Title>About our AI solution</Title>
          <Paragraph className="">
            We are on a mission to empower business with transformative AI
            technology. Our team of experts combine industry leading research
            with innovative algorithms to deliver a platform that adapts to your
            unique needs. Join us and lead the digital revolution in your
            industry.
          </Paragraph>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info title="Mission" description="Something generic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </Info>
            <Info title="Vision" description="Our vision is to drive business innovation and growth.">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};
