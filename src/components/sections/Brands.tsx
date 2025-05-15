import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const logos = [
  "discord",
  "openai",
  "paypal",
  "slack",
  "spotify",
  "uber",
  "youtube",
];

export const Brands = () => {
  return (
    <section>
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title>Trusted by industry leaders</Title>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {logos.map((logo, key) => (
            <div
              key={key}
              className="p-4 sm:p=5 rounded-2xl bg-body border border-box-border group"
            >
              <img
                src={`public/assets/logos/${logo}.svg`}
                alt="logo"
                className="h-7 sm:h-12 w-auto ease-linear duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
