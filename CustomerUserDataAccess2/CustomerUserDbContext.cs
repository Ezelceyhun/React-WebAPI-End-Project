using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserEntities2;

namespace ClassLibrary1
{
    public class CustomerUserDbContext : DbContext
    {
        // SQL Bağlantısı
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            string connectionString = "Server=CEYHUN\\SQLEXPRESS;database=dene;integrated security=true; TrustServerCertificate=True;";
            optionsBuilder.UseSqlServer(connectionString);
        }

        // Tabloları Entities İle Birleştirme
        public DbSet<UserSoldSales> UserSoldSales {  get; set; }
        public DbSet<CustomerUser> CustomerUsers { get; set; }
        public DbSet<CustomerUserMore> CustomerUsersMore{ get; set; }
    }
}
