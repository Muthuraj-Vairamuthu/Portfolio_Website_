const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-backgroundLight py-16 text-textPrimary"
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Get In Touch</h2>
        <p className="text-center mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Let’s connect and build something great together!
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:bg-opacity-80 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
