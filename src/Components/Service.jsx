import { motion } from "framer-motion";
import { Code, Layout, Smartphone } from "lucide-react"; // icons (optional)

const services = [
  {
    title: "Web Development",
    description: "Building responsive and interactive websites with modern technologies.",
    icon: <Code size={40} className="text-blue-600" />,
  },
  {
    title: "UI/UX Design",
    description: "Designing clean and user-friendly interfaces for better user experience.",
    icon: <Layout size={40} className="text-blue-600" />,
  },
  {
    title: "Responsive Design",
    description: "Ensuring websites look great on mobile, tablet, and desktop screens.",
    icon: <Smartphone size={40} className="text-blue-600" />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen bg-gray-50 px-6 py-16 flex flex-col items-center"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        My <span className="text-blue-600">Services</span>
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

