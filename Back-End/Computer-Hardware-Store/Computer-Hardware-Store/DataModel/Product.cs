using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Computer_Hardware_Store.DataModel
{
    public class Product
    {
        public int id { get; set; }
        public string brand { get; set; }
        public string model { get; set; }
        public string detail { get; set; }
        public int price { get; set; }
        public string image { get; set; }
        public string type { get; set; }
        public int each { get; set; }

    }
}
