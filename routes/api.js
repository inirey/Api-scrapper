__path = process.cwd()
//var favicon = require('serve-favicon');
var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')  
}


var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js');
var options = require(__path + '/lib/options.js');


/* 
  FEATURE
*/

var { facebook } = require(__path + '/downloader/facebook.js');
var { twitter } = require(_path + '/downloader/twitter.js');
var { TiktokDownloader } = require(_path + '/downloader/tiktok.js');


var cookie = process.env.COOCKIE

loghandler = {
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter username'
        },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukkan parameter url'
        },
    error: {
        status: false,
        creator: @sekhaa,
        message: 'internal server error'
    }
}

router.get('/dl/facebook', async (req, res, next) => {

  const url = req.query.url;
  const apikey = req.query.apikey;
  if(!url) return res.json(loghandler.noturl)
       facebook(url)
       .then((result) => {
            res.json({
        status: true,
        code: 200,
        result
      })
    })
    .catch((error) => {
      res.json(error)
    });

router.get('/dl/tiktok', async (req, res, next) => {
    var Apikey = req.query.apikey,
        url = req.query.url

	if(!Apikey) return res.json(loghandler.notparam)
	if(listkey.includes(Apikey)){
     if (!url) return res.json(loghandler.noturl)
     TiktokDownloader(`${url}`)
        .then(data => {
        var result = data.result;
             res.json({
               status: true,
               code: 200,
               creator: `${creator}`,
               result
             })
         })
         .catch((error) => {
            res.json(error);     
          });


module.exports = router
