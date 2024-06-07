using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserEntities
{
    public class CustomerUserMore
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MoreId { get; set; }
        public string FavoriteCar { get; set; }
        public int Number { get; set; }

        public ICollection<CustomerUser> CustomerUsers { get; set; }
    }
}
