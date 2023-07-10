var express=require("express");
var path=require("path");
var bodyParser=require("body-parser");
var compiler=require("compilex");
var fs = require('fs');
var app=express();
app.use(bodyParser());

var option={stats:true};
compiler.init(option);

app.get("/",function(req,res){
    fs.readFile('./pages/home.html', function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
    //res.sendfile("./pages/home.html")
})

//c js code
app.get("/C/cbasic",function(req,res){
    res.sendfile("./pages/C/cbasic.html")
})
app.get("/C/cdata",function(req,res){
    res.sendfile("./pages/C/cdata.html")
})
app.get("/C/cvarcons",function(req,res){
    res.sendfile("./pages/C/cvarcons.html")
})
app.get("/C/cdec",function(req,res){
    res.sendfile("./pages/C/cdec.html")
})
app.get("/C/cerrhandling",function(req,res){
    res.sendfile("./pages/C/cerrhandling.html")
})
app.get("/C/cfuncs",function(req,res){
    res.sendfile("./pages/C/cfuncs.html")
})
app.get("/C/chf",function(req,res){
    res.sendfile("./pages/C/chf.html")
})
app.get("/C/ciotype",function(req,res){
    res.sendfile("./pages/C/ciotype.html")
})
app.get("/C/cloops",function(req,res){
    res.sendfile("./pages/C/cloops.html")
})
app.get("/C/coper",function(req,res){
    res.sendfile("./pages/C/coper.html")
})
app.get("/C/cpointers",function(req,res){
    res.sendfile("./pages/C/cpointers.html")
})
app.get("/C/cprepro",function(req,res){
    res.sendfile("./pages/C/cprepro.html")
})
app.get("/C/crecursion",function(req,res){
    res.sendfile("./pages/C/crecursion.html")
})
app.get("/C/cstrings",function(req,res){
    res.sendfile("./pages/C/cstrings.html")
})
app.get("/C/cstruct",function(req,res){
    res.sendfile("./pages/C/cstruct.html")
})
app.get("/C/ctypecas",function(req,res){
    res.sendfile("./pages/C/ctypecas.html")
})
app.get("/C/cunions",function(req,res){
    res.sendfile("./pages/C/cunions.html")
})
app.get("/C/carrays",function(req,res){
    res.sendfile("./pages/C/carrays.html")
})
//c js code ends


app.get("/",function(req,res){
    fs.readFile('./pages/home.html', function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
    //res.sendfile("./pages/home.html")
})
 
//c++ js code starts
app.get("/cpp/cbasyn",function(req,res){
   res.sendfile("./pages/cpp/cbasyn.html")
})
app.get("/cpp/cpabs",function(req,res){
    res.sendfile("./pages/cpp/cpabs.html")
})
app.get("/cpp/cparr",function(req,res){
    res.sendfile("./pages/cpp/cparr.html")
})
app.get("/cpp/cpclaobj",function(req,res){
    res.sendfile("./pages/cpp/cpclaobj.html")
})
app.get("/cpp/cpenc",function(req,res){
    res.sendfile("./pages/cpp/cpenc.html")
})
app.get("/cpp/cpinherit",function(req,res){
    res.sendfile("./pages/cpp/cpinherit.html")
})
app.get("/cpp/cpmod",function(req,res){
    res.sendfile("./pages/cpp/cpmod.html")
})
app.get("/cpp/cpnum",function(req,res){
    res.sendfile("./pages/cpp/cpnum.html")
})
app.get("/cpp/cpout",function(req,res){
    res.sendfile("./pages/cpp/cpout.html")
})
app.get("/cpp/cpover",function(req,res){
    res.sendfile("./pages/cpp/cpover.html")
})
app.get("/cpp/cppoint",function(req,res){
    res.sendfile("./pages/cpp/cppoint.html")
})
app.get("/cpp/cppoly",function(req,res){
    res.sendfile("./pages/cpp/cppoly.html")
})
app.get("/cpp/cpstore",function(req,res){
    res.sendfile("./pages/cpp/cpstore.html")
})
app.get("/cpp/cpstr",function(req,res){
    res.sendfile("./pages/cpp/cpstr.html")
})
app.get("/cpp/cpvar",function(req,res){
    res.sendfile("./pages/cpp/cpvar.html")
})
app.get("/cpp/cpvarsco",function(req,res){
    res.sendfile("./pages/cpp/cpvarsco.html")
})

 
//java js code starts
app.get("/java/jabs",function(req,res){
   res.sendfile("./pages/java/jabs.html")
})
app.get("/java/jarr",function(req,res){
    res.sendfile("./pages/java/jarr.html")
 })
 app.get("/java/jbasic",function(req,res){
    res.sendfile("./pages/java/jbasic.html")
 })
 app.get("/java/jchar",function(req,res){
    res.sendfile("./pages/java/jchar.html")
 })
 app.get("/java/jcons",function(req,res){
    res.sendfile("./pages/java/jcons.html")
 })
 app.get("/java/jdata",function(req,res){
    res.sendfile("./pages/java/jdata.html")
 })
 app.get("/java/jdttyps",function(req,res){
    res.sendfile("./pages/java/jdttyps.html")
 })
 app.get("/java/jencap",function(req,res){
    res.sendfile("./pages/java/jencap.html")
 })
 app.get("/java/jinherit",function(req,res){
    res.sendfile("./pages/java/jinherit.html")
 })
 app.get("/java/jintr",function(req,res){
    res.sendfile("./pages/java/jintr.html")
 })
 app.get("/java/jloop",function(req,res){
    res.sendfile("./pages/java/jloop.html")
 })
 app.get("/java/jmod",function(req,res){
    res.sendfile("./pages/java/jmod.html")
 })
 app.get("/java/jnum",function(req,res){
    res.sendfile("./pages/java/jabs.html")
 })
 app.get("/java/jover",function(req,res){
    res.sendfile("./pages/java/jover.html")
 })
 app.get("/java/jpack",function(req,res){
    res.sendfile("./pages/java/jpack.html")
 })
 app.get("/java/jpol",function(req,res){
    res.sendfile("./pages/java/jpol.html")
 })
 app.get("/java/jstr",function(req,res){
    res.sendfile("./pages/java/jstr.html")
 })
 app.get("/java/jvar",function(req,res){
    res.sendfile("./pages/java/jvar.html")
 })

 app.get("/examples/content",function(req,res){
    res.sendfile("./pages/examples/content.html")
 })
 app.get("/examples/ex",function(req,res){
    res.sendfile("./pages/examples/ex.html")
 })

 app.get("/quesandans/qnsans",function(req,res){
    res.sendfile("./pages/quesandans/qnsans.html")
 })

 app.get("/references/page1",function(req,res){
    res.sendfile("./pages/references/page1.html")
 })


app.get("/compiler",function(req,res){
    res.sendfile(__dirname + "/index.html");
});

app.post("/compilecode",function(req,res){
    var code=req.body.code;
    var input=req.body.input;
    var inputRadio=req.body.inputRadio;
    var lang=req.body.lang;
    if(lang==="C"){
        if(inputRadio==="true"){
            var envData={OS:"windows",cmd:"g++",options:{timeout:10000}};
            compiler.compileCPPWithInput(envData,code,input,function(data){
                if(data.error){
                    console.log(res);
                    res.send(data.error);
                }else{
                    res.send(data.output);
                }
            });
        }else{
            var envData={OS:"windows",cmd:"g++",options:{timeout:10000}};
            compiler.compileCPP(envData,code,function(data){
                console.log(res);
                res.send(data);
                //data.error=error message
                //data.output=output value
            });
        }
    }

    if(lang==="C++"){
        if(inputRadio==="true"){
            var envData={OS:"windows",cmd:"g++",options:{timeout:10000} };
            compiler.compileCPPWithInput(envData,code,input,function(data){
                if(data.error){
                    console.log(res);
                    res.send(data.error);
                }else{
                    res.send(data.output);
                }
            });
        }else{
            var envData={OS:"windows",cmd:"g++",options:{timeout:10000} };
            compiler.compileCPP(envData,code,function(data){
                console.log(res);
                res.send(data);
                //data.error=error message
                //data.output=output value
            });
        }
    }

    if(lang==="Java"){
        if(inputRadio==="true"){
            var envData={OS:"windows"};
            compiler.compileJavaWithInput(envData,code,input,function(data){
                res.send(data);
            });
        }else{
            var envData={OS:"windows"};
            compiler.compileJava(envData,code,function(data){
                res.send(data);
            });
        }
    }
});

app.get("/fullStat",function(req,res){
    compiler.fullStat(function(data){
        res.send(data);
    });
});

app.listen(8080);

compiler.flush(function(){
    console.log("All temporary files flushed !");
});