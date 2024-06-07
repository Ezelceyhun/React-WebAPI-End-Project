USE [master]
GO
/****** Object:  Database [dene]    Script Date: 7.06.2024 11:32:14 ******/
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
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 7.06.2024 11:32:14 ******/
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
/****** Object:  Table [dbo].[CustomerUsers]    Script Date: 7.06.2024 11:32:14 ******/
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
/****** Object:  Table [dbo].[CustomerUsersMore]    Script Date: 7.06.2024 11:32:14 ******/
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
PRIMARY KEY CLUSTERED 
(
	[IdMore] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employees]    Script Date: 7.06.2024 11:32:14 ******/
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
/****** Object:  Table [dbo].[UserSoldSales]    Script Date: 7.06.2024 11:32:14 ******/
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

INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (7, N'Admin', N'admin@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 13, CAST(N'2024-06-06T13:43:13.030' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (10, N'DefaultUser', N'defaultuser@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 0, CAST(N'2024-05-30T10:45:06.767' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (62, N'Ceyhun', N'ceyhun@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 0, CAST(N'2024-05-31T05:34:32.207' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (63, N'Ahmet', N'ahmet@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc55994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 0, CAST(N'2024-05-24T11:14:55.367' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (64, N'Ayşe', N'ayse@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 0, CAST(N'2024-05-24T11:15:07.743' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (65, N'Mehmet', N'mehmet@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 0, CAST(N'2024-05-24T11:15:24.687' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (66, N'Faruk', N'faruk@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 0, CAST(N'2024-05-24T11:15:42.840' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (67, N'Ali', N'ali@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 0, CAST(N'2024-05-24T11:17:08.493' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (68, N'Ömer', N'omer@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 0, CAST(N'2024-05-24T11:18:31.070' AS DateTime))
INSERT [dbo].[CustomerUsers] ([Id], [Name], [email], [password], [TotalCarUnsold], [LastLoginTime]) VALUES (69, N'Emir', N'emir@hotmail.com', N'5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 0, CAST(N'2024-06-06T08:15:06.140' AS DateTime))
SET IDENTITY_INSERT [dbo].[CustomerUsers] OFF
GO
SET IDENTITY_INSERT [dbo].[CustomerUsersMore] ON 

INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy]) VALUES (N'Renault', 1880, CAST(N'2024-06-06T13:43:13.030' AS DateTime), 1, N'Clio', 7, 1, N'https://api.escuelajs.co/api/v1/files/50c9.jpg', 0)
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy]) VALUES (N'Mercedes', 10, CAST(N'2024-06-06T08:29:28.913' AS DateTime), 0, N'C180', 7, 2, N'https://api.escuelajs.co/api/v1/files/2b7e.jpg', 7)
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy]) VALUES (N'BMW', 341134, CAST(N'2024-06-06T08:04:06.280' AS DateTime), 0, N'320i', 7, 3, N'https://api.escuelajs.co/api/v1/files/cdde.jpg', 7)
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy]) VALUES (N'Peugeot', 41234, CAST(N'2024-06-06T08:04:16.440' AS DateTime), 0, N'308', 7, 4, N'https://api.escuelajs.co/api/v1/files/867b.jpg', 7)
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy]) VALUES (N'Tesla', 3412, CAST(N'2024-06-06T08:04:28.320' AS DateTime), 0, N'Plaid', 7, 5, N'https://api.escuelajs.co/api/v1/files/45f4.jpg', 7)
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy]) VALUES (N'Xiaomi', 3123, CAST(N'2024-06-06T08:10:22.587' AS DateTime), 0, N'SU7', 7, 6, N'https://api.escuelajs.co/api/v1/files/6bea.webp', 7)
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy]) VALUES (N'Dacia', 432412, CAST(N'2024-06-06T08:10:34.307' AS DateTime), 0, N'Duster', 7, 7, N'https://api.escuelajs.co/api/v1/files/bf07.webp', 7)
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy]) VALUES (N'Volkswagen', 213, CAST(N'2024-06-06T08:10:48.933' AS DateTime), 0, N'Golf', 7, 8, N'https://api.escuelajs.co/api/v1/files/f8bd.webp', 7)
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy]) VALUES (N'Seat', 12344321, CAST(N'2024-06-06T08:11:18.953' AS DateTime), 0, N'Leon', 7, 9, N'https://api.escuelajs.co/api/v1/files/2a56.webp', 7)
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy]) VALUES (N'Cupra', 63563, CAST(N'2024-06-06T08:11:26.277' AS DateTime), 0, N'Formentor', 7, 10, N'https://api.escuelajs.co/api/v1/files/7746.jpg', 7)
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy]) VALUES (N'BMW', 81354, CAST(N'2024-06-06T08:11:33.837' AS DateTime), 0, N'118i', 7, 11, N'https://api.escuelajs.co/api/v1/files/8618.jpg', 7)
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy]) VALUES (N'Volkswagen', 1212, CAST(N'2024-06-06T08:11:40.750' AS DateTime), 0, N'Caddy', 7, 12, N'https://api.escuelajs.co/api/v1/files/10a11.jpg', 7)
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy]) VALUES (N'Fiat', 23411234, CAST(N'2024-06-06T08:11:49.750' AS DateTime), 0, N'Egea', 7, 34, N'https://api.escuelajs.co/api/v1/files/451e.jpg', 7)
INSERT [dbo].[CustomerUsersMore] ([CarName], [Price], [LastDateTime], [Sold], [CarModelName], [OwnerUserId], [IdMore], [img], [UserBuy]) VALUES (N'deneme car', 123456, CAST(N'2024-06-06T08:11:55.267' AS DateTime), 0, N'deneme car model', 7, 41, N'https://api.escuelajs.co/api/v1/files/9f64.png', 7)
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

INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (36, 62, 12, N'https://api.escuelajs.co/api/v1/files/dcc5.jpg', N'Volkswagen', N'Caddy', 1212, 7, N'admin', N'admin@hotmail.com', CAST(N'2024-05-28T10:24:33.533' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (37, 62, 34, N'https://api.escuelajs.co/api/v1/files/2377.png', N'Fiat', N'Egea', 23411234, 7, N'admin', N'admin@hotmail.com', CAST(N'2024-05-28T10:24:36.520' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (38, 7, 3, N'https://api.escuelajs.co/api/v1/files/3758.jpg', N'BMW', N'320i', 341134, 62, N'Ceyhun', N'ceyhun@hotmail.com', CAST(N'2024-05-28T10:25:03.947' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (39, 7, 4, N'https://api.escuelajs.co/api/v1/files/6c69.jpg', N'Peugeot', N'308', 41234, 62, N'Ceyhun', N'ceyhun@hotmail.com', CAST(N'2024-05-28T10:25:05.520' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (40, 7, 2, N'https://api.escuelajs.co/api/v1/files/d48a.jpg', N'Mercedes', N'C180', 10, 7, N'admin', N'admin@hotmail.com', CAST(N'2024-05-28T10:30:53.603' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (41, 62, 12, N'https://api.escuelajs.co/api/v1/files/dcc5.jpg', N'Volkswagen', N'Caddy', 1212, 7, N'admin', N'admin@hotmail.com', CAST(N'2024-05-28T10:38:30.337' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (42, 7, 10, N'https://api.escuelajs.co/api/v1/files/2225.jpg', N'Cupra', N'Formentor', 63563, 62, N'Ceyhun', N'ceyhun@hotmail.com', CAST(N'2024-05-30T11:07:33.477' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (43, 62, 3, N'https://api.escuelajs.co/api/v1/files/c326.jpg', N'BMW', N'320i', 341134, 7, N'admin', N'admin@hotmail.com', CAST(N'2024-05-30T11:08:04.327' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (44, 62, 4, N'https://api.escuelajs.co/api/v1/files/663d.jpg', N'Peugeot', N'308', 41234, 7, N'admin', N'admin@hotmail.com', CAST(N'2024-05-30T11:08:06.333' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (45, 62, 10, N'https://api.escuelajs.co/api/v1/files/2225.jpg', N'Cupra', N'Formentor', 63563, 7, N'admin', N'admin@hotmail.com', CAST(N'2024-05-30T11:08:07.940' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (46, 7, 4, N'https://api.escuelajs.co/api/v1/files/663d.jpg', N'Peugeot', N'308', 41234, 62, N'Ceyhun', N'ceyhun@hotmail.com', CAST(N'2024-05-31T05:34:32.207' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (47, 7, 6, N'https://api.escuelajs.co/api/v1/files/6d9f.webp', N'Xiaomi', N'SU7', 3123, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:30:40.317' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (48, 7, 1, N'https://api.escuelajs.co/api/v1/files/7f64.jpg', N'Renault', N'Clio', 1880, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:31:53.097' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (49, 7, 4, N'https://api.escuelajs.co/api/v1/files/9df9.jpg', N'Peugeot', N'308', 41234, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:31:56.577' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (50, 7, 6, N'https://api.escuelajs.co/api/v1/files/6d9f.webp', N'Xiaomi', N'SU7', 3123, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:31:58.673' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (51, 7, 2, N'https://api.escuelajs.co/api/v1/files/174f.jpg', N'Mercedes', N'C180', 10, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:32:14.577' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (52, 7, 6, N'https://api.escuelajs.co/api/v1/files/6d9f.webp', N'Xiaomi', N'SU7', 3123, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:32:44.760' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (53, 7, 4, N'https://api.escuelajs.co/api/v1/files/9df9.jpg', N'Peugeot', N'308', 41234, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:32:47.730' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (54, 7, 1, N'https://api.escuelajs.co/api/v1/files/7f64.jpg', N'Renault', N'Clio', 1880, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-03T13:32:54.423' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (55, 7, 1, N'https://api.escuelajs.co/api/v1/files/e4c10.jpg', N'Renault', N'Clio', 1880, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-06T08:13:49.930' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (56, 7, 1, N'https://api.escuelajs.co/api/v1/files/e4c10.jpg', N'Renault', N'Clio', 1880, 69, N'Emir', N'emir@hotmail.com', CAST(N'2024-06-06T08:15:06.140' AS DateTime))
INSERT [dbo].[UserSoldSales] ([SoldId], [UserSellingId], [CarId], [Img], [CarName], [CarModelName], [CarPrice], [UserId], [UserName], [UserEmail], [DateTimeHistory]) VALUES (57, 7, 1, N'https://api.escuelajs.co/api/v1/files/e4c10.jpg', N'Renault', N'Clio', 1880, 7, N'Admin', N'admin@hotmail.com', CAST(N'2024-06-06T08:15:24.723' AS DateTime))
SET IDENTITY_INSERT [dbo].[UserSoldSales] OFF
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
