"use client";

import { monthFilterOptions, salaryFilterOptions, titleFilterOptions } from "@/configurations/jobsDetails";
import { useRouter } from "next/navigation";

const JobFilters = () => {
  const router = useRouter();

  const handleFilterChange = (filterType: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set(filterType, value);
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <div className="d-flex flex-wrap justify-content-between">
      <div className="dropdown">
        <button
          className="btn outlineBtn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Job Title
        </button>
        <ul className="dropdown-menu">
          {titleFilterOptions.map((title) => (
            <li key={title}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleFilterChange("jobTitle", title)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn outlineBtn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Salary Range
        </button>
        <ul className="dropdown-menu">
          {salaryFilterOptions.map((salary) => (
            <li key={salary}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleFilterChange("salary", salary)}
              >
                {salary}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn outlineBtn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Posted Date
        </button>
        <ul className="dropdown-menu">
          {monthFilterOptions.map((date) => (
            <li key={date}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleFilterChange("date", date)}
              >
                {date}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobFilters;
