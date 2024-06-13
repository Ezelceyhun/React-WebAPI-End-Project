ASP.NET Web API Kullanılarak Oluşturulan Araç Satış Sayfası Projesidir.

Full Stack Çalışılmıştır. Proje Tamamiyle Bana Aittir.

Backend: .NET Core 8.0 C#  /  Frontend: React/Html/Css/Js  /  Veritabanı: SQL Server

Backend Tarafında C# ASP.NET Core'a Yardımcı Olması İçin Swagger Dökümantasyonu Kullanılmıştır. 

Debug / Information / Warning / Danger Logları LogFile Klasöründe Tutulmaktadır.

Yeni Kullanıcı Oluşturduğunuzda Şifreniz SHA256 Şifrelemen Fonksiyonu İle Şifrelenerek Veritabanına Yazılır. SHA256 Decode Edilemez, Bu Sayede Şifreyi Kırmak İmkansızdır.

Login Olunduğunda Karşılık Olarak Bir Token Oluşturur. Bu Sayede Oturum Açılır ve Sayfalar Arası Gezinti Yapılabilir.

Frontend Tarafında React Kullanılmıştır.

Tüm API Bağlantıları AXIOS İle Yapılmıştır.

Üye Girişi Yapıldığında Bilgileriniz LocalStorage'de Token Olarak Tutulur. Yine Bir Güvenlik Önlemi Olarak Eklenmiştir.

Yeni Araç Oluşturmada Fotoğraf Eklenmemektedir. Sadece Home Sayfasında Araç Güncelle Kısmından Eklenmektedir. Eklenen Fotoğraflar Online Bir API'da Tutulmaktadır. Ücretsiz API Kapsamı 1 Gündür. 1 Gün Sonra Eklenen Fotoğraflar Silinmektedir. İsteğe Göre Fotoğraflar İçin Yeni Web API Kullanılabilir.

Login ve Home Sayfalarında Araçların Fotoğraflarına Tıklayarak CarDetail Sayfasına Gidebilir, Aracın Detaylarını Görebilirsiniz. Ayrıca Giriş Yapıldıysa Gösterilen Aracı Satın Alabilir veya Araç Size Aitse Satışını İptal Edebilirsiniz.

Kullanıcıya Yeni Araç Eklendiğinde / Satıldığında Geçmiş Satışlar Tablosuna Ekleme Yapılmaktadır.

Satışa Çıkartılan Araçlar Stoktan Düşer. Satış İptali Olursa Stok Güncellenir.

Home Sayfasında Araçlar Table yerine DataGrid İle Değiştirilmiştir. Bu Sayede Sıralama Yapılabilmektedir.

Veritabanı Tarafında SQL Server Kullanılmıştır. Veritabanı Projeye Dahil Edilmiştir. Veritabanında Migration Yapısı Kullanılmıştır. Birbirleri İle İlişkili Tablolardır. Değişiklik Yapılmasına İzin Verilmez.

Hem Backend Hemde Frontend Tarafında Ki Kodlarda Açıklamalar Verilmiştir. 

-------------------------------------------------------------------------------------------

It is a Vehicle Sales Page Project Created Using ASP.NET Web API.

Full Stack Worked. The project belongs entirely to me.

Backend: .NET Core 8.0 C# / Frontend: React/Html/Css/Js / Database: SQL Server

Swagger Documentation was Used to Help C# ASP.NET Core on the Backend Side. 

Debug / Information / Warning / Danger Logs are Kept in the LogFile Folder.

When you create a new user, your password is encrypted with the SHA256 encryption function and written to the database. SHA256 cannot be decoded, so it is impossible to crack the password.

When you log in, a token is created in return. In this way, you can log in and navigate between pages.

React is Used on the Frontend.

All API Connections Made with AXIOS.

When you log in, your information is kept as a token in LocalStorage. It was also added as a security measure.

Photos are not added when creating a new vehicle. It is only added from the Vehicle Update Section on the Home Page. Added Photos Are Kept in an Online API. Free API Coverage is 1 Day. Photos Added After 1 Day Are Deleted. New Web API Available for Photos Optionally.

You can go to the CarDetail Page and See the Details of the Vehicle by Clicking on the Photos of the Vehicles on the Login and Home Pages. You can also buy the displayed vehicle if you are logged in, or cancel the sale if the vehicle belongs to you.

When a New Vehicle is Added/Sold to the User, it is Added to the Past Sales Table.

Vehicles put on sale are removed from stock. If a sale is cancelled, the stock is updated.

On the Home Page, Tools have been replaced with DataGrid instead of Table. In this way, sorting can be done.

SQL Server is Used on the Database Side. Database is Included in the Project. Migration Structure is Used in the Database. These are tables that are related to each other. No Changes Allowed.

Explanations are given in the codes on both the backend and frontend sides.