import { Box, Typography, Stack } from "@pankod/refine-mui";
import { useList } from "@pankod/refine-core";
import {
    PieChart, PropertyReferrals,
    TotalRevenue, TopAgent, PropertyCard,
} from 'components';



const Home = () => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142D">Dashboard</Typography>
            <Box mt="20px" display="flex" flexWrap='wrap' gap={4}>
                <PieChart
                    title='Properties for sale'
                    value={684}
                    series={[75, 25]}
                    colors={['#475be8', '#e4e8ef']} />
                <PieChart
                    title='Properties for rent'
                    value={550}
                    series={[60, 40]}
                    colors={['#e5a330', '#e4b8ef']} />
                <PieChart
                    title='Total customers'
                    value={6840}
                    series={[75, 25]}
                    colors={['#14f122', '#e4e8ef']} />
                <PieChart
                    title='Properties for cities'
                    value={555}
                    series={[75, 25]}
                    colors={['#475be8', '#e57272']} />
            </Box>
            <Stack mt='25px' width='100%' 
            direction={{xs:'column',lg:'row'}}>
                <TotalRevenue />
                <PropertyReferrals />
            </Stack>
        </Box>
    )
}

export default Home;
