
let dbName = 'itemsdb'
let collectionName = 'items'
let dbPromise = idb.open(dbName, 1, function (db) {
  if (!db.objectStoreNames.contains(collectionName)) {
    db.createObjectStore(collectionName, {keyPath: 'id'});
  }
});

function writeData(st, data) {
  return dbPromise
    .then(function(db) {
      let tx = db.transaction(st, 'readwrite');
      let store = tx.objectStore(st);
      store.put(data);
      return tx.complete;
    });
}

function readAllData(st) {
  return dbPromise
    .then(function(db) {
      let tx = db.transaction(st, 'readonly');
      let store = tx.objectStore(st);
      return store.getAll();
    });
}

function clearAllData(st) {
  return dbPromise
    .then(function(db) {
      let tx = db.transaction(st, 'readwrite');
      let store = tx.objectStore(st);
      store.clear();
      return tx.complete;
    });
}

function deleteItemFromData(st, id) {
  dbPromise
    .then(function(db) {
      let tx = db.transaction(st, 'readwrite');
      let store = tx.objectStore(st);
      store.delete(id);
      return tx.complete;
    })
}