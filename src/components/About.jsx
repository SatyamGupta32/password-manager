export default function About() {
  return (
    <div className="min-h-screen z-[-2] w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] text-black">
      <div className="container mx-auto px-3 md:px-0">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            We are dedicated to providing the best services to our clients and
            helping them achieve their business goals. Our mission is to deliver
            top-quality solutions with a focus on innovation, efficiency, and
            customer satisfaction.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="/team-member1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="mt-2">
                John is the visionary behind our company, bringing years of
                experience and a passion for excellence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="/team-member2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
              <p className="mt-2">
                Jane leads our technical team, ensuring that we stay at the
                forefront of technology and innovation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="/team-member3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Alice Johnson</h3>
              <p className="text-gray-600">Head of Marketing</p>
              <p className="mt-2">
                Alice drives our marketing efforts, focusing on strategies that
                enhance our brand presence and reach.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <ul className="space-y-2 pb-4">
            <li className="text-lg">
              Customer Satisfaction: We prioritize our clients' needs and aim to
              exceed their expectations.
            </li>
            <li className="text-lg">
              Innovation: We embrace new ideas and technologies to offer
              cutting-edge solutions.
            </li>
            <li className="text-lg">
              Integrity: We conduct our business with honesty and transparency.
            </li>
            <li className="text-lg">
              Collaboration: We work closely with our clients and within our
              team to achieve common goals.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
