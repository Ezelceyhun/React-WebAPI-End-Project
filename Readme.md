ASP.NET Web API Kullanılarak Oluşturulan Araç Satış Sayfası Projesidir.

Full Stack Çalışılmıştır. Proje Tamamiyle bana aittir.

Backend: .NET 8.0 C#   /  Frontend: React/Html/Css/Js  /  Veritabanı: SQL Server

Backend Tarafında C# ASP.NET Core'a Yardımcı Olması İçin Swagger Dökümantasyonu Kullanılmıştır. 

Debug / Information / Warning / Danger Logları LogFile Klasöründe tutulmaktadır.

Yeni Kullanıcı Oluşturduğunuzda Şifreniz SHA256 Şifrelemen Fonksiyonu İle Şifrelenerek Veritabanına Yazılır. SHA256 Decode Edilemez, Bu Sayede Şifreyi Kırmak İmkansızdır.

Login Olunduğunda Karşılık Olarak Bir Token Oluşturur. Bu Sayede Oturum Açılır ve Sayfalar Arası Gezinti Yapılabilir.

Frontend Tarafında React Kullanılmıştır. Çok Fazla node_modules Kullanıldığından Dolayı Proje Dosyalarına Eklenmemiştir. Kodları İnceleyip Gerekli Kütüphaneleri İndirebilirsiniz.

Tüm API Bağlantıları AXIOS İle Yapılmıştır.

Üye Girişi Yapıldığında Bilgileriniz LocalStorage'de Token Olarak Tutulur. Yine Bir Güvenlik Önlemi Olarak Eklenmiştir.

Yeni Araç Oluşturmada Fotoğraf Eklenmemektedir. Sadece Home Sayfasında Araç Güncelle Kısmından Eklenmektedir. Eklenen Fotoğraflar Online Bir API'da Tutulmaktadır. Ücretsiz API Kapsamı 1 Gündür. 1 Gün Sonra Eklenen Fotoğraflar Silinmektedir. İsteğe Göre Fotoğraflar İçin Yeni Web API Kullanılabilir.

Kullanıcıya Yeni Araç Eklendiğinde / Satıldığında Geçmiş Satışlar Tablosuna Ekleme Yapılmaktadır.

Veritabanı Tarafında SQL Server Kullanılmıştır. Veritabanı Projeye Dahil Edilmiştir. Veritabanında Migration Yapısı Kullanılmıştır. Birbirleri İle İlişkili Tablolardır. Değişiklik Yapılmasına İzin Verilmez.

Hem Backend Hemde Frontend Tarafında Ki Kodlarda Açıklamalar Verilmiştir. 

-------------------------------------------------------------------------------------------

It is a Vehicle Sales Page Project Created Using ASP.NET Web API.

Full Stack Worked. The project belongs entirely to me.

Backend: .NET 8.0 C# / Frontend: React/Html/Css/Js / Database: SQL Server

Swagger Documentation was Used to Help C# ASP.NET Core on the Backend Side. 

Debug / Information / Warning / Danger Logs are kept in the LogFile Folder.

When you create a new user, your password is encrypted with the SHA256 encryption function and written to the database. SHA256 cannot be decoded, so it is impossible to crack the password.

When you log in, a token is created in return. In this way, you can log in and navigate between pages.

React is Used on the Frontend. It was not added to the project files due to too many node_modules being used. You can review the codes and download the required libraries.

All API Connections Made with AXIOS.

When you log in, your information is kept as a token in LocalStorage. It was also added as a security measure.

Photos are not added when creating a new vehicle. It is only added from the Vehicle Update Section on the Home Page. Added Photos Are Kept in an Online API. Free API Coverage is 1 Day. Photos Added After 1 Day Are Deleted. New Web API Available for Photos Optionally.

When a New Vehicle is Added/Sold to the User, It is Added to the Past Sales Table.

SQL Server is Used on the Database Side. Database is Included in the Project. Migration Structure is Used in the Database. These are tables that are related to each other. No Changes Allowed.

Explanations are given in the codes on both the backend and frontend sides.