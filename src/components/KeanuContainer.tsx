import { Box } from "@mui/material";

export const KeanuContainer = ({children}: {
    children: React.ReactNode
}): JSX.Element => {
    return (
        <Box
            sx={{
                height: "100vh",
                minHeight: "1240px",
                backgroundColor: "#f0f0f0"
            }}
        >
            <Box sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {children}
            </Box>
        </Box>
    );
};
