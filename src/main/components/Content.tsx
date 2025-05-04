import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import structures from "../../data";
import CatCard from "./CatCard";

const cardData = [structures[3], structures[6], structures[2], structures[7]]

function Content() {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={{ xs: 3, md: 6 }}>
                {cardData.map((item, index) => (
                    <Grid key={index} size={{ xs: 12, md: 6 }} >
                        <CatCard cat={ item } index={index + 3}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Content;