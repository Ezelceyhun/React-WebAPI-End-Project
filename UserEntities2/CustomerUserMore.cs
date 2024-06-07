using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace UserEntities2
{
    // CustomerUserMore Tablosu
    public class CustomerUserMore
    {
        [Key]        
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int IdMore { get; set; } 
        public string CarName { get; set; }
        public int Price { get; set; }
        public DateTime LastDateTime { get; set; }
        public int Sold { get; set; }
        public string CarModelName { get; set; }
        public string img { get; set; }
        public int userBuy {  get; set; }
        public int OwnerUserId { get; set; }

        [ForeignKey("OwnerUserId")]
        public virtual CustomerUser CustomerUser { get; set; }
    }
}