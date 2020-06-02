-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 02, 2020 at 07:05 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carreras`
--

-- --------------------------------------------------------

--
-- Table structure for table `apuesta`
--

CREATE TABLE `apuesta` (
  `id` int(11) NOT NULL,
  `apostador` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `valor` double NOT NULL,
  `nombre_carrera` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `piloto_apostado` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `estado` varchar(15) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `apuesta`
--

INSERT INTO `apuesta` (`id`, `apostador`, `valor`, `nombre_carrera`, `piloto_apostado`, `estado`) VALUES
(1, 'Manuel Bate', 20.75, 'Inauguración Hawaiana', 'Hugo Peláez', 'Pendiente');

-- --------------------------------------------------------

--
-- Table structure for table `campeon`
--

CREATE TABLE `campeon` (
  `id` int(11) NOT NULL,
  `piloto` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `titulos` mediumtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `equipo` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `campeon`
--

INSERT INTO `campeon` (`id`, `piloto`, `titulos`, `equipo`) VALUES
(1, 'Hugo Peláez', '[\"El más veloz\", \"El más persistente\"]', 'Haas Formula LLC');

-- --------------------------------------------------------

--
-- Table structure for table `carrera`
--

CREATE TABLE `carrera` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `numParticipantes` int(11) DEFAULT NULL,
  `participantes` longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `categoria` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `carrera`
--

INSERT INTO `carrera` (`id`, `nombre`, `numParticipantes`, `participantes`, `categoria`) VALUES
(1, 'Carrera Hawaiana', 20, '[\'Juan\', \'Pedro\', \'Javier\']', 'Drift'),
(2, 'Inauguración Hawaina', 5, 'Keon Dawson,Eddie Watson,Kane James,Jasmin Mcleod,Armani Wright', 'Rally');

-- --------------------------------------------------------

--
-- Table structure for table `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(400) COLLATE utf8_unicode_ci NOT NULL,
  `capacidad` int(11) NOT NULL,
  `marcas_admitidas` mediumtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`, `descripcion`, `capacidad`, `marcas_admitidas`) VALUES
(8, 'F1', 'Se caracteriza por ultimas tecnologías en suspensiones, motores, chasis, llantas y aerodinámica y telemetría.', 10, 'Ferrari,McLaren,Mercedes Benz,Nissan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apuesta`
--
ALTER TABLE `apuesta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `campeon`
--
ALTER TABLE `campeon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carrera`
--
ALTER TABLE `carrera`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `apuesta`
--
ALTER TABLE `apuesta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `campeon`
--
ALTER TABLE `campeon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `carrera`
--
ALTER TABLE `carrera`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
