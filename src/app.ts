import { yarg } from "./config/plugins/yargs.plugins";
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv);

// const [tsnode, app, ...args] = process.argv;

// console.log(args);

// console.log(yarg);

(async () => {
    await main();
})();


async function main() {

    // console.log(yarg);

    const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination } = yarg;


    ServerApp.run({ base, limit, showTable, fileName, fileDestination });

}
