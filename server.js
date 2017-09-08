var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    
    'article-one':{title:'article one',
        heading:'Article-one',
        content:`<p>lides: https://docs.google.com/presentation/d/19gCzh13_rZ8bpT_FTx27Gglu9jujjbTF0I8xrhMqpN0/ Forum: https://discourse.imad.hasura.io</p>
<p>lides: https://docs.google.com/presentation/d/19gCzh13_rZ8bpT_FTx27Gglu9jujjbTF0I8xrhMqpN0/ Forum: https://discourse.imad.hasura.io</p>
<p>lides: https://docs.google.com/presentation/d/19gCzh13_rZ8bpT_FTx27Gglu9jujjbTF0I8xrhMqpN0/ Forum: https://discourse.imad.hasura.io</p>
`},
    'article-two':{title:'article two',
        heading:'Article-two',
        content:`<p>lides: https://docs.google.com/presentation/d/19gCzh13_rZ8bpT_FTx27Gglu9jujjbTF0I8xrhMqpN0/ Forum: https://discourse.imad.hasura.io</p>
<p>lides: https://docs.google.com/presentation/d/19gCzh13_rZ8bpT_FTx27Gglu9jujjbTF0I8xrhMqpN0/ Forum: https://discourse.imad.hasura.io</p>
<p>lides: https://docs.google.com/presentation/d/19gCzh13_rZ8bpT_FTx27Gglu9jujjbTF0I8xrhMqpN0/ Forum: https://discourse.imad.hasura.io</p>
`},
     'article-three':{title:'article three',
        heading:'Article-three',
        content:`<p>lides: https://docs.google.com/presentation/d/19gCzh13_rZ8bpT_FTx27Gglu9jujjbTF0I8xrhMqpN0/ Forum: https://discourse.imad.hasura.io</p>
<p>lides: https://docs.google.com/presentation/d/19gCzh13_rZ8bpT_FTx27Gglu9jujjbTF0I8xrhMqpN0/ Forum: https://discourse.imad.hasura.io</p>
<p>lides: https://docs.google.com/presentation/d/19gCzh13_rZ8bpT_FTx27Gglu9jujjbTF0I8xrhMqpN0/ Forum: https://discourse.imad.hasura.io</p>
`}
};
function createtemplate(data){
    var title= data.title;
    var heading= data.heading;
    var content= data.content;
    
    var htmltemplate=`<html>
<head>
<title>${title}</title>
<hr/>
<link href="/ui/style.css" rel="stylesheet" />
</head>

<body>
<div class='container'>
<div>
<h1>
${heading}
</h1>
</div>
<div>
${content}
</div>
</div>
</body>
</html>`
;
 return htmltemplate;   
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/:articlename', function (req, res) {
    var articlename=req.params.articlename;
  res.send(createtemplate(articles[articlename]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
