import { markdownify } from "@lib/utils/textConverter";

const Newsletter = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  return (
    <section className="section">
      <div className="container max-w-[700px]">
        {markdownify(title, "h1", "h2 mb-8 text-center")}
        <iframe id="newsletter"
        height="1000" width="100%"
        src="https://6acd57c8.sibforms.com/serve/MUIEACxUREpkaq-k7o_DPWmSL4ULEkslGoDUsLzZiCRb7w1Ygi0VACHV46M7Wuk8nt-21yeV6LYlN3c0uTfc1vu6Pr-QYW3Yw1s3qGctXujHErDdZ0xo7uWDzd40knA4TZYSHlrM4EIXsdHyLJAEqeD8sHn_wF2o6unHidGxmDFtFYUyNIz-sN9mwHmZXEIt0Nng1PcJyc5g4RCA">
        </iframe>
      </div>
    </section>
  );
};

export default Newsletter;
