using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SHACrypto
{
    public static class SHA256Create
    {
        public static string ComputeSha256Hash(string rawData)
        {
            using (SHA256 sha256Hash = SHA256.Create())
            {
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));  //utf-8 kodlamasına dönüştürülür
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)        //byte olarak alınır ve döngü ile onaltılık formata dönüştürülür
                {
                    builder.Append(bytes[i].ToString("x2")); // ("x2") = her byte'ı iki bas. onaltılık formatta göstermek için kullanılır.
                }
                return builder.ToString();
            }
        }
    }
}
