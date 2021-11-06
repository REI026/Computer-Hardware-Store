using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Computer_Hardware_Store.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Computer_Hardware_Store.Models.UserModel
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext context;

        public UserRepository(DataContext context) => this.context = context;

        public void Add(User user)
        {
            context.Add(user);
            context.SaveChanges();
        }

        public void Delete(int id)
        {
            User user = context.Users.Find(id);
            context.Users.Remove(user);
            context.SaveChanges();
        }

        public User GetUser(int id)
        {
            return context.Users.Find(id);
        }

        public IEnumerable<User> GetUsers()
        {
            return context.Users.ToList();
        }

        public void Update(User userChanges)
        {
            var user = context.Users.Find(userChanges.id);
            if (user != null) {
                user.id = userChanges.id;
                user.email = userChanges.email;
                user.name = userChanges.name;
                user.phone = userChanges.phone;
                user.address = userChanges.address;
                user.role = userChanges.role;
            }
            context.SaveChanges();
        }
    }
}
