import mongoose from 'mongoose';

const dbURI: string = 'mongodb://loc8r:loc8rpass@mongodb:27017/loc8tr?authSource=admin';

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', (err: Error) => {
    console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg: string, callback: () => void): void => {
    mongoose.connection.close().then(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});