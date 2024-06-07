using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UserEntities
{
    public  class CustomerUser
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public int CustomerUserMoreId { get; set; }

        //public virtual CustomerUserMore CustomerUserMore { get; set; }
        [ForeignKey("CustomerUserMoreId")]
        public virtual CustomerUserMore CustomerUserMore { get; set; }
    }
}
