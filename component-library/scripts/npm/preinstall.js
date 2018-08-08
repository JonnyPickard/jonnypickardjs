const chalk = require('chalk');

/**
 * Do NOT allow using `npm` as package manager.
 */
if (process.env.npm_execpath.indexOf('yarn') === -1) {
  console.error(
    chalk.red(`
                        !! WARNING!! 
    
    Please use Yarn to install dependencies instead of NPM.
    
    This is because this project is maintained using yarn workspaces. See:
    
              ${chalk.magenta('https://yarnpkg.com/lang/en/docs/workspaces/')}

    ${chalk.cyan('To install please run $ yarn or $ yarn install')}
  `)
  );
  process.exit(1);
}
