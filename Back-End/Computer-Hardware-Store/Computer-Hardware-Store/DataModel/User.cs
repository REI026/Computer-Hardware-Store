using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Computer_Hardware_Store.DataModel
{
    public class User
    {
        public int id { get; set; }
        public string email { get; set; }
        public string name { get; set; }
        public string phone { get; set; }
        public string address { get; set; }
        public int role { get; set; }
    }
}
