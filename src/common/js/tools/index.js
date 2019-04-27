const { createGrpcClient, startGrpcServer } = require('./grpc.tool')
const { logger } = require('./logger.tool');
const events = require('./events.tool');
const grpcClients = require('./grpcClients.tool')

let _exports = {
    startGrpcServer,
    createGrpcClient,
    logger,
    events,
    grpcClients,
}

try {
    const { emitEvent, startRabbitMQConsumer } = require('./broker.tool');
    _exports = { emitEvent, startRabbitMQConsumer, ..._exports }
} catch (error) {

}

module.exports = _exports;