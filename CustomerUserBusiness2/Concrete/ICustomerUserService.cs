using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserEntities2;
using CustomerUserBusiness2.Abstract;

namespace CustomerUserBusiness2.Concrete
{
    public interface ICustomerUserService
    {
        // Tüm kullanıcılar
        Task<List<CustomerUser>> GetAllUser();
        // Id bilgisine göre kullanıcı
        Task<CustomerUser> GetUserById(int Id);
        // email bilgisine göre kullanıcı 
        Task<List<CustomerUser>> GetUserByEmail(string email, string password);
        // IdMore bilgisine göre kullanıcı
        Task<List<CustomerUserMore>>GetCarById(int IdMore);
        // Geçmiş Sipariş Listesi
        Task<List<UserSoldSales>> GetUserSoldSales(int UserSellingId);
        // OwnerUserId ve UserBuy id Karşılaştırması
        Task<List<CustomerUserMore>> GetCarBySellId(int OwnerUserId, int UserBuy);
        // Araç Tablosu Güncelleme
        Task<CustomerUserMore> UpdateCar(CustomerUserMore customerusermore);
        // Yeni Araç Oluşturma
        Task<CustomerUserMore> CreateCar(CustomerUserMore createcar);
        // Yeni kullanıcı oluşturma
        Task<CustomerUser> CreateUser(CustomerUser customeruser);
        // Yeni Geçmiş Sipariş Listesi
        Task<UserSoldSales> CreateSoldSales(UserSoldSales soldsales);
        // User Tablosu Güncelleme
        Task<CustomerUser> UpdateUser(CustomerUser customeruser);
        // Kullanıcı Silme
        Task DeleteUser(int Id);
        // email ve password Bilgisine Göre Kullanıcı ve Araçları Listeleme
        Task<List<CustomerUserMore>> GetUserEmail(string email, string password);
        // Araç Tablosunda Sold Bilgisine Göre Sıralama
        Task<List<CustomerUserMore>> GetCarSoldId(int sold);
        // OwnerUserId Bilgisine Göre Kişi Kendi Aracını Hesabına Ekleyecek
        Task<CustomerUserMore>SelectUpdateCarUser(CustomerUserMore customerusermore);
    }
}
