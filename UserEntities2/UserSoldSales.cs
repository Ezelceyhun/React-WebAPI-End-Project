using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserEntities2
{
    // Geçmiş Siparişlerin Tablosu
    public class UserSoldSales
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SoldId {  get; set; }
        public int UserSellingId { get; set; }
        public int CarId { get; set; }
        public string Img {  get; set; }
        public string CarName { get; set; }
        public string CarModelName { get; set; }
        public string modelYears { get; set; }
        public string totalKm { get; set; }
        public string fuel {  get; set; }
        public string shift {  get; set; }
        public string engineHp {  get; set; }
        public string carColor {  get; set; }
        public int CarPrice { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public DateTime DateTimeHistory { get; set; }
    }
}
