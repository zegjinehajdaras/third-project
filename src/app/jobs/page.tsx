import JobFilters from "@/components/jobs/JobFilter";
import JobsCard from "@/components/jobs/JobsCard";
import { jobsData } from "@/configurations/jobsDetails";


const JobsPage = async ({ searchParams }: { searchParams: any }) => {
  const { jobTitle, date } = searchParams;

  let filteredJobs = jobsData;

  if (jobTitle) {
    filteredJobs = jobsData.filter((job) => job.fullTitle.toLowerCase().includes(jobTitle.toLowerCase()));
  }

  if (date) {
    filteredJobs = jobsData.filter((job) => job.date.toLowerCase().includes(date.toLowerCase()));
  }


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
            title={job.title}
            higlight={job.highlight}
            paragraph={job.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
