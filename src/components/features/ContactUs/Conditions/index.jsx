import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/material";
import { Input } from "components/common";
import { useForm } from "react-hook-form";
import styles from "./styles";

const Conditions = () => {
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      query: "",
    },
    mode: "all",
    criteriaMode: "all",
  });
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.container}>
        <Box sx={styles.heading}>Contact Us</Box>
        <Box sx={styles.description}>
          Thank you for your interest in Velocity Racing. Please feel free to
          reach out to us with any questions, inquiries, or feedback you may
          have. We are here to assist you and provide the information you need.
        </Box>
        <Box sx={styles.wraps}>
          <Box sx={styles.inputContainer}>
            <Input
              name="name"
              label="Name"
              placeholder="Name"
              control={control}
              errors={errors}
            />
            <Input
              name="phone"
              label="Phone"
              placeholder="Phone number"
              control={control}
              errors={errors}
            />
            <Input
              name="email"
              label="Email"
              placeholder="Email"
              control={control}
              errors={errors}
            />
            <Input
              name="query"
              label="Query"
              placeholder="Type here.."
              control={control}
              errors={errors}
            />
          </Box>
          <Box sx={styles.rightBox}>
            <Box sx={styles.flexer}>
              <Box sx={styles.infoContain}>
                <EmailOutlinedIcon />
                Email: info@velocitycars.com
              </Box>
              <Box sx={styles.infoContain}>
                <LocalPhoneOutlinedIcon />
                Phone: +1 (555) 123-4567
              </Box>
              <Box sx={styles.infoContain}>
                <ApartmentOutlinedIcon />
                Address: 123 Speedway Lane, Cityville, State, Zip
              </Box>
            </Box>
            <Box>
              <Box sx={styles.heading}>Business Hours:</Box>
              <Box sx={styles.description}>
                Monday - Friday: 9:00 AM - 5:00 PM / Saturday - Sunday: Closed
              </Box>
            </Box>
            <Box sx={styles.iconWrapper}>
              <FacebookOutlinedIcon sx={styles.icon} />
              <XIcon sx={styles.icon} />
              <InstagramIcon sx={styles.icon} />
              <LinkedInIcon sx={styles.icon} />
              <YouTubeIcon sx={styles.icon} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Conditions;
