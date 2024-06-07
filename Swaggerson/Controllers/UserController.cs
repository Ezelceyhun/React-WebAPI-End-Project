using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using UserEntities2;
using CustomerUserBusiness2.Abstract;
using CustomerUserBusiness2.Concrete;
using CustomerUserDataAccess.Abstract;
using CustomerUserDataAccess.Concrete;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Swaggerson.Log;
using Microsoft.Extensions.Configuration.UserSecrets;
using SHACrypto;
using Microsoft.AspNet.Identity;

namespace Swaggerson.Controllers
{
    [ApiController]
    public class UserController : Controller
    {
        public IUserRepository _customeruserRepository;
        public readonly IConfiguration _configuration;
        public readonly ICustomerUserService _customerUserService;

        #region Kurucu Metot
        public UserController(IUserRepository c, IConfiguration configuration, ICustomerUserService customerUserService)
        {
            _customeruserRepository = c;
            _configuration = configuration;
            _customerUserService = customerUserService;
            
        }
        #endregion

        #region Tüm Kullanıcıları Listeleme Metodu
        // Tüm Kullanıcıları Listeleme ve Log Tutma
        [HttpGet]
        [Route("/User")]
        public async Task<IActionResult> GetAllUser()
        {
            Logger.readloger();
            try
            {
                Logger.LogDebug("Tüm Kullanıcılar Listelendi ! (UserController.cs)");
                Logger.LogInformation("Kullanıcılar Listelendi !");                   
                return Ok(await _customeruserRepository.GetAllUser());
                
            }
            catch (Exception ex)
            {

                Logger.LogDanger("Kullanıcılar Listelenemedi ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                return NotFound();
            }
        }
        #endregion

        #region Id Bilgisine Göre Kullanıcı Listeleme Metodu
        // Id Bilgisine Göre Kullanıcıyı Listeleme ve Log Tutma
        [HttpGet]
        [Route("/User/{Id}")]
        public async Task<IActionResult> GetUserById(int Id)
        {
            Logger.readloger();
            try
            {
                var user = await _customeruserRepository.GetUserById(Id);
                if (user != null)
                {
                    Logger.LogDebug("Id Değerine Göre Kullanıcılar Listelendi ! (UserController.cs)");
                    Logger.LogInformation("Id Değerine Göre Kullanıcılar Listelendi !");
                    return Ok(user); // 200 + data
                }
                Logger.LogWarning("Id Değerine Göre Kullanıcılar Listelenemedi ! (UserController.cs)");
                return NotFound();
                // 404
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Hata ! "+ ex.Message + " - " + ex.StackTrace);
                return NotFound();
            }
        }
        #endregion

        #region Login Olduğunda Yeni Bir Token Oluşturma Metodu
        // Login Olunca Token Oluşturma ve Log Tutma
        [HttpPost]
        [Route("/Email/{email}")]
        public async Task<IActionResult> GetUserByEmail(string email, string password)
        {
            // Gelen Şifresi SHA256 olarak tekrar şifrele ve password a gönder
            password = SHA256Create.ComputeSha256Hash(password);
            Logger.readloger();
            try
            {
                // email ve şifrelenmiş şifreyi al
                var users = await _customerUserService.GetUserByEmail(email, password);

                // count 1 ise kullanıcı var
                if (users != null && users.Any())
                {
                    var user = users.First(); // İlk kullanıcıyı al

                    // girilen şifreyle veritabanı karşılaştır
                    if (user.password == password)
                    {
                        // Token oluştur ve geri dön
                        var tokenString = GenerateJwtToken(user.Id, user.Name, email, password);
                        Logger.LogDebug("Yeni Bir Token Oluşturuldu ! (UserController.cs)");
                        Logger.LogInformation("Oturum Açıldı !");
                        return Ok(new { Token = tokenString });
                    }
                    else
                    {
                        // Şifre eşleşmiyorsa hatalı giriş
                        Logger.LogWarning("Hatalı Giriş !");
                        return Unauthorized(); // 401
                    }
                }
                else
                {
                    // Kullanıcı bulunamadıysa hatalı giriş
                    Logger.LogWarning("Hatalı Giriş !");
                    return Unauthorized(); // 401
                }
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Hata ! " + ex.Message + " - " + ex.StackTrace);
                return NotFound();
            }
        }
        #endregion

        #region Yeni Token Oluşturma Metodu
        // Login Olunca Token Oluşturma ve Log Tutma
        private string GenerateJwtToken(int userId, string userName, string userEmail, string userPassword)
        {
            Logger.readloger();
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                    new Claim("UserId", userId.ToString()),
                    new Claim("UserName", userName.ToString()),
                    //new Claim("TotalCar", totalCar.ToString()),
                    new Claim("UserEmail", userEmail),
                    new Claim("UserPassword", userPassword),
                    }),
                    Expires = DateTime.UtcNow.AddHours(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                Logger.LogDebug("Token Oluşturma Başarılı ! (UserController.cs)");
                Logger.LogInformation("Token Oluşturuldu !");
                return tokenHandler.WriteToken(token);
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Token Oluşturma Başarısız ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Id Bilgisine Göre Araç Listeleme Metodu
        // Id Bilgisine Göre Araç Listeleme ve Log Tutma
        [HttpGet]
        [Route("/Cars/{IdMore}")]
        public async Task<IActionResult> GetCarById(int IdMore)
        {
            Logger.readloger();
            try
            {
                var car = await _customeruserRepository.GetCarById(IdMore);
                if (car.Count != 0)
                {
                    Logger.LogDebug("Id Bilgisine Göre Araç Sıralanmıştır ! (UserController.cs)");
                    Logger.LogInformation("Araçlar Sıralandı !");
                    return Ok(car); // 200 + data
                }
                Logger.LogWarning("Id Bilgisi Hatalı  (UserController.cs)!");
                return NotFound(); // 404
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Hata ! "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Satışta Olan Araçları Listeleme Metodu
        // Satışta Olan Araçları Listeleme ve Log Tutma
        [HttpGet]
        [Route("/Sold/{sold}")]
        public async Task<IActionResult> GetCarSoldId(int sold)
        {
            Logger.readloger();
            try
            {
                var Sold = await _customeruserRepository.GetCarSoldId(sold);
                if (Sold.Count != 0)
                {
                    Logger.LogDebug("Satışta Olan Araçlar Listelendi ! (UserController.cs)");
                    Logger.LogInformation("Satışta Olan Araçlar Listelendi !");
                    return Ok(Sold);
                }
                Logger.LogWarning("Satışta Olan Araçlar Listelenemedi ! HATA:  (UserController.cs)");
                return NotFound();
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Hata ! "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Id Bilgisine Göre Geçmiş Satışları Listeleme Metodu
        // Id Bilgisine Göre Geçmiş Satışları Listeleme ve Log Tutma
        [HttpGet]
        [Route("/Sell/{UserSellingId}")]
        public async Task<IActionResult> GetUserSoldSales(int UserSellingId)
        {
            Logger.readloger();
            try
            {
                var sell = await _customeruserRepository.GetUserSoldSales(UserSellingId);
                if (sell.Count != 0)
                {
                    Logger.LogDebug("Id Bilgisine Göre Geçmiş Satışlar Listelendi ! (UserController.cs)");
                    Logger.LogInformation("Geçmiş Satışlar Listelendi !");
                    return Ok(sell);
                }
                Logger.LogWarning("Id Bilgisi Hatalı ! HATA:  (UserController.cs)");
                return NotFound();
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Hata ! "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Kişi Bilgisine Göre Sahip Olduğu Araçları Listeleme Metodu
        // Kişi Bilgisine Göre Sahip Olduğu Araçları Listeleme ve Log Tutma
        [HttpPost]
        [Route("/login/{email}")]
        public async Task<IActionResult> GetUserEmail(string email, string password)
        {
            // Burada yaptığım şey frontend de iki kez aynı metot döndüğü için iki kez şifrelenmemesi gerekiyor.
            // Bu yüzden gelen password uzunluğu 64 karakterden küçükse şifrelemesini sağlıyorum ki iki veya daha fazla kez şifrelenme olmasın
            int passCharCount = password.Count();
            if (passCharCount < 64)
            {
                password = SHA256Create.ComputeSha256Hash(password);
            }           
             
            Logger.readloger();
            try
            {
                // email ve şifrelenmiş şifreyi al
                var users = await _customerUserService.GetUserEmail(email, password);

                // count 1 ise kullanıcı var
                if (users != null && users.Any())
                {
                    Logger.LogDebug("Kişi Bilgisine Göre Araçlar Listelendi ! (UserController.cs)");
                    Logger.LogInformation("Kişiye Göre Araçlar Listelendi !");
                    return Ok(users); // 200 + data
                }
                else
                {
                    // Kullanıcı bulunamadıysa hatalı giriş
                    Logger.LogWarning("Hatalı Giriş !");
                    return Unauthorized(); // 401
                }
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Hata ! " + ex.Message + " - " + ex.StackTrace);
                return NotFound();
            }
        }
        #endregion

        #region Id Bilgisine Göre Onay Bekleyen Araçları Listeleme Metodu
        // Id Bilgisine Göre Onay Bekleyen Araçları Listeleme ve Log Tutma
        [HttpGet]
        [Route("/SellCar/{OwnerUserId}")]
        public async Task<IActionResult> GetCarBySellId(int OwnerUserId, int UserBuy)
        {
            Logger.readloger();
            try
            {
                var car = await _customeruserRepository.GetCarBySellId(OwnerUserId, UserBuy);
                if (car.Count != 0)
                {
                    Logger.LogDebug("Id Bilgisine Göre Onay Bekleyen Araçlar Listlendi ! (UserController.cs)");
                    Logger.LogInformation("Onay Bekleyen Araçlar Listelendi !");
                    return Ok(car);
                }
                Logger.LogWarning("Id Bilgisi Hatalı ! HATA:  (UserController.cs)");
                return NotFound();
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Hata ! "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Yeni Kullanıcı Oluşturma Metodu
        // Yeni Kullanıcı Oluşturma ve Log Tutma
        [HttpPost]
        [Route("[action]")]
        // [FromBody]
        public async Task<IActionResult> CreateUser([FromBody] CustomerUser user)
        {
            Logger.readloger();
            try
            {
                user.password = SHA256Create.ComputeSha256Hash(user.password);
                var createdUser = await _customeruserRepository.CreateUser(user);
                Logger.LogDebug("Yeni Bir Kullanıcı Başarıyla Oluşturuldu ! (UserController.cs)");
                Logger.LogInformation("Yeni Kullanıcı Oluşturuldu !");
                return CreatedAtAction("CreateUser", new { Id = createdUser.Id }, createdUser);
            }
            catch (Exception ex)
            {
                Logger.LogWarning("Yeni Bir Kullanıcı Oluşturulamadı ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Satış Gerçekleştiyse Geçmiş Satışlar Tablosuna Ekleme Metodu
        // Satış Yapıldıysa Geçmiş Satışlara Ekleme ve Log Tutma
        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> CreateSoldSales([FromBody] UserSoldSales soldsales)
        {
            Logger.readloger();
            try
            {
                var createSales = await _customeruserRepository.CreateSoldSales(soldsales);
                Logger.LogDebug("Satış Onayı Gerçekleştirildi ! Geçmiş Siparişlere Yeni Kayıt Eklendi ! (UserController.cs)");
                Logger.LogInformation("Satış Onayı Gerçekleştirildi !");
                return CreatedAtAction("Get", new { SoldId = createSales.SoldId }, createSales);
            }
            catch (Exception ex)
            {
                Logger.LogWarning("Satış Onayı Başarısız ! Geçmiş Siparişlere Kayıt Eklenemedi ! HATA : "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Yeni Araç Ekleme Metodu
        // Yeni Araç Ekleme Metodu
        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> CreateCar([FromBody] CreateCarDTO createcar)
        {
            Logger.readloger();
            try
            {
                CustomerUserMore a = new CustomerUserMore();
                a.IdMore = createcar.IdMore;
                a.CarName = createcar.CarName;
                a.CarModelName = createcar.CarModelName;
                a.Price = createcar.Price;
                a.LastDateTime = createcar.LastDateTime;
                a.OwnerUserId = createcar.OwnerUserId;
                a.img = createcar.img;
                a.Sold = createcar.Sold;

                var createdCar = await _customeruserRepository.CreateCar(a);
                Logger.LogDebug("Yeni Araç Eklendi ! (UserController.cs)");
                Logger.LogInformation("Yeni Araç Eklendi !");
                return CreatedAtAction("Get", new { IdMore = createdCar.IdMore }, createdCar);
            }
            catch (Exception ex)
            {
                Logger.LogWarning("Yeni Araç Eklerken Hata Oluştu ! HATA: "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Kullanıcı Güncelleme Metodu
        // Kullanıcı Güncelleme ve Log tutma
        [HttpPut]
        [Route("/UpdateUser/{user}")]
        public async Task<IActionResult> UpdateUser([FromBody] CustomerUser user)
        {
            Logger.readloger();
            try
            {
                if (user == null || user.Id <= 0)
                {
                    Logger.LogDanger("İnput Boş Geldi ! HATA:  (UserController.cs)");
                    return BadRequest("İnput Boş Geldi"); // 400
                }

                if (await _customeruserRepository.GetUserById(user.Id) != null)
                {
                    Logger.LogDebug("Kullanıcı Güncellemesi Yapıldı, Başarılı ! (UserController.cs)");
                    Logger.LogInformation("Kullanıcı Güncelleme Yapıldı !");
                    string password = SHA256Create.ComputeSha256Hash(user.password);
                    user.password = password;
                    return Ok(await _customeruserRepository.UpdateUser(user)); // 200 + data
                }
                Logger.LogWarning("Kullanıcı Güncellemesi Başarısız ! HATA:  (UserController.cs)");
                return NotFound(); // 404
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Hata ! "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Araç Güncelleme Metodu
        // Araç Güncelleme ve Log Tutma
        [HttpPut]
        [Route("/UpdateCar/{car}")]
        public async Task<IActionResult> UpdateCar([FromBody] CustomerUserMore car)
        {
            Logger.readloger();
            try
            {
                if (car == null || car.IdMore <= 0)
                {
                    Logger.LogDanger("Araç Güncellemesi Başarısız ! HATA: (UserController.cs) ");
                    return BadRequest("İnput Boş Geldi");
                }
                if (await _customeruserRepository.GetCarById(car.IdMore) != null)
                {
                    Logger.LogDebug("Araç Güncellemesi Başarılı ! (UserController.cs)");
                    Logger.LogInformation("Araç Güncellemesi Yapıldı !");
                    return Ok(await _customeruserRepository.UpdateCar(car));
                }
                Logger.LogWarning("Araç Güncellemesi Başarısız ! HATA:  (UserController.cs)");
                return NotFound();
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Hata ! "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Aracı Satışa Çıkartma Metodu
        // Aracı Satışa Çıkartma ve Log Tutma
        [HttpPut]
        [Route("SelectCar/{carid}")]
        public async Task<IActionResult> SelectUpdateCarUser([FromBody] CustomerUserMore carid)
        {
            Logger.readloger();
            try
            {
                if (carid == null || carid.IdMore <= 0)
                {
                    Logger.LogDanger("İnput Boş Geldi ! HATA:  (UserController.cs)");
                    return BadRequest("input boş geldi");
                }
                if (await _customeruserRepository.GetCarById(carid.IdMore) != null)
                {
                    Logger.LogDebug("Id ("+ carid.IdMore + ") Bilgisine Göre Araç Satışa Çıkartıldı ! (UserController.cs)");
                    Logger.LogInformation("Araç Satışa Çıkartıldı !");
                    return Ok(await _customeruserRepository.SelectUpdateCarUser(carid));
                }
                Logger.LogWarning("Araç Satışa Çıkartılamadı ! HATA:  (UserController.cs)");
                return NotFound();
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Hata ! "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion

        #region Id Bilgisine Göre User Silem (PROJEYE DAHİL EDİLMEDİ)
        [HttpDelete]
        [Route("[action]/{Id}")]
        public async Task<IActionResult> DeleteUser(int Id)
        {
            Logger.readloger();
            try
            {
                if (await _customeruserRepository.GetUserById(Id) != null)
                {
                    await _customeruserRepository.DeleteUser(Id);
                    Logger.LogDebug("User Silme Başarılı  (UserController.cs)");
                    Logger.LogInformation("Bir User Silindi !");
                    return Ok(); // 200
                }
                Logger.LogWarning("Araç Silme Başarısız ! (UserController.cs)");
                return NotFound(); // 404
            }
            catch (Exception ex)
            {
                Logger.LogDanger("Hata ! "+ ex.Message + " - " + ex.StackTrace);
                throw;
            }
        }
        #endregion
    }
}
