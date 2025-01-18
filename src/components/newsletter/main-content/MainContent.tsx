import { mainContent } from "@/configurations/newsletterDetails";

export default function MainContent() {
  return (
    <div className="col-md-8 py-4">
      <hr />
      <h5>{mainContent.summary.title}</h5>
      <p>{mainContent.summary.description}</p>
      <hr />
      <div className="intro">
        <h3>{mainContent.introduction.title}</h3>
        <p>{mainContent.introduction.description}</p>
      </div>

      <div className="key-trend">
        <h3>{mainContent.keyTrends.title}</h3>
        {mainContent.keyTrends.trends.map((trend, index) => {
          return (
            // TrendItem component
            <div key={index}>
              <span>
                <strong>{index + 1}.{trend.title}</strong>{" "}
              </span>
              <p>{trend.description}</p>
            </div>
          )
        })}
      </div>
      <div className="notable-case">
        <h3>{mainContent.notableCaseStudies.title}</h3>
        {mainContent.notableCaseStudies.caseStudies.map((caseStudy, index) => {
          return (
            // CaseStudyItem component
            <div key={index}>
              <span className="highlight">Case Study {index + 1}:</span>{" "}
              <span>
                <strong>{caseStudy.title}</strong>
              </span>
              <p>{caseStudy.description}</p>
            </div>
          )
        })}
      </div>
      <div className="prevention">
        <h3>{mainContent.preventionStrategies.title}</h3>
        <p className="highlight">
          {mainContent.preventionStrategies.subtitle}
        </p>

        {mainContent.preventionStrategies.strategies.map((strategy, index) => {
          return (
            // StrategyItem component
            <div key={index}>
              <p className="highlight">
                <strong>{index + 1}. {strategy.title}</strong>
              </p>
              <p>{strategy.description}</p>
            </div>
          )
        })}
      </div>
      <div className="conclusion">
        <h3>{mainContent.conclusion.title}</h3>
        <p className="fw-bold">
          {mainContent.conclusion.description}
        </p>
        <hr className='horizontaLine' />
      </div>
    </div>
  )
}