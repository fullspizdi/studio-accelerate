// Importing necessary modules from other files
const dataPrep = require('./dataPrep');
const experimentOptimization = require('./experimentOptimization');
const deployment = require('./deployment');
const performanceMonitoring = require('./performanceMonitoring');

// Exporting all modules as a single object to be used in other parts of the application
module.exports = {
    prepImageDataset: dataPrep.prepImageDataset,
    setupExperiment: experimentOptimization.setupExperiment,
    deployModel: deployment.deployModel,
    monitorPerformance: performanceMonitoring.monitorPerformance
};
