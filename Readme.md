ASP.NET Web API Kullanılarak Oluşturulan Araç Satış Sayfası Projesidir.

Backend: C#  /  Frontend: React/Html/Css/Js  /  Veritabanı: SQL Server

Backend Tarafında C# ASP.NET Core'a Yardımcı Olması İçin Swagger Dökümantasyonu Kullanılmıştır. 

Debug/Information/Warning/Danger Logları LogFile Klasöründe tutulmaktadır.

Yeni Kullanıcı Oluşturduğunuzda Şifreniz SHA256 Şifrelemen Fonksiyonu İle Şifrelenerek Veritabanına Yazılır. SHA256 Decode Edilemez, Bu Sayede Şifreyi Kırmak İmkansızdır.

Login Olunduğunda Karşılık Olarak Bir Token Oluşturur. Bu Sayede Oturum Açılır ve Sayfalar Arası Gezinti Yapılabilir.

Frontend Tarafında React Kullanılmıştır. Çok Fazla node_modules Kullanıldığından Dolayı Proje Dosyalarına Eklenmemiştir. Kodları İnceleyip Gerekli Kütüphaneleri İndirebilirsiniz.

Tüm API Bağlantıları AXIOS İle Yapılmıştır.

Üye Girişi Yapıldığında Bilgileriniz LocalStorage'de Token Olarak Tutulur. Yine Bir Güvenlik Önlemi Olarak Eklenmiştir.

Yeni Araç Oluşturmada Fotoğraf Eklenmemektedir. Sadece Home Sayfasında Araç Güncelle Kısmından Eklenmektedir. Eklenen Fotoğraflar Online Bir API'da Tutulmaktadır. Ücretsiz API Kapsamı 1 Gündür. 1 Gün Sonra Eklenen Fotoğraflar Silinmektedir. İsteğe Göre Fotoğraflar İçin Yeni Web API Kullanılabilir.

Kullanıcıya Yeni Araç Eklendiğinde / Satıldığında Geçmiş Satışlar Tablosuna Ekleme Yapılmaktadır.

Veritabanı Tarafında SQL Server Kullanılmıştır. Veritabanı Projeye Dahil Edilmiştir. Veritabanında Migration Yapısı Kullanılmıştır. Birbirleri İle İlişkili Tablolardır. Değişiklik Yapılmasına İzin Verilmez.

Hem Backend Hemde Frontend Tarafında Ki Kodlarda Açıklamalar Verilmiştir. 