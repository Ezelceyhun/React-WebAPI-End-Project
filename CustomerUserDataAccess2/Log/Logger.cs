using Microsoft.Extensions.Configuration;
using System;
using System.Configuration;
using System.IO;

namespace Swaggerson.Log
{
    public class Logger

    //1:info , 2: info,danger, 3: info,warning,danger 4: info, debug, danger, warning

    {
        private static readonly object Lock = new object();

        public static IConfiguration _config;

        public static int levelgelen;

        #region Kurucu Metot
        public Logger(IConfiguration config)
        {
            _config = config;
        }
        #endregion       

        #region appsettings.json Dosyasında ki loglevel İçeriğini Okuma Metodu
        public static void readloger()
        {
            var config = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .Build();
            Logger logger = new Logger(config);

            string level = _config["loglevel"];
            levelgelen = Convert.ToInt32(level);

            Console.Write(levelgelen);
        }
        #endregion

        #region Dosya Yolu ve Dosya İsimlendirme Metodu
        private static string GetLogFilePath(string logType)
        {
            // Log Dosyasının Kaydedileceği Yer
            string logDirectory = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "LogFile");

            // Yer yoksa oluştur
            if (!Directory.Exists(logDirectory))
            {
                Directory.CreateDirectory(logDirectory);
            }

            // Dosya adını 2024-05-31.txt veya danger_2024-05-31.txt yap
            string fileName = $"{DateTime.Today:yyyyMMdd}.log";
            return Path.Combine(logDirectory, fileName);
        }
        #endregion

        #region Information Log Metodu
        public static void LogInformation(string message)
        {
            if (levelgelen >= 1)
            {
                string logFilePath = GetLogFilePath("information");
                WriteLog(logFilePath, "[INFORMATION] " + message);
            }
        }
        #endregion

        #region Debug Log Metodu
        public static void LogDebug(string message)
        {
            // loglevel i al ve 4 e eşit mi ?
            if (levelgelen >= 4)
            {
                string logFilePath = GetLogFilePath("debug");
                // Mesajı log dosyasına yaz
                WriteLog(logFilePath, "[DEBUG] " + message);
            }
        }
        #endregion

        #region Warning Log Metodu
        public static void LogWarning(string message)
        {
            if (levelgelen >= 3)
            {

                string logFilePath = GetLogFilePath("warning");
                WriteLog(logFilePath, "[WARNING] " + message);
            }
        }
        #endregion

        #region Danger Log Metodu
        public static void LogDanger(string message)
        {
            if (levelgelen >= 2)
            {
                string logFilePath = GetLogFilePath("danger");
                WriteLog(logFilePath, "[DANGER] " + message);
            }
        }
        #endregion

        #region Dosya İçeriğini Yazma Metodu
        private static void WriteLog(string logFilePath, string message)
        {
            lock (Lock)
            {
                // Log dosyasına yaz
                using (StreamWriter writer = new StreamWriter(logFilePath, true))
                {
                    // Tarihi Yaz
                    writer.WriteLine($"{DateTime.Now:HH-mm-ss} -> {message}");
                }
            }
        }
        #endregion
    }
}
