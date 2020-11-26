-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 26-Nov-2020 às 18:47
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
-- Banco de dados: `test_ecommece`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `carrinhos`
--

DROP TABLE IF EXISTS `carrinhos`;
CREATE TABLE IF NOT EXISTS `carrinhos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_cliente` int NOT NULL,
  `data_criacao` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_CARRINHOS_CLIENTES` (`id_cliente`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `carrinhos`
--

INSERT INTO `carrinhos` (`id`, `id_cliente`, `data_criacao`) VALUES
(1, 78, '2020-11-24 21:54:37'),
(2, 79, '2020-11-24 22:25:54'),
(3, 80, '2020-11-24 23:34:53'),
(4, 81, '2020-11-24 23:35:46'),
(5, 82, '2020-11-24 23:39:36');

-- --------------------------------------------------------

--
-- Estrutura da tabela `carrinho_produto`
--

DROP TABLE IF EXISTS `carrinho_produto`;
CREATE TABLE IF NOT EXISTS `carrinho_produto` (
  `id_carrinho` int NOT NULL,
  `id_produto` int NOT NULL,
  `quantidade` int DEFAULT '1',
  KEY `FK_CARRINHO_PRODUTO_CARRINHOS` (`id_carrinho`),
  KEY `FK_CARRINHO_PRODUTO_PRODUTOS` (`id_produto`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

DROP TABLE IF EXISTS `clientes`;
CREATE TABLE IF NOT EXISTS `clientes` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `img` varchar(500) NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `senha` varchar(60) NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=MyISAM AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `nome`, `img`, `email`, `senha`) VALUES
(53, 'matheus Souza Matias', '', 'matias@gmail ', '$2b$10$y8It5wrQOw37ReyT76Vyvuzw6.S69HMYEvmkxfDEMoJir2yN300dO'),
(51, 'Almeida Nogueira Carvalho', '', 'Almeida@gmail', '$2b$10$CjDmEOo.1apDFGzKtwaQee6z2x5PvTGEoNhboMlmwTuEprZlFuY1W'),
(52, 'Viêira Rigald ', '', 'Cardoso@gmail', '$2b$10$vwIhrVLNptev1hBiEZDw6uq7jcBOq2zVtYV9rzH/8BvtUaVnWJUSG'),
(54, 'Calos De Nóbriga Silva', '', 'Nobriga@gmail', '$2b$10$Mc6t6FxL8r7OCAZFywhf..0epBGoO/khmMICup.SwrL0GqVjxs0TS'),
(77, 'funalo', '', 'matiaassss@gmail.com', '$2b$10$5iGpZRiv0fK41t4YU6B9yuZvehzAq2CulzLoMRLQzHN8OG44aj9NG'),
(76, 'funalo', '', 'matiaassss@gmail.com', '$2b$10$e/NXeGefieMT9tE6ZdVCHuw1pHrzXPfezEeQmY8ZWLiX2ACseqZ4e'),
(75, 'funalo', '', 'matiaassss@gmail.com', '$2b$10$Wknow1lqJYM3fe8W9f/z.OtCTahCa4aJSlfdlzkkj.Mrkxk9yYfA2'),
(74, 'funalo', '', 'matiaassss@gmail.com', '$2b$10$VR5/dBO7YWjM.KYJaoYKieSI18IwELt6/f8Dfdkl8tjVzeABvVq3m'),
(73, 'funalo', '', 'matiaass@gmail.com', '$2b$10$vClKCgKQkIW1HpucXb31Uemavq0EqLct6bietyL/xHL8G66z4t.l.'),
(72, 'funalo', '', 'matias@gmail.com', '$2b$10$uW3unVMKEu8OgMAsa8Wp1OjEY5ufGW2kTwKfOROxcnvzhjeSv3Dza'),
(71, 'funalo', '', 'matias@gmail.com', '$2b$10$Wzr8UyQXopZ.iNyvSsna3O2dG7JmmTveFGe1oGnymzmXNavT9tteK'),
(78, '\"fulano\"', '1606265664043-saturn-crescent-and-wheel-babylonians_orig.jpg', 'fulano@hotmail.com', '$2b$10$VqRz2Dldg9zAaeZfK.QLm.UsN68iEX9APGKMsNHIIs04c2uGknuiG'),
(79, '\"fulano\"', '1606267542397-515a3ba618d044fed3fc421ae58f7ced.jpg', 'fulano@hotmail.com', '$2b$10$pZR0mNeEznSft4uigXJhIuJ1iYH8b2C1FXBQZ/2BxLTuwj3tcI8CK'),
(80, '\"fulano\"', '1606271687727-515a3ba618d044fed3fc421ae58f7ced.jpg', 'fulano@hotmail.com', '$2b$10$wGa8ySktMg/3p0pPZlNtd.I4f87aA8uSIz1zk1wyN2Bpp7ZwXKcUe'),
(81, 'fulano', '1606271740416-515a3ba618d044fed3fc421ae58f7ced.jpg', 'fulano@hotmail.com', '$2b$10$LSCZ9e5mcdvGizZxJzxHuexd9XEawis3aqgCjlSWlwcrKD7MYx8d6'),
(82, 'fulano', '1606271969806-515a3ba618d044fed3fc421ae58f7ced.jpg', 'fulano@hotmail.com', '$2b$10$1RdyWcK14srkqfeuzLp5yuOjPqObSf9i9j6IB5gL4KN1UkuwCourm');

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
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `endereço`
--

INSERT INTO `endereço` (`id_endereço`, `id_cliente`, `cep`, `cidade`, `estado`) VALUES
(16, 54, '54410-380', 'Jaboatão dos Guararapes', 'PE'),
(15, 53, '41338-590', 'Salvador', 'BA'),
(14, 52, '20231-030', 'Rio de Janeiro', 'RJ'),
(13, 51, '30190-050', 'Belo Horizonte', 'MG'),
(17, 62, '41338-590', 'Salvador', 'BA'),
(18, 63, '41338-590', 'Salvador', 'BA'),
(19, 64, '41338-590', 'Salvador', 'BA'),
(20, 65, '41338-590', 'Salvador', 'BA'),
(21, 66, '41338-590', 'Salvador', 'BA'),
(22, 67, '41338-590', 'Salvador', 'BA'),
(23, 68, '41338-590', 'Salvador', 'BA'),
(24, 69, '41338-590', 'Salvador', 'BA'),
(25, 70, '41338-590', 'Salvador', 'BA'),
(26, 71, '41338-590', 'Salvador', 'BA'),
(27, 72, '41338-590', 'Salvador', 'BA'),
(28, 73, '', '', ''),
(29, 74, '', '', ''),
(30, 75, '', '', ''),
(31, 76, '', '', ''),
(32, 77, '', '', ''),
(33, 78, '', '', ''),
(34, 79, '', '', ''),
(35, 80, '', '', ''),
(36, 81, '', '', ''),
(37, 82, '41338-590', 'Salvador', 'BA');

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
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int DEFAULT NULL,
  `data_pedido` date NOT NULL,
  `cidade` varchar(100) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `cep` varchar(25) NOT NULL,
  `endereco` varchar(60) NOT NULL,
  `transpt` varchar(50) NOT NULL,
  `status` varchar(15) NOT NULL,
  `frete` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idCliente` (`cliente_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`id`, `cliente_id`, `data_pedido`, `cidade`, `estado`, `cep`, `endereco`, `transpt`, `status`, `frete`) VALUES
(1, 311, '2020-11-25', 'Cotia', 'sp', '06714360', 'Rio Cotia - Rua Matrix - 9999 - 05 ', 'Neo Reeves', 'paid', 1000),
(2, 311, '2020-11-25', 'Cotia', 'sp', '06714360', 'Rio Cotia - Rua Matrix - 9999 - 05 ', 'Neo Reeves', 'paid', 1000),
(3, 311, '2020-11-26', 'Cotia', 'sp', '06714360', 'Rio Cotia - Rua Matrix - 9999 - 05 ', 'Neo Reeves', 'paid', 1000),
(4, 311, '2020-11-26', 'Cotia', 'sp', '06714360', 'Rio Cotia - Rua Matrix - 9999 - 05 ', 'Neo Reeves', 'paid', 1000),
(5, 311, '2020-11-26', 'Cotia', 'sp', '06714360', 'Rio Cotia - Rua Matrix - 9999 - 05 ', 'Neo Reeves', 'paid', 1000),
(6, 311, '2020-11-26', 'Cotia', 'sp', '06714360', 'Rio Cotia - Rua Matrix - 9999 - 05 ', 'Neo Reeves', 'paid', 1000),
(7, 311, '2020-11-26', 'Cotia', 'sp', '06714360', 'Rio Cotia - Rua Matrix - 9999 - 05 ', 'Neo Reeves', 'paid', 1000),
(8, 311, '2020-11-26', 'Cotia', 'sp', '06714360', 'Rio Cotia - Rua Matrix - 9999 - 05 ', 'Neo Reeves', 'paid', 1000),
(9, 311, '2020-11-26', 'Cotia', 'sp', '06714360', 'Rio Cotia - Rua Matrix - 9999 - 05 ', 'Neo Reeves', 'paid', 1000),
(10, 311, '2020-11-26', 'Cotia', 'sp', '06714360', 'Rio Cotia - Rua Matrix - 9999 - 05 ', 'Neo Reeves', 'paid', 1000),
(11, 311, '2020-11-26', 'Cotia', 'sp', '06714360', 'Rio Cotia - Rua Matrix - 9999 - 05 ', 'Neo Reeves', 'paid', 1000),
(12, 311, '2020-11-26', 'Cotia', 'sp', '06714360', 'Rio Cotia - Rua Matrix - 9999 - 05 ', 'Neo Reeves', 'paid', 1000),
(13, 311, '2020-11-26', 'Cotia', 'sp', '06714360', 'Rio Cotia - Rua Matrix - 9999 - 05 ', 'Neo Reeves', 'paid', 1000);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidosprodutos`
--

DROP TABLE IF EXISTS `pedidosprodutos`;
CREATE TABLE IF NOT EXISTS `pedidosprodutos` (
  `pedido_id` int DEFAULT NULL,
  `produto_id` int DEFAULT NULL,
  `data` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `preco_unitario` double(6,2) DEFAULT NULL,
  `quantidade` int DEFAULT '1',
  `valor_total` int NOT NULL,
  KEY `IDpedido` (`pedido_id`),
  KEY `IDproduto` (`produto_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `pedidosprodutos`
--

INSERT INTO `pedidosprodutos` (`pedido_id`, `produto_id`, `data`, `preco_unitario`, `quantidade`, `valor_total`) VALUES
(10, 2, NULL, 9999.99, 2, 20000),
(10, 3, NULL, 9999.99, 2, 20000),
(11, 48, NULL, 9999.99, 2, 20000),
(11, 49, NULL, 9999.99, 2, 20000),
(12, 48, NULL, 9999.99, 2, 20000),
(12, 49, NULL, 9999.99, 2, 20000),
(13, 3, '2020-11-26 03:05:09', 9999.99, 2, 20000),
(13, 2, '2020-11-26 03:05:09', 9999.99, 2, 20000);

--
-- Acionadores `pedidosprodutos`
--
DROP TRIGGER IF EXISTS `trigger_updadte_produtos`;
DELIMITER $$
CREATE TRIGGER `trigger_updadte_produtos` AFTER INSERT ON `pedidosprodutos` FOR EACH ROW UPDATE produtos
        SET estoque = estoque - NEW.quantidade
        WHERE produtos.id_produto = NEW.IDproduto
$$
DELIMITER ;

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
  `peso` double(3,2) NOT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE=MyISAM AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id_produto`, `produto`, `img`, `descrisao`, `preco`, `estoque`, `peso`) VALUES
(49, 'asdasdas', '1604276246522-1.png', 'sadsadasd', 4, 0, 0.00),
(48, 'dasdsad', '1604276156599-121117672_378848840151310_3722582127443379155_n.jpg', 'dasd', 4, 0, 0.00),
(47, 'cal of duty sssss', '1604072543411-call-of-duty-modern-warfare-hero-banner-03-ps4-us-30may19.jfif', 'jogo de guerra', 50, 5, 0.00),
(45, 'Call of Duty mil grau', '1604073062035-H2x1_NSwitch_EaSportsFifa20NintendoSwitchLegacyEdition_image1600w.jpg', 'jogo de guerra', 50, 5, 0.00),
(46, 'cal of duty sssss', '1604020910540-dragon-age-inquisition-dlc-bundle_gdp-bg.jpg', 'jogo de guerra', 50, 5, 0.00),
(43, 'cal of duty sssss', '1604013703591-dragon-age-inquisition-dlc-bundle_gdp-bg.jpg', 'jogo de guerra', 50, 5, 0.00),
(44, 'cal of duty sssss', '1604020909279-dragon-age-inquisition-dlc-bundle_gdp-bg.jpg', 'jogo de guerra', 50, 5, 0.00);

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
