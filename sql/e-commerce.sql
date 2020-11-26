-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 16-Set-2020 às 00:04
-- Versão do servidor: 8.0.21
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `e-commerce`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

DROP TABLE IF EXISTS `clientes`;
CREATE TABLE IF NOT EXISTS `clientes` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `senha` varchar(60) NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=MyISAM AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `nome`, `email`, `senha`) VALUES
(53, 'matheus Souza Matias', 'matias@gmail ', '$2b$10$y8It5wrQOw37ReyT76Vyvuzw6.S69HMYEvmkxfDEMoJir2yN300dO'),
(51, 'Almeida Nogueira Carvalho', 'Almeida@gmail', '$2b$10$CjDmEOo.1apDFGzKtwaQee6z2x5PvTGEoNhboMlmwTuEprZlFuY1W'),
(52, 'Viêira Rigald ', 'Cardoso@gmail', '$2b$10$vwIhrVLNptev1hBiEZDw6uq7jcBOq2zVtYV9rzH/8BvtUaVnWJUSG'),
(54, 'Calos De Nóbriga Silva', 'Nobriga@gmail', '$2b$10$Mc6t6FxL8r7OCAZFywhf..0epBGoO/khmMICup.SwrL0GqVjxs0TS');

-- --------------------------------------------------------

--
-- Estrutura da tabela `endereço`
--

DROP TABLE IF EXISTS `endereço`;
CREATE TABLE IF NOT EXISTS `endereço` (
  `id_endereço` int NOT NULL AUTO_INCREMENT,
  `id_cliente` int NOT NULL,
  `cep` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cidade` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `estado` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id_endereço`),
  KEY `idCliente` (`id_cliente`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `endereço`
--

INSERT INTO `endereço` (`id_endereço`, `id_cliente`, `cep`, `cidade`, `estado`) VALUES
(16, 54, '54410-380', 'Jaboatão dos Guararapes', 'PE'),
(15, 53, '41338-590', 'Salvador', 'BA'),
(14, 52, '20231-030', 'Rio de Janeiro', 'RJ'),
(13, 51, '30190-050', 'Belo Horizonte', 'MG');

-- --------------------------------------------------------

--
-- Estrutura da tabela `imagens`
--

DROP TABLE IF EXISTS `imagens`;
CREATE TABLE IF NOT EXISTS `imagens` (
  `id_imagem` int NOT NULL AUTO_INCREMENT,
  `id_produto` int NOT NULL,
  `imagem` varchar(500) NOT NULL,
  PRIMARY KEY (`id_imagem`),
  KEY `id_produto` (`id_produto`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `idCliente` int NOT NULL,
  `data_pedido` date NOT NULL,
  `data_envio` date NOT NULL,
  `data_entrega` date NOT NULL,
  `endereco` varchar(250) NOT NULL,
  `cidade` varchar(100) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `cep` varchar(25) NOT NULL,
  `transpt` varchar(50) NOT NULL,
  `status` varchar(15) NOT NULL,
  `frete` double NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `idCliente` (`idCliente`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidosprodutos`
--

DROP TABLE IF EXISTS `pedidosprodutos`;
CREATE TABLE IF NOT EXISTS `pedidosprodutos` (
  `IDpedido` int NOT NULL,
  `IDproduto` int NOT NULL,
  `data` date NOT NULL,
  `procoUni` double NOT NULL,
  `promocao` double NOT NULL,
  `valorTotal` double NOT NULL,
  KEY `IDpedido` (`IDpedido`),
  KEY `IDproduto` (`IDproduto`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id_produto` int NOT NULL AUTO_INCREMENT,
  `produto` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `img` varchar(500) NOT NULL,
  `descrisao` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `preco` float NOT NULL,
  `estoque` int NOT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id_produto`, `produto`, `img`, `descrisao`, `preco`, `estoque`) VALUES
(31, 'Battlefield 4: Premium Edition', 'uploads\\f285844e-1d3b-41a4-8238-1f2c11d9cd75.jpeg', 'sadsadsadsadsada', 100.68, 8),
(11, 'Call of Duty: Modern Warfare 6 - remake', 'uploads\\call-of-duty-modern-warfare-hero-banner-03-ps4-us-30may19.jfif', 'Game de guerra moderna', 10.68, 2),
(10, 'FIFA 20', 'uploads\\2020-09-14T21-37-38.487Z-H2x1_NSwitch_EaSportsFifa20NintendoSwitchLegacyEdition_image1600w.jpg', 'Game de temática esportiva', 59.68, 5),
(9, 'Dragon Age: inquisition', 'uploads\\dragon-age-inquisition-dlc-bundle_gdp-bg.jpg', 'Game de aventura e ação...', 89.68, 6);

-- --------------------------------------------------------

--
-- Estrutura da tabela `promocao`
--

DROP TABLE IF EXISTS `promocao`;
CREATE TABLE IF NOT EXISTS `promocao` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `IDproduto` int NOT NULL,
  `preco` double NOT NULL,
  `validade` date NOT NULL,
  `descrição` text CHARACTER SET utf8 COLLATE utf8_esperanto_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_esperanto_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
