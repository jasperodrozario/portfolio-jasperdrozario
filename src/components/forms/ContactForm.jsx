import Button from "@/components/utils/button";

export default function ContactForm() {
  return (
    <div className="bg-neutral-900 p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-6 text-[#63FFD9]">
        Send a Message
      </h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-3 border border-teal-700 rounded-lg focus:outline-none focus:border-[#63FFD9] focus:ring-1 focus:ring-[#63FFD9] transition-colors"
              placeholder="John"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-3 border border-teal-700 rounded-lg focus:outline-none focus:border-[#63FFD9] focus:ring-1 focus:ring-[#63FFD9] transition-colors"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-teal-700 rounded-lg focus:outline-none focus:border-[#63FFD9] focus:ring-1 focus:ring-[#63FFD9] transition-colors"
            placeholder="john@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 border border-teal-700 rounded-lg focus:outline-none focus:border-[#63FFD9] focus:ring-1 focus:ring-[#63FFD9] transition-colors"
            placeholder="Project Discussion"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 border border-teal-700 rounded-lg focus:outline-none focus:border-[#63FFD9] focus:ring-1 focus:ring-[#63FFD9] transition-colors resize-none"
            placeholder="Tell me about your project..."
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
}
