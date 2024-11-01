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
      </div>
      <div className="mt-16 flex flex-col gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="border border-white/30 px-5 py-10 text-center"
          >
            <div className="flex justify-center">
              <EcoSystemIcon />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
