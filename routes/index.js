var unirest = require('unirest');

const urlPrefix = "http://";
const url = "172.16.30.156:9100";

function indexRouter(req, res, next) {

    return send(req,res,(response) =>{

        res.writeHead(200,response.headers);
        return res.end(JSON.stringify(response.body))
    });
}

function send (req,res,callback){

    const originUrl= req.originalUrl;
    if (req.method.toLowerCase() === 'get') {
        unirest.get(urlPrefix + url + originUrl)
            .headers({cookie:req.headers.cookie})
            .end((resp) => {
                return callback(resp);
            });
    }else{
        unirest.post(urlPrefix + url + originUrl)
            .headers({cookie:req.headers.cookie})
            .send(req.body)
            .end((resp) =>{
                return callback(resp);
            })
    }
}

module.exports = indexRouter;
