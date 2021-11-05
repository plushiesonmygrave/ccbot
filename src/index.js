const { token } = require('../config.json');

const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./src/bot.js', { token: token });

manager.on('shardCreate', shard => {
    const start = Date.now();
    console.log(`Starting shard ${shard.id}...`);
    shard.once('ready', () => {
        const time = (Date.now() - start).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        return console.log(`Shard ${shard.id} started! Startup process took ${time}ms.`);
    });
});

manager.spawn();
