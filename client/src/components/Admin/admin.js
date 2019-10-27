import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { firestore } from "../../config/firebase.init";
import firebase from "firebase/app";

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
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function submitArticle(evt) {
    //upload image
    let articleTitle = document.getElementById("articleTitle").value;
    let imagePath = "images/" + articleTitle;

    let storageRef = firebase.storage().ref(imagePath);
    let fileUpload = document.getElementById("articleImage");
    fileUpload.addEventListener('change', function(evt) {
      let firstFile = evt.target.files[0]; // upload the first file only
      let uploadTask = storageRef.put(firstFile);
    })
    
    //save data to db
    // firebase.database().ref('articles/').add({
    //   title: articleTitle,
    //   text: document.getElementById("articleText").value,
    //   featured: document.getElementById("articleFeatured").checked,
    //   image: imagePath
    // }); 
    firestore
      .collection("articles")
      .add({
        title: articleTitle,
        text: document.getElementById("articleText").value,
        featured: document.getElementById("articleFeatured").checked,
        image: imagePath
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }
  function submitResource(evt) {
    //upload image
    let resourceTitle = document.getElementById("resourceTitle").value;
    let imagePath = "images/" + resourceTitle;
    let storageRef = firebase.storage().ref(imagePath);
    let fileUpload = document.getElementById("resourceImage");

    let firstFile = evt.target.files[0]; // upload the first file only
    let uploadTask = storageRef.put(firstFile);
    //save data to db
    firestore
      .collection("resources")
      .add({
        title: resourceTitle,
        url: document.getElementById("resourceUrl").value,
        image: imagePath
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }
  function submitFact(evt) {
    //upload image
    let factTitle = document.getElementById("factTitle").value;
    let imagePath = "images/" + factTitle;
    let storageRef = firebase.storage().ref(imagePath);
    let fileUpload = document.getElementById("factImage");

    let firstFile = evt.target.files[0]; // upload the first file only
    let uploadTask = storageRef.put(firstFile);
    //save data to db
    firestore
      .collection("facts")
      .add({
        title: factTitle,
        url: document.getElementById("factUrl").value,
        image: imagePath
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }
  function submitEvent(evt) {
    //upload image
    let eventTitle = document.getElementById("eventTitle").value;
    let date = document.getElementById("eventDate").value;
    let imagePath = "images/" + eventTitle + date;
    let storageRef = firebase.storage().ref(imagePath);
    let fileUpload = document.getElementById("eventImage");

    let firstFile = evt.target.files[0]; // upload the first file only
    let uploadTask = storageRef.put(firstFile);
    //save data to db
    firestore
      .collection("events")
      .add({
        title: eventTitle,
        date: document.getElementById("eventDate").value,
        location: document.getElementById("eventLocation").value,
        image: imagePath
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }
  function submitStory(evt) {
    //upload image
    let storyName = document.getElementById("storyName").value;
    let storyAge = document.getElementById("storyAge").value;
    let imagePath = "images/" + storyName + storyAge;
    let storageRef = firebase.storage().ref(imagePath);
    let fileUpload = document.getElementById("storyImage");

    let firstFile = evt.target.files[0]; // upload the first file only
    let uploadTask = storageRef.put(firstFile);
    //save data to db
    firestore
      .collection("events")
      .add({
        name: storyName,
        age: document.getElementById("storyAge").value,
        story: document.getElementById("storyStory").value,
        image: imagePath
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }

  // "#submitArticle".addEventListener("click", function(evt) {
  //   submitArticle(evt);
  // });
  // "#submitResource".addEventListener("click", function(evt) {
  //   submitResource(evt);
  // });
  // "#submitFact".addEventListener("click", function(evt) {
  //   submitFact(evt);
  // });
  // "#submitEvent".addEventListener("click", function(evt) {
  //   submitEvent(evt);
  // });
  // "#submitStory".addEventListener("click", function(evt) {
  //   submitStory(evt);
  // });

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Add Article" {...a11yProps(0)} />
          <Tab label="Add Resource" {...a11yProps(1)} />
          <Tab label="Add Fact" {...a11yProps(2)} />
          <Tab label="Add Event" {...a11yProps(3)} />
          <Tab label="Add User Story" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <form id="articleform">
          Title:{" "}
          <input id="articleTitle" type="text" name="title" />
          <br></br>
          Url: <input id="articleText" type="text" name="url"  />
          <br></br>
          Featured:{" "}
          <input id="articleFeatured" type="checkbox" name="featured" checked />
          <br></br>
          Image:{" "}
          <input id="articleImage" type="file" name="image" accept="image/*" />
          <br></br>
          <input type="submit" id="submitArticle" onClick={submitArticle} />
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form id="resourceform">
          Title:{" "}
          <input id="resourceTitle" type="text" name="title"  />
          <br></br>
          Url: <input id="resourceUrl" type="text" name="url" />
          <br></br>
          Image:{" "}
          <input id="resourceImage" type="file" name="image" accept="image/*" />
          <br></br>
          <input type="submit" id="submitResource" onClick={submitResource} />
        </form>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <form id="factform">
          Title: <input id="factTitle" type="text" name="title" />
          <br></br>
          Url: <input id="factUrl" type="text" name="url" />
          <br></br>
          Image:{" "}
          <input id="factImage" type="file" name="image" accept="image/*" />
          <br></br>
          <input type="submit" id="submitFact" onClick={submitFact} />
        </form>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <form id="eventform">
          Title:{" "}
          <input id="eventTitle" type="text" name="title" />
          <br></br>
          Image:{" "}
          <input id="eventImage" type="file" name="image" accept="image/*" />
          <br></br>
          Location:{" "}
          <input
            id="eventLocation"
            type="text"
            name="location"
            value="Location"
          />
          <br></br>
          Date: <input id="eventDate" type="date" name="date" />
          <br></br>
          <input type="submit" id="submitEvent" onClick={submitEvent} />
        </form>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <form>
          Name: <input id="storyName" type="text" name="name"  />
          <br></br>
          Image:{" "}
          <input id="storyImage" type="file" name="image" accept="image/*" />
          <br></br>
          Age: <input id="storyAge" type="text" name="age"  />
          <br></br>
          Story: <input id="storyStory" type="text" name="story" />
          <br></br>
          <input type="submit" id="submitStory" onClick={submitStory} />
        </form>
      </TabPanel>
    </div>
  );
}
