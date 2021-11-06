using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Computer_Hardware_Store.Models.ProductModel;
using Computer_Hardware_Store.DataModel;
using Microsoft.Data.SqlClient;
using System.Data;
using Newtonsoft.Json;

namespace Computer_Hardware_Store.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository productRepository;

        SqlConnection con = new SqlConnection("Server=DESKTOP-JQNN8IB\\SQLEXPRESS;Database=CHStore;Trusted_Connection=True;MultipleActiveResultSets=True;");
        
        public ProductController(IProductRepository productRepository) => this.productRepository = productRepository;

        [HttpGet]
        public IEnumerable<Product> Get() => productRepository.GetProducts();

        [HttpGet]
        [Route("GetByType/{type}")]
        public IEnumerable<Product> Get(string type) => productRepository.GetProductsByType(type);

        [HttpGet("{id}")]
        public ActionResult<Product> Get(int id) => productRepository.GetProduct(id);

        [HttpPost]
        public ActionResult Add(Product product)
        {
            try
            {
                productRepository.Add(product);
                return StatusCode(200);
            }
            catch
            {
                return NoContent();
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                productRepository.Delete(id);
                return StatusCode(200);
            }
            catch
            {
                return NoContent();
            }
        }

        [HttpPut]
        public ActionResult Update(Product product)
        {
            try
            {
                productRepository.Update(product);
                return StatusCode(200);
            }
            catch
            {
                return NoContent();
            }
        }
    }
}
