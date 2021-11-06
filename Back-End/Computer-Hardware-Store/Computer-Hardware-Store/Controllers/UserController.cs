using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Computer_Hardware_Store.Models.UserModel;
using Computer_Hardware_Store.DataModel;

namespace Computer_Hardware_Store.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository userRepository;
        public UserController(IUserRepository userRepository) => this.userRepository = userRepository;

        [HttpGet]
        public IEnumerable<User> Get() => userRepository.GetUsers();

        [HttpGet("{id}")]
        public ActionResult<User> Get(int id) => userRepository.GetUser(id);

        [HttpPost]
        public ActionResult Add(User user) {
            try
            {
                userRepository.Add(user);
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
                userRepository.Delete(id);
                return StatusCode(200);
            }
            catch
            {
                return NoContent();
            }
        }

        [HttpPut]
        public ActionResult Update(User user)
        {
            try
            {
                userRepository.Update(user);
                return StatusCode(200);
            }
            catch
            {
                return NoContent();
            }
        }
    }
}
