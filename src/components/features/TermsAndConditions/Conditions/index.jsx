import { Box } from "@mui/material";
import styles from "./styles";

const Conditions = () => {
  const conditions = [
    {
      label: "1. Acceptance of Terms",
      value:
        "By accessing or using Velocity Racing's website, you agree to these Terms. If you do not agree to abide by these Terms, please refrain from using our website.",
    },
    {
      label: "2. Use of Website",
      value:
        "You must be at least 18 years old to use our website. By using our website, you represent that you are at least 18 years old.",
    },
    {
      label: "3. Intellectual Property",
      value:
        "All content, trademarks, logos, and intellectual property displayed on Velocity Racing's website are the property of Velocity Racing or its licensors. You may not use, reproduce, or distribute any content from our website without prior written consent from Velocity Racing.",
    },
    {
      label: "4. User Accounts",
      value:
        "You may be required to create a user account to access certain features of our website. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account.",
    },
    {
      label: "5. Limitation of Liability",
      value:
        "Velocity Racing and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website or services.",
    },
    {
      label: "6. Privacy Policy",
      value:
        "By using our website, you agree to our Privacy Policy, which outlines how we collect, use, and disclose personal information. Please review our Privacy Policy [link to Privacy Policy] for more information.",
    },
    {
      label: "7. Modification of Terms",
      value:
        "Velocity Racing reserves the right to modify or replace these Terms at any time. We will notify you of any changes by posting the new Terms on this page. You are advised to review these Terms periodically for any changes.",
    },
    {
      label: "8. Contact Us",
      value:
        "If you have any questions about these Terms, please contact us at ( info@velocitycars.com ).",
    },
  ];
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.heading}>Terms and Conditions</Box>
        <Box sx={styles.description}>
          Welcome to Velocity Racing! These Terms and Conditions ("Terms")
          govern your use of our website and services provided by Velocity
          Racing. By accessing or using our website, you agree to be bound by
          these Terms. If you disagree with any part of these Terms, please
          refrain from using our website.
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
