import { useState } from "react";
import { Box, TextField, FormGroup, FormControlLabel, Checkbox, Button, CircularProgress, Alert, Typography } from "@mui/material";
import { ApolloError, gql, useApolloClient } from "@apollo/client";
import formConfig from "../config.json";
import { useKeanuForm } from "../hooks/useKeanuForm";

export const KeanuForm = () => {

    const apolloClient = useApolloClient();

    const {
        height,
        handleHeightChange,
        width,
        handleWidthChange,
        grayScale,
        handleGrayScaleChange,
        youngKeanu,
        handleYoungKeanuChange,
        keanuLoading,
        setKeanuLoading,
        keanuImg,
        setKeanuImg,
    } = useKeanuForm();
    const [keanuError, setKeanuError] = useState<{ error: string | null }>({ error: null })

    const getKeanuQuery = gql`
    query Keanu {
      keanu (height: "${height}", width: "${width}", config: "${grayScale ? 'g' : ''}${youngKeanu ? 'y' : ''}") {
        image
      }
    }`;

    const showKeanu = () => {
        if (keanuLoading && !keanuImg) {
            return <CircularProgress />
        } else if (keanuImg) {
            return <Box sx={{
                maxWidth: `${window.innerWidth}px`,
                maxHeight: `${window.innerHeight}px`,
                padding: "1rem",
                overflow: "hidden",
                textAlign: "center"
            }}>
                <img src={keanuImg} alt="Keanu" />
            </Box>
        }
    };

    const getKeanu = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const { loading, data, error } = await apolloClient.query({
                query: getKeanuQuery
            })
            console.log(loading, data, error)
            if (loading && !data) {
                setKeanuLoading(true)
            } else if (data) {
                setKeanuImg(data.keanu.image)
            }
        } catch (error) {
            if (error instanceof ApolloError)
                setKeanuError({ error: error.message })
        }
    };

    return (
        <>
            <Box
                sx={{
                    height: "20%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Box
                    component="form"
                    onSubmit={getKeanu}
                    noValidate
                    autoComplete="off"
                >
                    <Box sx={{ display: "flex", gap: "8px" }}>
                        <TextField {...formConfig.heightInput} value={height} onChange={handleHeightChange} id="height-textfield" />
                        <TextField {...formConfig.widthInput} value={width} onChange={handleWidthChange} id="width-textfield" />
                    </Box>
                    <FormGroup>
                        <FormControlLabel {...formConfig.grayScaleCheck} control={<Checkbox onChange={handleGrayScaleChange} value={grayScale} />} />
                        <FormControlLabel {...formConfig.youngKeanuCheck} control={<Checkbox onChange={handleYoungKeanuChange} value={youngKeanu} />} />
                    </FormGroup>
                    <Button type='submit' disabled={!width} variant="contained">Get Keanu</Button>
                </Box>
            </Box>
            <Box sx={{
                height: '700px'
            }}>

                <Alert severity="warning"><Typography fontWeight={600} sx={{ textAlign: 'center' }}>
                    *You can get any size you want but have in mind the viewport size of your device (height: {window.innerHeight}px width: {window.innerWidth}px)
                </Typography></Alert>
                {showKeanu()}
                {
                    keanuError.error && (<Alert severity="error"><Typography fontWeight={600} sx={{ textAlign: 'center' }}>
                        {keanuError.error}
                    </Typography></Alert>)
                }
            </Box>

        </>

    );
};