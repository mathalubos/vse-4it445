'use strict';

module.exports = function(EshopProduct) {
  EshopProduct.withCategory = function(callback){
    EshopProduct.find({
        where: {
        },
        include: 'category'
    }, callback);
  }

  EshopProduct.remoteMethod(
    'withCategory',
    {
      http: {
        verb: 'get',
      },
      returns: {arg:'products', type:'array'},
    }
  );
};
