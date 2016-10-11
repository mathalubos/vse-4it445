module.exports = function(app) {
  app.dataSources.mysqlds.autoupdate('EshopProduct', function(err) {
    const { EshopProduct } = app.models;
    if (!EshopProduct) { return; }

    EshopProduct.create([
        {
          title: 'Škoda Superb',
          price: 750000,
          shortInfo: 'Luxury car produced in the Czech Republic.',
          categoryId: 1,
        },
        {
          title: 'Ford Focus',
          price: 600000,
          shortInfo: 'Sports car made in USA.',
          categoryId: 2,
        },
        {
          title: 'Moped',
          price: 1000,
          shortInfo: 'No comment.',
          categoryId: 5,
        },
    ], function(err, products) {
      if (err) throw err;

      console.log('Models created: \n', products);
    });
  });
  // app.dataSources.mysqlds.autoupdate('Category', function(err) {
  //   const { Category } = app.models;
  //   if (!Category) { return; }
  //
  //   Category.create([
  //       {
  //         name: 'category 1',
  //       },
  //       {
  //         name: 'category 2',
  //       },
  //       {
  //         name: 'category 3',
  //       },
  //   ], function(err, products) {
  //     if (err) throw err;
  //
  //     console.log('Models created: \n', products);
  //   });
  // });
};
