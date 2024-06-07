using Microsoft.Extensions.Configuration;
using System;
using System.Configuration;
using System.IO;

namespace Logs
{
    public class Logger


    //1:info , 2: info,danger, 3: info,warning,danger 4: info, debug, danger, waraning
    #region Açıklama
    // Açıklama
    #endregion

    {
        private static readonly object Lock = new object();


        public static IConfiguration _config;
        public Logger(IConfiguration config)
        {
            _config = config;
        }
        
        public static void readloger()
        {

            //var config = new ConfigurationBuilder() 
            //.AddJsonFile("appsettings.json") 
            //.Build(); 

            //Logger logger = new Logger(config); 
            //string logLevel = Logger.readloger("loglevel"); 

            //string levelgelen = _config["loglevel"];

            //string logger = _config["loglevel"];
        }

        //Dosya Yolu ve İsimlendirme
        private static string GetLogFilePath(string logType)
        {
            // Log Dosyasının Kaydedileceği Yer
            string logDirectory = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "LogFile");

            // Yer yoksa oluştur
            if (!Directory.Exists(logDirectory))
            {
                Directory.CreateDirectory(logDirectory);
            }

            // Dosya adını debug_2024-05-31.txt veya danger_2024-05-31.txt yap
            string fileName = $"{logType}_{DateTime.Today:yyyy-MM-dd}.txt";
            return Path.Combine(logDirectory, fileName);
            
        }

        //Information İçin Log
        public static void LogInformation(string message)
        {
            string logFilePath = GetLogFilePath("information");
            WriteLog(logFilePath, message);            
        }

        //Debug İçin Log
        public static void LogDebug(string message)
        {
            // loglevel i al ve 4 e eşit mi ?
            // Debug log dosyasının yolunu al
            string logFilePath = GetLogFilePath("debug");
            // Mesajı log dosyasına yaz
            WriteLog(logFilePath, message);
        }

        //Warning için Log
        public static void LogWarning(string message)
        {

            string logFilePath = GetLogFilePath("warning");
            WriteLog(logFilePath, message);
        }

        //Danger İçin Log
        public static void LogDanger(string message)
        {
            string logFilePath = GetLogFilePath("danger");
            WriteLog(logFilePath, message);
        }
      
        //Dosya İçeriğini Yaz
        private static void WriteLog(string logFilePath, string message)
        {
            lock (Lock)
            {
                // Log dosyasına yaz
                using (StreamWriter writer = new StreamWriter(logFilePath, true))
                {
                    // Tarihi Yaz
                    writer.WriteLine($"{DateTime.Now:HH-mm-ss} - {message}");
                }
            }
        }

        // info, warning
        // 1 2 3 4
    }
}
