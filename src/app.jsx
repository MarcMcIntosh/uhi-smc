import React from "react/addons";
import Router from "react-router";
import Header from "./components/header";
import PageHeader from "react-bootstrap/lib/PageHeader";
import { Grid, Col, Row, Jumbotron, Button, Panel, Well} from "react-bootstrap";
import Stuff from "./components/about";
//import Presentation from "./components/presentation";

var { Route, RouteHandler, DefaultRoute, Link} = Router;

var Home = React.createClass({

  render: function() {
    return <Grid>
      <Panel>
        <Jumbotron>
          <h2>Hello!</h2>
          <p>This is a simple web-site starter kit, that uses <a href="https://nodejs.org/" target="_blank">node</a> and <a href="www.expressjs.com" target="_blank">Express.js</a> for local development, gulp/webpack scripts build and host the site via <a href="https://pages.github.com/" target="_blank">GitHub</a>. User interface is provided using <a href="http://react-bootstrap.github.io" target="_blank">twitter-bootstrap</a> for facebooks <a href="http://facebook.github.io/react/" target="_blank">React.js</a> along with react-router to provide page routing. </p> 
        </Jumbotron> 
      </Panel>
       <Col xs={12} md={8}>
      <Panel header={<h3>Get Started</h3>} bsStyle='primary' >
        <h3>Install nodejs</h3> 
        <p>by going to <a href="https://nodejs.org/" target="_blank"> nodejs.org </a> and downloading the appropriate installer for your system and following the instructions. This will provide the commandline programs node and npm (node package manager). Then install gulp via npm (using sudo/admin rights if needed</p>
        <Well> [sudo] npm install -g gulp</Well>
        <h3>Install git</h3> 
        <p> by going to <a href="https://git-scm.com/" target="_blank">git-scm.com</a> and following the instructions or if using a nix based system (linux and macs) use the systems package manager (apt, rpm, pacman, brew ...). Make an account at <a href="https://github.com/" target="_blank">github.com</a> (accounts and pubilc repositories, and webhosting are provided for free along with a lot of software). Then fork this repository and clone your fork using the command (exchanging the quoted url for the url to your fork of this repository) 
        </p> 
        <Well> git clone "https://github.com/USERNAME/REPOSITORY"</Well>
        <p> Move in to the project git downloaded and run.</p>
        <Well> npm install</Well> 
        <p>To install the projects dependacies and then run the development server with </p> 
        <Well> gulp </Well> 
        <p> Open your web-browser and go to <a href="http://localhost:3000" target="_blank">localhost:3000</a>. If every this has worked you should see this page, if not check the output of the gulp command and/or use the browsers webtools (press F12 on firefox to use web-bug) to trouble shoot the page by refreshing.</p>

        <PageHeader>Change things</PageHeader>
        <p>Folder/file stucture and useage</p>
        <Well><ul>
          <li>dist = compiled out from src</li>
          <li>node_modules = moudles installed by npm</li>
          <li>
            src = Source files that ought to be edited and added to 
            <ul>
              <li>components = Addtional react comonents that can be inculed in app.jsx</li>
            </ul>
          </li>
          <li>gulpfile.js = task runner that processes the files in src and outputs to the dist folder</li>
          <li>package.json = list of installed node modules</li>
          </ul></Well>
        
          <ul>
            <li>
              <b>index.html</b>
              <p>A base html file, there is no need to edit this one as it is used by react (app.jsx) to create the main content via javascript, but other html files can be added to provide further functionality from any libary such as <a href="presentation.html" target="_blank">presentation.html</a> which is a demo of the presentation frame work reveal.js </p>
            </li>
            <li>
              <b>server.js</b>
              <p>The file used by express which acts a a server for hosting the content in the dist folder. This is used mostly during local development but can also be used during production if you have decided to use a web server. note: cloud servers can be cheep but you will be charged for cpu usage so buying a system on a chip such as a <a href="http://beagleboard.org/black" targret="_blank">beagle</a>, <a href="http://www.cubietruck.com/collections/frontpage/products/cubietruck-cubieboard3-cortex-a7-dual-core-2gb-ram-8gb-flash-with-wifi-bt-ship-from-germany">cubietruck</a> or any other ARM-system and use that as a server by activating port forwarding on your home hub and serveing content via port 80 (or nginx). I may write a tutrial how to this on my site <a href="www.marcmcintosh.ninja" target="_blank"> marcmcintosh.ninja</a>. </p>
            </li>
            <li>
              <b>app.jsx</b> 
              <p>The main react file for the site, the language used is a corss over between javascript in html written using ECMA script 6 specification which is transpositioned to a browser freindly version when the file is compiled to app.js in the dist folder</p>
            </li>
            <li>
            <b>styles.less</b>
            <p>Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themable and extendable.</p>
            </li>
          </ul>
        </Panel> 
      </Col>
      <Col xs={6} md={4}>
        <Panel header={<h3>Learning Materails</h3>} bsStyle='primary' >
        <p> A few helpful resources</p>
        <PageHeader>Books</PageHeader>
        <ul>
          <li><a href="https://pragprog.com/book/jwnode/node-js-the-right-way" target="_blank">Node.js the Right Way:</a>Practical, Server-Side JavaScript That Scales by Jim R. Wilson</li>
          <li><a href="http://eloquentjavascript.net/" target="_blank">Eloquent JavaScript: second edition</a> Written by Marijn Haverbeke.</li>
          <li><a href="" target="_blank">Node.js in Practice</a> Alex Young and Marc Harter</li>
        </ul>
        <PageHeader>Web-sites</PageHeader>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web" target="_blank">Mozilla Developer Network</a></li>
          <li><a href="http://stackoverflow.com/" target="_blank">Stackoverflow</a>lots of subsections worth a look ar and forums to ask questions on</li>
          <li><a href="http://github.com" target="_blank">Github</a>Lots of the software on github a wiki/instructions page</li>          
        </ul>
        <PageHeader>Tutrials</PageHeader>
        <ul><li><a href="http://learnxinyminutes.com/docs/javascript/" target="_blank">Learn X in Y minutes</a> Does what it says on the tin</li>
        <li><a href="https://www.youtube.com/watch?v=csyL9EC0S0c" target="_blank">Programming is terrible—Lessons learned from a life wasted</a></li>
        </ul>
        <PageHeader>Addtional front-end Libaries</PageHeader>  
        <ul>
          <li><a href="https://github.com/hakimel/reveal.js" target="_blank">reveal.js</a> Present Framework</li>
        </ul>   
        </Panel>
      </Col>
    </Grid>
  }
});

var About = React.createClass({
  render: function() {
    return <Stuff />
  }
});

var Main = React.createClass({
  render: function() {
    return (<div>
      <Header/>
      <RouteHandler/>
    </div>);
  }
});


var routes = (
  <Route path="/" handler={Main}>
    <DefaultRoute name="home" handler={Home}/>
    <Route name="about" handler={About}/>
  </Route>
);

Router.run(routes, Router.HashLocation, function(Handler) {
    return React.render(React.createElement(Handler, null), document.body);
});
