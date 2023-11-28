CREATE TABLE `alimento` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombredelproducto` VARCHAR(30) COLLATE utf8_general_ci NOT NULL,
  `preciodelproducto` INT(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Volcar datos para la tabla `alimento`
INSERT INTO `alimento` (`id`, `nombredelproducto`, `preciodelproducto`) VALUES
(1, 'arroz', 2);

-- AUTO_INCREMENT para la tabla `alimento`
ALTER TABLE `alimento` MODIFY `id` INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
