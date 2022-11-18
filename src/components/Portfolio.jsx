import React from "react";
import portfolio from "../data/portfolio.json";
import ProjectDetail from "./ProjectDetail";

const Portfolio = () => {
  const [showDetail, setShowDetail] = React.useState(false);

  const handleShowDetail = React.useCallback(() => {
    setShowDetail(true);
  }, []);

  const handleHideDetail = React.useCallback(() => {
    setShowDetail(false);
  }, []);

  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row">
          {portfolio &&
            portfolio.map((project) => (
              <div key={project.projectId} className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                  <a
                    className="portfolio-link"
                    data-bs-toggle="modal"
                    href="#portfolioModal1"
                    onClick={handleShowDetail}
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-circle-info fa-3x"></i>
                      </div>
                    </div>
                    <img
                      className="img-fluid"
                      src={project.imageUrl}
                      alt="..."
                    />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">
                      {project.client}
                    </div>
                    <div className="portfolio-caption-subheading text-muted">
                      {project.category}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {showDetail && (
        <ProjectDetail show={showDetail} onHide={handleHideDetail} />
      )}
    </section>
  );
};

export default Portfolio;
