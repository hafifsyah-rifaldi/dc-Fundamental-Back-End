const notesPlugin = require('./Daftar-PluginHapiServer');
const otherPlugin = require('./otherPlugin');
const Hapi = require('@hapi/hapi')

const init = async () => {
    const server = Hapi.server();

    //* registrasi satu plugin
    await server.register([
        {
        plugin: notesPlugin,
        options: { notes: [] },
        },
        {
            plugin: otherPlugin,
            options: { 
                // ! berikan nilai options jika dibutuhkan 
                        }
        }
    ]);

    await server.start();
};

init();