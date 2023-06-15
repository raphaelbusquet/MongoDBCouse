db.getCollectionNames().forEach(function(collection){
    indexes = db[collection].getIndexes();
    print('Índices de ' + collection + ':');
    printjson(indexes);
})