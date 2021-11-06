using Computer_Hardware_Store.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Computer_Hardware_Store.Models.UserModel
{
    public interface IUserRepository
    {
        User GetUser(int id);
        IEnumerable<User> GetUsers();
        void Add(User user);
        void Update(User userChanges);
        void Delete(int id);
    }
}
