using Computer_Hardware_Store.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Computer_Hardware_Store.Models.ProductModel
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataContext context;

        public ProductRepository(DataContext context) => this.context = context;

        public void Add(Product product)
        {
            context.Add(product);
            context.SaveChanges();
        }

        public void Delete(int id)
        {
            Product product = context.Products.Find(id);
            context.Products.Remove(product);
            context.SaveChanges();
        }

        public Product GetProduct(int id)
        {
            return context.Products.Find(id);
        }

        public IEnumerable<Product> GetProducts()
        {
            return context.Products.ToList();
        }

        public void Update(Product productChanges)
        {
            var product = context.Products.Find(productChanges.id);
            if (product != null)
            {
                product.id = productChanges.id;
                product.brand = productChanges.brand;
                product.model = productChanges.model;
                product.detail = productChanges.detail;
                product.price = productChanges.price;
                product.image = productChanges.image;
                product.type = productChanges.type;
                product.each = productChanges.each;
            }
            context.SaveChanges();
        }
    }
}
