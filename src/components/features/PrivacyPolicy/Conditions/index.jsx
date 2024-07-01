import { Box } from "@mui/material";
import styles from "./styles";

const Conditions = () => {
  const conditions = [
    {
      label: "1. Information Collection and Use",
      value:
        "We may collect personal information, such as your name, email address, phone number, and address, when you voluntarily submit it to us through forms on our website or when you contact us. We use this information to communicate with you, respond to your inquiries, and provide services to you.",
    },
    {
      label: "2. Log Data",
      value:
        "We may also collect information that your browser sends whenever you visit our website (Log Data). This Log Data may include information such as your computer's Internet Protocol (IP) address, browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, and other statistics.",
    },
    {
      label: "3. Cookies",
      value:
        "We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data, which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.",
    },
    {
      label: "4. Information Sharing",
      value:
        "We do not sell, trade, or otherwise transfer your personal information to third parties. We may share your personal information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.",
    },
    {
      label: "5. Data Security",
      value:
        "We strive to protect your personal information and maintain appropriate technical and organizational measures to ensure a level of security appropriate to the risk. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure.",
    },
    {
      label: "6. Links to Other Sites",
      value:
        "Our website may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.",
    },
    {
      label: "7. Children's Privacy",
      value:
        "Our website does not address anyone under the age of 18 (Children). We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.",
    },
    {
      label: "8. Changes to This Privacy Policy",
      value:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.",
    },
    {
      label: "8. Contact Us",
      value:
        "If you have any questions about this Privacy Policy, please contact us at info@velocitycars.com.",
    },
  ];
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.heading}>Privacy Policy</Box>
        <Box sx={styles.description}>
          This Privacy Policy describes how Velocity Racing ("we," "us," or
          "our") collects, uses, and discloses personal information when you
          visit our website or interact with our services. By using our website
          or services, you agree to the collection and use of information in
          accordance with this policy.
        </Box>
        <Box sx={styles.wraps}>
          {conditions.map(({ label, value }, index) => (
            <Box key={index} sx={styles.wraps}>
              <Box sx={styles.label}>{label}</Box>
              <Box sx={styles.description}>{value}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Conditions;
