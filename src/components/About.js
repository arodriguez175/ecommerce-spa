import img1 from "../images/blur-close-up-dawn-2729899.jpg";
import img2 from "../images/athletes-exercise-feet-2526878.jpg";

function About() {
  return (
    <div>
      <h2 className="text-center text-2xl m-5">About Us</h2>
      <div className="block mx-auto w-full md:w-[500px] lg:w-[900px]">
        <img src={img1} className="rounded-xl" alt="Shoes in dawn." />
        <p className="mx-3 mt-3 text-[11pt] md:mx-0 md:text-[12pt] md:mt-4 lg:text-[16pt]">
          Our purpose is to provide quality sport footwear at affordable prices.
          We believe everyone should have the opportunity to have the best
          possible products that unites the world through sport.
        </p>
      </div>

      <div className="block mx-auto w-full mt-12 md:w-[500px] lg:w-[900px] lg:mt-24">
        <img
          src={img2}
          className="rounded-xl"
          alt="Marathon runnners warming up."
        />
        <p className="mx-3 mt-3 text-[11pt] md:mx-0 md:text-[12pt] md:mt-4 lg:text-[16pt]">
          We believe that, through sport, we have the power to change lives.
          This core belief guides the way we run our company, how we work with
          our partners, how we create our products, and how we engage with our
          consumers.
        </p>
      </div>
    </div>
  );
}

export default About;
