using ClassLibrary1;
using CustomerUserDataAccess.Abstract;
using Microsoft.EntityFrameworkCore;
using SHACrypto;
using Swaggerson.Log;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserEntities2;

namespace CustomerUserDataAccess.Concrete
{
    public class UserRepository : IUserRepository
    {

        #region Kullanıcı Oluşturma Metodu
        // Kullanıcı Oluşturma ve Log Tutma
        public async Task<CustomerUser> CreateUser(CustomerUser customeruser)
        {
            try
            {
                using (var userDbContext = new CustomerUserDbContext())
                {
                    userDbContext.CustomerUsers.Add(customeruser);
                    await userDbContext.SaveChangesAsync();
                    Logger.LogDebug("User Oluşturma Başarılı ! (UserRepository.cs)");
                    return customeruser;
                }
            }
            catch (Exception ex)
            {
                Logger.LogDanger("User Oluşturma Başarısız ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Araç Satışı Onaylama Metodu
        // Satışı Onaylama ve Log Tutma
        public async Task<UserSoldSales> CreateSoldSales(UserSoldSales soldsales)
        {
            try
            {
                using (var userDbContext = new CustomerUserDbContext())
                {
                    userDbContext.UserSoldSales.Add(soldsales);
                    await userDbContext.SaveChangesAsync();
                    Logger.LogDebug("Satış Onayı Başarılı ! (UserRepository.cs)");
                    return soldsales;
                }
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Satış Onayı Başarısız ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Yeni Araç Oluşturma Metodu
        // Yeni Araç Oluşturma ve Log Tutma
        public async Task<CustomerUserMore> CreateCar(CustomerUserMore createcar)
        {
            try
            {
                using (var userDbContext = new CustomerUserDbContext())
                {

                    userDbContext.CustomerUsersMore.Add(createcar);
                    await userDbContext.SaveChangesAsync();
                    Logger.LogDebug("Araç Oluşturma Başarılı ! (UserRepository.cs)");
                    return createcar;
                }
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
                using (var userDbContext = new CustomerUserDbContext())
                {
                    userDbContext.CustomerUsers.Remove(await GetUserById(Id));
                    await userDbContext.SaveChangesAsync();
                    Logger.LogDebug("User Silme Başarılı ! (UserRepository.cs)");
                }
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
        public async Task<List<CustomerUser>>GetAllUser()
        {
            try
            {
                using (var userDbContext = new CustomerUserDbContext())
                {
                    var a = await userDbContext.CustomerUsers.ToListAsync();
                    Logger.LogDebug("Tüm Kullanıcılar Listelendi ! (UserRepository.cs)");
                    return a;
                }
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Tüm Kullanıcılar Listelenmedi ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region ID Bilgisine Göre Araçları Listeleme Metodu
        // Id bilgisine Göre Araçları Listeleme ve Log Tutma
        public async Task<List<CustomerUserMore>> GetCarById(int IdMore)
        {
            try
            {
                using (var userDbContext = new CustomerUserDbContext())
                {
                    Logger.LogDebug("Id Bilgisine Göre Araçlar Listelenmiştir ! (UserRepository.cs)");
                    return await userDbContext.CustomerUsersMore.Include(c => c.CustomerUser)
                        .Where(x => x.CustomerUser.Id == x.OwnerUserId && x.IdMore == IdMore)
                        .ToListAsync();
                }
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Id Bilgisine Göre Araçlar Listlenemedi ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Satışta Olan Araçları Listeleme Metodu
        // Satışta Olan Araçları Listeleme ve Log tutma
        public async Task<List<CustomerUserMore>> GetCarSoldId(int sold)
        {
            try
            {
                using (var userDbContext = new CustomerUserDbContext())
                {
                    Logger.LogDebug("Satışta Olan Araçlar Listlendi ! (UserRepository.cs)");
                    return await userDbContext.CustomerUsersMore.Include(c => c.CustomerUser)
                        .Where(x => x.CustomerUser.Id == x.OwnerUserId && x.Sold == sold)
                        .ToListAsync();
                }
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Satışta Olan Araçlar Listelenemedi ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Id Bilgisine Göre Listeleme Metodu
        // Id Bilgisine Göre Listeleme ve Log Tutma
        public async Task<CustomerUser> GetUserById(int Id)
        {
            try
            {
                using (var userDbContext = new CustomerUserDbContext())
                {
                    Logger.LogDebug("Id Bilgisine Göre Listeleme Başarılı ! (UserRepository.cs)");
                    return await userDbContext.CustomerUsers.FindAsync(Id); // if Id was not primary key (unique), then use FirstOrDefault method
                }
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Id Bilgisine Göre Listeleme Başarısız ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Login Olduğunda Token Oluşturma Metodu
        // Login Olunca Token Oluşturma ve Log Tutma
        public async Task<List<CustomerUser>> GetUserByEmail(string email, string password)
        {
            //password = SHA256Create.ComputeSha256Hash(password);
            try
            {
                
                using (var userDbContext = new CustomerUserDbContext())
                {
                    Logger.LogDebug("Token Oluşturma Başarılı ! (UserRepository.cs)");
                    return await userDbContext.CustomerUsers.Where(x => x.email == email && x.password == password).ToListAsync();
                }
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Token Oluşturma Başarısız ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Geçmiş Satışları Listeleme Metodu
        // Geçmiş Satışları Listeleme ve Log Tutma
        public async Task<List<UserSoldSales>> GetUserSoldSales(int UserSellingId)
        {
            try
            {
                using (var userDbContext = new CustomerUserDbContext())
                {
                    Logger.LogDebug("Geçmiş Satışlar Listelendi ! (UserRepository.cs)");
                    return await userDbContext.UserSoldSales.Where(x => x.UserSellingId == UserSellingId).ToListAsync();
                }
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Geçmiş Satışlar Listelenemedi ! HATA: "+ ex.Message + " - " + ex.StackTrace);
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
                using (var userDbContext = new CustomerUserDbContext())
                {
                    userDbContext.CustomerUsers.Update(customeruser);
                    await userDbContext.SaveChangesAsync();
                    Logger.LogDebug("Kullanıcı Güncelleme Başarılı ! (UserRepository.cs)");
                    return customeruser;
                }
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
                using (var userDbContext = new CustomerUserDbContext())
                {
                    userDbContext.CustomerUsersMore.Update(customerusermore);
                    await userDbContext.SaveChangesAsync();
                    Logger.LogDebug("Araç Güncelleme Başarılı ! (UserRepository.cs)");
                    return customerusermore;
                }
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Araç Güncelleme Başarısız ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Aracı Satışa Çıkartma Metodu
        // Araç Satış ve Log Tutma
        public async Task<CustomerUserMore> SelectUpdateCarUser(CustomerUserMore customeruser)
        {
            try
            {
                using (var userDbContext = new CustomerUserDbContext())
                {
                    userDbContext.CustomerUsersMore.Update(customeruser);
                    await userDbContext.SaveChangesAsync();
                    Logger.LogDebug("Araç Satışa Çıkartıldı ! (UserRepository.cs)");
                    return customeruser;
                }
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Araç Satışa Çıkartılamadı ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Kişi Bilgilerine Göre Sahip Olduğu Araçları Listeleme Metodu
        // Kişi Bilgilerine Göre Araçları Listeleme ve Log Tutma
        public async Task<List<CustomerUserMore>> GetUserEmail(string email, string password)
        {
            try
            {
                using (var userDbContext = new CustomerUserDbContext())
                {
                    // return await userDbContext.CustomerUsers.Include(c => c.CustomerUserMore).FirstOrDefaultAsync(x => x.email==email && x.password == password); //string ifadeyi çekme
                    //email ve password'e göre kullanıcının tüm verileri ve kayıtlı olan tüm araçları listele
                    Logger.LogDebug("Kişi Bilgisine Göre Araçlar Listelendi ! (UserRepository.cs)");
                    return await userDbContext.CustomerUsersMore.Include(c => c.CustomerUser).Where(x => x.CustomerUser.email == email && x.CustomerUser.password == password).ToListAsync();
                    // return await userDbContext.CustomerUsers.FirstOrDefaultAsync(x => x.email == email && x.password == password); //string ifadeyi çekme

                }
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Kişi Bilgisine Göre Araçlar Listelenemedi ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Onay Bekleyen Araçları Listeleme Metodu
        // Onay Bekleyen Araçları Listeleme ve Log tutma
        public async Task<List<CustomerUserMore>> GetCarBySellId(int OwnerUserId, int UserBuy)
        {
            try
            {
                using (var userDbContext = new CustomerUserDbContext())
                {
                    Logger.LogDebug("Onay Bekleyen Araçlar Listelendi ! (UserRepository.cs)");
                    return await userDbContext.CustomerUsersMore.Where(c => c.OwnerUserId == OwnerUserId && c.userBuy != UserBuy).ToListAsync();
                }
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Onay Bekleyen Araçlar Listelenemedi ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion
    }
}
