const services = [
  {
    title: "Web Development",
    description: "Building modern, responsive websites.",
    link: "#",
  },
  {
    title: "App Development",
    description: "Creating engaging mobile applications.",
    link: "#",
  },
  {
    title: "Digital Marketing",
    description: "Boosting your online presence.",
    link: "#",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen z-[-2] w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] p-8">
      <h1 className="text-4xl font-bold mb-10">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600">
              {service.title}
            </h2>
            <p className="mt-4">{service.description}</p>
            <a
              href={service.link}
              className="mt-4 inline-block text-red-600 underline"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
