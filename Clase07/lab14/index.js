var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/lab14';
MongoClient.connect(url,function(err,db){
    if(err){
        console.log("Hubo un error");
        console.log(err);
    }else{
        console.log("Conectado correctamente al servidor");
        var jugadoresInsertar = [
            {"nombre":"Messi","numero":10,"equipo":"barcelona","goles":45},
            { "nombre":"Ronaldo","numero":9,"equipo":"real madrid","goles":44},
            { "nombre":"Hazard","numero":8,"equipo":"chelsea","goles":28},
            { "nombre":"Ibrahimovic","numero":18,"equipo":"manu","goles":33}
        ];
        
        var collection = db.collection('jugadores');
        collection.remove({});
        collection.insert(jugadoresInsertar,function(err,result){
            if(err){
                console.log('Hubo un error al insertar');
                console.log(err);
            }else{
                console.log("Se insertaron "+result.result.n+" filas de jugadores");
            }
        })
        db.close();
    }
});