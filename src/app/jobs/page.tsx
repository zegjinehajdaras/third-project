import JobFilters from "@/components/jobscomponent/JobFilter";
import JobsCard from "@/components/jobscomponent/JobsCard";

const jobsData = [
  {
    date: "April,2024",
    highlightTitle: "Cybersecurity",
    title: "Analyst",
    paragraph:
      "Join our team as a Cybersecurity Analyst, where you will monitor and analyze security systems to identify vulnerabilities and respond to incidents, ensuring our organizations data remains secure.",
  },
  {
    date: "April,2024",
    highlightTitle: "Security",
    title: "Engineer",
    paragraph:
      "We are seeking a Security Engineer to design and implement robust security solutions that protect our infrastructure and data from cyber threats. Your expertise will be crucial in developing innovative security architectures and staying ahead of evolving risks.",
  },
  {
    date: "5 May,2024",
    highlightTitle: "Penetration ",
    title: "Tester",
    paragraph:
      "As a Penetration Tester, you will simulate attacks to identify and exploit vulnerabilities, providing critical insights to enhance our security posture.",
  },
  {
    date: "10 May,2024",
    highlightTitle: "Incident Response  ",
    title: "Specialist",
    paragraph:
      "Join us as an Incident Response Specialist, where you will manage and respond to security incidents, conducting investigations and implementing strategies to mitigate future threats.",
  },
  {
    date: "1 June,2024",
    highlightTitle: "Threat Intellingence  ",
    title: "Analyst",
    paragraph:
      "We are looking for a Threat Intelligence Analyst to gather and analyze threat data, helping us stay ahead of emerging cyber threats and strengthen our defense strategies.",
  },
  {
    date: "10 June,2024",
    highlightTitle: "Information Security  ",
    title: "Officer",
    paragraph:
      "We are seeking an Information Security Officer to lead our security initiatives, develop policies, and ensure compliance with regulations while safeguarding our organization’s sensitive data and infrastructure."}
 
];

const JobsPage = async ({ searchParams }: { searchParams: any }) => {
  const { jobTitle, salary, date } = searchParams;

  const filteredJobs = jobsData.filter((job) => {
    const matchesJobTitle = jobTitle
      ? job.highlightTitle.toLowerCase().includes(jobTitle.toLowerCase())
      : true;
    const matchesDate = date
      ? job.date.toLowerCase().includes(date.toLowerCase())
      : true;

    return matchesJobTitle && matchesDate;
  });

  return (
    <div>
      <div className="job-banner w-50 text-center mx-auto mb-5">
        <h1>Join Our Team</h1>
        <JobFilters />
      </div>
      <div className="row row-cols-1 row-cols-md-3 d-flex  gap-2 mb-5 justify-content-center">
        {filteredJobs.map((job, index) => (
          <JobsCard
            key={index}
            data={job.date}
            highlightTitle={job.highlightTitle}
            title={job.title}
            paragraph={job.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
