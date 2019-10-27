import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {firestore} from '../../config'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    ("#submitArticle").addEventListener('click', function(){
        submitArticle();
    });
    ("#submitResource").addEventListener('click', function(){
        submitResource();
    });
    ("#submitFact").addEventListener('click', function(){
        submitFact();
    });
    ("#submitEvent").addEventListener('click', function(){
        submitEvent();
    });
    ("#submitStory").addEventListener('click', function(){
        submitStory();
    });

    function submitArticle(){
        firestore.collection("articles").add({
            title: document.getElementById("articleTitle").value,
            url: document.getElementById("articleUrl").value,
            featured: document.getElementById("articleFeatured").checked,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    function submitResource(){
        firestore.collection("resources").add({
            title: document.getElementById("resourceTitle").value,
            url: document.getElementById("resourceUrl").value,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    function submitFact(){
        firestore.collection("facts").add({
            title: document.getElementById("factTitle").value,
            url: document.getElementById("factUrl").value,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    function submitEvent(){
        firestore.collection("events").add({
            title: document.getElementById("eventTitle").value,
            date: document.getElementById("eventDate").value,
            location: document.getElementById("eventLocation").value,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    function submitEvent(){
        firestore.collection("events").add({
            name: document.getElementById("storyName").value,
            age: document.getElementById("storyAge").value,
            story: document.getElementById("storyStory").value,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Add Article" {...a11yProps(0)} />
          <Tab label="Add Resource" {...a11yProps(1)} />
          <Tab label="Add Fact" {...a11yProps(2)} />
          <Tab label="Add Event" {...a11yProps(3)} />
          <Tab label="Add User Story" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <form id="articleform">
            Title: <input id="articleTitle"type="text" name="title" value="Title"/><br></br>
            Url: <input id="artucleUrl"type="text" name="url" value="Url"/><br></br>
            Featured: <input id="articleFeatured" type="checkbox" name="featured" checked/><br></br>
            Image: <input type="file" name="image" accept="image/*"/><br></br>
            <input type="submit" id="submitArticle"/>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form id="resourceform">
            Title: <input id="resourceTitle" type="text" name="title" value="Title"/><br></br>
            Url: <input id="resourceUrl" type="text" name="url" value="Url"/><br></br>
            Image: <input type="file" name="image" accept="image/*"/><br></br>
            <input type="submit" id="submitResource"/>
        </form>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <form id="factform">
            Title: <input id="factTitle" type="text" name="title" value="Title"/><br></br>
            Url: <input id="factUrl" type="text" name="url" value="Url"/><br></br>
            Image: <input type="file" name="image" accept="image/*"/><br></br>
            <input type="submit" id="submitFact"/>
        </form>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <form id="eventform">
            Title: <input id="eventTitle" type="text" name="title" value="Title"/><br></br>
            Image: <input  type="file" name="image" accept="image/*"/><br></br>
            Location: <input id="eventLocation" type="text" name="location" value="Location"/><br></br>
            Date: <input id="eventDate" type="date" name="date" /><br></br>
            <input type="submit" id="submitEvent"/>
        </form>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <form>
            Name: <input id="storyName" type="text" name="name" value="Name"/><br></br>
            Image: <input type="file" name="image" accept="image/*"/><br></br>
            Age: <input id="storyAge" type="text" name="age" value="Age"/><br></br>
            Story: <input id="storyStory" type="text" name="story" value=""/><br></br>
            <input type="submit" id="submitStory"/>
        </form>
      </TabPanel>
    </div>
  );
}
