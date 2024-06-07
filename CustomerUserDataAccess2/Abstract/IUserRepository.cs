using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserEntities2;

namespace CustomerUserDataAccess.Abstract
{
    public interface IUserRepository
    {
        Task<List<CustomerUser>> GetAllUser(); // SQL Karşılığı SELECT * FROM CustomerUser
        Task<CustomerUser> GetUserById(int Id); // SQL Karşılığı SELECT * FROM CustomerUser Where Id = ""
        Task<List<CustomerUserMore>> GetCarSoldId(int sold); // SQL Karşılığı SELECT * FROM CustomerUserMore Where sold = ""
        Task<List<CustomerUserMore>>GetCarById(int IdMore); // SQL Karşılığı SELECT * FROM CustomerUserMore Where IdMore = ""
        Task<List<UserSoldSales>> GetUserSoldSales(int UserSellingId); // SQL Karşılığı SELECT * FROM UserSoldSales Where SellingId = ""
        Task<List<CustomerUserMore>> GetCarBySellId(int OwnerUserId, int UserBuy); // SQL Karşılığı SELECT * FROM CustomerUserMore Where OwnerUserId = "" and UserBy = ""
        Task<List<CustomerUser>> GetUserByEmail(string email, string password); // SQL Karşılığı SELECT * FROM CustomerUser Where email = "" and password = ""
        Task<CustomerUserMore> CreateCar(CustomerUserMore createcar); // SQL Karşılığı Insert Into CustomerUserMore (veri) values (veri)
        Task<CustomerUserMore> UpdateCar(CustomerUserMore customerusermore); // SQL Karşılığı Update CustomerUserMore set carName = "" ....
        Task<CustomerUserMore> SelectUpdateCarUser(CustomerUserMore customerusermore); // SQL Karşılığı Update CustomerUserMore set carName = "" ....
        Task<UserSoldSales> CreateSoldSales(UserSoldSales soldsales); // SQL Karşılığı Insert Into UserSoldSales (veri) values (veri)
        Task<CustomerUser> CreateUser(CustomerUser customeruser); // SQL Karşılığı Insert Into CustomerUser (veri) values (veri)
        Task<CustomerUser> UpdateUser(CustomerUser customeruser); // SQL Karşılığı Update CustomerUser set name = "" ....
        Task DeleteUser(int Id); // SQL Karşılığı Delete From CustomerUser Where Id = ""
        Task<List<CustomerUserMore>>GetUserEmail(string email, string password); // SQL Karşılığı SELECT * FROM CustomerUserMore Where email = "" and password = ""
    }
}
