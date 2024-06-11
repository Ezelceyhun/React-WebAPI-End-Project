using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibrary1;
using CustomerUserBusiness2.Concrete;
using CustomerUserDataAccess.Abstract;
using SHACrypto;
using Swaggerson.Log;
using UserEntities2;

namespace CustomerUserBusiness2.Abstract
{
    public class CustomerUserService : ICustomerUserService
    {
        private readonly IUserRepository _customerUserService;

        #region Kurucu Metot
        public CustomerUserService(IUserRepository userRepository)
        {
            _customerUserService = userRepository;
        }
        #endregion

        #region Geçmiş Satışları Listeleme Metodu
        // Geçmiş Satışları Listeleme ve Log Tutma
        public async Task<UserSoldSales> CreateSoldSales(UserSoldSales soldsales)
        {
            try
            {
                Logger.LogDebug("Geçmiş Sipariş Listelendi ! (CustomerUserService.cs)");
                return await _customerUserService.CreateSoldSales(soldsales);
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Geçmiş Sipariş Listelenemedi ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Kullanıcı Oluşturma Metodu
        // Kullanıcı Oluşturma ve Log Tutma
        public async Task<CustomerUser> CreateUser(CustomerUser customeruser)
        {
            try
            {
                customeruser.password = SHA256Create.ComputeSha256Hash(customeruser.password);
                Logger.LogDebug("User Oluşturma Başarılı (CustomerUserService.cs)");
                return await _customerUserService.CreateUser(customeruser);
            }
            catch (Exception ex)
            {
                Logger.LogDanger("User Oluşturma Başarısız ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Araç Oluşturma Metodu
        // Araç Oluşturma ve Log Tutma
        public async Task<CustomerUserMore> CreateCar(CustomerUserMore createcar)
        {
            try
            {
                Logger.LogDebug("Araç Oluşturma Başarılı (CustomerUserService.cs)");
                return await _customerUserService.CreateCar(createcar);
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Araç Oluşturma Başarısız ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Kullanıcı Silme Metodu (DAHİL DEĞİL)
        public async Task DeleteUser(int Id)
        {
            try
            {
                Logger.LogDebug("User Silme Başarılı (CustomerUserService.cs)");
                await _customerUserService.DeleteUser(Id);
            }
            catch (Exception ex)
            {
                Logger.LogDanger("User Silme Başarısız ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Tüm Kullanıcıları Listeleme Metodu
        // Tüm Kullanıcıları Listeleme ve Log Tutma
        public async Task<List<CustomerUser>> GetAllUser()
        {
            try
            {
                Logger.LogDebug("Tüm Kullanıcıları Listeleme Başarılı ! (CustomerUserService.cs)");
                return await _customerUserService.GetAllUser();
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Tüm Kullanıcıları Listeleme Başarısız ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Id Bilgisine Göre User Listeleme
        // Id Bilgisine Göre User Listeleme ve Log Tutma
        public async Task<CustomerUser> GetUserById(int Id)
        {
            try
            {
                Logger.LogDebug("Id Bilgisine Göre Listeleme Başarılı ! (CustomerUserService.cs)");
                return await _customerUserService.GetUserById(Id);
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Id Bilgisine Göre Listeleme Başarısız ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Login Olunca Token Oluşturma Metodu
        // Login Kontrolü ve Log Tutma
        public async Task<List<CustomerUser>> GetUserByEmail(string email, string password)
        {
           //password = SHA256Create.ComputeSha256Hash(password);
            try
            {
                
                return await _customerUserService.GetUserByEmail(email, password);
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Token Oluşturulamadı ! HATA: " + ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Id Bilgisine Göre Araçları Listeleme Metodu
        // Id Bilgisine Göre Araçları Listeleme ve Log Tutma
        public async Task<List<CustomerUserMore>>GetCarById(int IdMore)
        {
            try
            {
                Logger.LogDebug("Id Bilgisine Göre Araçlar Sıralanmıştır ! (CustomerUserService.cs)");
                return await _customerUserService.GetCarById(IdMore);
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Araçlar Sıralanamadı ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Geçmiş Satışları Listeleme
        // Geçmiş Satışları Listeleme ve Log Tutma
        public async Task<List<UserSoldSales>> GetUserSoldSales(int UserSellingId)
        {
            try
            {
                Logger.LogDebug("Geçmiş Satışlar Listelendi ! (CustomerUserService.cs)");
                return await _customerUserService.GetUserSoldSales(UserSellingId);
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Geçmiş Satışlar Listelenemedi ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Kişi Bilgisine Göre Sahip Olduğu Araçları Listeleme Metodu
        // Kişi Bilgisine Göre Araç Listeleme ve Log Tutma
        public async Task<List<CustomerUserMore>> GetUserEmail(string email, string password)
        {
            try
            {
                return await _customerUserService.GetUserEmail(email, password);
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Kişi Bilgisine Göre Araçlar Listelenemdi ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Onay Bekleyen Araçları Listeleme Metodu
        // Onay Bekleyen Araçları Listeleme ve Log Tutma
        public async Task<List<CustomerUserMore>> GetCarBySellId(int OwnerUserId, int UserBuy)
        {
            try
            {
                Logger.LogDebug("Onay Bekleyen Araçlar Listelendi ! (CustomerUserService.cs)");
                return await _customerUserService.GetCarBySellId(OwnerUserId, UserBuy);
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Onay Bekleyen Araçlar Listelenemdi ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Kullanıcı Güncelleme Metodu
        // Kullanıcı Güncelleme ve Log Tutma
        public async Task<CustomerUser> UpdateUser(CustomerUser customeruser)
        {
            try
            {
                Logger.LogDebug("Kullanıcı Güncelleme Başarılı ! (CustomerUserService.cs)");
                return await _customerUserService.UpdateUser(customeruser);
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Kullanıcı Güncelleme Başarısız ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Araç Güncelleme Metodu
        // Araç Güncelleme ve Log Tutma
        public async Task<CustomerUserMore> UpdateCar(CustomerUserMore customerusermore)
        {
            try
            {
                Logger.LogDebug("Araç Güncelleme Başarılı ! (CustomerUserService.cs)");
                return await _customerUserService.UpdateCar(customerusermore);
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Araç Güncelleme Başarısız ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Araç Satışa Çıkartma Metodu
        // Araç Satışa Çıkartma ve Log Tutma
        public async Task<CustomerUserMore> SelectUpdateCarUser(CustomerUserMore customerusermore)
        {
            try
            {
                Logger.LogDebug("Araç Satışa Çıkartıldı ! (CustomerUserService.cs)");
                return await _customerUserService.SelectUpdateCarUser(customerusermore);
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Araç Satışa Çıkartılamadı ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Satışta Olan Araçları Listeleme Metodu
        // Satışta Olan Araçları Listeleme ve Log Tutma
        public async Task<List<CustomerUserMore>> GetCarSoldId(int sold)
        {
            try
            {
                Logger.LogDebug("Satışta Olan Araçlar Listelendi ! (CustomerUserService.cs)");
                return await _customerUserService.GetCarSoldId(sold);
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Satışta Olan Araçlar Listelenemedi ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion
    }
}
