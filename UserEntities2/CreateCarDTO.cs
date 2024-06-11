using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserEntities2
{
    // Yeni Araç Üretmek İçin / CustomerUserMore Tablosuna Veri Yazıyor
    public class CreateCarDTO
    {
        public int IdMore { get; set; }
        public string CarName { get; set; }
        public int Price { get; set; }
        public DateTime LastDateTime { get; set; }
        public int Sold { get; set; }
        public string CarModelName { get; set; }
        public string img { get; set; }
        public int UserBuy { get; set; }
        public int OwnerUserId { get; set; }
        public string ModelYears {  get; set; }
        public string TotalKm {  get; set; }
        public string Fuel {  get; set; }
        public string Shift { get; set; }
        public string EngineHp {  get; set; }
        public string CarColor {  get; set; }
    }
}
