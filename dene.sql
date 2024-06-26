USE [master]
GO
/****** Object:  Database [dene]    Script Date: 11.06.2024 14:57:10 ******/
CREATE DATABASE [dene]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'dene', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\dene.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'dene_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\dene_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [dene] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [dene].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [dene] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [dene] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [dene] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [dene] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [dene] SET ARITHABORT OFF 
GO
ALTER DATABASE [dene] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [dene] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [dene] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [dene] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [dene] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [dene] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [dene] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [dene] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [dene] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [dene] SET  DISABLE_BROKER 
GO
ALTER DATABASE [dene] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [dene] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [dene] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [dene] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [dene] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [dene] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [dene] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [dene] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [dene] SET  MULTI_USER 
GO
ALTER DATABASE [dene] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [dene] SET DB_CHAINING OFF 
GO
ALTER DATABASE [dene] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [dene] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [dene] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [dene] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [dene] SET QUERY_STORE = ON
GO
ALTER DATABASE [dene] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [dene]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 11.06.2024 14:57:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CustomerUsers]    Script Date: 11.06.2024 14:57:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerUsers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[email] [nvarchar](max) NOT NULL,
	[password] [nvarchar](max) NOT NULL,
	[TotalCarUnsold] [int] NULL,
	[LastLoginTime] [datetime] NULL,
 CONSTRAINT [PK_CustomerUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CustomerUsersMore]    Script Date: 11.06.2024 14:57:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerUsersMore](
	[CarName] [nvarchar](max) NOT NULL,
	[Price] [int] NOT NULL,
	[LastDateTime] [datetime] NULL,
	[Sold] [int] NULL,
	[CarModelName] [nvarchar](max) NULL,
	[OwnerUserId] [int] NULL,
	[IdMore] [int] IDENTITY(1,1) NOT NULL,
	[img] [nvarchar](max) NULL,
	[UserBuy] [int] NULL,
	[ModelYears] [nvarchar](max) NULL,
	[TotalKm] [nvarchar](max) NULL,
	[Fuel] [nvarchar](max) NULL,
	[Shift] [nvarchar](max) NULL,
	[EngineHp] [nvarchar](max) NULL,
	[CarColor] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[IdMore] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employees]    Script Date: 11.06.2024 14:57:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employees](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](50) NOT NULL,
	[LastName] [nvarchar](max) NOT NULL,
	[DateOfbirth] [datetime2](7) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Salary] [float] NOT NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserSoldSales]    Script Date: 11.06.2024 14:57:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserSoldSales](
	[SoldId] [int] IDENTITY(1,1) NOT NULL,
	[UserSellingId] [int] NOT NULL,
	[CarId] [int] NOT NULL,
	[Img] [nvarchar](max) NOT NULL,
	[CarName] [nvarchar](max) NOT NULL,
	[CarModelName] [nvarchar](max) NOT NULL,
	[CarPrice] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[UserName] [nvarchar](max) NOT NULL,
	[UserEmail] [nvarchar](max) NOT NULL,
	[DateTimeHistory] [datetime] NULL,
	[modelYears] [nvarchar](max) NULL,
	[totalKm] [nvarchar](max) NULL,
	[fuel] [nvarchar](max) NULL,
	[shift] [nvarchar](max) NULL,
	[engineHp] [nvarchar](max) NULL,
	[carColor] [nvarchar](max) NULL,
 CONSTRAINT [PK_UserSoldSales] PRIMARY KEY CLUSTERED 
(
	[SoldId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240430064725_initial', N'8.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240430133447_UsersInitial', N'8.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240502053729_initialUser', N'8.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240502054840_initialUser', N'8.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240502063315_UserTableAll', N'8.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240502071550_UserAllTable', N'8.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240502075327_Usersinitial', N'8.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240502083052_AllUsersTable', N'8.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240502103105_UserAllTable', N'8.0.4')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240502111024_CustomerUserTable', N'8.0.4')
GO
SET IDENTITY_INSERT [dbo].[CustomerUsers] ON 

INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (7, N'Admin', N'admin@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 9, CAST(N'2024-06-11T11:41:40.977' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (10, N'DefaultUser', N'defaultuser@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 1, CAST(N'2024-06-11T08:11:58.720' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (62, N'Ceyhun', N'ceyhun@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 10, CAST(N'2024-06-11T11:35:08.827' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (63, N'Ahmet', N'ahmet@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 1, CAST(N'2024-06-11T08:12:29.657' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (64, N'Ayşe', N'ayse@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 1, CAST(N'2024-06-11T08:12:51.050' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (65, N'Mehmet', N'mehmet@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 1, CAST(N'2024-06-11T08:13:15.307' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (66, N'Faruk', N'faruk@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 1, CAST(N'2024-06-11T08:13:34.880' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (67, N'Ali', N'ali@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 1, CAST(N'2024-06-11T08:13:52.690' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (68, N'Ömer', N'omer@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 1, CAST(N'2024-06-11T08:14:12.500' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (69, N'Emir', N'emir@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 2, CAST(N'2024-06-11T08:14:32.297' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (84, N'denem', N'deneme@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 1, CAST(N'2024-06-11T08:14:54.490' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (85, N'deneme1', N'deneme1@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 1, CAST(N'2024-06-11T08:15:12.260' AS DateTime))
SET IDENTITY_INSERT [dbo].[CustomerUsers] OFF
GO
SET IDENTITY_INSERT [dbo].[CustomerUsersMore] ON 

INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Renault', 600000, CAST(N'2024-06-11T09:43:11.053' AS DateTime), 1, N'Clio', 7, 1, N'https://api.escuelajs.co/api/v1/files/7156.jpg', 7, N'2015', N'110000', N'Benzin', N'Manuel', N'75', N'Kırmızı')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Mercedes', 250000, CAST(N'2024-06-11T09:43:51.643' AS DateTime), 1, N'C180', 7, 2, N'https://api.escuelajs.co/api/v1/files/e6f10.jpg', 7, N'2015', N'230000', N'Dizel', N'Otomatik', N'110', N'Metalik Gri')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'BMW', 5000000, CAST(N'2024-06-11T11:17:42.877' AS DateTime), 0, N'320i', 7, 3, N'https://api.escuelajs.co/api/v1/files/5b70.jpg', 7, N'2023', N'52000', N'Benzin', N'Otomatik', N'210', N'Parliament Mavi')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Peugeot', 41234, CAST(N'2024-06-11T08:11:58.720' AS DateTime), 0, N'308', 10, 4, N'https://api.escuelajs.co/api/v1/files/87a5.jpg', 10, N'2024', N'6000', N'Benzin', N'Manuel', N'200', N'Yeşil')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Tesla', 3500000, CAST(N'2024-06-11T11:23:46.540' AS DateTime), 0, N'Plaid', 7, 5, N'https://api.escuelajs.co/api/v1/files/323c.jpg', 7, N'2022', N'7800', N'Elektrik', N'Otomatik', N'510', N'Kırmızı')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Xiaomi', 3123, CAST(N'2024-06-11T08:15:12.260' AS DateTime), 0, N'SU7', 85, 6, N'https://api.escuelajs.co/api/v1/files/25da.webp', 85, N'2023', N'4200', N'Elektrik', N'Otomatik', N'90', N'Mavi')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Dacia', 432412, CAST(N'2024-06-11T08:14:54.490' AS DateTime), 0, N'Duster', 84, 7, N'https://api.escuelajs.co/api/v1/files/da92.webp', 84, N'2022', N'85000', N'Benzin', N'Otomaik', N'100', N'Yeşil')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Volkswagen', 213, CAST(N'2024-06-11T08:14:32.297' AS DateTime), 0, N'Golf', 69, 8, N'https://api.escuelajs.co/api/v1/files/5879.webp', 69, N'2024', N'42000', N'Dizel', N'Manuel', N'170', N'Beyaz')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Seat', 12344321, CAST(N'2024-06-11T08:14:12.500' AS DateTime), 0, N'Leon', 68, 9, N'https://api.escuelajs.co/api/v1/files/8638.webp', 68, N'2024', N'21000', N'Benzin', N'Manuel', N'611', N'Kırmızı')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Cupra', 63563, CAST(N'2024-06-11T08:13:52.690' AS DateTime), 0, N'Formentor', 67, 10, N'https://api.escuelajs.co/api/v1/files/acfc.jpg', 67, N'2023', N'52000', N'Dizel', N'Otomatik', N'692', N'Mat Siyah')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'BMW', 81354, CAST(N'2024-06-11T08:13:34.880' AS DateTime), 0, N'118i', 66, 11, N'https://api.escuelajs.co/api/v1/files/3837.jpg', 66, N'2020', N'200000', N'Benzin', N'Manuel', N'150', N'Beyaz')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Volkswagen', 1212, CAST(N'2024-06-11T08:13:15.307' AS DateTime), 0, N'Caddy', 65, 12, N'https://api.escuelajs.co/api/v1/files/01d1.jpg', 65, N'2019', N'260000', N'Dizel', N'Manuel', N'75', N'Mavi')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Fiat', 23411234, CAST(N'2024-06-11T08:12:51.050' AS DateTime), 0, N'Egea', 64, 34, N'https://api.escuelajs.co/api/v1/files/31e2.jpg', 64, N'2020', N'400000', N'Dizel', N'Otomatik', N'85', N'Siyah')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Deneme Car', 123456, CAST(N'2024-06-11T08:12:29.657' AS DateTime), 0, N'Deneme Car Model', 63, 41, N'https://api.escuelajs.co/api/v1/files/cada.png', 63, N'2008', N'110000', N'Benzin', N'Otomatik', N'100', N'Sarı')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Deneme Car', 1, CAST(N'2024-06-10T12:34:15.243' AS DateTime), 0, N'Deneme Car Model', 62, 42, N'https://api.escuelajs.co/api/v1/files/c49b.png', 62, N'2006', N'110000', N'Elektrik', N'Otomatik', N'100', N'Mavi')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Deneme Car', 2, CAST(N'2024-06-10T12:34:19.867' AS DateTime), 0, N'Deneme Car Model', 62, 43, N'https://api.escuelajs.co/api/v1/files/f0c4.png', 62, N'2007', N'110000', N'Hibrit', N'Otomatik', N'100', N'Turuncu')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Deneme Car', 2, CAST(N'2024-06-10T12:36:07.850' AS DateTime), 0, N'Deneme Car Model', 69, 44, N'https://api.escuelajs.co/api/v1/files/10236.png', 69, N'2004', N'110000', N'Benzin', N'Manuel', N'100', N'Yeşil')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Deneme Car', 2, CAST(N'2024-06-10T12:36:13.940' AS DateTime), 0, N'Deneme Car Model', 69, 45, N'https://api.escuelajs.co/api/v1/files/256c.png', 69, N'2006', N'110000', N'Dizel', N'Manuel', N'100', N'Kırmızı')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Deneme Car', 2, CAST(N'2024-06-10T12:34:24.430' AS DateTime), 0, N'Deneme Car Model', 62, 46, N'https://api.escuelajs.co/api/v1/files/6c3c.png', 62, N'2001', N'110000', N'Dizel', N'Otomatik', N'100', N'Beyaz')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Mercedes', 900000, CAST(N'2024-06-11T11:15:21.193' AS DateTime), 0, N'W115', 7, 47, N'https://api.escuelajs.co/api/v1/files/9265.jpg', 7, N'1976', N'50000', N'Dizel', N'Manuel', N'80', N'Siyah')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Volkswagen', 250000, CAST(N'2024-06-11T11:19:08.060' AS DateTime), 0, N'Bettle', 7, 48, N'https://api.escuelajs.co/api/v1/files/10d1a.jpeg', 7, N'2014', N'230000', N'Benzin', N'Manuel', N'115', N'Beyaz')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Audi', 1000000, CAST(N'2024-06-11T11:22:17.583' AS DateTime), 0, N'A3', 7, 52, N'https://api.escuelajs.co/api/v1/files/2f510.jpeg', 7, N'2016', N'240000', N'Dizel', N'Otomatik', N'230', N'Siyah')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Subaru', 800000, CAST(N'2024-06-11T11:41:11.880' AS DateTime), 0, N'Impreza', 7, 53, N'https://api.escuelajs.co/api/v1/files/6943.jpeg', 7, N'2008', N'180000', N'Benzin', N'Manuel', N'220', N'Mavi')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Ford', 850000, CAST(N'2024-06-11T11:41:40.977' AS DateTime), 0, N'Focus', 7, 54, N'https://api.escuelajs.co/api/v1/files/f6ff.jpg', 7, N'2016', N'120000', N'Dizel', N'Otomatik', N'210', N'Beyaz')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Volkswagen', 1600000, CAST(N'2024-06-11T09:35:36.520' AS DateTime), 0, N'Passat', 7, 55, N'https://api.escuelajs.co/api/v1/files/55e4.jpg', 7, N'2020', N'140000', N'Dizel', N'Otomatik', N'200', N'Siyah')
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy], [ModelYears], [TotalKm], [Fuel], [Shift], [EngineHp], [CarColor]) VALUES (N'Opel', 2000000, CAST(N'2024-06-11T09:40:49.647' AS DateTime), 0, N'Mokka', 7, 56, N'https://api.escuelajs.co/api/v1/files/7ee2.jpg', 7, N'2022', N'9000', N'Benzin', N'Otomatik', N'200', N'Beyaz')
SET IDENTITY_INSERT [dbo].[CustomerUsersMore] OFF
GO
SET IDENTITY_INSERT [dbo].[Employees] ON 

INSERT [dbo].[Employees] ([Id], [FirstName], [LastName], [DateOfbirth], [Email], [Salary]) VALUES (2, N'admin', N'admin', CAST(N'2002-02-19T00:00:00.0000000' AS DateTime2), N'admin@admin.com', 100)
INSERT [dbo].[Employees] ([Id], [FirstName], [LastName], [DateOfbirth], [Email], [Salary]) VALUES (3, N'Ceyhun', N'Öztürk', CAST(N'2002-02-19T00:00:00.0000000' AS DateTime2), N'admin@hotmail.com', 1000)
INSERT [dbo].[Employees] ([Id], [FirstName], [LastName], [DateOfbirth], [Email], [Salary]) VALUES (5, N'hdfhdfgh', N'hdfghdgh', CAST(N'2024-10-16T00:00:00.0000000' AS DateTime2), N'hdfghd@hotmail.com', 41323333)
INSERT [dbo].[Employees] ([Id], [FirstName], [LastName], [DateOfbirth], [Email], [Salary]) VALUES (11, N'gfdggfhgh', N'hdghdg', CAST(N'2024-04-12T00:00:00.0000000' AS DateTime2), N'hdgh', 43142134)
INSERT [dbo].[Employees] ([Id], [FirstName], [LastName], [DateOfbirth], [Email], [Salary]) VALUES (13, N'gwereweg', N'gwergew', CAST(N'2024-04-03T00:00:00.0000000' AS DateTime2), N'gwegwe', 41141)
INSERT [dbo].[Employees] ([Id], [FirstName], [LastName], [DateOfbirth], [Email], [Salary]) VALUES (16, N'gdf', N'gsdfgd', CAST(N'2024-04-02T00:00:00.0000000' AS DateTime2), N'gsdf', 321)
SET IDENTITY_INSERT [dbo].[Employees] OFF
GO
SET IDENTITY_INSERT [dbo].[UserSoldSales] ON 

INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (36, 62, 12, N'https://api.escuelajs.co/api/v1/files/dcc5.jpg', N'Volkswagen', N'Caddy', 1212, 7, N'admin', N'admin@hotmail.com', CAST(N'2024-05-28T10:24:33.533' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (37, 62, 34, N'https://api.escuelajs.co/api/v1/files/2377.png', N'Fiat', N'Egea', 23411234, 7, N'admin', N'admin@hotmail.com', CAST(N'2024-05-28T10:24:36.520' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (38, 7, 3, N'https://api.escuelajs.co/api/v1/files/3758.jpg', N'BMW', N'320i', 341134, 62, N'Ceyhun', N'ceyhun@hotmail.com', CAST(N'2024-05-28T10:25:03.947' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (39, 7, 4, N'https://api.escuelajs.co/api/v1/files/6c69.jpg', N'Peugeot', N'308', 41234, 62, N'Ceyhun', N'ceyhun@hotmail.com', CAST(N'2024-05-28T10:25:05.520' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (40, 7, 2, N'https://api.escuelajs.co/api/v1/files/d48a.jpg', N'Mercedes', N'C180', 10, 7, N'admin', N'admin@hotmail.com', CAST(N'2024-05-28T10:30:53.603' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (41, 62, 12, N'https://api.escuelajs.co/api/v1/files/dcc5.jpg', N'Volkswagen', N'Caddy', 1212, 7, N'admin', N'admin@hotmail.com', CAST(N'2024-05-28T10:38:30.337' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (42, 7, 10, N'https://api.escuelajs.co/api/v1/files/2225.jpg', N'Cupra', N'Formentor', 63563, 62, N'Ceyhun', N'ceyhun@hotmail.com', CAST(N'2024-05-30T11:07:33.477' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (43, 62, 3, N'https://api.escuelajs.co/api/v1/files/c326.jpg', N'BMW', N'320i', 341134, 7, N'admin', N'admin@hotmail.com', CAST(N'2024-05-30T11:08:04.327' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (44, 62, 4, N'https://api.escuelajs.co/api/v1/files/663d.jpg', N'Peugeot', N'308', 41234, 7, N'admin', N'admin@hotmail.com', CAST(N'2024-05-30T11:08:06.333' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (45, 62, 10, N'https://api.escuelajs.co/api/v1/files/2225.jpg', N'Cupra', N'Formentor', 63563, 7, N'admin', N'admin@hotmail.com', CAST(N'2024-05-30T11:08:07.940' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (46, 7, 4, N'https://api.escuelajs.co/api/v1/files/663d.jpg', N'Peugeot', N'308', 41234, 62, N'Ceyhun', N'ceyhun@hotmail.com', CAST(N'2024-05-31T05:34:32.207' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (47, 7, 6, N'https://api.escuelajs.co/api/v1/files/6d9f.webp', N'Xiaomi', N'SU7', 3123, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:30:40.317' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (48, 7, 1, N'https://api.escuelajs.co/api/v1/files/7f64.jpg', N'Renault', N'Clio', 1880, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:31:53.097' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (49, 7, 4, N'https://api.escuelajs.co/api/v1/files/9df9.jpg', N'Peugeot', N'308', 41234, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:31:56.577' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (50, 7, 6, N'https://api.escuelajs.co/api/v1/files/6d9f.webp', N'Xiaomi', N'SU7', 3123, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:31:58.673' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (51, 7, 2, N'https://api.escuelajs.co/api/v1/files/174f.jpg', N'Mercedes', N'C180', 10, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:32:14.577' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (52, 7, 6, N'https://api.escuelajs.co/api/v1/files/6d9f.webp', N'Xiaomi', N'SU7', 3123, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:32:44.760' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (53, 7, 4, N'https://api.escuelajs.co/api/v1/files/9df9.jpg', N'Peugeot', N'308', 41234, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:32:47.730' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (54, 7, 1, N'https://api.escuelajs.co/api/v1/files/7f64.jpg', N'Renault', N'Clio', 1880, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:32:54.423' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (55, 7, 1, N'https://api.escuelajs.co/api/v1/files/e4c10.jpg', N'Renault', N'Clio', 1880, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-06T08:13:49.930' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (56, 7, 1, N'https://api.escuelajs.co/api/v1/files/e4c10.jpg', N'Renault', N'Clio', 1880, 69, N'Emir', N'emir@hotmail.com', CAST(N'2024-06-06T08:15:06.140' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (57, 7, 1, N'https://api.escuelajs.co/api/v1/files/e4c10.jpg', N'Renault', N'Clio', 1880, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-06T08:15:24.723' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (58, 7, 3, N'https://api.escuelajs.co/api/v1/files/5b70.jpg', N'BMW', N'320i', 5000000, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-11T10:57:46.980' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (59, 7, 3, N'https://api.escuelajs.co/api/v1/files/5b70.jpg', N'BMW', N'320i', 5000000, 62, N'Ceyhun', N'ceyhun@hotmail.com', CAST(N'2024-06-11T11:00:25.270' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (60, 62, 3, N'https://api.escuelajs.co/api/v1/files/5b70.jpg', N'BMW', N'320i', 5000000, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-11T11:00:41.973' AS DateTime), N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ', N'BOŞ')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (61, 7, 47, N'https://api.escuelajs.co/api/v1/files/9265.jpg', N'Mercedes', N'W115', 900000, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-11T11:15:21.193' AS DateTime), NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (62, 62, 48, N'https://api.escuelajs.co/api/v1/files/10d1a.jpeg', N'Volkswagen', N'Bettle', 250000, 62, N'Ceyhun', N'ceyhun@hotmail.com', CAST(N'2024-06-11T11:17:44.780' AS DateTime), NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (63, 7, 52, N'https://api.escuelajs.co/api/v1/files/2f510.jpeg', N'Audi', N'A3', 1000000, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-11T11:22:17.583' AS DateTime), NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (64, 62, 53, N'https://api.escuelajs.co/api/v1/files/6943.jpeg', N'Subaru', N'Impreza', 800000, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-11T11:35:15.827' AS DateTime), NULL, NULL, NULL, NULL, NULL, N'Bilinmiyor')
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory], [modelYears], [totalKm], [fuel], [shift], [engineHp], [carColor]) VALUES (65, 62, 54, N'https://api.escuelajs.co/api/v1/files/f6ff.jpg', N'Ford', N'Focus', 850000, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-11T11:35:17.427' AS DateTime), NULL, NULL, NULL, NULL, NULL, N'Bilinmiyor')
SET IDENTITY_INSERT [dbo].[UserSoldSales] OFF
GO
ALTER TABLE [dbo].[UserSoldSales] ADD  CONSTRAINT [carColor]  DEFAULT ('Bilinmiyor') FOR [carColor]
GO
ALTER TABLE [dbo].[CustomerUsersMore]  WITH CHECK ADD  CONSTRAINT [FK_CustomerUsersMore_CustomerUsers] FOREIGN KEY([OwnerUserId])
REFERENCES [dbo].[CustomerUsers] ([Id])
GO
ALTER TABLE [dbo].[CustomerUsersMore] CHECK CONSTRAINT [FK_CustomerUsersMore_CustomerUsers]
GO
USE [master]
GO
ALTER DATABASE [dene] SET  READ_WRITE 
GO
