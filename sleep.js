const { setTimeout }= require('node:timers/promises');

async function main() {
  await setTimeout(20000);
}

main()
