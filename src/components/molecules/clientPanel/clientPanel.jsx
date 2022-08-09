 // Utils & Config
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useTheme } from "@material-ui/core";
import fonts from "../../../styles/fonts.module.scss";

//External components
import TabPanel from '@material-ui/lab/TabPanel';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box';

//Internal components 
import OrderedProductCard from "../orderedProductCard/orderedProductCard";

const ClientPanel = (props) =>{

  const theme = useTheme();

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            style={{width:'100%',maxWidth:theme.spacing(87),height:'auto'}}
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                  {children}
                </Box>
            )}
        </div>
    );
}

const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        width: '100%',
        backgroundColor: '#7CC700',
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      fontFamily:fonts.openSans,
      fontWeight: 'regular',
      fontSize: 14,
      marginRight: theme.spacing(1),
      color:'white',
      '&:focus': {
        color:'#7CC700',
      },
    },
  }))((props) => <Tab disableRipple {...props} />);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const classes = useStyles();
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
    setValue(newValue);
};

return(

    <div style={{margin:'auto',height:'auto', padding: '15px'
            ,marginTop:theme.spacing(4),display:'flex',alignItems:'center',flexDirection:'column' }}>
                <StyledTabs style={{margin:'auto',marginBottom:theme.spacing(3)}} classes={classes.root} 
                value={value} onChange={handleChange} aria-label="simple tabs example">
                    <StyledTab  label="PEDIDOS EN CURSO" {...a11yProps(0)} />
                    <StyledTab label="PEDIDOS FINALIZADOS" {...a11yProps(1)} />
                </StyledTabs>
                {
                    props.pedidos.map((lista, i) => (
                        <TabPanel value={value} index={0}>
                            <OrderedProductCard key={i} lista={lista} />
                        </TabPanel>)
                    )}
                    {
                    props.pedidos2.map((lista, i) => (
                        <TabPanel  value={value} index={1}>
                            <OrderedProductCard key={i} lista={lista} />
                        </TabPanel>)
                    )}
            </div>

)}

export default ClientPanel;