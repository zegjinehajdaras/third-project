import Link from "next/link";
import NewsLetterBanner from "@/components/newsletter/NewsLetterBanner";
import RelatedNewsCard from "@/components/newsletter/RelatedNewsCard";
import { relatedNewsletterArticles } from "@/configurations/newsletterDetails";
import ContributorForm from "@/components/newsletter/ContributorForm";
import MainContent from "@/components/newsletter/main-content/MainContent";
import SubscribeForm from "@/components/newsletter/SubscribeForm";

const NewsLetterPage = () => {
  return (
    <div className="newsletter-section">
      <NewsLetterBanner />
      <div className="container-fluid row py-5 ">
        <div className="col-md-4 d-flex flex-column gap-3 p-5 ">
          <h4 className="highlight fw-bold ">Related News</h4>
          <hr />

          {relatedNewsletterArticles.map((news, index) => {
            return (
              <RelatedNewsCard
                key={index}
                icon={news.icon}
                subtitle={news.subtitle}
                date={news.date}
                title={news.title}
                paragraph={news.paragraph}
              />
            );
          })}
          <ContributorForm />
        </div>
        <MainContent />
      </div>
      <div className="row d-flex  bg-darkgrey p-4">
        <div className="col-md-2">
          <Link className="highlight" href={"readmore"}>
            Read more
          </Link>
        </div>
        {relatedNewsletterArticles.map((news, index) => {
          return (
            <div className="col-md-3">
              <RelatedNewsCard
                key={index}
                icon={news.icon}
                subtitle={news.subtitle}
                date={news.date}
                title={news.title}
                paragraph={news.paragraph}
              />
            </div>
          );
        })}
      </div>
      <SubscribeForm />
    </div>
  );
};

export default NewsLetterPage;
