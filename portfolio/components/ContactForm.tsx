const ContactSection = () => {
  return (
    <section id="contact" className="container mx-auto py-20">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <form
        action="https://formsubmit.co/your-email"
        method="POST"
        className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow"
      >
        <input type="text" name="name" placeholder="Name" className="block w-full p-3 mb-4 border rounded" required />
        <input type="email" name="email" placeholder="Email" className="block w-full p-3 mb-4 border rounded" required />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          className="block w-full p-3 mb-4 border rounded"
          required
        ></textarea>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
