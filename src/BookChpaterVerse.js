import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import useBibleReference from './useBibleReference';
import BibleReference from './BibleReference';

const BookChapterVerse = () => {
   // const supportedBooks = null; // if empty array or null then all books available
     const supportedBooks = [ 'luk','tit']; // if non-empty array then only these books are shown
    const initialBook = "luk";
    const initialChapter = "";
    const initialVerse = "";
    // select colors
    // const grey = "#aaa69d"; // a shade of grey
    // const blue = "#00B0FF"; // a shade of blue
    // const white = "#FFFFFF";
    // const black = "#000000";
    const style = {}; // use defaults
    //const style = { color: white, background: grey }; // set forground and background colors

    function onChange(bookId, chapter, verse) {
        console.log(`\n### Reference changed to ${bookId} - ${chapter}:${verse}\n\n`);
      }
      
      const initial =
        {
          initialBook,
          initialChapter,
          initialVerse,
          onChange
        };
      
      const {state, actions} = useBibleReference(initial);
      
      useEffect(() => {
        actions.applyBooksFilter(supportedBooks);
      }, []); // just apply the first time in this demo
      
    return ( 

<div>
  <br/>
  <br/>

  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'left'}}>
    <BibleReference
      status={state}
      actions={actions}
      style={style}
    />
  </div>

  <br/>
  <br/>

  <Card variant="outlined">
    <CardContent>
      <Typography
        style={{fontWeight: "bold"}}
        color="textPrimary"
        display="inline"
      >
        {`bible-reference-rcl`}
      </Typography>
      <Typography color="textPrimary" display="inline">
        {`\u00A0component is shown above ^^^`}
      </Typography>
      <br/>
      <br/>
      <Typography
        style={{fontWeight: "bold"}}
        color="textPrimary"
        display="inline"
      >
        {`bible-reference-rcl`}
      </Typography>
      <Typography color="textPrimary" gutterBottom display="inline">
        {`\u00A0state examples below (dynamically updated as reference changes):`}
      </Typography>
      <br/>
      <br/>
      <Typography
        style={{marginLeft: "50px"}}
        color="textPrimary"
        gutterBottom
        display="inline"
      >
        {`Book Name:\u00A0`}
      </Typography>
      <Typography
        style={{fontWeight: "bold"}}
        color="textPrimary"
        gutterBottom
        display="inline"
      >
        {`${state.bookName}`}
      </Typography>
      <br/>
      <Typography
        style={{marginLeft: "50px"}}
        color="textPrimary"
        gutterBottom
        display="inline"
      >
        {`Current Location:\u00A0`}
      </Typography>
      <Typography
        style={{fontWeight: "bold"}}
        color="textPrimary"
        gutterBottom
        display="inline"
      >
        {`${state.bookId} ${state.chapter}:${state.verse}`}
      </Typography>
    </CardContent>

    <CardActions>
      <Typography color="textPrimary">
        {`action examples that are using API to change the current reference:`}
      </Typography>

      <Button
        variant="outlined"
        id="prev_v"
        onClick={actions.goToPrevVerse}
      >
        {"Previous Verse"}
      </Button>

      <Button
        variant="outlined"
        id="next_v"
        onClick={actions.goToNextVerse}
      >
        {"Next Verse"}
      </Button>

      <Button variant="outlined" id="prev_b" onClick={actions.goToPrevBook}>
        {"Previous Book"}
      </Button>

      <Button variant="outlined" id="next_b" onClick={actions.goToNextBook}>
        {"Next Book"}
      </Button>
    </CardActions>
  </Card>

</div>
     );
}
 
export default BookChapterVerse;