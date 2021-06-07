import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import bindRoutes from './routes.mjs';
import mongoose from 'mongoose';
import {mongoURI} from './config/dbconfig.mjs';
import http from 'http';
import {Server} from 'socket.io';
const PORT = process.env.PORT || 3004;

// Initialise an Express instance; note: do not start listening onto the port until the db is connected. This is to ensure that the server can't receive requests until the db is ready
const app = express();
const httpServer = http.createServer(app);
// create a new socket.io instance and attach it to the http server.
const io = new Server(httpServer, {
  cors: {
    credentials: true,
    origin: true,
  },
});

// Set CORS headers
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
// Set the Express view engine to expect EJS templates
app.set('view engine', 'ejs');
// Bind cookie parser middleware to parse cookies in requests
app.use(cookieParser());
// Bind Express middleware to parse request bodies for POST requests
app.use(express.urlencoded({extended: false}));
// Bind Express middleware to parse JSON request bodies
app.use(express.json());
// Bind method override middleware to parse PUT and DELETE requests sent as POST requests
app.use(methodOverride('_method'));
// Expose the files stored in the public folder
app.use(express.static('public'));

// Bind route definitions to the Express application
bindRoutes(app);

// connect the db
try {
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('db connected successfully');

  // the "await" above has a blocking effect to ensure tt we don't start listening on the port before the db is up (db connection is a async process)
  httpServer.listen(PORT, () => console.log(`listening on ${PORT}`));
} catch (error) {
  console.log(error);
}

io.on('connection', (socket) => {
  console.log(`socket.id is:`);
  console.log(socket.id);
});
