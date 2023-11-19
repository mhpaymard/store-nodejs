const path = require('path');

const { AllRoutes } = require('./routes/router');

const createHttpError = require('http-errors');
const morgan = require('morgan');

module.exports = {
    Application: class Application {
        #express = require('express');
        #mongoose = require('mongoose');
        #app = this.#express();
        #PORT;
        #DB_URL;
        constructor({ PORT, DB_URL }) {
            this.#PORT = PORT || 5000;
            this.#DB_URL = DB_URL;
            this.configApplication();
            this.createRoutes();
            this.createServer();
            this.connectToDB();
            this.errorHandling();
        }
        createServer() {
            this.#app.listen(this.#PORT, () => {
                console.log(`run > http://localhost:${this.#PORT}`);
            })
        }
        configApplication() {
            this.#app.use(morgan('dev'));
            this.#app.use(this.#express.json());
            this.#app.use(this.#express.urlencoded({ extended: true }));
            this.#app.use(this.#express.static(path.join(__dirname, '..', 'public')));
        }
        connectToDB() {
            this.#mongoose.connection.on('connected', () => {
                console.log('Connected To MongoDB, Successfully.');
            })
            this.#mongoose.connection.on('disconnected', () => {
                console.log('Database disconnected !');
            })
            process.on('SIGINT', async () => {
                await this.#mongoose.connection.close();
                process.exit(0);
            })
            this.#mongoose.connect(this.#DB_URL).then(() => {
                return console.log('Connected To MongoDB, Successfully.');
            }).catch((err) => {
                return console.log("Failed To Connect Database", err);
            })
        }
        createRoutes() {
            this.#app.use(AllRoutes)
        }
        errorHandling() {
            this.#app.use((req, res, next) => {
                next(createHttpError.NotFound('صفحه ای با این آدرس یافت نشد'))
            })
            this.#app.use((error, req, res, next) => {
                const defaultError = createHttpError.InternalServerError();
                const statusCode = error?.status || defaultError.status;
                const message = error?.message || defaultError.message;
                return res.status(statusCode).json({
                    error: {
                        statusCode,
                        message
                    }
                })
            })
        }
    }
}