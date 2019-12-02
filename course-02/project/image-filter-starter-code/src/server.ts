import express from 'express';
import {Request, Response} from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.

  app.get('/filteredimage', async (req: Request, res: Response) => {
    const url = req.query.image_url;
    //validate the image_url query
    if(!url){
      return res.status(400).send({message: 'Image url is required'})
    }

    // Filter the url and return the filtered image path
    const filteredPath = await filterImageFromURL(url);

    let paths: string[] = [];
    // Transfers the file at the given path
    res.sendFile(filteredPath, (err) => {
      paths.push(filteredPath);
      if(err){
        console.log(err);
      }
      // deletes files on finish of the responsee
      deleteLocalFiles(paths);
    })
  });

  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();