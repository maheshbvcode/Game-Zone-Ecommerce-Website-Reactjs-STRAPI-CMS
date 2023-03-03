import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import { Instagram, LinkedIn, Facebook } from '@mui/icons-material';

function Footer() {
    const {
        palette: { neutral },
    } = useTheme();
    return (
        <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"
                        color={shades.secondary[500]}
                    >
                        GAMEZONE
                    </Typography>
                    <div>
                        Recent researches has shown that playing games can help you improve your vision. To put it simply, the players had to identify visual patterns which improved their vision.
                        I was having a discussion with my friend the other day and he was telling me that he’s always been a pretty good decision maker. He was talking about how he always knew what he wanted to do.
                        So I decided to do some research on what exactly makes us better decision makers. It turns out there are a lot of different factors that play into our decision-making abilities and the one that was highlighted the most was playing video games.
                    </div>
                </Box>





                <Box width="clamp(20%, 25%, 30%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Contact Me
                    </Typography>
                    <Typography mb="30px">
                        Uttrahalli, Bangalore south- 560061, Karnataka
                    </Typography>
                    <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
                        Email: maheshbv7090@gmail.com
                    </Typography>
                    <Typography mb="30px">(+91)7090388129</Typography>
                    <Box display="flex" alignItems="center">
                        <a href="https://www.instagram.com/mahesh_the_boss007/">
                            <Instagram />
                        </a>
                        <a href="https://www.linkedin.com/in/mahesh-bv-b72124204/">
                            <LinkedIn />
                        </a>
                        <a href="https://www.facebook.com/your_facebook_account">
                            <Facebook />
                        </a>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
