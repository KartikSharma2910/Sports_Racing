import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import styles from "./styles";

const Conditions = () => {
  const conditions = [
    {
      label: "1. Terms and Conditions",
      value:
        "Welcome to Velocity Racing! These Terms and Conditions (Terms) govern your use of our website and services provided by Velocity Racing. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these Terms, please refrain from using our website.",
    },
    {
      label: "2. How can I become a part of Velocity Racing?",
      value:
        "We may also collect information that your browser sends whenever you visit our website (Log Data). This Log Data may include information such as your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, and other statistics.",
    },
    {
      label: "3. Where are Velocity Racing's headquarters located?",
      value:
        "We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data, which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.",
    },
    {
      label: "4. What racing series does Velocity Racing compete in?",
      value:
        "We do not sell, trade, or otherwise transfer your personal information to third parties. We may share your personal information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.",
    },
    {
      label:
        "5. How can I stay updated on Velocity Racing's latest news and events?",
      value:
        "We strive to protect your personal information and maintain appropriate technical and organizational measures to ensure a level of security appropriate to the risk. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure.",
    },
    {
      label: "6. Does Velocity Racing offer sponsorship opportunities?",
      value:
        "Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.",
    },
    {
      label: "7. How does Velocity Racing prioritize safety on the track?",
      value:
        "Our website does not address anyone under the age of 18 (Children). We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.",
    },
    {
      label: "8. Can I visit Velocity Racing's facilities?",
      value:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.",
    },
    {
      label: "9.  How does Velocity Racing contribute to the community?",
      value:
        "If you have any questions about this Privacy Policy, please contact us at info@velocitycars.com.",
    },
    {
      label: "10. How can I contact Velocity Racing for further inquiries?",
      value:
        "If you have any questions about this Privacy Policy, please contact us at info@velocitycars.com.",
    },
  ];
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.heading}>FREQUENTL ASKED QUESTIONS (FAQ)</Box>
        <Box sx={styles.description}>
          Welcome to Velocity Racing's Frequently Asked Questions (FAQ) page.
          Whether you're curious about our racing series, interested in joining
          our team, or seeking information about our community initiatives,
          you'll find answers to commonly asked questions here.
        </Box>
        <Box sx={styles.wraps}>
          {conditions.map(({ label, value }, index) => (
            <Accordion key={index} sx={styles.accordianDetails}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={styles.icon} />}
                sx={styles.accordian}
              >
                <Box sx={styles.label}>{label}</Box>
              </AccordionSummary>
              <AccordionDetails sx={styles.accordianDetails}>
                <Box sx={styles.value}>{value}</Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Conditions;
