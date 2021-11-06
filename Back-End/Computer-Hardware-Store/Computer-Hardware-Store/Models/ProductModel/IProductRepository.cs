using Computer_Hardware_Store.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Computer_Hardware_Store.Models.ProductModel
{
    public interface IProductRepository
    {
        Product GetProduct(int id);
        IEnumerable<Product> GetProducts();
        void Add(Product product);
        void Update(Product productChanges);
        void Delete(int id);

        IEnumerable<Product> GetProductsByType(string type);
    }
}
