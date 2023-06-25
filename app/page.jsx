import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powred Prompts</span>
      </h1>
      <p className="desc text-center">
        Propmtopia is Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Totam, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Harum, ducimus!
      </p>

      <Feed />
    </section>
  );
};

export default Home;
