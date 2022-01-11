import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconDiscord from "../components/icons/IconDiscord";


const mainnet = [{
  link: "https://main.explorer.agoric.net/validator/agoricvaloper1hp9hr2dguyhjuu9perrjxdg0e36j5fufc6l4ev",
  name: "Agoric",
  icon: "/icons/agoric.png",
  fee: "10%",
  caption: "Delegate to Us.\n10% fee"
}, {
  link: "https://polkadot.js.org/apps/?rpc=wss://rpc-01.snakenet.hydradx.io",
  address: "7L6rgJNHxGgZJnrmt5fPjxAWjTNeEHu4JRVRPBjyDuYuUVCW",
  name: "HydraDx",
  icon: "/icons/hydradx.png",
  fee: "2%",
  caption: "Stake with us.\n2% fee\n7L6rgJNHxGgZJnrmt5fPjxAWjTNeEHu4JRVRPBjyDuYuUVCW"
}];

const activeTestnets = [
  {
    link: "https://www.validators.app/validators/HJtQMXJznWcPLuWzsFxyoLoosCPZcuAeLtd41nBng6j3?locale=en&network=testnet&order=&refresh=",
    name: "Solana",
    icon: "/icons/solana.jpeg"
  },
  {
    link: "https://testnet.ironfish.network/users/397",
    name: "Ironfish",
    icon: "/icons/ironfish.jpeg"
  }
];

const pastTestnets = [
  {
    link: "",
    name: "Umee",
    icon: "/icons/umee.jpeg"
  },
  {
    link: "",
    name: "Agoric",
    icon: "/icons/agoric.png"
  },
  {
    link: "",
    name: "Mina",
    icon: "/icons/mina.png"
  },
  {
    link: "",
    name: "Casper",
    icon: "/icons/casper.jpg"
  }
];


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function NodesGrid(props) {
  const { children, nodes, ...other } = props;

  return (
    <Grid container spacing={4}>
    {nodes.map((card) => (
      <Grid item key={card['name']} xs={12} sm={6} md={4}>
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component="img"
            image={card['icon']}
            alt="icon"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {card['name']}
            </Typography>
            <Typography>
              {card['caption']}
            </Typography>
          </CardContent>
          <CardActions>
            <Button href={card['link']} target='_blank' size="small">View</Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
  );
}

NodesGrid.propTypes = {
  children: PropTypes.node,
  nodes: PropTypes.array.isRequired
};

const theme = createTheme();

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Planemo Staking/Validators</title>
        <meta name="description" content="Planemo staking/validators" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <main>
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
        <Typography variant="h3" component="h1" align="center"
              color="text.primary"
              gutterBottom>
          Planemo Validators
        </Typography>

        <Typography variant="h4" component="h2" align="center" color="text.primary"
              gutterBottom>
          Site is temporarily on maintenance
        </Typography>

        <Box sx={{ width: '100%', border: 1, borderColor: 'divider', borderRadius: 2, mt: 5, mb: 5 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Mainnet" {...a11yProps(0)} />
          <Tab label="Active Testnets" {...a11yProps(1)} />
          <Tab label="Past Testnets" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <NodesGrid nodes={mainnet}></NodesGrid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <NodesGrid nodes={activeTestnets}></NodesGrid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <NodesGrid nodes={pastTestnets}></NodesGrid>
      </TabPanel>
      </Box>

      <Typography variant="h4" component="h2" align="center" color="text.primary"
              gutterBottom>
        Contacts
        </Typography>

        <Stack direction="row" justifyContent="center" spacing={2}>
        <IconButton href="https://twitter.com/bitcoinduke" aria-label="Twitter">
          <TwitterIcon fontSize="large"/>
        </IconButton>
        <IconButton href="https://t.me/mikhail_shu" aria-label="Telegram">
          <TelegramIcon fontSize="large"/>
        </IconButton>
        <IconButton href="MikeSh#8650" aria-label="Discord">
          <IconDiscord/>
        </IconButton>
        </Stack>

        </Container>
        </Box>
      </main>

      <footer className={styles.footer}>
      &copy; 2022 Powered by Planemo Std
      </footer>
    </ThemeProvider>
  )
}
