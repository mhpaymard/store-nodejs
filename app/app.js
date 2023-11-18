const path = require('path');
const { AllRoutes } = require('./routes/router');
module.exports = {
    Application: class Application {
        #express = require('express');
        #mongoose = require('mongoose');
        #app = this.#express();
        #PORT;
        #DB_URL;
        constructor({ PORT, DB_URL }) {
            this.#PORT = PORT || 3000;
            this.#DB_URL = DB_URL;
            this.createRoutes();
            this.configApplication();
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
            this.#app.use(this.#express.json())
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
                return res.status(404).json({
                    error: {
                        status: 404,
                        message: 'چنین آدرسی وجود ندارد'
                    }
                })
            })
            this.#app.use((error, req, res, next) => {
                const status = error?.status || 500;
                const message = error?.message || 'InternalServerError';
                return res.status(status).json({
                    error: {
                        status,
                        message
                    }
                })
            })
        }
    }
}