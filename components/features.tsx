import EcoSystemIcon from "@/assets/icons/ecosystem.svg";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white">
      <div className="container">
        <h2 className="text-center font-bold text-5xl tracking-tighter">
          Everything you need
        </h2>
        <p className="text-center mt-5 text-xl text-white/70">
          Set tasks, get reminders and see your teams progress rise quickly.
        </p>

        <div className="mt-16 flex flex-col gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-white/30 px-5 py-10 text-center rounded-xl"
            >
              <div className="inline-flex size-14 bg-white text-black items-center justify-center rounded-lg">
                <EcoSystemIcon />
              </div>
              <h3 className="mt-6 font-bold">{feature.title}</h3>
              <p className="mt-2 text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
