'use strict';

// Логгер с помощью замыкания - используется для отладки

const logger = (kind) => {
  const color = logger.colors[kind] || logger.colors.info; // Присвоение переменной color определенный цвет logger.colors[kind], logger.colors - функция, [kind] - аргумент при вызове функции logger
  return (s) => {
    const date = new Date().toISOString(); // toISOString() - строка по стандарту ISO
    console.log(color + date + '\t' + s);   // \t - табуляция, вместо плюсов можно ставить запятые
  };
};

logger.colors = {
  warning: '\x1b[1;33m',             // Escape последовательность (цвета)
  error: '\x1b[0;31m',
  info: '\x1b[1;37m',
};

// Usage

const warning = logger('warning');
const error = logger('error');
const debug = logger('debug');
const slow = logger('slow');

slow('I am slow logger');
warning('Hello');
error('World');
debug('Bye!');
